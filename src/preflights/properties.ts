import type { Preflight } from 'unocss'
import type { IPropertyDefinition } from '../utils'
import { compress_css } from '../utils'

// Define all the CSS custom properties programmatically
export const animationProperties: Record<string, IPropertyDefinition> = {
  '--un-animation-delay': {
    syntax: '*',
    inherits: false,
    initialValue: '0s',
  },
  '--un-animation-direction': {
    syntax: '*',
    inherits: false,
    initialValue: 'normal',
  },
  '--un-animation-duration': {
    syntax: '*',
    inherits: false,
    // No initial value to allow --uno-duration variable to work
  },
  '--un-animation-fill-mode': {
    syntax: '*',
    inherits: false,
    initialValue: 'none',
  },
  '--un-animation-iteration-count': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--un-enter-blur': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-enter-opacity': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--un-enter-rotate': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-enter-scale': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--un-enter-translate-x': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-enter-translate-y': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-exit-blur': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-exit-opacity': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--un-exit-rotate': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-exit-scale': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--un-exit-translate-x': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--un-exit-translate-y': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
}

export function generatePropertyDeclarations(): string {
  return Object.entries(animationProperties)
    .map(([property, definition]) => {
      const initialValueLine = definition.initialValue
        ? `    initial-value: ${definition.initialValue};`
        : ''

      return `  @property ${property} {
    syntax: "${definition.syntax}";
    inherits: ${definition.inherits};${initialValueLine ? `\n${initialValueLine}` : ''}
  }`
    })
    .join('\n\n')
}

// TODO: find to a way to make :root { @propery } syntax work without preflights, inside unocss
export function properties(): Preflight {
  return {
    layer: 'preflights',
    getCSS: () => {
      const root = `:root `
      const css = generatePropertyDeclarations()

      return compress_css(`${root}{${css}}`)
    },
  }
}
