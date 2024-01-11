import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@tidbcloud\/uikit\/theme$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/theme') },
      { find: /^@tidbcloud\/uikit\/hooks$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/hooks') },
      { find: /^@tidbcloud\/uikit\/icons$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/icons') },
      { find: /^@tidbcloud\/uikit\/biz$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/biz') },
      { find: /^@tidbcloud\/uikit\/utils$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/utils') },
      { find: /^@tidbcloud\/uikit$/, replacement: path.resolve(process.cwd(), './packages/uikit/src/primitive') }
    ]
  }
})
