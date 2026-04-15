import { AnimateIn } from './AnimateIn'

const pressures = [
  {
    num: '01',
    label: 'Cross-boundary agent activity',
    detail: 'Agents now act across APIs, tools, and runtimes owned by different teams and vendors. Signed records travel with the action so another party can verify what happened independently.',
  },
  {
    num: '02',
    label: 'Growing audit and review expectations',
    detail: 'Teams are increasingly expected to prove what automated systems did. Logs describe behavior. Signed records prove decisions.',
  },
  {
    num: '03',
    label: 'Faster dispute resolution',
    detail: 'When records are exportable and offline-verifiable, disputes resolve faster than when everyone depends on the dashboard owner to confirm what happened.',
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
                Records are not keeping up with automation
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
