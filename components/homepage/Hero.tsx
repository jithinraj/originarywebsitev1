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
    <section className="hp-hero-bg pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
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
          className="hp-text-hero mt-7 sm:mt-10 md:mt-12 max-w-[52rem]"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
        >
          Know what every agent did. Prove it later.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-5 sm:mt-8 md:mt-10 hp-text-subheading max-w-[38rem]"
          style={{ color: 'var(--color-fg-secondary)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          Originary helps APIs, tools, and MCP servers verify agent requests, apply policy, and return verifiable interaction records. PEAC is the open standard underneath.
        </motion.p>

        {/* Tagline - visually distinct */}
        <motion.div
          className="mt-5 sm:mt-8 md:mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          <p
            className="text-[1.125rem] md:text-[1.25rem] font-semibold tracking-[-0.02em]"
            style={{ color: 'var(--color-fg)' }}
          >
            Logs stay local. Records travel.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-7 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
        >
          <Link href="/developers" className="hp-btn-primary">
            Start here
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
          <Link href="/agent-auditor" className="hp-btn-secondary">
            See it in action
          </Link>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          className="mt-6 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5"
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
          className="mt-6"
          style={{ fontSize: '0.8125rem', lineHeight: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Book a demo', href: '/contact' },
            { label: 'Agent Auditor', href: '/agent-auditor' },
            { label: 'Install MCP server', href: '/downloads#mcp-server' },
            { label: 'Read the spec', href: 'https://github.com/peacprotocol/peac', external: true },
          ].map((link, i) => (
            <span key={link.label}>
              {i > 0 && (
                <span style={{ color: 'var(--color-fg-muted)', margin: '0 0.375rem', userSelect: 'none' }}>/</span>
              )}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-link-muted font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="hp-link-muted font-medium">
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </motion.div>

        {/* Verification flow */}
        <motion.div
          className="mt-10 sm:mt-16 md:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface-invert)' }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(250,250,247,0.08)' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[0.6875rem] font-mono" style={{ color: 'rgba(250,250,247,0.4)' }}>
                request &rarr; policy &rarr; signed record &rarr; verify
              </span>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Left: request + policy */}
              <div className="p-5 md:p-6" style={{ borderRight: '1px solid rgba(250,250,247,0.06)' }}>
                <pre className="text-[0.75rem] md:text-[0.8125rem] leading-relaxed font-mono overflow-x-auto" style={{ color: 'rgba(250,250,247,0.85)' }}>
                  <code>{`POST /api/bookings
Authorization: Bearer <agent-token>

// Originary evaluates
-> agent identity: verified
-> policy matched: bookings.default
-> decision: allow

// Signed record returned
PEAC-Receipt: eyJhbGciOiJFZERTQ...
// Ed25519 · portable · offline-verifiable`}</code>
                </pre>
              </div>

              {/* Right: verification result */}
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-semibold tracking-wide uppercase" style={{ color: 'rgba(250,250,247,0.4)' }}>
                    Local verification
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[0.625rem] font-semibold uppercase tracking-wide" style={{ background: 'rgba(40,200,64,0.15)', color: '#28C840' }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: '#28C840' }} />
                    Verified
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Signature', value: 'Ed25519 valid' },
                    { label: 'Issuer', value: 'https://api.example.com' },
                    { label: 'Agent', value: 'did:key:z6Mkf5r...' },
                    { label: 'Decision', value: 'allow' },
                    { label: 'Resource', value: 'POST /api/bookings' },
                    { label: 'Policy', value: 'bookings.default' },
                    { label: 'Record', value: 'portable, exportable' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-[0.6875rem] font-medium uppercase tracking-wide" style={{ color: 'rgba(250,250,247,0.35)' }}>
                        {row.label}
                      </span>
                      <span className="text-[0.8125rem] font-mono" style={{ color: 'rgba(250,250,247,0.75)' }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(250,250,247,0.08)' }}>
                  <span className="text-[0.6875rem] font-mono" style={{ color: 'rgba(250,250,247,0.35)' }}>
                    No network call required. Verified with public key alone.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats line */}
        <motion.p
          className="mt-6 text-[0.6875rem]"
          style={{ color: 'var(--color-fg-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {FACTS.publishedPackageCount} packages{' '}
          <span className="opacity-40">&#183;</span>{' '}
          {FACTS.testsCount.toLocaleString()} tests{' '}
          <span className="opacity-40">&#183;</span>{' '}
          Apache-2.0{' '}
          <span className="opacity-40">&#183;</span>{' '}
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
