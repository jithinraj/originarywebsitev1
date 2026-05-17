'use client'

import { cloneElement, isValidElement } from 'react'
import { SANS } from './typography'
import { PALETTE, MAX_W, PAGE_PAD } from './palette'
import { Mono, SectionTitle } from './atoms/Mono'
import {
  StepActionGlyph,
  StepRecordGlyph,
  StepVerifyGlyph,
  StepBundleGlyph,
} from './glyphs/StepGlyphs'
import { useInView } from './motion/useInView'
import { useEnterClock } from './motion/useEnterClock'
import { ease, tween } from './motion/easing'

type Step = {
  n: string
  title: string
  copy: string
  glyph: React.ReactElement<{ progress?: number }>
}

const steps: Step[] = [
  {
    n: '01',
    title: 'Action happens',
    copy: 'An API, MCP tool, agent, gateway, payment, or provisioning workflow crosses a boundary.',
    glyph: <StepActionGlyph />,
  },
  {
    n: '02',
    title: 'Record issued',
    copy: 'Originary binds selected facts, policy, result, timestamp, issuer, and signature.',
    glyph: <StepRecordGlyph />,
  },
  {
    n: '03',
    title: 'Counterparty verifies',
    copy: 'Another party verifies what happened without internal logs or dashboard access.',
    glyph: <StepVerifyGlyph />,
  },
  {
    n: '04',
    title: 'Bundle exported',
    copy: 'Records can be packaged for customer review, procurement, audit, support, and incident review.',
    glyph: <StepBundleGlyph />,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="home-section"
      data-screen-label="03 how it works"
      style={{
        maxWidth: MAX_W,
        margin: '0 auto',
        padding: `48px ${PAGE_PAD} 112px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="A record that survives the boundary."
        body="Action happens. Originary issues a signed record. The counterparty verifies it by API, exported bundle, or offline verification."
      />
      <div style={{ marginTop: 48 }}>
        <StepsGrid />
      </div>
      <p
        style={{
          marginTop: 32,
          fontFamily: SANS,
          fontSize: 16,
          color: PALETTE.ink,
          letterSpacing: '-0.005em',
          maxWidth: 640,
        }}
      >
        The runtime decides. Originary preserves what must be verified later.
      </p>
    </section>
  )
}

function StepsGrid() {
  return (
    <div
      className="home-steps-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        border: `1px solid ${PALETTE.hairline}`,
        background: PALETTE.paper,
      }}
    >
      {steps.map((s, i) => (
        <HowStep
          key={s.n}
          step={s}
          index={i}
          last={i === steps.length - 1}
        />
      ))}
    </div>
  )
}

function HowStep({
  step,
  index,
  last,
}: {
  step: Step
  index: number
  last: boolean
}) {
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const t = useEnterClock(entered, 4)
  const reveal = tween(t, index * 0.15, index * 0.15 + 0.8, ease.out)
  const glyphWithProgress = isValidElement(step.glyph)
    ? cloneElement(step.glyph, { progress: reveal })
    : step.glyph
  return (
    <div
      ref={ref}
      style={{
        padding: '28px 24px 24px 24px',
        borderRight: last ? 'none' : `1px solid ${PALETTE.hairline}`,
        position: 'relative',
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        opacity: reveal,
        transform: `translateY(${(1 - reveal) * 8}px)`,
        transition: 'transform 200ms ease',
      }}
    >
      <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.18em' }}>
        {step.n}
      </Mono>
      <div
        style={{
          marginTop: 22,
          marginBottom: 18,
          height: 96,
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {glyphWithProgress}
      </div>
      <h3
        style={{
          fontFamily: SANS,
          fontSize: 18,
          fontWeight: 500,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: SANS,
          fontSize: 14,
          lineHeight: 1.5,
          color: PALETTE.muted,
          marginTop: 10,
          marginBottom: 0,
          textWrap: 'pretty',
        }}
      >
        {step.copy}
      </p>
    </div>
  )
}
