import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    carousel: 'src/carousel/index.ts',
    index: 'src/components/index.ts',
    dates: 'src/dates/index.ts',
    hooks: 'src/hooks/index.ts',
    icons: 'src/icons/index.ts',
    modals: 'src/modals/index.ts',
    notifications: 'src/notifications/index.ts',
    prism: 'src/prism/index.ts',
    theme: 'src/theme/index.ts',
    utils: 'src/utils/index.ts',
    dropzone: 'src/dropzone/index.ts'
  },
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: true,
  external: ['react', 'react-dom']
})
