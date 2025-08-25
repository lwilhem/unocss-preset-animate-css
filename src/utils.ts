export function compressCSS(css: string, isDev = false): string {
  if (isDev)
    return css.trim()
  return css.trim().replace(/\s+/g, ' ').replace(/\/\*[\s\S]*?\*\//g, '')
}
