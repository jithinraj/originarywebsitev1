import Link from 'next/link'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO, SANS } from './typography'
import { SectionTitle } from './atoms/Mono'

type Card = {
  type: string
  why: string
  status: string
  tone: 'ok' | 'denied' | 'linked'
  href: string
}

const CARDS: Card[] = [
  {
    type: 'Gateway decision',
    why: 'Shows the terminal allow, deny, or review the gateway observed, and the policy applied.',
    status: 'signature verified',
    tone: 'ok',
    href: '/records#gateway',
  },
  {
    type: 'Paid API call',
    why: 'Binds the endpoint, the terms in force, and the result digest for a metered request.',
    status: 'signature verified',
    tone: 'ok',
    href: '/records#api',
  },
  {
    type: 'MCP tool run',
    why: 'Records which tool ran, the argument digest, and what the server reported back.',
    status: 'signature verified',
    tone: 'ok',
    href: '/records#mcp',
  },
  {
    type: 'Agent approval',
    why: 'Ties an approval to exactly one proposal digest, so a changed action fails closed.',
    status: 'decision: denied',
    tone: 'denied',
    href: '/records#agent',
  },
  {
    type: 'Provisioning event',
    why: 'Preserves which resource, credential, or subscription changed, and who issued it.',
    status: 'signature verified',
    tone: 'ok',
    href: '/records#provisioning',
  },
  {
    type: 'Payment event',
    why: 'Carries the payment reference and mandate the service action was bound to.',
    status: 'artifact linked',
    tone: 'linked',
    href: '/records#payment',
  },
]

const TONE: Record<Card['tone'], string> = {
  ok: '#245f3f',
  denied: '#9a3b2e',
  linked: '#375873',
}

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
        title="See what each issuing system actually reported."
        body="Every record is a bounded signed statement from one issuer. Each sample below verifies offline with a single command."
      />
      <div
        style={{
          marginTop: 44,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: 16,
        }}
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
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
              <span style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, color: PALETTE.ink, letterSpacing: '-0.01em' }}>
                {c.type}
              </span>
              <span style={{ fontFamily: MONO, fontSize: 11, color: TONE[c.tone], whiteSpace: 'nowrap' }}>
                {c.status}
              </span>
            </div>
            <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '10px 0 14px' }}>
              {c.why}
            </p>
            <span style={{ fontFamily: SANS, fontSize: 13, color: PALETTE.ink, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              View sample
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
