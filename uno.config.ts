import { defineConfig, presetWind4 } from 'unocss'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
  ],
})
