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
    copy: 'An API, agent, gateway, or tool performs work inside your environment.',
    glyph: <StepActionGlyph />,
  },
  {
    n: '02',
    title: 'Record issued',
    copy: 'Originary signs selected facts without exposing private logs.',
    glyph: <StepRecordGlyph />,
  },
  {
    n: '03',
    title: 'Counterparty verifies',
    copy: 'A customer, auditor, partner, or system checks the record independently.',
    glyph: <StepVerifyGlyph />,
  },
  {
    n: '04',
    title: 'Bundle exported',
    copy: 'Records can be shared for audits, disputes, procurement, or review.',
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
        maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`,
        margin: '0 auto',
        padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}`,
      }}
    >
      <SectionTitle
        title="A signed record survives the boundary."
        body="Originary creates a compact, signed record from the workflow: what happened, which policy applied, what result was returned, when it happened, and who issued the record."
      />
      <div style={{ marginTop: 48 }}>
        <StepsGrid />
      </div>
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
