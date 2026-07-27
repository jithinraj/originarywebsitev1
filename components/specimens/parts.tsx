import type { CSSProperties, ReactNode } from 'react'
import { PALETTE, MAX_W, PAGE_PAD } from '../home/palette'
import { BitField } from '../home/motion/BitField'
import { SANS, MONO } from '../home/typography'
import './specimens.css'

/* Warm "invalid/tamper" accent, derived to sit with PALETTE (no global token change). */
export const RUST = '#9a3b2e'

const sans = SANS
const mono = MONO

export type BadgeKind = 'verified' | 'denied' | 'invalid' | 'neutral'

const BADGE_COLORS: Record<BadgeKind, { fg: string; bg: string; bd: string }> = {
  // Text uses a darker step of the accent hue for contrast at 10.5px.
  verified: { fg: '#41654c', bg: 'rgba(74,116,89,0.10)', bd: 'rgba(74,116,89,0.35)' },
  denied: { fg: '#775a32', bg: 'rgba(138,106,60,0.10)', bd: 'rgba(138,106,60,0.35)' },
  invalid: { fg: RUST, bg: 'rgba(154,59,46,0.08)', bd: 'rgba(154,59,46,0.35)' },
  neutral: { fg: PALETTE.faint, bg: PALETTE.paper, bd: PALETTE.hairline },
}

