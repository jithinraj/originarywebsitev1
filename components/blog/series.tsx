import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import { PALETTE, MONO, SANS } from '@/components/home'
import { EVIDENCE_SERIES, getArticle } from '@/lib/blog'

/**
 * Shared building blocks for the evidence handoff series: the in-article
 * series index, a responsive evidence table, a findings card with status
 * chips, and a single next-step block. Server components; no client JS.
 */

const AMBER = PALETTE.warn
const SAGE = PALETTE.success
const SLATE = PALETTE.ink

const eyebrow: CSSProperties = {
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: PALETTE.faint,
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

/** Mono "Part N of 5" label for the header plate keyword. */
export function seriesPart(slug: string): string {
  const i = (EVIDENCE_SERIES as readonly string[]).indexOf(slug)
  return i < 0 ? '' : `part ${i + 1} of ${EVIDENCE_SERIES.length}`
}

/** Numbered index of the five posts, with the current one marked. */
export function SeriesIndex({ current }: { current: string }) {
  return (
    <nav
      aria-label="Evidence handoff series"
      style={{
        margin: '36px 0 8px 0',
        padding: '22px 24px',
        background: PALETTE.bg,
        border: `1px solid ${PALETTE.hairline}`,
      }}
    >
      <div style={{ ...eyebrow, marginBottom: 14 }}>Evidence handoff series</div>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 2 }}>
        {EVIDENCE_SERIES.map((slug, i) => {
          const a = getArticle(slug)
          if (!a) return null
          const here = slug === current
          const row: CSSProperties = {
            display: 'grid',
            gridTemplateColumns: '28px 1fr',
            gap: 10,
            alignItems: 'baseline',
            padding: '8px 0',
            borderTop: i === 0 ? 'none' : `1px solid ${PALETTE.hairline}`,
            fontFamily: SANS,
            fontSize: 14,
            lineHeight: 1.45,
          }
          const num = (
            <span style={{ fontFamily: MONO, fontSize: 11, color: here ? SLATE : PALETTE.faint }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          )
          return (
            <li key={slug} style={{ margin: 0 }}>
              {here ? (
                <div style={row} aria-current="page">
                  {num}
                  <span style={{ color: PALETTE.ink, fontWeight: 500 }}>
                    {a.title}{' '}
                    <span style={{ ...eyebrow, fontSize: 10, color: SLATE, marginLeft: 6 }}>
                      reading
                    </span>
                  </span>
                </div>
              ) : (
                <Link
                  href={`/blog/${slug}`}
                  style={{ ...row, color: PALETTE.muted, textDecoration: 'none' }}
                  className="series-link"
                >
                  {num}
                  <span>{a.title}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Two-column evidence table that scrolls horizontally on narrow screens. */
export function EvidenceTable({
  head,
  rows,
  caption,
}: {
  head: [string, string]
  rows: Array<[ReactNode, ReactNode]>
  caption?: string
}) {
  const cell: CSSProperties = {
    padding: '11px 14px',
    verticalAlign: 'top',
    borderTop: `1px solid ${PALETTE.hairline}`,
    fontFamily: SANS,
    fontSize: 14,
    lineHeight: 1.55,
    textAlign: 'left',
  }
  return (
    <div
      style={{
        margin: '18px 0 22px 0',
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.bg,
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <table style={{ width: '100%', minWidth: 460, borderCollapse: 'collapse' }}>
        {caption ? (
          <caption
            style={{ ...eyebrow, textAlign: 'left', padding: '12px 14px 0 14px', captionSide: 'top' }}
          >
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                style={{
                  ...cell,
                  borderTop: 'none',
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: PALETTE.faint,
                  width: '42%',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b], i) => (
            <tr key={i}>
              <th scope="row" style={{ ...cell, color: PALETTE.ink, fontWeight: 500 }}>
                {a}
              </th>
              <td style={{ ...cell, color: PALETTE.muted }}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export type FindingStatus = 'reported' | 'matched' | 'missing' | 'open'

const CHIP: Record<FindingStatus, { label: string; color: string; wash: string; dashed?: boolean }> = {
  reported: { label: 'reported', color: SLATE, wash: 'var(--code-bg)' },
  matched: { label: 'matched', color: SAGE, wash: 'var(--success-bg)' },
  missing: { label: 'not supplied', color: AMBER, wash: 'var(--warn-bg)', dashed: true },
  open: { label: 'open', color: AMBER, wash: 'var(--warn-bg)', dashed: true },
}

export function StatusChip({ status }: { status: FindingStatus }) {
  const c = CHIP[status]
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: c.color,
        background: c.wash,
        border: `1px ${c.dashed ? 'dashed' : 'solid'} ${c.color}`,
        padding: '3px 8px',
        whiteSpace: 'nowrap',
      }}
    >
      {c.label}
    </span>
  )
}

/** A reviewer-facing findings card: each line carries its status and source. */
export function FindingsCard({
  title,
  findings,
  footer,
}: {
  title: string
  findings: Array<{ status: FindingStatus; text: ReactNode; source: string }>
  footer?: ReactNode
}) {
  return (
    <div style={{ border: `1px solid ${PALETTE.rule}`, background: PALETTE.paper }}>
      <div
        style={{
          ...eyebrow,
          padding: '12px 16px',
          borderBottom: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.bg,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {findings.map((f, i) => (
          <li
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '112px minmax(0, 1fr)',
              gap: 14,
              alignItems: 'start',
              padding: '13px 16px',
              borderTop: i === 0 ? 'none' : `1px solid ${PALETTE.hairline}`,
              margin: 0,
            }}
          >
            <span>
              <StatusChip status={f.status} />
            </span>
            <span style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.55, color: PALETTE.ink, overflowWrap: 'anywhere' }}>
              {f.text}
              <span style={{ ...eyebrow, display: 'block', fontSize: 10, marginTop: 4 }}>
                source: {f.source}
              </span>
            </span>
          </li>
        ))}
      </ul>
      {footer ? (
        <div
          style={{
            padding: '12px 16px',
            borderTop: `1px dashed ${AMBER}`,
            background: 'var(--warn-bg)',
            fontFamily: SANS,
            fontSize: 14,
            lineHeight: 1.55,
            color: PALETTE.ink,
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  )
}

/** The article's single next step: one sentence of context and one or two links. */
export function NextStep({
  children,
  actions,
}: {
  children: ReactNode
  actions: Array<{ label: string; href: string }>
}) {
  return (
    <aside
      aria-label="Next step"
      style={{
        margin: '30px 0 8px 0',
        padding: '22px 24px',
        borderLeft: `2px solid ${SLATE}`,
        background: 'var(--code-bg)',
      }}
    >
      <div style={{ ...eyebrow, color: SLATE, marginBottom: 8 }}>Next step</div>
      <div style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: PALETTE.ink }}>
        {children}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
        {actions.map((a, i) => {
          const external = a.href.startsWith('http')
          const style: CSSProperties = {
            display: 'inline-block',
            padding: '9px 16px',
            fontFamily: SANS,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            border: `1px solid ${PALETTE.ink}`,
            background: i === 0 ? PALETTE.ink : 'transparent',
            color: i === 0 ? PALETTE.paper : PALETTE.ink,
          }
          return external ? (
            <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer" style={style}>
              {a.label} &rarr;
            </a>
          ) : (
            <Link key={a.href} href={a.href} style={style}>
              {a.label} &rarr;
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

/** Short pull line used once or twice per article. */
export function PullLine({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: '22px 0',
        padding: '16px 20px',
        background: PALETTE.bg,
        border: `1px solid ${PALETTE.rule}`,
        fontFamily: SANS,
        fontSize: 17,
        fontWeight: 500,
        lineHeight: 1.5,
        color: PALETTE.ink,
      }}
    >
      {children}
    </p>
  )
}
