/**
 * Inline-style handles for the design tokens in app/originary-tokens.css
 * (brand guidelines v17, Carbon + Cobalt). Values are CSS variables, so they
 * follow the light and dark themes. Never put a raw colour here.
 *
 * accent is cobalt: one element per view, for attention and interaction.
 * success / warn / danger are for results only.
 */
export const PALETTE = {
  bg: 'var(--bg)',
  paper: 'var(--paper)',
  wash: 'var(--wash)',
  ink: 'var(--ink)',
  body: 'var(--ink-2)',
  muted: 'var(--muted)',
  faint: 'var(--faint)',
  hairline: 'var(--hairline)',
  rule: 'var(--rule)',
  accent: 'var(--accent)',
  accentTint: 'var(--accent-tint)',
  accentBorder: 'var(--accent-border)',
  success: 'var(--success)',
  warn: 'var(--warn)',
  danger: 'var(--danger)',
  action: 'var(--action)',
  onAction: 'var(--on-action)',
  surfaceDark: 'var(--surface-dark)',
  onDark: 'var(--on-dark)',
} as const

export const MAX_W = 1200
export const PAGE_PAD = 'var(--page-pad)'
