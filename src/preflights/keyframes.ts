import type { Preflight } from 'unocss'
import { compress_css } from '../utils'

export const KeyframesProperties: Record<string, string> = {
  'enter': `
    from {
      opacity: var(--tw-enter-opacity, 1);
      transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0)
        scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1))
        rotate(var(--tw-enter-rotate, 0));
      filter: blur(var(--tw-enter-blur, 0));
    }
  `,
  'exit': `
    to {
      opacity: var(--tw-exit-opacity, 1);
      transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0)
        scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1))
        rotate(var(--tw-exit-rotate, 0));
      filter: blur(var(--tw-exit-blur, 0));
    }
  `,
  'accordion-down': `
    from { height: 0; }
    to {
      height: var(
        --radix-accordion-content-height,
        var(
          --bits-accordion-content-height,
          var(--reka-accordion-content-height, var(--kb-accordion-content-height, auto))
        )
      );
    }
  `,
  'accordion-up': `
    from {
      height: var(
        --radix-accordion-content-height,
        var(
          --bits-accordion-content-height,
          var(--reka-accordion-content-height, var(--kb-accordion-content-height, auto))
        )
      );
    }
    to { height: 0; }
  `,
  'collapsible-down': `
    from { height: 0; }
    to {
      height: var(
        --radix-collapsible-content-height,
        var(
          --bits-collapsible-content-height,
          var(--reka-collapsible-content-height, var(--kb-collapsible-content-height, auto))
        )
      );
    }
  `,
  'collapsible-up': `
    from {
      height: var(
        --radix-collapsible-content-height,
        var(
          --bits-collapsible-content-height,
          var(--reka-collapsible-content-height, var(--kb-collapsible-content-height, auto))
        )
      );
    }
    to { height: 0; }
  `,
  'caret-blink': `
    0%, 70%, 100% { opacity: 1; }
    20%, 50% { opacity: 0; }
  `,
}

export function generateKeyframesDeclaration(): string {
  return Object.entries(KeyframesProperties)
    .map(([name, content]) => `@keyframes ${name} {${content}\n}`)
    .join('\n')
}

export function keyframes(): Preflight {
  return {
    layer: 'preflights',
    getCSS: () => {
      const themeInline = `@theme inline `
      const keyframes = generateKeyframesDeclaration()

      return compress_css(`${themeInline}{${keyframes}}`)
    },
  }
}
