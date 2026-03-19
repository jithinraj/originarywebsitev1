import { AnimateIn } from './AnimateIn'

const questions = [
  {
    text: 'Who sent the request',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3.5" />
        <path d="M3.5 17.5c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
      </svg>
    ),
  },
  {
    text: 'What policy applied',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2.5" width="14" height="15" rx="2" />
        <path d="M7 7h6M7 10h4" />
      </svg>
    ),
  },
  {
    text: 'What record exists afterward',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10l2 2 4-4" />
        <path d="M10 2l7 4v4.5c0 4.1-2.88 7.93-7 9.17-4.12-1.24-7-5.07-7-9.17V6l7-4z" />
      </svg>
    ),
  },
]

export function Problem() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="max-w-[48rem] mx-auto text-center">
          <AnimateIn>
            <span
              className="hp-text-overline"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              The real question
            </span>
            <h2
              className="hp-text-display mt-5 mx-auto max-w-[40rem]"
              style={{ color: 'var(--color-fg)' }}
            >
              Who called. What happened. Where&apos;s the proof?
            </h2>
            <p
              className="mt-5 text-[1.0625rem] leading-relaxed max-w-[36rem] mx-auto"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              Most systems do not make agent request decisions explicit. What teams usually lack is a verifiable interaction record of how the request was evaluated, what policy was applied, and what decision was made.
            </p>
          </AnimateIn>

          {/* Three questions */}
          <AnimateIn delay={0.15}>
            <p
              className="mt-8 text-[0.9375rem]"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              When an agent hits your API, tool, or MCP server, three things matter:
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 max-w-[44rem] mx-auto">
              {questions.map((q) => (
                <div
                  key={q.text}
                  className="rounded-xl p-5 text-center"
                  style={{
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface-elevated)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'rgba(40,200,64,0.08)', color: 'var(--color-verified)' }}
                  >
                    {q.icon}
                  </div>
                  <div
                    className="text-[0.875rem] font-semibold"
                    style={{ color: 'var(--color-fg)' }}
                  >
                    {q.text}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Closing */}
          <AnimateIn delay={0.25}>
            <div
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 max-w-[34rem] mx-auto"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <p
                className="text-[1rem] font-medium"
                style={{ color: 'var(--color-fg)' }}
              >
                Originary gives you that record without asking you to replace the rest of your stack.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
