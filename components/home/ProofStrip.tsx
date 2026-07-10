import type { ReactNode } from 'react'
import { FACTS } from '@/lib/facts'
import { MAX_W, PAGE_PAD, PALETTE } from './palette'
import { MONO } from './typography'
import { CountUp } from './motion/CountUp'

const ITEMS: Array<{ value: ReactNode; label: string }> = [
  { value: FACTS.currentVersion, label: 'current release' },
  { value: <CountUp value={FACTS.testsCount} />, label: 'tests' },
  { value: <CountUp value={FACTS.conformanceRequirements} />, label: 'conformance checks' },
  { value: <CountUp value={FACTS.publishedPackageCount} />, label: 'packages on npm' },
  { value: FACTS.license, label: 'licensed' },
]

/**
 * ProofStrip: a compact datasheet band under the hero. Every figure imports
 * from the facts registry; nothing here is hand-typed.
 */
export function ProofStrip() {
  return (
    <section
      aria-label="Release facts"
      style={{
        borderTop: `1px solid ${PALETTE.hairline}`,
        padding: `14px ${PAGE_PAD}`,
      }}
    >
      <ul
        className="home-proof-strip"
        role="list"
        style={{
          maxWidth: MAX_W,
          margin: '0 auto',
          padding: 0,
          listStyle: 'none',
          fontFamily: MONO,
        }}
      >
        {ITEMS.map((it) => (
          <li key={it.label} className="home-proof-item">
            <span style={{ color: PALETTE.ink, fontWeight: 600 }}>{it.value}</span>{' '}
            <span style={{ color: PALETTE.faint }}>{it.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
