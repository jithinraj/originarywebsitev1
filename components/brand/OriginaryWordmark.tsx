import type { CSSProperties } from 'react'
import {
  WORDMARK_INK_PATHS,
  WORDMARK_REVERSE_PATHS,
  WORDMARK_VIEW_BOX,
} from './wordmark-geometry'

/**
 * The Originary wordmark, drawn from the v17 master files.
 *
 * Ink (grey 950) on white and light greys, the reverse master (white) on ink
 * and dark greys. Never in colour, never typeset, never re-spaced.
 *
 * tone="auto" follows the theme: ink master in light, reverse master in dark.
 * Use tone="reverse" on panels that stay dark in both themes.
 *
 * Header size is 112-120 px wide; 120 px is the normal minimum, 96 px the
 * absolute minimum. Below 96 px use the app icon instead.
 */
export type WordmarkTone = 'auto' | 'ink' | 'reverse'

export interface OriginaryWordmarkProps {
  /** Rendered width; height follows the master aspect ratio. */
  width?: number | string
  tone?: WordmarkTone
  className?: string
  style?: CSSProperties
  /** Set when adjacent text already says Originary. */
  decorative?: boolean
}

const INK_FILL = 'var(--grey-950)'
const REVERSE_FILL = 'var(--grey-0)'

function Paths({ paths }: { paths: readonly string[] }) {
  return (
    <>
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </>
  )
}

export function OriginaryWordmark({
  width = 112,
  tone = 'auto',
  className,
  style,
  decorative = false,
}: OriginaryWordmarkProps) {
  const a11y = decorative
    ? { 'aria-hidden': true as const, focusable: 'false' as const }
    : { role: 'img', 'aria-label': 'Originary' }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={WORDMARK_VIEW_BOX}
      className={className}
      style={{ display: 'block', width, height: 'auto', overflow: 'visible', ...style }}
      {...a11y}
    >
      {tone === 'ink' && (
        <g style={{ fill: INK_FILL }}>
          <Paths paths={WORDMARK_INK_PATHS} />
        </g>
      )}
      {tone === 'reverse' && (
        <g style={{ fill: REVERSE_FILL }}>
          <Paths paths={WORDMARK_REVERSE_PATHS} />
        </g>
      )}
      {tone === 'auto' && (
        <>
          <g className="o-wm-ink" style={{ fill: INK_FILL }}>
            <Paths paths={WORDMARK_INK_PATHS} />
          </g>
          <g className="o-wm-rev" style={{ fill: REVERSE_FILL }}>
            <Paths paths={WORDMARK_REVERSE_PATHS} />
          </g>
        </>
      )}
    </svg>
  )
}

export default OriginaryWordmark
