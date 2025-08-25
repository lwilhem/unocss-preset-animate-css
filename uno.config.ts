import { defineConfig, presetWind4 } from 'unocss'
import { presetStarter } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetStarter({
      span: 24,
    }),
  ],
})
