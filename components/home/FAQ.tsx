import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'

const items: Array<{ q: string; a: string }> = [
  {
    q: 'Is this observability?',
    a: 'No. Observability helps your team understand what happened inside your systems. Originary creates signed records another party can verify without access to your logs, traces, or dashboard.',
  },
  {
    q: 'Do I need Originary to verify a record?',
    a: 'No. PEAC records are designed for independent verification. Originary provides product workflows for issuing, managing, reviewing, and exporting records in production.',
  },
  {
    q: 'What happens if I stop using Originary?',
    a: 'Records that were already issued remain verifiable according to their issuer keys, expiry, and trust policy. Verification does not depend on an Originary callback.',
  },
  {
    q: 'Is this only for AI agents?',
    a: 'No. The first use cases are agent, API, MCP, gateway, provisioning, runtime, and payment workflows, but the primitive is broader: signed records for automated actions that cross boundaries.',
  },
  {
    q: 'Who should start with Originary?',
    a: 'Teams with one workflow where logs, traces, screenshots, or vendor dashboards are not enough: API providers, data providers, MCP and tool hosts, gateway operators, automation teams, and companies preparing for enterprise review.',
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      data-screen-label="09 faq"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle title="Common questions." />
      <div
        style={{
          marginTop: 40,
          border: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.paper,
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.q}
            style={{
              padding: '28px 32px',
              borderBottom: i < items.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
              gap: 32,
            }}
          >
            <div>
              <Mono
                size={10}
                color={PALETTE.faint}
                style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <h3
                style={{
                  fontFamily: SANS,
                  fontSize: 18,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  margin: '10px 0 0 0',
                  letterSpacing: '-0.01em',
                  textWrap: 'pretty',
                }}
              >
                {item.q}
              </h3>
            </div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.6,
                color: PALETTE.muted,
                margin: 0,
                textWrap: 'pretty',
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
