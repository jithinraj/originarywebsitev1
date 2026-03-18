'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function DemoCTA() {
  return (
    <section className="hp-section">
      <div className="hp-container">
        <motion.div
          className="relative rounded-2xl px-6 py-12 sm:p-10 md:p-14 lg:p-20 text-center overflow-hidden"
          style={{ background: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_100%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
          <div className="relative">
            <h2
              className="hp-text-display max-w-[32rem] mx-auto"
              style={{ color: 'var(--color-fg-inverse)' }}
            >
              See how a request becomes a signed record
            </h2>
            <p
              className="mt-6 text-[1.0625rem] max-w-md mx-auto leading-relaxed"
              style={{ color: 'rgba(250,250,247,0.55)' }}
            >
              Walk through a real flow: agent request, policy decision,
              portable signed record. Takes five minutes.
            </p>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="hp-cta-light"
              >
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/developers"
                className="hp-cta-outline"
              >
                Developer quickstart
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
