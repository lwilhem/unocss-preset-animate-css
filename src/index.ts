import { definePreset } from '@unocss/core'

export interface IUnoAnimateOptions {
  // TODO: implement config format
  /**
   *  The number of columns in the grid system (Example option)
   *
   * @default 12
   */
  span?: number
}

export const presetUnoAnimate = definePreset((_options: IUnoAnimateOptions = {}) => {
  // options stuff
  const _span = _options.span ?? 12

  return {
    autocomplete: {
      // implement autocomplete
    },
    name: 'preset-animate-css',
    rules: [
      // implement rules
    ],
    theme: {
      // implement theme
    },
    variants: [
      // implements variants
    ],
  }
})
