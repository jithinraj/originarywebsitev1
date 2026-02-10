'use client'

import { useEffect, useRef, useState } from 'react'
import { FileText, BadgeCheck, Layers } from 'lucide-react'

const cards = [
  {
    icon: FileText,
    title: 'Terms',
    description: 'Publish machine-readable policies via /.well-known/peac.txt',
    color: 'var(--accent-brand)'
  },
  {
    icon: BadgeCheck,
    title: 'Receipts',
    description: 'Every outcome returns a signed, portable PEAC-Receipt',
    color: 'var(--accent-secondary)'
  },
  {
    icon: Layers,
    title: 'Adapters',
    description: 'Works across protocols and payment rails without lock-in',
    color: 'var(--accent-warning)'
  }
]

export default function StandardInvariants() {
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
    <section ref={sectionRef} className="invariants-section">
      <div className="container">
        <div className={`header ${isVisible ? 'visible' : ''}`}>
          <h2 className="title">
            Three primitives.
            <span className="title-muted"> That&apos;s the standard.</span>
          </h2>
        </div>

        <div className={`cards ${isVisible ? 'visible' : ''}`}>
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="card"
                style={{ '--delay': `${index * 0.1}s`, '--accent': card.color } as React.CSSProperties}
              >
                <div className="card-icon">
                  <Icon size={24} />
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .invariants-section {
          padding: 120px 0;
          background: #0a0a0b;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 var(--space-8);
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: white;
        }

        .title-muted {
          color: var(--text-muted);
        }

        /* Cards */
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background: var(--surface-card);
          border: 1px solid var(--border-default);
          border-radius: 20px;
          padding: 32px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--delay);
        }

        .cards.visible .card {
          opacity: 1;
          transform: translateY(0);
        }

        .card:hover {
          background: var(--border-subtle);
          border-color: var(--border-hover);
          transform: translateY(-4px);
        }

        .card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--accent);
          transition: all 0.3s ease;
        }

        .card:hover .card-icon {
          background: var(--accent);
          color: white;
          transform: scale(1.05);
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin-bottom: 12px;
        }

        .card-description {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 800px) {
          .cards {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