export function StatusBadge({ kind, children }: { kind: BadgeKind; children: ReactNode }) {
  const c = BADGE_COLORS[kind]
  return (
    <span
      style={{
        fontFamily: mono,
        fontSize: 10.5,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: c.fg,
        background: c.bg,
        border: `1px solid ${c.bd}`,
        padding: '3px 9px',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}

export type RecordRow = { label: string; value: ReactNode }

/** Dim/secondary value fragment (e.g. a digest), reusable inside a row value. */
export function Dim({ children }: { children: ReactNode }) {
  return <span style={{ color: PALETTE.faint }}>{children}</span>
}

export function RecordCard({
  type,
  badge,
  rows,
  foot,
  style = {},
}: {
  type: string
  badge: { kind: BadgeKind; label: string }
  rows: RecordRow[]
  foot?: string
  style?: CSSProperties
}) {
  return (
    <div
      className="spec-fade"
      style={{
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.rule}`,
        padding: '18px 20px 16px',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 14,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontFamily: mono, fontSize: 12, color: PALETTE.ink, fontWeight: 500 }}>
          {type}
        </span>
        <StatusBadge kind={badge.kind}>{badge.label}</StatusBadge>
      </div>
      <dl className="spec-rows">
        {rows.map((r) => (
          <div className="spec-row" key={r.label}>
            <dt>{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
      {foot ? (
        <div
          style={{
            marginTop: 14,
            paddingTop: 12,
            borderTop: `1px solid ${PALETTE.hairline}`,
            fontFamily: mono,
            fontSize: 10.5,
            letterSpacing: '0.03em',
            color: PALETTE.faint,
          }}
        >
          {foot}
        </div>
      ) : null}
    </div>
  )
}

export function CodeBlock({
  children,
  tone = 'paper',
}: {
  children: ReactNode
  tone?: 'paper' | 'ink'
}) {
  const ink = tone === 'ink'
  return (
    <pre
      style={{
        fontFamily: mono,
        fontSize: 12.5,
        lineHeight: 1.6,
        color: ink ? 'rgba(244,241,234,0.92)' : PALETTE.ink,
        background: ink ? 'rgba(244,241,234,0.06)' : PALETTE.paper,
        border: `1px solid ${ink ? 'rgba(244,241,234,0.18)' : PALETTE.hairline}`,
        padding: '14px 16px',
        margin: 0,
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {children}
    </pre>
  )
}

export type TermLine = { kind: 'ok' | 'err' | 'out'; text: string }

export function Terminal({ lines, tone = 'paper' }: { lines: TermLine[]; tone?: 'paper' | 'ink' }) {
  const ink = tone === 'ink'
  const color = (k: TermLine['kind']) =>
    k === 'ok'
      ? ink
        ? '#7fa98c'
        : PALETTE.success
      : k === 'err'
        ? ink
          ? '#d08b7e'
          : RUST
        : ink
          ? 'rgba(244,241,234,0.65)'
          : PALETTE.faint
  return (
    <div
      className="spec-fade"
      style={{
        fontFamily: mono,
        fontSize: 12.5,
        lineHeight: 1.7,
        background: ink ? 'rgba(244,241,234,0.06)' : PALETTE.paper,
        border: `1px solid ${ink ? 'rgba(244,241,234,0.18)' : PALETTE.hairline}`,
        padding: '12px 16px',
      }}
    >
      {lines.map((l, i) => (
        <div key={i} style={{ color: color(l.kind) }}>
          {l.text}
        </div>
      ))}
    </div>
  )
}

export function StepLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 10.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: PALETTE.faint,
        margin: '20px 0 8px',
      }}
    >
      {children}
    </div>
  )
}

export function Legend({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 22 }}>
      {items.map((it, i) => {
        const isSig = i === items.length - 1
        return (
          <span
            key={it}
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.04em',
              color: isSig ? PALETTE.success : PALETTE.muted,
              border: `1px solid ${isSig ? 'rgba(74,116,89,0.35)' : PALETTE.hairline}`,
              background: PALETTE.paper,
              padding: '4px 11px',
            }}
          >
            {it}
          </span>
        )
      })}
    </div>
  )
}

export function SpecimenGrid({
  children,
  narrow = false,
}: {
  children: ReactNode
  narrow?: boolean
}) {
  return <div className={narrow ? 'spec-grid spec-grid--narrow' : 'spec-grid'}>{children}</div>
}

export function SpecimenIntro({
  eyebrow,
  title,
  answers,
  children,
}: {
  eyebrow: string
  title: string
  answers?: ReactNode
  children?: ReactNode
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: mono,
          fontSize: 10.5,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: PALETTE.faint,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: sans,
          fontSize: 'clamp(20px, 2.4vw, 25px)',
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          fontWeight: 500,
          color: PALETTE.ink,
          margin: '12px 0 0 0',
          textWrap: 'pretty',
        }}
      >
        {title}
      </h2>
      {answers ? (
        <p
          style={{
            fontFamily: sans,
            fontSize: 16,
            lineHeight: 1.6,
            color: PALETTE.muted,
            margin: '12px 0 0 0',
            maxWidth: '56ch',
            textWrap: 'pretty',
          }}
        >
          {answers}
        </p>
      ) : null}
      {children}
    </div>
  )
}

/** Full-bleed inverted (dark ink) band for closing CTAs. */
export function InkBand({ children }: { children: ReactNode }) {
  return (
    <section
      className="cin-stage"
      style={{
        background: PALETTE.ink,
        color: PALETTE.bg,
        padding: `clamp(56px, 8vh, 88px) ${PAGE_PAD}`,
      }}
    >
      <div className="cin-ink-wash" aria-hidden />
      <BitField className="cin-stream" tone="paper" />
      <div style={{ maxWidth: MAX_W, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </section>
  )
}

export function InkHeading({ children, maxWidth = '26ch' }: { children: ReactNode; maxWidth?: string }) {
  return (
    <h2
      style={{
        fontFamily: sans,
        fontSize: 'clamp(26px, 3.4vw, 34px)',
        lineHeight: 1.14,
        letterSpacing: '-0.02em',
        fontWeight: 500,
        color: PALETTE.bg,
        margin: '0 auto',
        maxWidth,
        textWrap: 'balance',
      }}
    >
      {children}
    </h2>
  )
}

/** Two stacked comparison columns ("means" / "does not mean"). */
export function CompareColumns({
  columns,
}: {
  columns: Array<{ heading: string; tone: BadgeKind; items: ReactNode[] }>
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        gap: 'clamp(20px, 3vw, 36px)',
      }}
      className="spec-grid"
    >
      {columns.map((col) => (
        <div key={col.heading}>
          <h3
            style={{
              fontFamily: mono,
              fontSize: 11.5,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: BADGE_COLORS[col.tone].fg,
              margin: '0 0 14px 0',
            }}
          >
            {col.heading}
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.items.map((it, i) => (
              <li
                key={i}
                style={{
                  fontFamily: sans,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: PALETTE.ink,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    marginTop: 9,
                    background: BADGE_COLORS[col.tone].fg,
                    flexShrink: 0,
                  }}
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function DataTable({
  head,
  rows,
}: {
  head: string[]
  rows: ReactNode[][]
}) {
  return (
    <div style={{ overflowX: 'auto', borderTop: `2px solid rgba(20, 17, 10, 0.82)` }}>
      <table className="pk-datatable" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520, margin: 0 }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: 'left',
                  fontFamily: mono,
                  fontSize: 10.5,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: PALETTE.faint,
                  fontWeight: 500,
                  padding: '12px 16px',
                  borderBottom: `1px solid ${PALETTE.rule}`,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    fontFamily: ci === 0 ? mono : sans,
                    fontSize: ci === 0 ? 12.5 : 14.5,
                    lineHeight: 1.55,
                    color: ci === 0 ? PALETTE.ink : PALETTE.muted,
                    padding: '13px 16px',
                    borderTop: ri === 0 ? 'none' : `1px solid ${PALETTE.hairline}`,
                    verticalAlign: 'top',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Ruled list: indexed rows in a bordered card. */
export function MarkerList({
  marker,
  items,
  maxWidth = 720,
}: {
  marker: 'check' | 'cross' | 'number'
  items: ReactNode[]
  maxWidth?: number
}) {
  const color = marker === 'cross' ? PALETTE.warn : marker === 'check' ? PALETTE.success : PALETTE.accent
  return (
    <ul
      className="spec-ledger"
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        maxWidth,
        borderTop: `2px solid rgba(20, 17, 10, 0.82)`,
      }}
    >
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: marker === 'number' ? '34px minmax(0, 1fr)' : '34px 18px minmax(0, 1fr)',
            gap: 12,
            alignItems: 'baseline',
            padding: '13px 2px',
            borderTop: i > 0 ? `1px solid ${PALETTE.hairline}` : 'none',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.08em',
              color: PALETTE.faint,
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          {marker !== 'number' ? (
            <span aria-hidden="true" style={{ fontFamily: mono, fontSize: 12.5, color }}>
              {marker === 'check' ? '✓' : '×'}
            </span>
          ) : null}
          <span style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.55, color: PALETTE.ink }}>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/** CTA button styled for the dark InkBand (page-kit Button is ink-on-light). */
export function InkButton({
  href,
  primary = false,
  children,
}: {
  href: string
  primary?: boolean
  children: ReactNode
}) {
  const styles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 18px',
    fontFamily: sans,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '-0.005em',
    textDecoration: 'none',
    color: primary ? PALETTE.ink : PALETTE.bg,
    background: primary ? PALETTE.bg : 'transparent',
    border: `1px solid ${primary ? PALETTE.bg : 'rgba(244,241,234,0.4)'}`,
  }
  return (
    <a href={href} style={styles}>
      {children}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    </a>
  )
}

/** Shared anchor line; renders a div. */
export function AnchorLine({
  children,
  onInk = false,
  style = {},
}: {
  children: ReactNode
  onInk?: boolean
  style?: CSSProperties
}) {
  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: 12,
        letterSpacing: '0.04em',
        color: onInk ? 'rgba(244,241,234,0.7)' : PALETTE.faint,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/**
 * VerificationBoundary: the canonical two-part statement of what verification
 * establishes and does not establish. Reused verbatim across /product, /verify,
 * /peac, and /trust so the proof boundary reads identically everywhere.
 */
export function VerificationBoundary() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(20px, 3vw, 36px)',
      }}
      className="spec-grid"
    >
      <div style={{ borderTop: `2px solid ${PALETTE.success}`, paddingTop: 16 }}>
        <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: PALETTE.success }}>
          What verification establishes
        </div>
        <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: PALETTE.muted, margin: '12px 0 0', maxWidth: '52ch' }}>
          Verification checks the record&apos;s structure, signature, issuer information, and bound
          digests against the supplied verification material.
        </p>
      </div>
      <div style={{ borderTop: `2px solid ${PALETTE.hairline}`, paddingTop: 16 }}>
        <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: PALETTE.faint }}>
          What verification does not establish
        </div>
        <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: PALETTE.muted, margin: '12px 0 0', maxWidth: '52ch' }}>
          Verification does not independently prove that every relevant real-world event was captured,
          that the issuer&apos;s statements were truthful, or that an underlying system correctly
          enforced its policy.
        </p>
      </div>
    </div>
  )
}
