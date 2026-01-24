'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, Receipt, Puzzle } from 'lucide-react'

const invariants = [
  {
    icon: FileText,
    title: 'Terms',
    description: 'Publish machine-readable interaction terms as a policy file. Express access rules, consent, attribution, and settlement requirements.'
  },
  {
    icon: Receipt,
    title: 'Receipts',
    description: 'Return a signed receipt as the portable decision record. Anyone can verify it offline and tie it to the policy snapshot.'
  },
  {
    icon: Puzzle,
    title: 'Adapters',
    description: 'Integrate across rails and protocols through adapters. Keep the receipt portable even when infrastructure changes.'
  }
]

export default function ThreeInvariants() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true) // Fallback: assume visible
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="invariants">
      <div className="container">
        <div className={`header ${isVisible ? 'visible' : ''}`}>
          <span className="eyebrow">The Standard</span>
          <h2 className="headline">Three invariants</h2>
          <p className="intro">
            PEAC is intentionally minimal: it standardizes what must be shared, verified,
            and replayed. Everything else stays adapter-friendly.
          </p>
        </div>

        <div className={`cards ${isVisible ? 'visible' : ''}`}>
          {invariants.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="card-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .invariants {
          padding: 140px 0;
          background: var(--surface-elevated);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 64px;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-brand);
          margin-bottom: 16px;
        }

        .headline {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .intro {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          padding: 32px 28px;
          background: var(--surface-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--delay);
        }

        .cards.visible .card {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover {
          background: var(--surface-elevated);
          border-color: var(--border-default);
          box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .card:hover .card-icon {
          background: var(--accent-brand);
          border-color: var(--accent-brand);
          color: white;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 900px) {
          .cards {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .card {
            padding: 28px 24px;
          }
        }

        @media (max-width: 640px) {
          .invariants {
            padding: 100px 0;
          }

          .container {
            padding: 0 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header,
          .card {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
