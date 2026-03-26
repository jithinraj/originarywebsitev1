'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const mockTabs = ['Logs', 'Trace', 'Webhook', 'Signed record', 'Plain English']
const outputChips = [
  { label: 'Observable', color: 'var(--accent-success)' },
  { label: 'Provable', color: 'var(--accent-brand)' },
  { label: 'Missing', color: 'var(--accent-error)' },
]

export function EvidenceTeaser() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ background: 'var(--surface-subtle)' }}
    >
      <div className="hp-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            className="hp-text-display"
            style={{ color: 'var(--color-fg)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            Start with what you already have
          </motion.h2>

          {/* Body */}
          <motion.p
            className="mt-4 text-[0.9375rem] sm:text-[1.0625rem] leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--color-fg-secondary)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Paste a log, trace, webhook, signed record, or short incident summary. Originary shows what your team can observe, what another party can verify, and what is still missing.
          </motion.p>

          {/* Microcopy */}
          <motion.p
            className="mt-3 text-[0.75rem]"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Runs locally in your browser. No signup. No outbound verification.
          </motion.p>

          {/* Mock tab labels */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            {mockTabs.map((tab, i) => (
              <span
                key={tab}
                className="text-[0.8125rem]"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                {tab}{i < mockTabs.length - 1 ? <span style={{ margin: '0 6px', color: 'var(--border-hover)' }}>&middot;</span> : null}
              </span>
            ))}
          </motion.div>

          {/* Mock output chips */}
          <motion.div
            className="mt-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {outputChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold tracking-[0.04em] uppercase"
                style={{ color: chip.color }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: chip.color }}
                />
                {chip.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <Link href="/agent-proof-check" className="hp-btn-primary">
              See what your logs can't prove
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3.5 7h7m0 0L7.5 4m3 3l-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/agent-proof-check#examples"
              className="text-[0.8125rem] font-medium"
              style={{ color: 'var(--color-fg-muted)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Try a real example
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
