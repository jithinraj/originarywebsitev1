'use client'

import { useEffect, useState } from 'react'
import { MONO, SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono } from './atoms/Mono'
import { CheckIcon } from './atoms/CheckIcon'
import { useInView } from './motion/useInView'
import { useLoopClock } from './motion/useLoopClock'
import { useReducedMotion } from './motion/useReducedMotion'
import { clamp01, ease, lerp, tween } from './motion/easing'

// Animation canvas. Width 640 so all labels stay >= 11px without scaling.
const CANVAS_W = 640
const CANVAS_H = 432
const CARD_W = 176
const CARD_H = 102
const RECORD_W = 360
const CARDS_Y = 64
const RECORD_Y = 224
const PERIOD = 10.0 // 10-second loop with 2s verified hold

export function Hero() {
  return (
    <section
      className="home-section"
      data-screen-label="01 hero"
      style={{
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `clamp(48px, 8vh, 96px) ${PAGE_PAD} clamp(64px, 10vh, 112px) ${PAGE_PAD}`,
      }}
    >
      <div
        className="home-hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <Mono
            size={11}
            color={PALETTE.muted}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            when logs are not enough
          </Mono>
          <h1
            style={{
              fontFamily: SANS,
              fontSize: 'clamp(40px, 5.4vw, 64px)',
              lineHeight: 1.04,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: '20px 0 0 0',
              color: PALETTE.ink,
              textWrap: 'balance',
            }}
          >
            Verify machine actions across company boundaries.
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 19,
              lineHeight: 1.45,
              fontWeight: 500,
              color: PALETTE.ink,
              margin: '20px 0 0 0',
              maxWidth: 560,
              textWrap: 'pretty',
              letterSpacing: '-0.005em',
            }}
          >
            Signed records for API, MCP, agent, gateway, payment, and
            provisioning workflows.
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 17,
              lineHeight: 1.55,
              color: PALETTE.muted,
              margin: '16px 0 0 0',
              maxWidth: 560,
              textWrap: 'pretty',
            }}
          >
            Originary helps teams create signed records so customers, partners,
            auditors, and internal reviewers can verify what happened without
            internal logs or dashboard access.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <HeroLink href="/#demo" primary>
              Request a demo
            </HeroLink>
            <HeroLink href="/downloads">Verify sample record</HeroLink>
          </div>
          <div style={{ marginTop: 36, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              'logs stay local',
              'records travel',
              'verified independently',
            ].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, background: PALETTE.ink }} />
                <Mono
                  size={11}
                  color={PALETTE.muted}
                  style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  {t}
                </Mono>
              </div>
            ))}
          </div>
        </div>

        <div
          className="home-hero-anim"
          style={{
            minWidth: 0,
            width: '100%',
          }}
        >
          <div className="home-hero-anim-desktop">
            <HeroAnim />
          </div>
          <div className="home-hero-anim-mobile">
            <StaticHero />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroLink({
  children,
  href,
  primary,
}: {
  children: React.ReactNode
  href: string
  primary?: boolean
}) {
  return (
    <a
      href={href}
      className="home-arrow-link"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 18px',
        minHeight: 44,
        fontFamily: SANS,
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: '-0.005em',
        textDecoration: 'none',
        color: primary ? PALETTE.paper : PALETTE.ink,
        background: primary ? PALETTE.ink : 'transparent',
        border: `1px solid ${primary ? PALETTE.ink : PALETTE.rule}`,
      }}
    >
      {children}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 5h8M5.5 1.5L9 5l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
    </a>
  )
}

