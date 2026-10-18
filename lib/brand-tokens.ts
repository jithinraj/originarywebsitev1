/**
 * Literal values of the light-theme tokens in app/originary-tokens.css, for
 * contexts that cannot read CSS variables: next/og image routes (satori) and
 * canvas. Everything else uses the CSS variables. Keep the two in step.
 *
 * Brand guidelines v17 · Carbon + Cobalt · locked 18 Oct 2026.
 */
export const BRAND = {
  bg: '#FFFFFF',
  wash: '#F5F5F5',
  ink: '#0B0B0C',
  body: '#3D3D3D',
  muted: '#5C5C5C',
  faint: '#6B6B6B',
  hairline: '#EBEBEB',
  rule: '#D4D4D4',
  accent: '#2B3FE6',
  accentTint: '#EEF0FE',
  accentBorder: '#7D8AF2',
  accentOnDark: '#9CA8FF',
  success: '#137738',
  warn: '#9A5B00',
  danger: '#C52C26',
  surfaceDark: '#0B0B0C',
  surfaceDarkCard: '#141414',
  onDark: '#FFFFFF',
  onDarkMuted: '#A3A3A3',
} as const

export type BrandToken = keyof typeof BRAND
