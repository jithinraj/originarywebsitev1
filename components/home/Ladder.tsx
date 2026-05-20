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
    copy: 'Pick a workflow where another party already asks, "What happened?"',
  },
  {
    n: '02',
    title: 'Record issued',
    copy: 'Originary creates signed records from selected workflow facts.',
  },
  {
    n: '03',
    title: 'Review begins',
    copy: 'Share records with a customer, auditor, partner, or internal reviewer.',
  },
  {
    n: '04',
    title: 'Expand when useful',
    copy: 'Add more workflows only when the proof boundary matters.',
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
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="Start with one workflow. Expand when proof matters."
        body="Most teams start with one workflow where external proof is already painful: a customer-facing API, an agent action, a gateway decision, a payment event, or an audit request."
      />
      <div style={{ marginTop: 40 }}>
        <LadderGrid />
      </div>
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
        return (
          <div
            key={s.n}
            className="home-ladder-row home-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              alignItems: 'center',
              padding: '20px 28px',
              borderBottom: i < stages.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
              opacity: appear,
              transform: `translateY(${(1 - appear) * 6}px)`,
            }}
          >
            <Mono size={11} color={PALETTE.muted} style={{ letterSpacing: '0.16em' }}>
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
                  lineHeight: 1.55,
                }}
              >
                {s.copy}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
