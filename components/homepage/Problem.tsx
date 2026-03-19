import { AnimateIn } from './AnimateIn'

const questions = [
  'Who sent the request',
  'What policy applied',
  'What record exists afterward',
]

export function Problem() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-start">
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                The real question
              </span>
              <h2
                className="hp-text-display mt-5 max-w-[36rem]"
                style={{ color: 'var(--color-fg)' }}
              >
                When an agent calls your API or tool, can you answer who acted, what policy applied, and prove it later?
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="md:pt-2">
              <p
                className="hp-text-body-lg"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                Most systems do not make agent request decisions explicit. What
                teams usually lack is a verifiable interaction record of how the request was
                evaluated, what policy was applied, and what decision was made.
              </p>
              <p
                className="mt-6 hp-text-body"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                When an agent hits your API, tool, or MCP server, three things matter:
              </p>
              <ul className="mt-5 space-y-4">
                {questions.map((q) => (
                  <li key={q} className="flex items-start gap-3.5">
                    <span
                      className="mt-[0.55rem] block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--color-border-strong)' }}
                    />
                    <span
                      className="hp-text-body"
                      style={{ color: 'var(--color-fg-secondary)' }}
                    >
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-10 pt-8"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <p
                  className="hp-text-body font-medium"
                  style={{ color: 'var(--color-fg)' }}
                >
                  Originary gives you that record without asking you to replace
                  the rest of your stack.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
