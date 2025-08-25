import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    './src/index.ts',
    './src/preflights/index.ts',
    './src/theme/index.ts',
  ],
  clean: true,
  dts: true,
  external: ['unocss'],
})
