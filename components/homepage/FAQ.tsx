'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from './AnimateIn'

const faqs = [
  {
    q: 'Is this only for people building agents?',
    a: 'No. Originary is built first for operators of systems that agents access: APIs, tools, MCP servers, and platforms exposing actions.',
  },
  {
    q: 'Does this still work if agents do not comply?',
    a: 'Yes, partially. Originary can still enforce operator-side policy and generate operator-side records. Full cross-party proof gets stronger when both sides participate.',
  },
  {
    q: 'What happens if I stop using Originary?',
    a: 'Your records are portable signed artifacts. They remain valid and verifiable using the public key alone, with no dependency on Originary infrastructure.',
  },
  {
    q: 'Is this just observability?',
    a: 'No. Observability helps you inspect behavior. Originary adds access-time control and a portable signed record you can use outside one product.',
  },
  {
    q: 'Do I need PEAC to use Originary?',
    a: 'No. Originary delivers product value directly. PEAC keeps the records portable and standards-aligned.',
  },
]

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border)',
        padding: '0',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-6 text-left cursor-pointer"
        aria-expanded={isOpen}
        style={{
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          font: 'inherit',
        }}
      >
        <span
          style={{
            fontSize: '0.9375rem',
            fontWeight: 500,
            lineHeight: 1.4,
            color: 'var(--color-fg)',
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '1.75rem',
            height: '1.75rem',
            borderRadius: '50%',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'border-color 0.3s ease',
            borderColor: isOpen ? 'var(--color-border-strong)' : 'var(--color-border)',
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              color: 'var(--color-fg-muted)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--color-fg-secondary)',
                paddingBottom: '1.25rem',
                paddingRight: '1rem',
                margin: 0,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="hp-section hp-alt">
      <div className="hp-container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16">
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                FAQ
              </span>
              <h2
                className="hp-text-display-sm"
                style={{ color: 'var(--color-fg)', marginTop: '1.25rem' }}
              >
                Frequently asked questions
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div style={{ borderTop: '1px solid var(--color-border)' }}>
              {faqs.map((faq, i) => (
                <FAQItem key={faq.q} {...faq} defaultOpen={i === 0} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
