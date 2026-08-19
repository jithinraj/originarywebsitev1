import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { SANS } from './typography'
import { SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'
import { MiniRecord } from './glyphs/StatusGlyphs'

type Card = {
  type: string
  mark: MarkName
  why: string
  tone: 'ok' | 'denied' | 'linked'
  href: string
}

const CARDS: Card[] = [
  {
    type: 'Tool call',
    mark: 'link' as MarkName,
    why: 'What tool ran, and what result did it report?',
    tone: 'ok',
    href: '/records#mcp',
  },
  {
    type: 'API call',
    mark: 'braces' as MarkName,
    why: 'What did the API report receiving and returning?',
    tone: 'ok',
    href: '/records#api',
  },
  {
    type: 'Agent action',
    mark: 'agentFrame' as MarkName,
    why: 'What action did the agent report taking?',
    tone: 'denied',
    href: '/records#agent',
  },
  {
    type: 'Gateway decision',
    mark: 'valve' as MarkName,
    why: 'Was the request allowed, blocked, redacted or reviewed?',
    tone: 'ok',
    href: '/records#gateway',
  },
  {
    type: 'Payment',
    mark: 'lockCoin' as MarkName,
    why: 'What did the payment system report?',
    tone: 'linked',
    href: '/records#payment',
  },
  {
    type: 'Provisioning',
    mark: 'pipeline' as MarkName,
    why: 'What account, credential or resource changed?',
    tone: 'ok',
    href: '/records#provisioning',
  },
]

export function RecordGallery() {
  return (
    <section
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Records for the actions your software takes."
        body="PEAC uses the same core record model across agents, APIs, tools, gateways, payments and provisioning."
      />
      <div
        style={{
          marginTop: 44,
          display: 'grid',
          gap: 16,
        }}
        className="home-recgal-grid"
      >
        {CARDS.map((c) => (
          <Link
            key={c.type}
            href={c.href}
            className="home-card home-arrow-link"
            style={{
              display: 'block',
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
              padding: '20px 20px 18px',
              textDecoration: 'none',
            }}
          >
            <div className="home-recgal-head">
              <span className="home-recgal-mark" aria-hidden>
                <MarkGlyph name={c.mark} size={20} />
              </span>
              <span className="home-recgal-shape" aria-hidden>
                <MiniRecord lines={3} denied={c.tone === 'denied'} />
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, marginTop: 16 }}>
              <span style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, color: PALETTE.ink, letterSpacing: '-0.01em' }}>
                {c.type}
              </span>
            </div>
            <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '10px 0 14px' }}>
              {c.why}
            </p>
            <span style={{ fontFamily: SANS, fontSize: 13, color: PALETTE.ink, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              View example
            </span>
          </Link>
        ))}
      </div>
      <p style={{ fontFamily: SANS, fontSize: 13.5, color: '#6e6759', marginTop: 20 }}>
        Reviewing a whole incident or transaction?{' '}
        <Link
          href="/evidence-case"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          See how related records can be brought together &rarr;
        </Link>
      </p>
    </section>
  )
}
