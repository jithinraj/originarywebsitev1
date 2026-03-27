'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const proofItems = ['Open source', 'Self-hostable', 'Offline verification', 'Portable']

const recordRows = [
  { label: 'ISSUER', value: 'tools.vendor.com' },
  { label: 'TYPE', value: 'org.peacprotocol/access' },
  { label: 'POLICY', value: 'sha256:3f8a...c7e1' },
  { label: 'SIGNED', value: 'Ed25519 valid' },
  { label: 'VERIFY', value: 'local, no callback' },
]

export function Hero() {
  return (
    <section className="hp-hero-bg pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16">
      <div className="hp-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">

          {/* ── Left: Copy ── */}
          <div className="lg:w-[54%] shrink-0">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span
                className="inline-flex items-center gap-2 h-6 px-3 rounded-md text-[0.625rem] font-semibold tracking-[0.08em] uppercase"
                style={{
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-success)' }} />
                For APIs, tools, and MCP servers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-5 sm:mt-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw + 0.5rem, 5rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.045em',
                color: 'var(--text-primary)',
              }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease }}
            >
              Prove what<br />agents did
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="mt-4 sm:mt-5 max-w-[30rem]"
              style={{
                fontSize: 'clamp(0.9375rem, 1vw + 0.5rem, 1.1875rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
            >
              Originary verifies requests, applies policy, and returns signed records you can prove later, across teams, vendors, and audits.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
            >
              <Link href="/developers" className="hp-btn-ink w-full sm:w-auto text-center whitespace-nowrap px-6 py-2.5 text-[0.9375rem] font-medium">
                Start here
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/agent-proof-check" className="hp-btn-secondary w-full sm:w-auto text-center whitespace-nowrap">
                See what your logs can&apos;t prove
              </Link>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              {proofItems.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5 text-[0.75rem]" style={{ color: 'var(--text-muted)' }}>
                  {i > 0 && <span style={{ margin: '0 2px' }}>&middot;</span>}
                  {item}
                </span>
              ))}
              <span className="flex items-center gap-1.5 text-[0.75rem]" style={{ color: 'var(--text-muted)' }}>
                <span style={{ margin: '0 2px' }}>&middot;</span>
                <Link href="/downloads" style={{ color: 'var(--text-muted)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Downloads</Link>
              </span>
            </motion.div>

            {/* Tertiary */}
            <motion.div
              className="mt-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link
                href="/agent-auditor"
                className="text-[0.75rem]"
                style={{ color: 'var(--text-muted)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
              >
                Already have a signed record? Open Agent Auditor
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Artifact card ── */}
          <motion.div
            className="mt-8 lg:mt-0 lg:flex-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
          >
            <Link
              href="/agent-auditor"
              className="block rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: '1px solid var(--border-hover)',
                background: 'var(--surface-elevated)',
                boxShadow: '0 12px 40px -12px rgba(16, 24, 40, 0.14)',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-brand)'
                e.currentTarget.style.boxShadow = '0 16px 48px -12px rgba(16, 24, 40, 0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.boxShadow = '0 12px 40px -12px rgba(16, 24, 40, 0.14)'
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 sm:px-5 py-2.5"
                style={{ borderBottom: '1px solid var(--border-default)' }}
              >
                <span className="text-[0.625rem] font-semibold tracking-[0.06em] uppercase" style={{ color: 'var(--text-muted)' }}>
                  Signed interaction record
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.5625rem] font-semibold px-2 py-0.5 rounded"
                  style={{ background: 'var(--accent-success-faint)', color: 'var(--accent-success)' }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Verified locally
                </span>
              </div>

              {/* Rows */}
              <div className="px-4 sm:px-5 py-3">
                {recordRows.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-baseline gap-3 py-2"
                    style={i < recordRows.length - 1 ? { borderBottom: '1px solid var(--border-subtle)' } : undefined}
                  >
                    <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.08em] w-12 shrink-0" style={{ color: 'var(--text-muted)' }}>
                      {row.label}
                    </span>
                    <span className="text-[0.8125rem] font-mono" style={{ color: 'var(--text-primary)' }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between px-4 sm:px-5 py-2.5"
                style={{ borderTop: '1px solid var(--border-default)', background: 'var(--surface-subtle)' }}
              >
                <span className="text-[0.625rem]" style={{ color: 'var(--text-muted)' }}>
                  No Originary dependency in verification
                </span>
                <span className="text-[0.625rem] font-medium" style={{ color: 'var(--accent-brand)' }}>
                  Inspect &rarr;
                </span>
              </div>
            </Link>

            <p className="mt-2.5 text-center text-[0.625rem]" style={{ color: 'var(--text-muted)' }}>
              Sample record. Verified with issuer public key only.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
