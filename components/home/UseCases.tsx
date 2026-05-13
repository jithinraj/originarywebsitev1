'use client'

import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { ease, lerp, tween } from './motion/easing'

type Tile = { title: string; q: string }

const tiles: Tile[] = [
  {
    title: 'Paid API usage review',
    q: 'Was this call in scope and billable?',
  },
  {
    title: 'MCP tool calls',
    q: 'What tool was called, under what policy, and what result returned?',
  },
  {
    title: 'Gateway decisions',
    q: 'What decision did the gateway make before the request crossed the boundary?',
  },
  {
    title: 'Runtime lifecycle',
    q: 'Was this action approved, denied, evaluated, or handed off?',
  },
  {
    title: 'Provisioning records',
    q: 'What account, resource, credential, budget, subscription, domain, or deployment event occurred?',
  },
  {
    title: 'Machine-payment flows',
    q: 'What happened around the payment, mandate, authorization, settlement, or refund?',
  },
]

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="home-section"
      data-screen-label="04 use cases"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="One record primitive. Many proof workflows."
        body="API calls, MCP tools, gateway decisions, runtime lifecycle events, provisioning flows, and machine-payment actions can all produce portable records."
      />
      <div style={{ marginTop: 48 }}>
        <Grid />
      </div>
    </section>
  )
}

function Grid() {
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.15 })
  return (
    <div ref={ref}>
      <div
        className="home-cases-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.paper,
        }}
      >
        {tiles.map((tile, i) => (
          <UseCaseTile
            key={tile.title}
            tile={tile}
            index={i}
            entered={entered}
            borderRight={(i + 1) % 3 !== 0}
            borderBottom={i < 3}
          />
        ))}
      </div>
      <VerificationRail entered={entered} count={6} />
      <p
        style={{
          marginTop: 28,
          textAlign: 'center',
          fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: PALETTE.muted,
        }}
      >
        different workflows · same portable proof pattern
      </p>
    </div>
  )
}

function UseCaseTile({
  tile,
  index,
  entered,
  borderRight,
  borderBottom,
}: {
  tile: Tile
  index: number
  entered: boolean
  borderRight: boolean
  borderBottom: boolean
}) {
  const t = useEnterClock(entered, 6)
  const delay = 0.1 + index * 0.12
  const appear = tween(t, delay, delay + 0.6, ease.out)
  const emitT = tween(t, delay + 0.5, delay + 1.2, ease.inOutQuart)
  return (
    <div
      className="home-tile"
      style={{
        padding: '24px 24px 28px 24px',
        borderRight: borderRight ? `1px solid ${PALETTE.hairline}` : 'none',
        borderBottom: borderBottom ? `1px solid ${PALETTE.hairline}` : 'none',
        minHeight: 180,
        position: 'relative',
        opacity: appear,
        transform: `translateY(${(1 - appear) * 8}px)`,
      }}
    >
      <h4
        style={{
          fontFamily: SANS,
          fontSize: 16,
          fontWeight: 500,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        {tile.title}
      </h4>
      <div style={{ marginTop: 14 }}>
        <Mono
          size={10}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          proof question
        </Mono>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 14,
            lineHeight: 1.5,
            color: PALETTE.muted,
            marginTop: 6,
            marginBottom: 0,
            textWrap: 'pretty',
          }}
        >
          {tile.q}
        </p>
      </div>
      {emitT > 0 && emitT < 1 ? (
        <div
          style={{
            position: 'absolute',
            right: 18,
            top: lerp(20, 200, emitT),
            width: 18,
            height: 12,
            background: PALETTE.ink,
            opacity: 1 - emitT * 0.4,
          }}
        />
      ) : null}
    </div>
  )
}

function VerificationRail({ entered, count }: { entered: boolean; count: number }) {
  const t = useEnterClock(entered, 6)
  return (
    <div
      style={{
        marginTop: 0,
        borderLeft: `1px solid ${PALETTE.hairline}`,
        borderRight: `1px solid ${PALETTE.hairline}`,
        borderBottom: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Mono
        size={11}
        color={PALETTE.muted}
        style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
      >
        shared verification rail
      </Mono>
      <div style={{ display: 'flex', gap: 8 }}>
        {Array.from({ length: count }).map((_, i) => {
          const delay = 0.1 + i * 0.12 + 1.2
          const appear = tween(t, delay, delay + 0.4, ease.out)
          return (
            <div
              key={i}
              style={{
                width: 22,
                height: 14,
                background: PALETTE.ink,
                opacity: appear,
                transform: `translateY(${(1 - appear) * 6}px)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
