// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({

  formatters: true,
  type: 'lib',
  pnpm: true,

  // additional config options
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  },
})
