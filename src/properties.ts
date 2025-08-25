import type { Preflight } from 'unocss'

interface PropertyDefinition {
  syntax: string
  inherits: boolean
  initialValue?: string
}

// Define all the CSS custom properties programmatically
export const animationProperties: Record<string, PropertyDefinition> = {
  '--uno-animation-delay': {
    syntax: '*',
    inherits: false,
    initialValue: '0s',
  },
  '--uno-animation-direction': {
    syntax: '*',
    inherits: false,
    initialValue: 'normal',
  },
  '--uno-animation-duration': {
    syntax: '*',
    inherits: false,
    // No initial value to allow --uno-duration variable to work
  },
  '--uno-animation-fill-mode': {
    syntax: '*',
    inherits: false,
    initialValue: 'none',
  },
  '--uno-animation-iteration-count': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--uno-enter-blur': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-enter-opacity': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--uno-enter-rotate': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-enter-scale': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--uno-enter-translate-x': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-enter-translate-y': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-exit-blur': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-exit-opacity': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--uno-exit-rotate': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-exit-scale': {
    syntax: '*',
    inherits: false,
    initialValue: '1',
  },
  '--uno-exit-translate-x': {
    syntax: '*',
    inherits: false,
    initialValue: '0',
  },
  '--uno-exit-translate-y': {
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
    getCSS: () => {
      const root = `:root `
      const css = generatePropertyDeclarations()

      return `${root}{${css}}`
    },
  }
}