function HeroAnim() {
  const reduced = useReducedMotion()
  // useInView with once:false so the animation pauses when offscreen.
  // The ref is attached to the responsive wrapper; it also feeds the
  // ResizeObserver that scales the fixed-pixel canvas to fit its column.
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.1, once: false })
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const measure = () => {
      const w = el.clientWidth
      if (w > 0) setScale(Math.min(1, w / CANVAS_W))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])

  // Animation pauses when reduced motion is on OR when the hero is offscreen.
  const t = useLoopClock(PERIOD, reduced || !entered)
  // Reduced motion: settle at the verified hold frame.
  const time = reduced ? 7.5 : t

  // Timeline (seconds; total 10s)
  //   0.0 -- 1.0  request dot travels issuer -> originary
  //   1.0 -- 1.6  originary card highlights, record shell appears
  //   1.6 -- 3.0  record fields reveal
  //   3.0 -- 4.0  record becomes "signed" (border + shadow + status)
  //   4.0 -- 5.0  right arrow lights (record crosses boundary)
  //   5.0 -- 7.0  verification checklist items tick in
  //   7.0 -- 9.0  HOLD on verified state (>=2 seconds)
  //   9.0 -- 10.0 gentle fade for seamless loop
  const requestT = tween(time, 0.0, 1.0, ease.inOut)
  const signT = tween(time, 1.0, 1.6, ease.out)
  const revealT = tween(time, 1.6, 3.0, ease.inOut)
  const signedT = tween(time, 3.0, 4.0, ease.out)
  const crossT = tween(time, 4.0, 5.0, ease.inOut)
  const verifyT = tween(time, 5.0, 7.0, ease.out)
  const holdFade = 1 - tween(time, 9.2, 10.0, ease.inOut)

  // Card columns
  const issuerX = 24
  const verifierX = CANVAS_W - CARD_W - 24
  const centerX = (CANVAS_W - CARD_W) / 2

  // Action dot path: from right edge of issuer card to left edge of originary card.
  const dotX = lerp(issuerX + CARD_W, centerX, requestT)

  // Record is centered horizontally.
  const recordX = (CANVAS_W - RECORD_W) / 2

  // Highlight schedule for cards
  const issuerActive = time < 1.5
  const originaryActive = time >= 1.0 && time < 4.5
  const verifierActive = time >= 5.0
  const verified = time >= 5.0

  return (
    <div
      ref={ref}
      className="home-hero-canvas-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: CANVAS_W,
        marginLeft: 'auto',
        height: CANVAS_H * scale,
        overflow: 'hidden',
        opacity: holdFade,
        transition: 'opacity 120ms linear',
      }}
    >
    <div
      className="home-hero-canvas"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: CANVAS_W,
        height: CANVAS_H,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.hairline}`,
        overflow: 'hidden',
      }}
    >
      {/* Very faint baseline grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${PALETTE.hairline} 1px, transparent 1px)`,
          backgroundSize: '100% 56px',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />

      {/* Three cards across the top */}
      <FlowCard
        x={issuerX}
        y={CARDS_Y}
        title="API / Agent"
        sub="POST /v1/search"
        active={issuerActive}
      />
      <FlowCard
        x={centerX}
        y={CARDS_Y}
        title="Originary"
        sub="signed record issued"
        active={originaryActive}
        pulse={signT > 0 && signT < 1}
      />
      <FlowCard
        x={verifierX}
        y={CARDS_Y}
        title="Verifier"
        sub={verified ? 'verified independently' : 'awaiting record'}
        active={verifierActive}
        verified={verifyT > 0}
        verifyProgress={verifyT}
      />

      {/* Arrow row underneath the cards */}
      <ArrowRow
        leftArrowProgress={requestT}
        leftLabel="action"
        rightArrowProgress={crossT}
        rightLabel="record crosses boundary"
        issuerX={issuerX}
        centerX={centerX}
        verifierX={verifierX}
      />

      {/* Active request dot */}
      {time < 1.2 ? (
        <div
          style={{
            position: 'absolute',
            left: dotX - 4,
            top: CARDS_Y + CARD_H + 22 - 4,
            width: 8,
            height: 8,
            background: PALETTE.accent,
            opacity: requestT > 0.05 && requestT < 1 ? 1 : 0,
            transition: 'opacity 120ms',
            boxShadow: '0 0 0 4px rgba(74, 98, 124, 0.16)',
          }}
        />
      ) : null}

      {/* The single signed-record card, centered below the flow */}
      {signT > 0 ? (
        <div
          style={{
            position: 'absolute',
            left: recordX,
            top: RECORD_Y,
            width: RECORD_W,
            opacity: signT,
          }}
        >
          <RecordPanel reveal={revealT} signed={signedT > 0.4} />
        </div>
      ) : null}

    </div>
    </div>
  )
}

