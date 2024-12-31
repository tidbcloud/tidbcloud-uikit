import { readFileSync, writeFileSync } from 'node:fs'
import { cp } from 'node:fs/promises'
import { resolve, relative, dirname } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }))

const globals = {
  // remember to filter out dependencies that depends on mantine, so they will all be bundled
  // otherwise it might referencing original mantine in node_moduels and use the original component style
  ...(packageJson?.dependencies || {}),
  ...(packageJson?.peerDependencies || {})
}

const external = [
  ...Object.keys(globals).filter((i) => {
    return !i.startsWith('@mantine') && !['mantine-react-table'].includes(i)
  }),
  // this has to be external, see https://github.com/remarkablemark/html-react-parser/issues/1427#issuecomment-2220703546
  'html-react-parser',
  '@emotion/server/create-instance',
  // this is a peer dependency of @mantine/core and we bundle all mantine packages, this one needs to be external to avoid ssr error
  // also this should be added to dependencies and use same version with the one in the @mantine/core's dependency in package.json to avoid phantom dependency
  'react-textarea-autosize',
  'react/jsx-runtime'
]

const mantineCoreTypingsSrc = resolve(__dirname, 'node_modules/@mantine/core/lib')
const mantineCoreTypingsDest = resolve(
  __dirname,
  // this path is generate when rollup `perserveModule` set to true
  'dist/node_modules/.pnpm/@mantine_core@7.15.2_patch_hash_jclkxeaefn6uz54h34k3r3yjsq_@mantine_hooks@7.15.2_react@18.3.1_sx7emryda53tomnuogmu74guza/node_modules/@mantine/core/lib'
)

function replaceMantineCoreWithRelativePath(filePath: string, content: string) {
  return content.replace(new RegExp(`'@mantine/core'`, 'g'), `'${relative(dirname(filePath), mantineCoreTypingsDest)}'`)
}

function readMantiOverride() {
  const content = readFileSync(resolve(__dirname, 'src/primitive/mantineoverride.d.ts'), { encoding: 'utf-8' })
  const match = content.match(/declare module ['"].*?['"] {[\s\S]*?^}/m)

  if (!match) return null

  return {
    content,
    declare: match[0]
  }
}

const typeOverride = readMantiOverride()

function updateImportExtensions(content: string, targetExt: '.mjs' | '.cjs') {
  return content.replace(/(from\s+['"]\.\.?\/.*?)\.js(['"'])/g, (_, start, end) => `${start}${targetExt}${end}`)
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: false,
      beforeWriteFile: (filePath, content) => {
        if (!typeOverride) return

        if (
          ['primitive', 'biz', 'hooks', 'theme', 'utils'].some((folder) => filePath.endsWith(`${folder}/index.d.ts`))
        ) {
          const { declare: overrideDeclare, content: overrideContent } = typeOverride
          content = [
            // add both declare statement for '@mantine/core' and the bundled mantine core (imported by relative path) in case someone in the dependency tree import '@mantine/core' directly
            replaceMantineCoreWithRelativePath(filePath, overrideContent),
            overrideDeclare,

            replaceMantineCoreWithRelativePath(filePath, content)
          ].join('\n')
        } else if (/(?:primitive|biz|hooks|theme|utils)\/[^/]+\/[^/]+\.d\.ts$/.test(filePath)) {
          content = replaceMantineCoreWithRelativePath(filePath, content)
        }

        // generate .d.cts file for cjs build
        writeFileSync(filePath.replace('.d.ts', '.d.cts'), updateImportExtensions(content, '.cjs'))

        return {
          filePath: filePath.replace('.d.ts', '.d.mts'),
          content: updateImportExtensions(content, '.mjs')
        }
      },
      async afterBuild() {
        try {
          await cp(mantineCoreTypingsSrc, mantineCoreTypingsDest, { recursive: true })
        } catch (err) {
          console.error('Failed to copy Mantine core lib:', err)
        }
      }
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: [
        resolve(__dirname, 'src/biz/index.ts'),
        resolve(__dirname, 'src/hooks/index.ts'),
        resolve(__dirname, 'src/icons/index.ts'),
        resolve(__dirname, 'src/primitive/index.ts'),
        resolve(__dirname, 'src/theme/index.ts'),
        resolve(__dirname, 'src/utils/index.ts'),
        resolve(__dirname, 'src/emotion/index.ts'),
        resolve(__dirname, 'src/emotion/server.ts')
      ]
    },

    rollupOptions: {
      external,
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].mjs',
          exports: 'named'
        },
        {
          dir: 'dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          exports: 'named'
        }
      ]
    }
  }
})
