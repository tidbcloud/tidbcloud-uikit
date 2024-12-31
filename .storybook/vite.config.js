import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'

const isDev = process.argv.includes('dev')
const alias = [
  { find: /^@tidbcloud\/uikit\/theme$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/theme') },
  { find: /^@tidbcloud\/uikit\/hooks$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/hooks') },
  { find: /^@tidbcloud\/uikit\/icons$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/icons') },
  { find: /^@tidbcloud\/uikit\/biz$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/biz') },
  { find: /^@tidbcloud\/uikit\/utils$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/utils') },
  { find: /^@tidbcloud\/uikit\/emotion$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/emotion') },
  { find: /^@tidbcloud\/uikit$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/primitive') }
]

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: isDev ? alias : undefined
  }
})
