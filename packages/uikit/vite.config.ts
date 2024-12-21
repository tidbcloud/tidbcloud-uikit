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

const mantineCoreTypingsSrc = resolve(__dirname, 'node_modules/@mantine/core/lib')
const mantineCoreTypingsDest = resolve(
  __dirname,
  // this path is generate when rollup `perserveModule` set to true
  'dist/node_modules/.pnpm/@mantine_core@7.13.2_patch_hash_v5k5cxye7xaihpcgowhgciky7a_@mantine_hooks@7.13.2_react@18.3.1_hlfamvk7n3o6ychyvm5cyru4yu/node_modules/@mantine/core/lib'
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

export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: false,
      beforeWriteFile: (filePath, content) => {
        if (!typeOverride) return

        if (filePath.endsWith('primitive/index.d.ts')) {
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
        writeFileSync(filePath.replace('.d.ts', '.d.cts'), content)

        return {
          filePath,
          content
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
        resolve(__dirname, 'src/utils/index.ts')
      ]
    },

    rollupOptions: {
      external: [
        ...Object.keys(globals).filter((i) => {
          return !i.startsWith('@mantine') && !['mantine-react-table'].includes(i)
        }),
        // this has to be external, see https://github.com/remarkablemark/html-react-parser/issues/1427#issuecomment-2220703546
        'html-react-parser'
      ],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
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
