'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimateIn } from './AnimateIn'

const faqs = [
  {
    q: 'What\u0027s the difference between a log and a signed record?',
    a: 'A log is a local observation inside your system. A signed record is an exportable artifact another party can verify independently. Logs help you debug. Signed records help you prove.',
  },
  {
    q: 'What is a verifiable interaction record?',
    a: 'A signed interaction record captures what happened, what policy or terms applied, who issued the record, and when. Anyone with the issuer\u0027s public key can verify it offline.',
  },
  {
    q: 'Is this only for people building AI agents?',
    a: 'No. It is also for API publishers, MCP server operators, priced API teams, security reviewers, compliance teams, and any workflow where automated requests cross organizational boundaries.',
  },
  {
    q: 'Does this still work if agents do not comply?',
    a: 'Yes. The point is not to assume good behavior. The point is to return records that help you inspect what happened, what was allowed, and what another party can verify later.',
  },
  {
    q: 'What happens if I stop using Originary?',
    a: 'Your records remain valid and verifiable with the issuer\u0027s public key. Verification does not require an Originary callback.',
  },
  {
    q: 'Is this just observability?',
    a: 'No. Observability helps teams understand internal behavior. Signed records help teams prove what happened across boundaries.',
  },
  {
    q: 'Do I need PEAC to use Originary?',
    a: 'Originary is built on PEAC. In practice, you use the product surface while keeping the underlying record format and verification model open.',
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
