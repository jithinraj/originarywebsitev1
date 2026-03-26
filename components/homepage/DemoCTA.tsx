'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function DemoCTA() {
  return (
    <section className="hp-section">
      <div className="hp-container">
        <motion.div
          className="relative rounded-xl sm:rounded-2xl px-5 py-10 sm:p-10 md:p-14 lg:p-20 overflow-hidden"
          style={{ background: 'var(--color-fg)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_100%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left column: Developers */}
            <div className="text-center md:text-left">
              <h2
                className="text-[1.75rem] sm:text-[2rem] font-bold tracking-tight"
                style={{ color: 'var(--color-fg-inverse)' }}
              >
                Developers
              </h2>
              <p
                className="mt-3 text-[1rem] leading-relaxed"
                style={{ color: 'rgba(250,250,247,0.55)' }}
              >
                Open a signed record or start issuing one
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/agent-auditor" className="hp-cta-light">
                  Try Agent Auditor
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/developers" className="hp-cta-outline">
                  Start here
                </Link>
              </div>
            </div>

            {/* Right column: Teams */}
            <div className="text-center md:text-left">
              <h2
                className="text-[1.75rem] sm:text-[2rem] font-bold tracking-tight"
                style={{ color: 'var(--color-fg-inverse)' }}
              >
                Teams
              </h2>
              <p
                className="mt-3 text-[1rem] leading-relaxed"
                style={{ color: 'rgba(250,250,247,0.55)' }}
              >
                Planning a deployment or procurement review?
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link href="/contact" className="hp-cta-light">
                  Talk to an engineer
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 7h7m0 0L7.5 4m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/trust" className="hp-cta-outline">
                  Security and procurement
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
