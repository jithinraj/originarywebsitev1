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

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { MONO, SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { useReducedMotion } from './motion/useReducedMotion'
import { BitField } from './motion/BitField'
import { MotionToggle } from './motion/MotionToggle'
import { FACTS } from '@/lib/facts'

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
  { id: 'team',          label: 'Your team verifies',              meta: 'debugging · incident review' },
  { id: 'counterparty',  label: 'Customer or partner verifies',    meta: 'shared records · disputes' },
  { id: 'audit',         label: 'Security or audit reviews',       meta: 'audit · compliance review' },
]

/* Stage coordinate y-centers - mirrored in CSS chip top offsets. */
const LEFT_YS = [20, 68, 116, 164, 212, 260]
const RIGHT_YS = [56, 140, 224]
const DIAMOND_CY = 140

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
  return `M 0 ${y} C 50 ${y}, 50 ${DIAMOND_CY}, 106 ${DIAMOND_CY}`
}
function rightPath(i: number) {
  const y = RIGHT_YS[i]
  return `M 0 ${DIAMOND_CY} C 50 ${DIAMOND_CY}, 50 ${y}, 106 ${y}`
}

export function HeroV2() {
  const reduced = useReducedMotion()
  const stageRef = useRef<HTMLDivElement | null>(null)

  // Fit the flow diagram into the first screen: scale it to the height left
  // below the copy (never under 70%, so node text stays readable; on very short
  // windows the bottom of the diagram scrolls instead).
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const fit = () => {
      stage.style.transform = ''
      stage.style.marginBottom = ''
      if (stage.offsetParent === null) return // hidden below 1180 px
      const top = stage.getBoundingClientRect().top + window.scrollY
      const natural = stage.offsetHeight
      const room = window.innerHeight - top - 20
      const s = Math.max(0.7, Math.min(1, room / natural))
      if (s < 1) {
        stage.style.transform = `scale(${s})`
        stage.style.marginBottom = `${-(1 - s) * natural}px`
      }
    }
    fit()
    window.addEventListener('resize', fit)
    document.fonts?.ready.then(fit)
    return () => window.removeEventListener('resize', fit)
  }, [])
  const [chipIdx, setChipIdx] = useState(0)
  const [outIdx, setOutIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('observe')

  useEffect(() => {
    if (reduced) {
      // Static resting state with one input and the canonical export highlighted.
      setChipIdx(2)
      setOutIdx(2)
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
  const outActive = (i: number) => (phase === 'verify' || phase === 'export') && i === outIdx
  const diamondActive = phase === 'sign' || phase === 'verify' || phase === 'export'
  const leftLineDrawing = phase === 'observe' || phase === 'sign'
  const rightLineDrawing = phase === 'verify' || phase === 'export'

  return (
    <section
      className="home-section cin-stage"
      aria-labelledby="hero-headline"
      style={{
        padding: `clamp(28px, 5vh, 72px) ${PAGE_PAD} clamp(32px, 5vh, 56px) ${PAGE_PAD}`,
      }}
    >
      {/* The field stays clear of everything marked data-field-clear; the copy renders at once. */}
      <BitField className="cin-stream" />
      <MotionToggle className="mt-corner" />
      <div style={{ maxWidth: MAX_W, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* Top copy */}
      <div style={heroTopStyle}>
        <Link href="/peac" className="hero-pill" data-field-clear>
          <span className="hero-pill-tag">PEAC {FACTS.currentVersion}</span>
          <span>
            Open protocol<span className="hero-pill-wide"> for verifiable records</span>
          </span>
          <Arrow />
        </Link>
        <h1 id="hero-headline" className="cin-display" style={heroHeadline}>
          <span className="hero-line" data-field-clear>Agent actions,</span>{' '}
          <span className="hero-line" data-field-clear>on the record.</span>
        </h1>
        <p className="hero-sub" style={heroSub} data-field-clear>
          Give every important agent, API and tool action a signed record. Verify it later, and share it
          with customers or auditors without exposing your logs.
        </p>
        <div className="hero-ctas" style={ctas}>
          <Link href="#see-a-record" className="home-arrow-link" style={btnPrimary} data-field-clear>
            See a record
            <Arrow down />
          </Link>
          <Link href="#start-here" className="home-arrow-link" style={btnSecondary} data-field-clear>
            Start building
            <Arrow down />
          </Link>
        </div>
        <p className="hero-proof">
          <span data-field-clear>Open source</span>
          <span data-field-clear>Offline verification</span>
          <span data-field-clear>Self-hostable</span>
          <span className="hero-proof-wide" data-field-clear>No Originary account needed to verify</span>
        </p>
      </div>

      {/* Three-zone flow */}
      <div className="home-herov2-flow">
        <p className="sr-only">
          Originary records selected facts from a local system action, signs the record, and
          lets anyone verify it outside the system that created it. Verification supports audit,
          compliance review, dispute evidence, and partner handoff.
        </p>

        <div className="home-herov2-stage" ref={stageRef} data-field-clear>
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
                {CHIPS.map((_, i) => {
                  const active = leftLineDrawing && i === chipIdx
                  return (
                    <g key={`l-${i}`}>
                      <path
                        d={leftPath(i)}
                        className={`home-herov2-line home-herov2-line-left ${active ? 'is-drawing' : ''}`}
                        vectorEffect="non-scaling-stroke"
                        pathLength={100}
                      />
                      {active && !reduced ? (
                        <circle r="2.4" fill="var(--ink)" opacity="0.9">
                          <animateMotion dur="0.9s" repeatCount="1" fill="freeze" path={leftPath(i)} />
                        </circle>
                      ) : null}
                    </g>
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
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden
                  >
                    <circle cx="16" cy="16" r="13" />
                    <circle cx="16" cy="16" r="8" />
                    <path d="M16 5v3M16 24v3M5 16h3M24 16h3" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="2.4" fill="currentColor" stroke="none" />
                  </svg>
                  <div className="home-herov2-diamond-fields">
                    <span className="home-herov2-diamond-fields-row home-herov2-diamond-fields-primary">
                      <span>facts &middot; policy</span>
                      <span>result &middot; time</span>
                    </span>
                    <span className="home-herov2-diamond-fields-row home-herov2-diamond-fields-trust">
                      <span>issuer &middot; signature</span>
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
                {OUTPUTS.map((_, i) => {
                  const active = rightLineDrawing && i === outIdx
                  return (
                    <g key={`r-${i}`}>
                      <path
                        d={rightPath(i)}
                        className={`home-herov2-line home-herov2-line-right ${active ? 'is-drawing' : ''}`}
                        vectorEffect="non-scaling-stroke"
                        pathLength={100}
                      />
                      {active && !reduced ? (
                        <circle r="2.4" fill="var(--ink)" opacity="0.9">
                          <animateMotion dur="0.9s" repeatCount="1" fill="freeze" path={rightPath(i)} />
                        </circle>
                      ) : null}
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* RIGHT chips */}
            <ol
              className="home-herov2-col home-herov2-col-right"
              aria-label="Who verifies the record"
            >
              {OUTPUTS.map((o, i) => (
                <li
                  key={o.id}
                  className={`home-herov2-output ${outActive(i) ? 'is-active' : ''}`}
                  style={{ top: `${RIGHT_YS[i] - 23}px` }}
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
        </div>

        {/* Mobile and tablet: the same story, vertical and live. */}
        <div className="hm-flow" aria-hidden data-field-clear>
          <p className="hm-zone">Local workflow</p>
          <div className={`hm-node ${chipActive(chipIdx) ? 'is-active' : ''}`}>
            <span className="home-herov2-chip-ico">{CHIPS[chipIdx].icon}</span>
            <span key={CHIPS[chipIdx].id} className="hm-swap">
              {CHIPS[chipIdx].label}
            </span>
          </div>
          <span className={`hm-wire ${phase !== 'observe' ? 'is-on' : ''}`} />
          <div className={`hm-seal ${diamondActive ? 'is-active' : ''}`}>
            <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
              <circle cx="16" cy="16" r="13" />
              <circle cx="16" cy="16" r="8" />
              <path d="M16 5v3M16 24v3M5 16h3M24 16h3" strokeLinecap="round" />
              <circle cx="16" cy="16" r="2.4" fill="currentColor" stroke="none" />
            </svg>
            <span className="hm-seal-title">Signed record issued</span>
            <span className="hm-seal-fields">facts &middot; policy &middot; result &middot; time &middot; issuer &middot; signature</span>
          </div>
          <span className={`hm-wire ${phase === 'verify' || phase === 'export' ? 'is-on' : ''}`} />
          <div className={`hm-out ${outActive(outIdx) ? 'is-active' : ''}`}>
            <span>
              <strong key={OUTPUTS[outIdx].id} className="hm-swap">
                {OUTPUTS[outIdx].label}
              </strong>
              <small>{OUTPUTS[outIdx].meta}</small>
            </span>
            {outActive(outIdx) ? (
              <svg className="home-herov2-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <span className="home-herov2-check-placeholder" aria-hidden />
            )}
          </div>
          <p className="hm-zone hm-zone-end">Verified outside your system</p>
        </div>
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
  color: PALETTE.body,
  margin: '20px auto 0',
  maxWidth: 660,
}
const ctas = {
  marginTop: 28,
  display: 'flex',
  gap: 12,
  flexWrap: 'wrap' as const,
  justifyContent: 'center',
}
const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '14px 22px',
  minHeight: 48,
  fontFamily: SANS,
  fontSize: 14.5,
  fontWeight: 500,
  letterSpacing: '0.005em',
  textDecoration: 'none' as const,
  borderRadius: 0,
}
const btnPrimary = {
  ...btnBase,
  color: PALETTE.onAction,
  background: PALETTE.action,
  border: `1px solid ${PALETTE.action}`,
}
const btnSecondary = {
  ...btnBase,
  color: PALETTE.ink,
  background: 'transparent',
  border: `1px solid ${PALETTE.rule}`,
}
