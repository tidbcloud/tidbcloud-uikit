import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm'],
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: false,
  external: ['react', 'react-dom']
})
