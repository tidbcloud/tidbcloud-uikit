import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@tidbcloud/uikit', '@tidbcloud/uikit/icons']
  },
  build: {
    commonjsOptions: {
      include: ['@tidbcloud/uikit', '@tidbcloud/uikit/icons']
    }
  }
})
