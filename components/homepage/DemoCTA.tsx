'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function DemoCTA() {
  return (
    <section className="hp-section">
      <div className="hp-container">
        <motion.div
          className="relative rounded-xl sm:rounded-2xl px-5 py-10 sm:p-10 md:p-14 lg:p-20 overflow-hidden"
          style={{ background: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_100%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
          <div className="relative text-center md:text-left max-w-[42rem]">
            <h2
              className="text-[1.75rem] sm:text-[2rem] font-bold tracking-tight"
              style={{ color: 'var(--color-fg-inverse)' }}
            >
              Deploy Originary. Keep your records portable.
            </h2>
            <p
              className="mt-3 text-[1rem] leading-relaxed"
              style={{ color: 'rgba(247,249,252,0.55)' }}
            >
              Originary is the production product surface. PEAC is the open standard underneath. You can self-host, verify offline, and keep your records portable across teams and vendors.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/products/verify" className="hp-cta-light whitespace-nowrap">
                See Originary Verify
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/developers" className="hp-cta-outline whitespace-nowrap">
                Start here
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
