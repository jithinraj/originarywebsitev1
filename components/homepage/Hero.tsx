'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const proofItems = [
  'Open source',
  'Self-hostable',
  'Offline verification',
  'Portable across vendors',
]

const recordRows = [
  { label: 'ISSUER', value: 'tools.vendor.com' },
  { label: 'TYPE', value: 'org.peacprotocol/access' },
  { label: 'POLICY', value: 'sha256:3f8a...c7e1' },
  { label: 'SIGNED', value: 'Ed25519 valid' },
  { label: 'VERIFY', value: 'local no callback' },
]

export function Hero() {
  return (
    <section className="hp-hero-bg pt-16 pb-8 sm:pt-20 md:pt-28 lg:pt-32">
      <div className="hp-container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-14 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span
                className="inline-flex items-center gap-2 h-7 px-3.5 rounded-[6px] text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
                style={{
                  border: '1px solid var(--border-default)',
                  background: 'var(--surface-elevated)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent-success)' }}
                />
                For APIs, tools, and MCP servers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hp-text-hero mt-6 sm:mt-8"
              style={{ color: 'var(--text-primary)', textAlign: 'left' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease }}
            >
              Prove what{'\n'}agents did
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="mt-4 sm:mt-5 text-[0.9375rem] sm:text-[1.0625rem] md:text-[1.25rem] leading-relaxed max-w-[32rem]"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease }}
            >
              Originary verifies requests, applies policy, and returns signed records you can prove later, across teams, vendors, and audits.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
            >
              <Link href="/agent-proof-check" className="hp-btn-primary">
                See what your logs can&apos;t prove
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
              <Link href="/developers" className="hp-btn-secondary">
                Start here
              </Link>
            </motion.div>

            {/* Proof strip (dot-separated) */}
            <motion.div
              className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              {proofItems.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span
                      className="w-[3px] h-[3px] rounded-full"
                      style={{ background: 'var(--text-muted)' }}
                    />
                  )}
                  <span
                    className="hp-text-caption"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item}
                  </span>
                </span>
              ))}
            </motion.div>

            {/* Tertiary link */}
            <motion.div
              className="mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              <Link
                href="/agent-auditor"
                className="text-[0.8125rem]"
                style={{ color: 'var(--text-muted)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Already have a signed record? Open Agent Auditor
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Artifact card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid var(--border-default)',
                background: 'var(--surface-elevated)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: '1px solid var(--border-default)' }}
              >
                <span
                  className="text-[0.6875rem] font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Signed interaction record
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.625rem] font-semibold"
                  style={{
                    background: 'var(--accent-success-faint)',
                    color: 'var(--accent-success)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified locally
                </span>
              </div>

              {/* Record rows */}
              <div className="px-5 py-4 space-y-3">
                {recordRows.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-3">
                    <span
                      className="text-[0.625rem] font-semibold uppercase tracking-wider shrink-0 w-14"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-[0.8125rem] font-mono"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{
                  borderTop: '1px solid var(--border-default)',
                  background: 'var(--surface-subtle)',
                }}
              >
                <span
                  className="text-[0.6875rem]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  No Originary dependency
                </span>
                <Link
                  href="/agent-auditor"
                  className="text-[0.6875rem] font-medium"
                  style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}
                >
                  Inspect &rarr;
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
