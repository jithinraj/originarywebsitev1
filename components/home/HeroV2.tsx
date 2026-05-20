'use client'

/**
 * Hero flowchart.
 *
 * Stage at >= 1180px is a 1040 x 280 canvas:
 *   [ LEFT chips 280 | left-svg 100 | DIAMOND 280 | right-svg 100 | RIGHT chips 280 ]
 *
 * Reduced-motion: transitions removed and the diagram renders as a static
 * end-to-end explainer.
 */

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { MONO, SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { useReducedMotion } from './motion/useReducedMotion'

type Chip = { id: string; label: string; icon: ReactNode }
type Output = { id: string; label: string; meta: string }

const CHIPS: Chip[] = [
  { id: 'api',          label: 'API call',           icon: <ChipIco d="M4 8h16M4 16h16M9 4v16M15 4v16" /> },
  { id: 'mcp',          label: 'MCP tool run',       icon: <ChipIco d="M4 12h6M14 12h6"><circle cx="12" cy="12" r="2.2" /></ChipIco> },
  { id: 'agent',        label: 'Agent action',       icon: <ChipIco><circle cx="12" cy="9" r="3.2" /><path d="M5 20c1.3-3.2 4-5 7-5s5.7 1.8 7 5" /></ChipIco> },
  { id: 'gateway',      label: 'Gateway decision',   icon: <ChipIco><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M9 6v12M15 6v12" /></ChipIco> },
  { id: 'payment',      label: 'Payment event',      icon: <ChipIco d="M4 7h16v10H4z"><path d="M4 11h16" /><circle cx="8" cy="14" r="1.2" /></ChipIco> },
  { id: 'provisioning', label: 'Provisioning event', icon: <ChipIco d="M12 3v6m0 6v6M3 12h6m6 0h6"><circle cx="12" cy="12" r="2.2" /></ChipIco> },
]

const OUTPUTS: Output[] = [
  { id: 'counterparty', label: 'Counterparty verifies', meta: 'online' },
  { id: 'audit',        label: 'Audit review',          meta: 'reviewer' },
  { id: 'bundle',       label: 'Exported bundle',       meta: 'portable' },
]

/* Stage coordinate y-centers - mirrored in CSS chip top offsets. */
const LEFT_YS = [20, 68, 116, 164, 212, 260]
const RIGHT_YS = [68, 140, 212]
const DIAMOND_CY = 140
const BUNDLE_IDX = 2 // "Exported bundle" is the canonical portable path

type Phase = 'observe' | 'sign' | 'verify' | 'export' | 'rest'
const PHASE_ORDER: Phase[] = ['observe', 'sign', 'verify', 'export', 'rest']
const PHASE_MS: Record<Phase, number> = {
  observe: 1600,
  sign: 1400,
  verify: 1600,
  export: 2000,
  rest: 1400,
}

function leftPath(i: number) {
  const y = LEFT_YS[i]
  return `M 0 ${y} C 50 ${y}, 50 ${DIAMOND_CY}, 100 ${DIAMOND_CY}`
}
function rightPath(i: number) {
  const y = RIGHT_YS[i]
  return `M 0 ${DIAMOND_CY} C 50 ${DIAMOND_CY}, 50 ${y}, 100 ${y}`
}

export function HeroV2() {
  const reduced = useReducedMotion()
  const [chipIdx, setChipIdx] = useState(0)
  const [outIdx, setOutIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('observe')

  useEffect(() => {
    if (reduced) {
      // Static resting state with one input and the canonical export highlighted.
      setChipIdx(2)
      setOutIdx(BUNDLE_IDX)
      setPhase('export')
      return
    }
    let cancel = false
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let step = 0
    let cycle = 0
    const tick = () => {
      if (cancel) return
      const next = PHASE_ORDER[step % PHASE_ORDER.length]
      setPhase(next)
      if (next === 'observe') {
        setChipIdx(cycle % CHIPS.length)
        setOutIdx(cycle % OUTPUTS.length)
      }
      if (next === 'export') {
        setOutIdx(BUNDLE_IDX)
      }
      step += 1
      if (next === 'rest') cycle += 1
      timeoutId = setTimeout(tick, PHASE_MS[next])
    }
    tick()
    return () => {
      cancel = true
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [reduced])

  const chipActive = (i: number) =>
    i === chipIdx && (phase === 'observe' || phase === 'sign' || phase === 'verify' || phase === 'export')
  const outActive = (i: number) =>
    (phase === 'verify' && i === outIdx) || (phase === 'export' && i === BUNDLE_IDX)
  const diamondActive = phase === 'sign' || phase === 'verify' || phase === 'export'
  const leftLineDrawing = phase === 'observe' || phase === 'sign'
  const rightLineDrawing = phase === 'verify' || phase === 'export'

  return (
    <section
      className="home-section"
      aria-labelledby="hero-headline"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `clamp(40px, 7vh, 84px) ${PAGE_PAD} clamp(32px, 5vh, 56px) ${PAGE_PAD}`,
      }}
    >
      {/* Top copy */}
      <div style={heroTopStyle}>
        <p style={heroEyebrow}>WHEN LOGS ARE NOT ENOUGH</p>
        <h1 id="hero-headline" style={heroHeadline}>
          Verify what agents and APIs did across company boundaries
        </h1>
        <p style={heroSub}>
          Originary turns API calls, MCP tool runs, agent actions, gateway decisions, payment
          events, and provisioning events into signed records that customers, auditors, and
          partners can verify without access to your internal logs.
        </p>
        <div style={ctas}>
          <Link href="/#demo" className="home-arrow-link" style={btnPrimary}>
            Request a demo
            <Arrow />
          </Link>
          <Link href="/downloads" className="home-arrow-link" style={btnSecondary}>
            Verify a sample record
            <Arrow />
          </Link>
        </div>
      </div>

      {/* Three-zone flow */}
      <div className="home-herov2-flow">
        <p className="sr-only">
          Originary records selected facts from a local system action, signs the record, and
          lets anyone verify it outside the system that created it. Verification supports audit,
          compliance review, dispute evidence, and partner handoff.
        </p>

        <div className="home-herov2-stage">
          <div className="home-herov2-titlerow" aria-hidden>
            <span className="home-herov2-zone-title">Local workflow</span>
            <span className="home-herov2-zone-title is-center">Signed record issued</span>
            <span className="home-herov2-zone-title">Verified outside your system</span>
          </div>

          <div className="home-herov2-board">
            {/* LEFT chips */}
            <ol className="home-herov2-col home-herov2-col-left" aria-label="Systems that emit signed records">
              {CHIPS.map((c, i) => (
                <li
                  key={c.id}
                  className={`home-herov2-chip ${chipActive(i) ? 'is-active' : ''}`}
                  style={{ top: `${LEFT_YS[i] - 18}px` }}
                  aria-current={chipActive(i) ? 'step' : undefined}
                >
                  <span className="home-herov2-chip-ico">{c.icon}</span>
                  <span className="home-herov2-chip-label">{c.label}</span>
                  {chipActive(i) ? <span className="home-herov2-chip-dot" aria-hidden /> : null}
                </li>
              ))}
            </ol>

            {/* LEFT connector SVG */}
            <div className="home-herov2-svg home-herov2-svg-left" aria-hidden>
              <svg
                viewBox="0 0 100 280"
                preserveAspectRatio="none"
                focusable="false"
                width="100%"
                height="100%"
              >
                <defs>
                  <radialGradient
                    id="herov2-glow-l"
                    cx="100"
                    cy="140"
                    r="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="rgba(154,208,170,0.16)" />
                    <stop offset="100%" stopColor="rgba(154,208,170,0)" />
                  </radialGradient>
                </defs>
                <ellipse cx="100" cy="140" rx="100" ry="120" fill="url(#herov2-glow-l)" />
                {CHIPS.map((_, i) => {
                  const active = leftLineDrawing && i === chipIdx
                  return (
                    <path
                      key={`l-${i}`}
                      d={leftPath(i)}
                      className={`home-herov2-line home-herov2-line-left ${active ? 'is-drawing' : ''}`}
                      vectorEffect="non-scaling-stroke"
                    />
                  )
                })}
              </svg>
            </div>

            {/* CENTER diamond */}
            <div className="home-herov2-center">
              <div
                className={`home-herov2-diamond ${diamondActive ? 'is-active' : ''}`}
                role="figure"
                aria-label="Originary signed record: observe, bind, sign, export"
              >
                <span className="home-herov2-diamond-shape" aria-hidden />
                <span className="home-herov2-diamond-shape-inner" aria-hidden />

                <div className="home-herov2-diamond-core" aria-hidden>
                  <svg
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden
                  >
                    <circle cx="16" cy="16" r="13" />
                    <circle cx="16" cy="16" r="8" />
                    <path d="M16 5v3M16 24v3M5 16h3M24 16h3" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="2.4" fill="currentColor" stroke="none" />
                  </svg>
                  <div className="home-herov2-diamond-fields">
                    <span className="home-herov2-diamond-fields-row">
                      <span>facts</span>
                      <span>policy</span>
                      <span>result</span>
                      <span>time</span>
                      <span>issuer</span>
                    </span>
                    <span className="home-herov2-diamond-fields-row">
                      <span>signature</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT connector SVG */}
            <div className="home-herov2-svg home-herov2-svg-right" aria-hidden>
              <svg
                viewBox="0 0 100 280"
                preserveAspectRatio="none"
                focusable="false"
                width="100%"
                height="100%"
              >
                <defs>
                  <radialGradient
                    id="herov2-glow-r"
                    cx="0"
                    cy="140"
                    r="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="rgba(154,208,170,0.16)" />
                    <stop offset="100%" stopColor="rgba(154,208,170,0)" />
                  </radialGradient>
                </defs>
                <ellipse cx="0" cy="140" rx="100" ry="120" fill="url(#herov2-glow-r)" />
                {OUTPUTS.map((_, i) => {
                  const active = rightLineDrawing && (phase === 'export' ? i === BUNDLE_IDX : i === outIdx)
                  return (
                    <path
                      key={`r-${i}`}
                      d={rightPath(i)}
                      className={`home-herov2-line home-herov2-line-right ${active ? 'is-drawing' : ''}`}
                      vectorEffect="non-scaling-stroke"
                    />
                  )
                })}
              </svg>
            </div>

            {/* RIGHT chips */}
            <ol
              className="home-herov2-col home-herov2-col-right"
              aria-label="Verification methods anyone can use"
            >
              {OUTPUTS.map((o, i) => (
                <li
                  key={o.id}
                  className={`home-herov2-output ${outActive(i) ? 'is-active' : ''} ${
                    i === BUNDLE_IDX ? 'is-canonical' : ''
                  }`}
                  style={{ top: `${RIGHT_YS[i] - 18}px` }}
                  aria-current={outActive(i) ? 'step' : undefined}
                >
                  <strong>{o.label}</strong>
                  <small>{o.meta}</small>
                  {outActive(i) ? (
                    <svg
                      className="home-herov2-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span className="home-herov2-check-placeholder" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <p
            className={`home-herov2-tagline ${phase === 'export' || phase === 'rest' ? 'is-revealed' : ''}`}
          >
            Logs stay local. Signed records travel.
          </p>
        </div>

        {/* Mobile stack fallback */}
        <div className="home-herov2-mobile" aria-hidden>
          <div className="home-herov2-mstep">
            <span className="home-herov2-mstep-num">1</span>
            <div>
              <p className="home-herov2-mstep-title">Local workflow</p>
              <p className="home-herov2-mstep-sub">API, MCP, agents, gateways, commerce, provisioning</p>
            </div>
          </div>
          <ol className="home-herov2-mobile-chips">
            {CHIPS.map((c, i) => (
              <li
                key={c.id}
                className={`home-herov2-chip ${chipActive(i) ? 'is-active' : ''}`}
              >
                <span className="home-herov2-chip-ico">{c.icon}</span>
                <span className="home-herov2-chip-label">{c.label}</span>
              </li>
            ))}
          </ol>

          <div className="home-herov2-mstep">
            <span className="home-herov2-mstep-num">2</span>
            <div>
              <p className="home-herov2-mstep-title">Signed record issued</p>
              <p className="home-herov2-mstep-sub">compact &middot; signed &middot; portable</p>
            </div>
          </div>
          <div className="home-herov2-mobile-diamond">
            <div className={`home-herov2-diamond ${diamondActive ? 'is-active' : ''}`}>
              <span className="home-herov2-diamond-shape" aria-hidden />
              <span className="home-herov2-diamond-shape-inner" aria-hidden />
              <div className="home-herov2-diamond-core" aria-hidden>
                <svg
                  viewBox="0 0 32 32"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden
                >
                  <circle cx="16" cy="16" r="13" />
                  <circle cx="16" cy="16" r="8" />
                  <path d="M16 5v3M16 24v3M5 16h3M24 16h3" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="2.4" fill="currentColor" stroke="none" />
                </svg>
                <div className="home-herov2-diamond-fields">
                  <span className="home-herov2-diamond-fields-row">
                    <span>facts</span>
                    <span>policy</span>
                    <span>result</span>
                    <span>time</span>
                    <span>issuer</span>
                  </span>
                  <span className="home-herov2-diamond-fields-row">
                    <span>signature</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="home-herov2-mstep">
            <span className="home-herov2-mstep-num">3</span>
            <div>
              <p className="home-herov2-mstep-title">Verified outside your system</p>
              <p className="home-herov2-mstep-sub">counterparty &middot; audit &middot; bundle &middot; offline</p>
            </div>
          </div>
          <ol className="home-herov2-mobile-chips">
            {OUTPUTS.map((o, i) => (
              <li
                key={o.id}
                className={`home-herov2-output ${i === BUNDLE_IDX ? 'is-canonical is-active' : ''}`}
              >
                <strong>{o.label}</strong>
                <small>{o.meta}</small>
              </li>
            ))}
          </ol>

          <p
            className={`home-herov2-tagline ${phase === 'export' || phase === 'rest' ? 'is-revealed' : ''}`}
          >
            Logs stay local. Signed records travel.
          </p>
        </div>
      </div>
    </section>
  )
}

function ChipIco({ d, children }: { d?: string; children?: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      {d ? <path d={d} /> : null}
      {children}
    </svg>
  )
}

function Arrow({ down }: { down?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
      style={down ? { transform: 'rotate(90deg)' } : undefined}
    >
      <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

const heroTopStyle = {
  maxWidth: 1000,
  margin: '0 auto',
  textAlign: 'center' as const,
}
const heroEyebrow = {
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: '0.16em',
  color: '#5a5346',
  margin: 0,
}
const heroHeadline = {
  fontFamily: SANS,
  fontSize: 'clamp(36px, 4.6vw, 58px)',
  lineHeight: 1.06,
  fontWeight: 500,
  letterSpacing: '-0.028em',
  margin: '22px 0 0 0',
  color: PALETTE.ink,
  textWrap: 'balance' as const,
}
const heroSub = {
  fontFamily: SANS,
  fontSize: 18,
  lineHeight: 1.55,
  color: '#3a352b',
  margin: '20px auto 0',
  maxWidth: 660,
}
const ctas = {
  marginTop: 28,
  display: 'flex',
  gap: 10,
  flexWrap: 'wrap' as const,
  justifyContent: 'center',
}
const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '11px 18px',
  minHeight: 42,
  fontFamily: SANS,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.005em',
  textDecoration: 'none' as const,
  borderRadius: 999,
}
const btnPrimary = {
  ...btnBase,
  color: PALETTE.paper,
  background: PALETTE.ink,
  border: `1px solid ${PALETTE.ink}`,
}
const btnSecondary = {
  ...btnBase,
  color: PALETTE.ink,
  background: 'transparent',
  border: `1px solid ${PALETTE.rule}`,
}
