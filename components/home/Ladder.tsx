'use client'

import Link from 'next/link'
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
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
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
      <div style={{ marginTop: 22 }}>
        <Mono
          size={10.5}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}
        >
          pick your first workflow
        </Mono>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { label: 'One MCP tool', href: '/mcp' },
            { label: 'One gateway route', href: '/ai-gateway' },
            { label: 'One paid API call', href: '/agentic-commerce' },
            { label: 'One provisioning event', href: '/provisioning-records' },
          ].map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="home-arrow-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '11px 16px',
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                textDecoration: 'none',
                color: PALETTE.ink,
                background: PALETTE.paper,
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              {e.label}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </Link>
          ))}
        </div>
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
