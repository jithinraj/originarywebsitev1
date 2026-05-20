'use client'

import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import { CheckIcon } from './atoms/CheckIcon'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { ease, tween } from './motion/easing'
import { DemoRequestForm } from './DemoRequestForm'

const reasonList = [
  'Agent action',
  'Customer dispute',
  'MCP tool run',
  'Procurement review',
  'Payment or gateway event',
]

export function DemoCTA() {
  return (
    <section
      className="home-section"
      data-screen-label="07 demo"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 64px ${PAGE_PAD}`,
        scrollMarginTop: 80,
      }}
    >
      <div
        id="demo"
        className="home-cta-grid home-card"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 0,
          border: `1px solid ${PALETTE.hairline}`,
          background: PALETTE.paper,
          scrollMarginTop: 96,
        }}
      >
        <div style={{ padding: '36px 36px 40px 36px' }}>
          <Mono
            size={11}
            color={PALETTE.muted}
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Get started
          </Mono>
          <h3
            style={{
              fontFamily: SANS,
              fontSize: 32,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              fontWeight: 500,
              color: PALETTE.ink,
              margin: '14px 0 0 0',
              textWrap: 'balance',
            }}
          >
            Start with one workflow where proof already matters.
          </h3>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 16,
              lineHeight: 1.6,
              color: '#3a352b',
              margin: '16px 0 22px 0',
              textWrap: 'pretty',
            }}
          >
            Send one API call, MCP tool run, agent action, gateway decision,
            payment event, or provisioning workflow. We&rsquo;ll show what a
            signed record could look like.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {reasonList.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '6px 0',
                  fontFamily: SANS,
                  fontSize: 15,
                  color: PALETTE.ink,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: PALETTE.accent,
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <CTAButton href="#demo-form" primary>
              Request a demo
            </CTAButton>
            <CTAButton href="/downloads">Verify a sample record</CTAButton>
          </div>
        </div>
        <div
          id="demo-form"
          style={{
            padding: '36px 36px 40px 36px',
            borderLeft: `1px solid ${PALETTE.hairline}`,
            background: PALETTE.bg,
          }}
        >
          <DemoRequestForm destinationEmail="contact@originary.xyz" />
        </div>
      </div>
    </section>
  )
}

function CTAButton({
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
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 18px',
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
        <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    </a>
  )
}

function CTAAnim() {
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.3 })
  const t = useEnterClock(entered, 6)
  const stage1 = tween(t, 0.0, 0.6, ease.out)
  const stage2 = tween(t, 1.0, 1.6, ease.out)
  const stage3 = tween(t, 2.0, 2.6, ease.out)

  return (
    <div
      ref={ref}
      className="home-cta-anim"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 24px 1fr 24px 1fr',
        alignItems: 'center',
        gap: 0,
      }}
    >
      <CTAStep
        label="action"
        title="One workflow"
        sub="api · mcp · gateway · provisioning · payment · lifecycle"
        progress={stage1}
      />
      <CTAArrow progress={tween(t, 0.6, 1.0)} />
      <CTAStep
        label="signed record"
        title="Originary"
        sub="issuer · facts · policy · result · time · sig"
        progress={stage2}
        highlight
      />
      <CTAArrow progress={tween(t, 1.6, 2.0)} />
      <CTAStep
        label="verified bundle"
        title="Counterparty"
        sub="hosted verify · exported bundle · offline"
        progress={stage3}
        verified
      />
    </div>
  )
}

function CTAStep({
  label,
  title,
  sub,
  progress,
  highlight,
  verified,
}: {
  label: string
  title: string
  sub: string
  progress: number
  highlight?: boolean
  verified?: boolean
}) {
  return (
    <div
      style={{
        background: PALETTE.paper,
        border: `1px solid ${highlight ? PALETTE.rule : PALETTE.hairline}`,
        padding: '20px 22px',
        opacity: progress,
        transform: `translateY(${(1 - progress) * 6}px)`,
        minHeight: 130,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Mono
          size={10}
          color={PALETTE.faint}
          style={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          {label}
        </Mono>
        {verified && progress > 0.6 ? (
          <CheckIcon size={14} color={PALETTE.success} progress={1} />
        ) : null}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 18,
          color: PALETTE.ink,
          marginTop: 10,
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-plex-mono), "IBM Plex Mono", monospace',
          fontSize: 11,
          color: PALETTE.muted,
          marginTop: 8,
          lineHeight: 1.5,
        }}
      >
        {sub}
      </div>
    </div>
  )
}

function CTAArrow({ progress }: { progress: number }) {
  return (
    <div className="home-cta-arrow" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
        <line
          x1="0"
          y1="5"
          x2={2 + 20 * progress}
          y2="5"
          stroke={PALETTE.rule}
          strokeWidth="1"
        />
        <path
          d={`M${18 + 0} 1 L22 5 L18 9`}
          stroke={PALETTE.rule}
          strokeWidth="1"
          fill="none"
          opacity={progress > 0.7 ? 1 : 0}
        />
      </svg>
    </div>
  )
}
