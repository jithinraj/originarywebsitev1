import type { CSSProperties, ReactNode } from 'react'
import { PALETTE, MONO, SANS } from '@/components/home'

type ArticleFigureProps = {
  /** Mono tag for a numbered figure, e.g. "fig. 01". Omit for unnumbered figures. */
  label?: string
  /** Caption rendered below the figure. */
  caption?: ReactNode
  /** Sets the visual on a bg-colored, hairline-bordered, dot-grid plate. */
  plate?: boolean
  children: ReactNode
}

const dotgrid: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
}

/**
 * ArticleFigure is the shared wrapper for schematic figures inside article
 * bodies: an optional numbered tag, the visual itself, and an optional
 * caption. With `plate`, the visual sits on a bg-colored band with a
 * hairline border and a faint dot-grid texture, echoing the header plate.
 * Server-compatible; the visual passed as children owns any client-side
 * animation (see FigureFrame) and any per-mark accessibility roles.
 */
export function ArticleFigure({ label, caption, plate = false, children }: ArticleFigureProps) {
  // With no caption to carry the tag, show it as a small eyebrow above the
  // visual so a numbered figure is never left unlabeled.
  const eyebrow = label && !caption ? label : null

  return (
    <figure role="figure" aria-label={label} style={{ margin: '32px 0' }}>
      {eyebrow ? (
        <div
          style={{
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: PALETTE.faint,
            marginBottom: 10,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div
        style={
          plate
            ? {
                position: 'relative',
                background: PALETTE.bg,
                border: `1px solid ${PALETTE.hairline}`,
                padding: 24,
                overflow: 'hidden',
              }
            : undefined
        }
      >
        {plate ? <div style={dotgrid} aria-hidden="true" /> : null}
        <div
          style={{
            ...(plate ? { position: 'relative' as const } : undefined),
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {children}
        </div>
      </div>
      {caption ? (
        <figcaption
          style={{
            fontFamily: SANS,
            fontSize: 13,
            lineHeight: 1.6,
            color: PALETTE.muted,
            marginTop: 12,
            textWrap: 'pretty',
          }}
        >
          {label ? (
            <span
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: PALETTE.faint,
                marginRight: 6,
              }}
            >
              {label.toUpperCase()}:
            </span>
          ) : null}
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
