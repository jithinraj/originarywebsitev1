import { AnimateIn } from './AnimateIn'

const signals = [
  { value: '35', label: 'npm packages' },
  { value: '7,241', label: 'tests passing' },
  { value: '219', label: 'conformance checks' },
  { value: 'Apache-2.0', label: 'license' },
  { value: 'v0.12.7', label: 'latest release' },
]

export function TractionStrip() {
  return (
    <section
      className="py-8 sm:py-10"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}
    >
      <div className="hp-container">
        <AnimateIn>
          <p
            className="text-center mb-6 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Evidence of execution
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4">
            {signals.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-[1.125rem] sm:text-[1.25rem] font-bold tracking-tight"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[0.6875rem] font-medium tracking-wide uppercase mt-0.5"
                  style={{ color: 'var(--color-fg-muted)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
