'use client'

import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/content/faqs'

interface FaqAccordionProps {
  items: FaqItem[]
  title?: string
  subtitle?: string
}

export default function FaqAccordion({ items, title = 'Frequently Asked Questions', subtitle }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">{title}</h2>
        {subtitle && <p className="faq-subtitle">{subtitle}</p>}
      </div>

      <div className="faq-list" role="list">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const buttonId = `${baseId}-button-${index}`
          const panelId = `${baseId}-panel-${index}`

          return (
            <div key={index} className="faq-item" role="listitem">
              <button
                id={buttonId}
                className="faq-button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                type="button"
              >
                <span className="faq-question">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={panelId}
                className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .faq-section {
          padding: var(--space-16) 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .faq-title {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 var(--space-3) 0;
          letter-spacing: -0.02em;
        }

        .faq-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .faq-item {
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: border-color var(--duration-200) var(--ease-out),
                      box-shadow var(--duration-200) var(--ease-out);
        }

        .faq-item:hover {
          border-color: var(--border-hover);
          box-shadow: var(--shadow-card);
        }

        .faq-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          padding: var(--space-5) var(--space-6);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
        }

        .faq-button:focus-visible {
          outline: 2px solid var(--accent-brand);
          outline-offset: -2px;
          border-radius: var(--radius-xl);
        }

        .faq-question {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .faq-icon {
          flex-shrink: 0;
          color: var(--text-tertiary);
          transition: transform var(--duration-200) var(--ease-out),
                      color var(--duration-200) var(--ease-out);
        }

        .faq-item:hover .faq-icon {
          color: var(--accent-brand);
        }

        .faq-icon-open {
          transform: rotate(180deg);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--duration-200) var(--ease-out);
        }

        .faq-answer-open {
          grid-template-rows: 1fr;
        }

        .faq-answer > p {
          overflow: hidden;
          padding: 0 var(--space-6) var(--space-5) var(--space-6);
          margin: 0;
          font-size: var(--text-base);
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Ensure answer content is in DOM for accessibility/SEO even when hidden */
        .faq-answer[hidden] {
          display: grid;
          grid-template-rows: 0fr;
        }

        .faq-answer[hidden] > p {
          visibility: hidden;
          padding-top: 0;
          padding-bottom: 0;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .faq-section {
            padding: var(--space-12) 0;
          }

          .faq-title {
            font-size: var(--text-2xl);
          }

          .faq-subtitle {
            font-size: var(--text-base);
          }

          .faq-button {
            padding: var(--space-4) var(--space-4);
          }

          .faq-question {
            font-size: var(--text-sm);
          }

          .faq-answer > p {
            padding: 0 var(--space-4) var(--space-4) var(--space-4);
            font-size: var(--text-sm);
          }
        }

        @media (max-width: 480px) {
          .faq-section {
            padding: var(--space-8) 0;
          }

          .faq-header {
            margin-bottom: var(--space-6);
          }

          .faq-title {
            font-size: var(--text-xl);
          }

          .faq-list {
            gap: var(--space-2);
          }

          .faq-item {
            border-radius: var(--radius-lg);
          }

          .faq-button {
            padding: var(--space-3);
            gap: var(--space-2);
          }

          .faq-icon {
            width: 16px;
            height: 16px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .faq-icon,
          .faq-answer,
          .faq-item {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
