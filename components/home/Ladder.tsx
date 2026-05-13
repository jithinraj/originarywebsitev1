'use client'

import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { ease, tween } from './motion/easing'

const stages: Array<{ n: string; title: string; copy: string }> = [
  {
    n: '01',
    title: 'One workflow',
    copy: 'Add signed records to one action that already creates reviews, billing questions, audits, or customer support work.',
  },
  {
    n: '02',
    title: 'Managed issuer',
    copy: 'Operate signing keys, record retention, trust artifacts, and verifier access without changing your runtime.',
  },
  {
    n: '03',
    title: 'Record adapters',
    copy: 'Extend records across API, MCP, gateway, runtime, provisioning, and payment workflows.',
  },
  {
    n: '04',
    title: 'Review bundles',
    copy: 'Export records for customer review, procurement, audit, incident review, and compliance workflows.',
  },
]

export function Ladder() {
  return (
    <section
      id="expansion"
      className="home-section"
      data-screen-label="06 get started"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Start with one workflow. Expand when proof matters."
        body="Add records to one boundary action first: an API call, MCP tool call, gateway decision, provisioning event, or payment-related workflow. Then expand to more teams, record types, and review flows as verification becomes operational."
      />
      <div style={{ marginTop: 48 }}>
        <LadderGrid />
      </div>
      <p
        style={{
          marginTop: 32,
          fontFamily: SANS,
          fontSize: 14,
          lineHeight: 1.65,
          color: PALETTE.muted,
          textAlign: 'center',
          textWrap: 'pretty',
        }}
      >
        Start narrow. Scale only where records already reduce review work.
      </p>
    </section>
  )
}

function LadderGrid() {
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const t = useEnterClock(entered, 6)
  return (
    <div
      ref={ref}
      style={{
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
      }}
    >
      {stages.map((s, i) => {
        const delay = 0.1 + i * 0.18
        const appear = tween(t, delay, delay + 0.6, ease.out)
        const width = 60 + i * 10
        return (
          <div
            key={s.n}
            className="home-ladder-row home-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 240px',
              alignItems: 'center',
              padding: '22px 28px',
              borderBottom: i < stages.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
              opacity: appear,
              transform: `translateY(${(1 - appear) * 6}px)`,
            }}
          >
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.18em' }}>
              {s.n}
            </Mono>
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 18,
                  color: PALETTE.ink,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  color: PALETTE.muted,
                  marginTop: 4,
                }}
              >
                {s.copy}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div
                style={{
                  width: `${width * appear}%`,
                  height: 6,
                  background: PALETTE.ink,
                  transition: 'width 200ms',
                  maxWidth: 240,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
