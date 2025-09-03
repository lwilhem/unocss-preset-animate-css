export interface IAnimationTheme {
  keyframes?: Record<string, string>
  durations?: Record<string, string>
  timingFns?: Record<string, string>
  properties?: Record<string, object>
  counts?: Record<string, string | number>
  category?: Record<string, string>
}

export interface IPresetOptions {}

export interface IPropertyDefinition {
  syntax: string
  inherits: boolean
  initialValue?: string
}
