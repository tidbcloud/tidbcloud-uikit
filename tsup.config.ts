import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'packages/carousel/index.ts',
    'packages/components/index.ts',
    'packages/dates/index.ts',
    'packages/form/index.ts',
    'packages/hooks/index.ts',
    'packages/icons/index.ts',
    'packages/modals/index.ts',
    'packages/notifications/index.ts',
    'packages/prism/index.ts',
    'packages/theme/index.ts',
    'packages/utils/index.ts'
  ],
  format: ['cjs', 'esm'],
  sourcemap: true,
  shims: true,
  clean: true,
  dts: true,
  external: ['react', 'react-dom'],
  onSuccess: 'pnpm run postbuild'
})
