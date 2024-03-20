import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }))

const globals = {
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
      external: ['react', 'react-dom', 'lodash-es', ...Object.keys(globals).filter((i) => !i.startsWith('@mantine'))],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js'
        },
        {
          dir: 'dist',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs'
        }
      ]
    }
  }
})
