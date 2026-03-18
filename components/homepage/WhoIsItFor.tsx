import { AnimateIn } from './AnimateIn'

const audiences = [
  {
    label: 'APIs receiving agent traffic',
    detail: 'Evaluate incoming agent requests, apply rate and access policy, return signed records of every decision.',
  },
  {
    label: 'MCP servers and tool hosts',
    detail: 'Add verification middleware to any tool endpoint. Signed records travel with the response.',
  },
  {
    label: 'Platforms exposing actions to agents',
    detail: 'Policy sits at the boundary. Records prove what was allowed, denied, or challenged.',
  },
  {
    label: 'Security and compliance teams',
    detail: 'Exportable, portable records for audit, disputes, and procurement review. Offline-verifiable.',
  },
]

export function WhoIsItFor() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <AnimateIn>
          <span
            className="hp-text-overline"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Who this is for
          </span>
          <h2
            className="hp-text-display mt-5 max-w-[36rem]"
            style={{ color: 'var(--color-fg)' }}
          >
            Built for operators, not just builders
          </h2>
          <p
            className="mt-6 hp-text-body-lg max-w-[38rem]"
            style={{ color: 'var(--color-fg-secondary)' }}
          >
            Originary is built first for teams running the systems that agents
            access. If your stack receives agent requests, Originary gives you
            the verification layer.
          </p>
        </AnimateIn>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-3 sm:gap-5">
          {audiences.map((item, i) => (
            <AnimateIn key={item.label} delay={0.08 * i}>
              <div
                className="rounded-xl p-6 h-full"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                }}
              >
                <h3
                  className="text-[0.9375rem] font-semibold mb-2"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-[0.875rem] leading-relaxed"
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
            className="mt-8 hp-text-body-sm"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Works with your existing gateway, auth, payments, and observability stack.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