function FlowCard({
  x,
  y,
  title,
  sub,
  active,
  pulse,
  verified,
  verifyProgress = 0,
}: {
  x: number
  y: number
  title: string
  sub: string
  active?: boolean
  pulse?: boolean
  verified?: boolean
  verifyProgress?: number
}) {
  const borderColor = verified
    ? PALETTE.success
    : active
      ? PALETTE.ink
      : PALETTE.hairline
  const dotBg = verified
    ? PALETTE.success
    : active
      ? PALETTE.accent
      : PALETTE.hairline
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: CARD_W,
        height: CARD_H,
        background: PALETTE.paper,
        border: `1px solid ${borderColor}`,
        boxShadow: active ? '0 12px 28px -20px rgba(20, 17, 10, 0.35)' : 'none',
        transition: 'border-color 280ms ease, box-shadow 280ms ease',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 15,
              fontWeight: 500,
              color: PALETTE.ink,
              letterSpacing: '-0.005em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 12,
              color: verified ? PALETTE.success : PALETTE.muted,
              marginTop: 6,
              lineHeight: 1.4,
            }}
          >
            {sub}
          </div>
        </div>
        {verified ? (
          <div style={{ marginLeft: 8 }}>
            <CheckIcon size={18} color={PALETTE.success} progress={verifyProgress} />
          </div>
        ) : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          className={active && !verified ? 'home-active-dot' : undefined}
          style={{
            width: 8,
            height: 8,
            background: dotBg,
            transform: pulse ? 'scale(1.4)' : 'scale(1)',
            transition: 'transform 260ms ease, background 200ms',
          }}
        />
        <span
          style={{
            fontFamily: MONO,
            fontSize: 12,
            color: verified ? PALETTE.success : PALETTE.muted,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {verified ? 'verified' : active ? 'active' : 'idle'}
        </span>
      </div>
    </div>
  )
}

function ArrowRow({
  leftArrowProgress,
  leftLabel,
  rightArrowProgress,
  rightLabel,
  issuerX,
  centerX,
  verifierX,
}: {
  leftArrowProgress: number
  leftLabel: string
  rightArrowProgress: number
  rightLabel: string
  issuerX: number
  centerX: number
  verifierX: number
}) {
  const y = CARDS_Y + CARD_H + 18
  const leftStart = issuerX + CARD_W + 12
  const leftEnd = centerX - 12
  const rightStart = centerX + CARD_W + 12
  const rightEnd = verifierX - 12
  return (
    <svg
      width={CANVAS_W}
      height={64}
      style={{ position: 'absolute', left: 0, top: y, pointerEvents: 'none' }}
    >
      {/* Left arrow */}
      <line
        x1={leftStart}
        y1={4}
        x2={leftStart + (leftEnd - leftStart) * Math.max(0.05, leftArrowProgress)}
        y2={4}
        stroke={leftArrowProgress > 0.05 ? PALETTE.accent : PALETTE.rule}
        strokeWidth="1.5"
      />
      <path
        d={`M${leftEnd - 6} 0 L${leftEnd} 4 L${leftEnd - 6} 8`}
        fill="none"
        stroke={leftArrowProgress > 0.9 ? PALETTE.accent : PALETTE.rule}
        strokeWidth="1.5"
        opacity={leftArrowProgress > 0.5 ? 1 : 0.4}
      />
      <text
        x={(leftStart + leftEnd) / 2}
        y={26}
        fontFamily="var(--font-plex-mono), 'IBM Plex Mono', monospace"
        fontSize="12"
        fill={PALETTE.muted}
        textAnchor="middle"
        letterSpacing="2"
      >
        {leftLabel}
      </text>

      {/* Right arrow */}
      <line
        x1={rightStart}
        y1={4}
        x2={rightStart + (rightEnd - rightStart) * Math.max(0.05, rightArrowProgress)}
        y2={4}
        stroke={rightArrowProgress > 0.05 ? PALETTE.accent : PALETTE.rule}
        strokeWidth="1.5"
      />
      <path
        d={`M${rightEnd - 6} 0 L${rightEnd} 4 L${rightEnd - 6} 8`}
        fill="none"
        stroke={rightArrowProgress > 0.9 ? PALETTE.accent : PALETTE.rule}
        strokeWidth="1.5"
        opacity={rightArrowProgress > 0.5 ? 1 : 0.4}
      />
      <text
        x={(rightStart + rightEnd) / 2}
        y={26}
        fontFamily="var(--font-plex-mono), 'IBM Plex Mono', monospace"
        fontSize="12"
        fill={PALETTE.muted}
        textAnchor="middle"
        letterSpacing="2"
      >
        {rightLabel}
      </text>
    </svg>
  )
}

function RecordPanel({ reveal = 1, signed = false }: { reveal?: number; signed?: boolean }) {
  const rows: Array<[string, string]> = [
    ['action', 'POST /v1/search'],
    ['policy', 'terms:v3'],
    ['result', '200 OK'],
    ['signature', signed ? 'verified' : 'pending'],
  ]
  const n = rows.length
  return (
    <div
      style={{
        background: PALETTE.paper,
        border: `1px solid ${signed ? PALETTE.ink : PALETTE.rule}`,
        boxShadow: signed
          ? '0 22px 44px -28px rgba(20, 17, 10, 0.35)'
          : '0 1px 0 rgba(20,17,10,0.04)',
        transition: 'border-color 280ms ease, box-shadow 280ms ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 18px',
          borderBottom: `1px solid ${PALETTE.hairline}`,
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontSize: 13,
            color: PALETTE.ink,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Signed record
        </span>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 12,
            color: signed ? PALETTE.accent : PALETTE.muted,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {signed ? 'signed' : 'draft'}
        </span>
      </div>
      <div style={{ padding: '8px 0' }}>
        {rows.map(([k, v], i) => {
          const slice = 1 / n
          const local = clamp01((reveal - i * slice) / slice)
          const op = ease.out(local)
          return (
            <div
              key={k}
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr',
                alignItems: 'baseline',
                padding: '8px 18px',
                opacity: op,
                transform: `translateY(${(1 - op) * 3}px)`,
                transition: 'opacity 200ms linear',
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 13,
                  color: PALETTE.muted,
                  letterSpacing: '0.04em',
                }}
              >
                {k}
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 14,
                  color: PALETTE.ink,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {v}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * StaticHero: readable 3-step vertical fallback shown below 768px in place of
 * the animated canvas. No motion, no canvas overflow, native-readable text.
 */
function StaticHero() {
  const steps: Array<{ index: string; title: string; sub: string }> = [
    {
      index: '01',
      title: 'Action happens',
      sub: 'An API call, MCP tool run, gateway decision, or payment event.',
    },
    {
      index: '02',
      title: 'Signed record issued',
      sub: 'Originary binds action, policy, result, and signature into one record.',
    },
    {
      index: '03',
      title: 'Verified independently',
      sub: 'Another party verifies the record offline or through Hosted Verify.',
    },
  ]
  return (
    <div
      style={{
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.hairline}`,
        padding: 4,
      }}
    >
      {steps.map((step, i) => (
        <div
          key={step.index}
          style={{
            padding: '20px 22px',
            borderBottom:
              i < steps.length - 1 ? `1px solid ${PALETTE.hairline}` : 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: PALETTE.faint,
                letterSpacing: '0.18em',
                fontWeight: 500,
              }}
            >
              {step.index}
            </span>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 17,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: PALETTE.muted,
                  marginTop: 4,
                  textWrap: 'pretty',
                }}
              >
                {step.sub}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
