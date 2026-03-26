'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
// import { HeroBackground } from './HeroBackground'  // preserved: revisiting later
const ease = [0.16, 1, 0.3, 1] as const

const proofItems = [
  { label: 'Open source', href: null },
  { label: 'Self-hostable', href: null },
  { label: 'Offline verification', href: null },
  { label: 'Portable across vendors', href: null },
]

export function Hero() {
  return (
    <section className="hp-hero-bg pt-20 pb-10 sm:pt-28 sm:pb-14 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20">
      {/* <HeroBackground /> */}{/* preserved: revisiting later */}
      <div className="hp-container">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <span
            className="inline-flex items-center gap-2 h-7 px-3.5 rounded-full text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
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
            For APIs, tools, gateways, and MCP servers receiving automated traffic
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hp-text-hero mt-7 sm:mt-10 md:mt-12 max-w-[48rem] mx-auto text-center"
          style={{ color: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
        >
          Prove what agents did
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 sm:mt-6 md:mt-8 text-[0.9375rem] sm:text-[1.0625rem] md:text-[1.25rem] leading-relaxed max-w-[36rem] mx-auto text-center"
          style={{ color: 'var(--color-fg-secondary)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        >
          Originary verifies requests, applies policy, and returns signed records you can prove later, across teams, vendors, and audits.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-7 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
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
          <Link href="/developers" className="hp-btn-secondary">
            Start here
          </Link>
        </motion.div>

        {/* Tertiary link */}
        <motion.div
          className="mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          <Link
            href="/agent-auditor"
            className="text-[0.8125rem]"
            style={{ color: 'var(--color-fg-muted)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Already have a signed record? Open Agent Auditor
          </Link>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          className="mt-5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {proofItems.map((item, i) => (
            <span key={item.label} className="flex items-center gap-2">
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
              {item.href ? (
                <Link
                  href={item.href}
                  className="hp-text-caption"
                  style={{ color: 'var(--color-fg-muted)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="hp-text-caption"
                  style={{ color: 'var(--color-fg-muted)' }}
                >
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
