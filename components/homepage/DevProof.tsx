import Link from 'next/link'
import { AnimateIn } from './AnimateIn'

export function DevProof() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                For developers
              </span>
              <h2
                className="hp-text-display mt-5 max-w-[28rem]"
                style={{ color: 'var(--color-fg)' }}
              >
                How it works in practice
              </h2>
              <p
                className="mt-7 hp-text-body-lg"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                An agent request arrives. Originary evaluates it, applies your
                policy, and returns a portable signed record your team can
                inspect and export.
              </p>
              <p
                className="mt-6 hp-text-body font-medium"
                style={{ color: 'var(--color-fg)' }}
              >
                Adds verification, policy, and portable records. Works with your existing stack.
              </p>
              <div className="mt-8">
                <Link href="/developers" className="hp-btn-primary">
                  Start building
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div
              className="rounded-xl p-5 md:p-6 overflow-hidden"
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface-invert)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span
                  className="ml-2 text-[0.6875rem] font-mono"
                  style={{ color: 'rgba(250,250,247,0.5)' }}
                >
                  request lifecycle
                </span>
              </div>
              <pre
                className="text-[0.75rem] md:text-[0.8125rem] leading-relaxed font-mono overflow-x-auto"
                style={{ color: 'rgba(250,250,247,0.85)' }}
              >
                <code>{`// 1. Agent request arrives
POST /api/bookings
Authorization: Bearer <agent-token>
Content-Type: application/json

// 2. Originary evaluates
-> verify agent identity
-> apply policy: bookings.default
-> decision: allow

// 3. Signed record returned
PEAC-Receipt: <compact-jws>
// Portable, exportable, offline-verifiable`}</code>
              </pre>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
