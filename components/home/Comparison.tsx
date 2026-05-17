'use client'

import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import { RecordCard } from './atoms/RecordCard'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { useReducedMotion } from './motion/useReducedMotion'
import { ease, tween } from './motion/easing'

const items: Array<{ label: string; verb: string }> = [
  { label: 'Gateways', verb: 'route' },
  { label: 'Observability', verb: 'trace' },
  { label: 'Payment rails', verb: 'settle' },
  { label: 'Policy engines', verb: 'decide' },
  { label: 'Agent runtimes', verb: 'execute' },
]

export function Comparison() {
  return (
    <section
      id="positioning"
      className="home-section"
      data-screen-label="05 comparison"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="We do not replace the stack. We verify what leaves it."
        body="Gateways route. Observability traces. Payment rails settle. Policy engines decide. Runtimes execute. Originary records selected facts from those systems in a format another party can verify."
      />
      <div style={{ marginTop: 48 }}>
        <ComparisonAnim />
      </div>
    </section>
  )
}

function ComparisonAnim() {
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.25 })
  const t = useEnterClock(entered, 8)
  const reduced = useReducedMotion()
  const time = reduced ? 5.0 : t

  return (
    <div
      ref={ref}
      className="home-compare-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 0,
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
        minHeight: 380,
      }}
    >
      <div
        style={{
          padding: '28px 28px',
          borderRight: `1px solid ${PALETTE.hairline}`,
        }}
      >
        <Mono
          size={10}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
        >
          your stack
        </Mono>
        <div
          style={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {items.map((it, i) => {
            const appear = tween(time, 0.1 + i * 0.1, 0.7 + i * 0.1, ease.out)
            return (
              <div
                key={it.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  border: `1px solid ${PALETTE.hairline}`,
                  opacity: appear,
                  transform: `translateX(${(1 - appear) * -6}px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    color: PALETTE.ink,
                  }}
                >
                  {it.label}
                </span>
                <Mono
                  size={10}
                  color={PALETTE.faint}
                  style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {it.verb}
                </Mono>
              </div>
            )
          })}
        </div>
      </div>

      <ComparisonMiddle time={time} />
      <ComparisonRight time={time} />
    </div>
  )
}

function ComparisonMiddle({ time }: { time: number }) {
  // Single gentle pulse every 4 seconds.
  const phase = (time % 4) / 4
  const ringT = phase < 0.5 ? phase / 0.5 : 0

  return (
    <div
      style={{
        position: 'relative',
        padding: '28px 28px',
        borderRight: `1px solid ${PALETTE.hairline}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Mono
        size={11}
        color={PALETTE.faint}
        style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        boundary event
      </Mono>

      <div style={{ position: 'relative', marginTop: 32, width: 156, height: 156 }}>
        {/* Expanding pulse ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: `1px solid ${PALETTE.rule}`,
            transform: `scale(${0.96 + ringT * 0.12})`,
            opacity: ringT > 0 ? 1 - ringT * 0.85 : 0,
            transition: 'opacity 200ms',
            pointerEvents: 'none',
          }}
        />
        {/* Selected-fact card */}
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: `1px solid ${PALETTE.ink}`,
            background: PALETTE.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 22px -18px rgba(20, 17, 10, 0.35)',
          }}
        >
          <Mono
            size={10}
            color={PALETTE.ink}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}
          >
            selected fact
          </Mono>
        </div>
      </div>

      <Mono
        size={11}
        color={PALETTE.muted}
        style={{ marginTop: 32, maxWidth: 220, textAlign: 'center', lineHeight: 1.55 }}
      >
        Only what must be proven later becomes a signed record.
      </Mono>
    </div>
  )
}

function ComparisonRight({ time }: { time: number }) {
  const out = tween(time, 1.6, 2.4, ease.out)
  return (
    <div style={{ padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
      <Mono
        size={10}
        color={PALETTE.faint}
        style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        originary record
      </Mono>
      <div
        style={{
          marginTop: 18,
          opacity: out,
          transform: `translateX(${(1 - out) * 8}px)`,
        }}
      >
        <RecordCard
          width={'100%'}
          id="b2c1a4e8"
          reveal={tween(time, 2.0, 3.4, ease.out)}
          signed={time > 3.2}
          fields={[
            { k: 'issuer', v: 'api.vendor.com' },
            { k: 'action', v: 'POST /v1/search' },
            { k: 'policy', v: 'terms:v3 · 4e21b8' },
            { k: 'result', v: '200 · 9a3c1d' },
            { k: 'time', v: '2026-05-12T14:08:11Z' },
            { k: 'signature', v: '3045 · b2c1a4e8...' },
          ]}
        />
      </div>
      <Mono size={10} color={PALETTE.muted} style={{ marginTop: 18, lineHeight: 1.5 }}>
        Travels outward · independently verifiable
      </Mono>
    </div>
  )
}
