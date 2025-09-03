import type { IPresetOptions } from './utils'
import { definePreset } from 'unocss'
import { properties } from './preflights'

export const presetStarter = definePreset((_options: IPresetOptions = {}) => {
  return {
    name: 'unocss-preset-animate',
    preflights: properties(),
  }
})
