import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn'

const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1l2.39 4.84L17.82 6.7l-3.91 3.81.92 5.39L10 13.42l-4.83 2.48.92-5.39L2.18 6.7l5.43-.86L10 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Verifiable evidence',
    description: 'Ed25519 signatures on every record. Third parties verify independently.',
    stat: 'Ed25519',
    statLabel: 'signature standard',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'No vendor callback',
    description: 'Verification uses public keys via JWKS. No API call to Originary required.',
    stat: 'Zero',
    statLabel: 'network calls to verify',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8.5h8M6 11.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Audit and dispute ready',
    description: 'Portable, timestamped, exportable. Compliance, procurement, or dispute resolution.',
    stat: 'Portable',
    statLabel: 'across systems and parties',
  },
]

export function EnterpriseProof() {
  return (
    <section
      className="hp-section"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="hp-container">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-14">
            <p
              className="hp-text-overline mb-4"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Enterprise ready
            </p>
            <h2
              className="hp-text-section max-w-[28rem] mx-auto"
              style={{ color: 'var(--color-fg)' }}
            >
              Why teams trust Originary
            </h2>
          </div>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-[56rem] mx-auto">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div
                className="rounded-xl p-6 h-full flex flex-col"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                }}
              >
                {/* Icon + stat row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--color-surface-subtle)', color: 'var(--color-fg-secondary)' }}
                  >
                    {point.icon}
                  </div>
                  <div className="text-right">
                    <div
                      className="text-[0.9375rem] font-bold leading-none"
                      style={{ color: 'var(--color-fg)' }}
                    >
                      {point.stat}
                    </div>
                    <div
                      className="text-[0.5625rem] font-medium uppercase tracking-wide mt-0.5"
                      style={{ color: 'var(--color-fg-muted)' }}
                    >
                      {point.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[0.9375rem] font-semibold mb-1.5"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {point.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[0.8125rem] leading-relaxed flex-1"
                  style={{ color: 'var(--color-fg-secondary)' }}
                >
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom proof line */}
        <AnimateIn delay={0.3}>
          <p
            className="text-center mt-8 text-[0.8125rem]"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Every record is self-contained. Verification is local. No dependency on Originary at verification time.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
