import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

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

export default defineConfig({
  plugins: [
    react(),
    dts({
      beforeWriteFile: (filePath, content) => {
        writeFileSync(filePath.replace('.d.ts', '.d.cts'), content)
        return { filePath, content }
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
        '@mantine/emotion',
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
