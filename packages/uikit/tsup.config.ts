import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx,js,jsx}'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: false,
  external: ['react', 'react-dom'],
  onSuccess: 'pnpm run copy:raw-icon'
})
