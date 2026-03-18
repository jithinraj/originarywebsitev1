'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FACTS } from '@/lib/facts'

const ease = [0.16, 1, 0.3, 1] as const

const proofItems = [
  'Open source',
  'Self-hostable',
  'Offline verification',
  'No lock-in',
]

export function Hero() {
  return (
    <section className="hp-hero-bg pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
      <div className="hp-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span
            className="inline-flex items-center gap-2 h-7 px-3.5 rounded-full backdrop-blur-sm text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
            style={{
              border: '1px solid var(--color-border)',
              background: 'rgba(255,255,255,0.8)',
              color: 'var(--color-fg-secondary)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--color-verified)' }}
            />
            For teams running agent-facing systems
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hp-text-hero mt-10 md:mt-12 max-w-[52rem]"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
        >
          Verify agent requests, apply policy, return portable signed records
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-8 md:mt-10 hp-text-subheading max-w-[38rem]"
          style={{ color: 'var(--color-fg-secondary)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          Drop-in middleware for any API, tool, or MCP server.
          No infrastructure changes required.
        </motion.p>

        {/* Tagline - visually distinct */}
        <motion.div
          className="mt-8 md:mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <p
            className="text-[1.125rem] md:text-[1.25rem] font-semibold tracking-[-0.02em]"
            style={{ color: 'var(--color-fg)' }}
          >
            Logs stay local. Signed records travel.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
        >
          <Link href="/developers" className="hp-btn-primary">
            Start building
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
          <Link href="/verify" className="hp-btn-secondary">
            Verify a sample record
          </Link>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {proofItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-3 -ml-3 mr-1"
                  style={{ background: 'var(--color-border-strong)' }}
                />
              )}
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: 'var(--color-verified)' }}
              />
              <span
                className="hp-text-caption"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                {item}
              </span>
            </span>
          ))}
        </motion.div>

        {/* Quick links */}
        <motion.div
          className="mt-6 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Book a demo', href: '/contact' },
            { label: 'Install MCP server', href: '/downloads#mcp-server' },
            { label: 'Read the spec', href: 'https://github.com/peacprotocol/peac', external: true },
            { label: 'Downloads', href: '/downloads' },
          ].map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: 'var(--color-fg-muted)', fontSize: '0.8125rem', userSelect: 'none' }}>/</span>
              )}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-link-muted text-[0.875rem] font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="hp-link-muted text-[0.875rem] font-medium">
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </motion.div>

        {/* Code panels */}
        <motion.div
          className="mt-16 md:mt-20 lg:mt-24 grid md:grid-cols-2 gap-4 md:gap-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease }}
        >
          {/* Left: request flow (dark) */}
          <div>
            <p
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] mb-3"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              In practice
            </p>
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
                  request flow
                </span>
              </div>
              <pre
                className="text-[0.75rem] md:text-[0.8125rem] leading-relaxed font-mono overflow-x-auto"
                style={{ color: 'rgba(250,250,247,0.85)' }}
              >
                <code>{`// Agent request hits your API
POST /api/bookings
Authorization: Bearer <agent-token>

// Originary evaluates the request
-> Verify agent identity
-> Apply booking policy
-> Record the decision`}</code>
              </pre>
            </div>
          </div>

          {/* Right: signed record (light) */}
          <div>
            <p
              className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] mb-3"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Signed record
            </p>
            <div
              className="rounded-xl p-5 md:p-6 overflow-hidden"
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface-elevated)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[0.6875rem] font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--color-fg-muted)' }}
                >
                  What you get
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[0.625rem] font-semibold uppercase tracking-wide"
                  style={{
                    background: 'var(--color-verified-bg)',
                    color: 'var(--color-verified)',
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: 'var(--color-verified)' }}
                  />
                  Signed
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Request', value: 'POST /api/bookings' },
                  { label: 'Agent', value: 'verified (did:key:z6Mkf5r...)' },
                  { label: 'Decision', value: 'allow' },
                  { label: 'Policy', value: 'bookings.default' },
                  { label: 'Record', value: 'signed, exportable' },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4">
                    <span
                      className="text-[0.75rem] font-medium uppercase tracking-wide"
                      style={{ color: 'var(--color-fg-muted)' }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-[0.8125rem] font-mono"
                      style={{ color: 'var(--color-fg-secondary)' }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats line */}
        <motion.p
          className="mt-6 text-[0.6875rem] flex flex-wrap items-center gap-2"
          style={{ color: 'var(--color-fg-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>{FACTS.publishedPackageCount} packages</span>
          <span className="opacity-40">&#183;</span>
          <span>{FACTS.testsCount.toLocaleString()} tests</span>
          <span className="opacity-40">&#183;</span>
          <span>Apache-2.0</span>
          <span className="opacity-40">&#183;</span>
          <a
            href="https://github.com/peacprotocol/peac"
            target="_blank"
            rel="noopener noreferrer"
            className="hp-link-muted"
          >
            {FACTS.stableVersion}
          </a>
        </motion.p>
      </div>
    </section>
  )
}
