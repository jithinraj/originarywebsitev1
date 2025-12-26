'use client'

import { useEffect, useRef, useState } from 'react'
import { Scale, Bot, Database, Globe } from 'lucide-react'

const stakeholders = [
  {
    icon: Scale,
    title: 'Enterprises & Regulators',
    description: 'Move from "trust our logs" to verifiable decision records. Portable evidence for audits and disputes.',
    color: '#635BFF'
  },
  {
    icon: Bot,
    title: 'AI Platforms & Agents',
    description: 'Clear terms, predictable enforcement, verifiable outcomes. Reduce ambiguity across tool use.',
    color: '#00D4AA'
  },
  {
    icon: Database,
    title: 'APIs & Data Providers',
    description: 'Make access decisions enforceable and auditable. Optional settlement without platform lock-in.',
    color: '#FF6B35'
  },
  {
    icon: Globe,
    title: 'Standards & Ecosystem',
    description: 'Adopt a neutral layer that stays rail-agnostic via adapters. Build without ceding control.',
    color: '#3B82F6'
  }
]

export default function StakeholderFit() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="stakeholder-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">WHO IT'S FOR</div>
          <h2 className="section-title">
            Built for agent truth
          </h2>
          <p className="section-description">
            Different stakeholders, same need: verifiable records of what happened,
            under which terms, with cryptographic proof.
          </p>
        </div>

        <div className={`stakeholder-grid ${isVisible ? 'visible' : ''}`}>
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon
            return (
              <div
                key={stakeholder.title}
                className="stakeholder-card"
                style={{ '--delay': `${index * 0.08}s`, '--accent': stakeholder.color } as React.CSSProperties}
              >
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <h3 className="card-title">{stakeholder.title}</h3>
                <p className="card-description">{stakeholder.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .stakeholder-section {
          padding: var(--space-24) 0;
          background: var(--white);
          position: relative;
        }

        /* Section header */
        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--brand-primary);
          background: rgba(99, 91, 255, 0.08);
          border: 1px solid rgba(99, 91, 255, 0.15);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          margin-bottom: var(--space-4);
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .section-description {
          font-size: var(--text-lg);
          line-height: 1.7;
          color: var(--gray-600);
          max-width: 520px;
          margin: 0 auto;
        }

        /* Stakeholder grid */
        .stakeholder-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Card */
        .stakeholder-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 16px;
          padding: var(--space-6);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--delay);
        }

        .stakeholder-grid.visible .stakeholder-card {
          opacity: 1;
          transform: translateY(0);
        }

        .stakeholder-card:hover {
          border-color: color-mix(in srgb, var(--accent) 30%, transparent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
          color: var(--accent);
          transition: all 0.3s ease;
        }

        .stakeholder-card:hover .card-icon {
          background: var(--accent);
          color: white;
          transform: scale(1.05);
        }

        .card-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-3);
        }

        .card-description {
          font-size: var(--text-sm);
          line-height: 1.6;
          color: var(--gray-600);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .stakeholder-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stakeholder-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  )
}
