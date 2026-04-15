import Link from 'next/link'
import { AnimateIn } from './AnimateIn'

const proofPoints = [
  {
    num: '01',
    title: 'Self-hostable',
    description: 'Run on your own infrastructure. No external dependency required.',
  },
  {
    num: '02',
    title: 'Offline verification',
    description: 'Verify with the public key alone. No network call required.',
  },
  {
    num: '03',
    title: 'Exportable records',
    description: 'Inspect, share, archive, and use in disputes, reviews, and audits.',
  },
  {
    num: '04',
    title: 'Open standard',
    description: 'PEAC Protocol under Apache-2.0. Portable across vendors and implementations.',
  },
  {
    num: '05',
    title: 'Ed25519 signatures',
    description: 'Every record is signed with Ed25519 and independently verifiable.',
  },
  {
    num: '06',
    title: 'Audit and dispute ready',
    description: 'Timestamped records for compliance, procurement, and incident review.',
  },
  {
    num: '07',
    title: 'Built for real workflows',
    description: 'Designed for AI agents, APIs, MCP, priced API access, and cross-boundary automated systems.',
  },
]

export function TrustProof() {
  return (
    <section className="hp-section hp-alt">
      <div className="hp-container">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start max-w-[56rem] mx-auto">
          {/* Left: header */}
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                Why trust Originary
              </span>
              <h2
                className="hp-text-display mt-5"
                style={{ color: 'var(--color-fg)' }}
              >
                Built to be verified without us
              </h2>
              <p
                className="mt-4 text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                Every record should survive vendor boundaries. Originary can issue and manage records in production, but verification should remain local, offline, and independent.
              </p>
              <div className="mt-6">
                <Link href="/trust" className="hp-btn-secondary">
                  Trust center
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h8m0 0L8 4.5M11 7L8 9.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateIn>

          {/* Right: numbered grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
            {proofPoints.map((point, i) => (
              <AnimateIn key={point.title} delay={0.06 * i}>
                <div
                  className="py-5 flex gap-3"
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  <span
                    className="text-[0.625rem] font-bold tracking-[0.1em] mt-0.5 shrink-0"
                    style={{ color: 'var(--color-verified)', fontFamily: 'var(--font-mono, monospace)' }}
                  >
                    {point.num}
                  </span>
                  <div>
                    <h3
                      className="text-[0.8125rem] font-semibold mb-0.5"
                      style={{ color: 'var(--color-fg)' }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-[0.75rem] leading-relaxed"
                      style={{ color: 'var(--color-fg-secondary)' }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
