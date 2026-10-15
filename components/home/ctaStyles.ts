import type { CSSProperties } from 'react'

/**
 * Inline style, not a CSS class: `.hp-root a { color: inherit }` in the
 * site-wide layout wrapper has higher specificity (class+type) than any
 * single-class rule like `.hs-btn-solid`, so a className-only anchor CTA
 * silently loses its colour to inherited ink-on-ink. Inline styles always
 * win regardless of stylesheet specificity, so colour lives here.
 */
export const btnSolidStyle: CSSProperties = {
  color: 'var(--on-action)',
  background: 'var(--action)',
  border: '1px solid var(--action)',
}
export const btnGhostStyle: CSSProperties = {
  color: 'var(--ink)',
  background: 'transparent',
  border: '1px solid var(--border-chip)',
}
