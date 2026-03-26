import { AnimateIn } from './AnimateIn'

const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    accent: 'var(--accent-brand)',
    accentBg: 'var(--accent-brand-faint)',
    label: 'An agent books a resource through your API',
    detail: 'You need to know who authorized it, under what policy, and prove the decision later when the charge is disputed.',
    role: 'API operators',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    accent: 'var(--accent-secondary)',
    accentBg: 'var(--accent-secondary-faint)',
    label: 'An MCP tool call modifies production data',
    detail: 'The tool host needs a signed record of what was requested, what was allowed, and what the agent actually did.',
    role: 'MCP server hosts',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accent: 'var(--text-secondary)',
    accentBg: 'var(--surface-card)',
    label: 'A partner asks for proof of an agent interaction',
    detail: 'You export a portable record they can verify independently, offline, without calling your systems.',
    role: 'Platform teams',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l8 4.5v5c0 4.694-3.298 9.087-8 10.5-4.702-1.413-8-5.806-8-10.5v-5L12 3z" />
      </svg>
    ),
    accent: 'var(--accent-warning)',
    accentBg: 'var(--accent-warning-muted)',
    label: 'An auditor reviews agent-driven transactions',
    detail: 'Compliance needs exportable evidence tied to the policy that applied at decision time, not just logs.',
    role: 'Security and compliance',
  },
]

export function WhoIsItFor() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <AnimateIn>
          <div className="text-center max-w-[36rem] mx-auto">
            <span
              className="hp-text-overline"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Who this is for
            </span>
            <h2
              className="hp-text-display mt-5"
              style={{ color: 'var(--color-fg)' }}
            >
              Built for the systems agents touch
            </h2>
            <p
              className="mt-4 hp-text-body-lg"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              Originary is for teams operating APIs, tools, gateways, MCP servers, and review workflows. If your systems receive automated requests, you need evidence that survives beyond your own dashboards.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-[52rem] mx-auto">
          {audiences.map((item, i) => (
            <AnimateIn key={item.label} delay={0.08 * i}>
              <div
                className="rounded-xl p-6 h-full"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                  borderLeft: `3px solid ${item.accent}`,
                }}
              >
                {/* Icon + role badge row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: item.accentBg, color: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-[0.5625rem] font-semibold uppercase tracking-[0.08em] px-2 py-1 rounded-full"
                    style={{ background: item.accentBg, color: item.accent }}
                  >
                    {item.role}
                  </span>
                </div>

                <h3
                  className="text-[0.9375rem] font-semibold mb-2 leading-snug"
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
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p
            className="mt-6 text-[0.8125rem] text-center"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Works with your existing gateway, auth, payments, and observability stack.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
