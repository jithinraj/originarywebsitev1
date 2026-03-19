import Link from 'next/link'
import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn'

const proofPoints = [
  {
    title: 'Self-hostable',
    description: 'Run verification on your own infrastructure. No external service dependency.',
  },
  {
    title: 'Offline verification',
    description: 'Verify any record using the public key alone. No API calls, no network required.',
  },
  {
    title: 'Exportable records',
    description: 'Verifiable interaction records your team can inspect, share, archive, and use in disputes.',
  },
  {
    title: 'Open standard, no lock-in',
    description: 'Built on PEAC Protocol (Apache-2.0). Records are portable across systems and vendors.',
  },
]

export function TrustProof() {
  return (
    <section className="hp-section hp-alt">
      <div className="hp-container">
        <AnimateIn>
          <span
            className="hp-text-overline"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Why trust it
          </span>
          <h2
            className="hp-text-display mt-5 max-w-[36rem]"
            style={{ color: 'var(--color-fg)' }}
          >
            Built for verification, not vendor dependency
          </h2>
        </AnimateIn>

        <StaggerContainer delay={0.15} className="mt-8 sm:mt-12 md:mt-16 grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {proofPoints.map((point) => (
            <StaggerItem key={point.title}>
              <div className="hp-card p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--color-verified-bg)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6l2 2 4-4" stroke="var(--color-verified)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    className="text-[0.9375rem] font-semibold tracking-[-0.01em]"
                    style={{ color: 'var(--color-fg)' }}
                  >
                    {point.title}
                  </h3>
                </div>
                <p
                  className="hp-text-body-sm leading-relaxed"
                  style={{ color: 'var(--color-fg-secondary)' }}
                >
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <div className="mt-8 text-center">
            <Link href="/trust" className="hp-btn-secondary">
              Trust center
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h8m0 0L8 4.5M11 7L8 9.5" />
              </svg>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
