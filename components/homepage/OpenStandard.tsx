'use client'

import Link from 'next/link'
import { AnimateIn } from './AnimateIn'

const benefits = [
  'Ed25519 signatures, verified offline with a public key',
  '28 packages on npm, 6,443 tests',
  'Offline-verifiable with public key alone',
  'Apache-2.0, self-hostable, vendor-neutral',
]

export function OpenStandard() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start">
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                Open standard
              </span>
              <h2
                className="hp-text-display mt-5"
                style={{ color: 'var(--color-fg)' }}
              >
                Use the product. Keep the record portable.
              </h2>
              <p
                className="mt-7 hp-text-body-lg"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                Originary is the product you deploy. PEAC is the open standard that keeps your records portable across systems and vendors. No lock-in.
              </p>
              <div className="mt-10">
                <Link href="/peac" className="hp-btn-secondary">
                  Learn about PEAC
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h8m0 0L8 4.5M11 7L8 9.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="space-y-3.5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="hp-benefit-card"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'var(--color-verified-bg)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6l2 2 4-4" stroke="var(--color-verified)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      className="text-[0.9375rem] font-medium"
                      style={{ color: 'var(--color-fg)' }}
                    >
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
