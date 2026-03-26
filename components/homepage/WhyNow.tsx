import { AnimateIn } from './AnimateIn'

const pressures = [
  {
    num: '01',
    label: 'Agents are crossing boundaries',
    detail: 'APIs, tools, and MCP servers handle agent traffic from organizations they do not control. Standard proof is missing.',
  },
  {
    num: '02',
    label: 'Compliance is catching up',
    detail: 'Compliance and review expectations for automated decisions are rising. Auditable records will be expected.',
  },
  {
    num: '03',
    label: 'Logs are not enough',
    detail: 'Internal observability helps you debug. It does not help a partner, auditor, or regulator verify what happened.',
  },
]

export function WhyNow() {
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
                Why this matters now
              </span>
              <h2
                className="hp-text-display mt-5"
                style={{ color: 'var(--color-fg)' }}
              >
                Evidence is not keeping up with automation
              </h2>
            </div>
          </AnimateIn>

          {/* Right: numbered items */}
          <div className="space-y-0">
            {pressures.map((item, i) => (
              <AnimateIn key={item.label} delay={0.08 * i}>
                <div
                  className="py-6 flex gap-4"
                  style={{
                    borderBottom: i < pressures.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <span
                    className="text-[0.6875rem] font-bold tracking-[0.1em] mt-1 shrink-0"
                    style={{ color: 'var(--color-fg-muted)', fontFamily: 'var(--font-mono, monospace)' }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="text-[0.9375rem] font-semibold mb-1"
                      style={{ color: 'var(--color-fg)' }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-[0.8125rem] leading-relaxed"
                      style={{ color: 'var(--color-fg-secondary)' }}
                    >
                      {item.detail}
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
