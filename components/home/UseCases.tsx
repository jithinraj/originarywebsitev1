import Link from 'next/link'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'
import { MarkGlyph, type MarkName } from './glyphs/MarkGlyphs'

type CaseCard = { title: string; body: string; cta: string; href: string; marks: string[]; mark: MarkName }

const CARDS: CaseCard[] = [
  {
    title: 'Paid MCP tools and APIs',
    mark: 'coin' as MarkName,
    marks: ['MCP', 'metered APIs', 'payment artifacts'],
    body: 'Usage, result and provider-side service records for paid tool calls, with the provider artifact bound to the record.',
    cta: 'See the paid-service workflow',
    href: '/mcp',
  },
  {
    title: 'Gateway decisions',
    mark: 'valve' as MarkName,
    marks: ['gateway policy', 'routing', 'redaction'],
    body: 'Record an allow, deny, or review decision with the policy or check that was applied, then verify it later outside the originating system.',
    cta: 'See gateway evidence',
    href: '/ai-gateway',
  },
  {
    title: 'Agent commerce',
    mark: 'lockCoin' as MarkName,
    marks: ['mandates', 'authorization', 'settlement'],
    body: 'Authorization, mandate, payment and settlement-linked records connected into one reviewable commerce case.',
    cta: 'See a paid-service dispute',
    href: '/agentic-commerce',
  },
  {
    title: 'Audit and incident handoff',
    mark: 'ledger' as MarkName,
    marks: ['telemetry', 'provenance', 'incident export'],
    body: 'Move from internal logs to a portable evidence case for incident review, audits, counterparties and disputes.',
    cta: 'See the handoff workflow',
    href: '/audit-incident-handoff',
  },
  {
    title: 'Provisioning changes',
    mark: 'pipeline' as MarkName,
    marks: ['credentials', 'deployments', 'subscriptions'],
    body: 'Record account, resource, credential, subscription, and deployment events so they survive the system that made the change.',
    cta: 'See provisioning records',
    href: '/provisioning-records',
  },
]

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="home-section"
      data-screen-label="04 use cases"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Start with one consequential workflow."
      />
      <div
        className="home-usecase-grid"
        style={{
          marginTop: 48,
          display: 'grid',
          gap: 1,
          border: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.hairline,
        }}
      >
        {CARDS.map((card, i) => (
          <Link
            key={card.title}
            href={card.href}
            className="home-arrow-link"
            style={{
              padding: '24px 24px 26px 24px',
              background: PALETTE.paper,
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <span className="home-usecase-mark" aria-hidden>
              <MarkGlyph name={card.mark} size={22} />
            </span>
            <h4 style={{ fontFamily: SANS, fontSize: 17, fontWeight: 500, color: PALETTE.ink, margin: '14px 0 0', letterSpacing: '-0.01em' }}>
              {card.title}
            </h4>
            <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.55, color: PALETTE.muted, marginTop: 12, marginBottom: 0, textWrap: 'pretty' as const }}>
              {card.body}
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontFamily: SANS, fontSize: 13.5, color: PALETTE.ink }}>
              {card.cta}
            </span>
            <span className="home-usecase-marks">
              {card.marks.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </span>
          </Link>
        ))}
      </div>
      <p
        style={{
          marginTop: 20,
          fontFamily: SANS,
          fontSize: 13.5,
          color: '#6e6759',
        }}
      >
        The same record path supports customer reviews, incidents, audits and disputes.
        Agent actions, payment events, and provisioning use the same record format.{' '}
        <Link href="/records" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          More workflows
        </Link>
        .
      </p>
    </section>
  )
}
