import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn'

const points = [
  {
    title: 'Verifiable evidence',
    description: 'Every agent interaction produces a signed record with Ed25519 signatures. Third parties can verify independently.',
  },
  {
    title: 'No vendor callback',
    description: 'Verification uses public keys via JWKS. No API call to Originary or any other service required.',
  },
  {
    title: 'Audit and dispute ready',
    description: 'Records are portable, timestamped, and exportable. Use them for compliance, procurement evidence, or dispute resolution.',
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
          <p
            className="hp-text-overline text-center mb-4"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Enterprise ready
          </p>
          <h2
            className="hp-text-section text-center mb-12 sm:mb-16"
            style={{ color: 'var(--color-fg)' }}
          >
            Why teams trust this
          </h2>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-[56rem] mx-auto">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div
                className="rounded-xl p-6"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                }}
              >
                <h3
                  className="text-[0.9375rem] font-semibold mb-2"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-[0.8125rem] leading-relaxed"
                  style={{ color: 'var(--color-fg-secondary)' }}
                >
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
