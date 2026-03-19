import { AnimateIn } from './AnimateIn'

const steps = [
  { num: '01', label: 'Request arrives', detail: 'Agent calls your API, tool, or MCP server' },
  { num: '02', label: 'Policy evaluated', detail: 'Originary checks against your declared terms' },
  { num: '03', label: 'Decision made', detail: 'Allow, deny, or challenge with reason' },
  { num: '04', label: 'Record issued', detail: 'Signed interaction record returned to caller' },
  { num: '05', label: 'Verified later', detail: 'Any party verifies offline with the public key' },
]

export function ArchDiagram() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start max-w-[56rem] mx-auto">
          {/* Left: header */}
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                How it works
              </span>
              <h2
                className="hp-text-display mt-5"
                style={{ color: 'var(--color-fg)' }}
              >
                Five steps, one signed record
              </h2>
              <p
                className="mt-4 text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                The signed record is portable, exportable, and verifiable by any party with the public key. No callback to Originary required.
              </p>
            </div>
          </AnimateIn>

          {/* Right: numbered steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimateIn key={step.label} delay={0.06 * i}>
                <div
                  className="py-5 flex gap-4"
                  style={{
                    borderBottom: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <span
                    className="text-[0.6875rem] font-bold tracking-[0.1em] mt-1 shrink-0"
                    style={{
                      color: i === 3 ? 'var(--color-verified)' : 'var(--color-fg-muted)',
                      fontFamily: 'var(--font-mono, monospace)',
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="text-[0.9375rem] font-semibold mb-0.5"
                      style={{ color: 'var(--color-fg)' }}
                    >
                      {step.label}
                    </h3>
                    <p
                      className="text-[0.8125rem] leading-relaxed"
                      style={{ color: 'var(--color-fg-secondary)' }}
                    >
                      {step.detail}
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
