'use client'

import { useEffect, useRef } from 'react'
import { FileText, Receipt, Plug } from 'lucide-react'

const invariants = [
  {
    num: '01',
    title: 'Policy Discovery',
    text: 'Standardized location and format for machine-readable terms. Clients resolve policy deterministically at /.well-known/peac.txt.',
    icon: FileText,
    color: 'primary',
  },
  {
    num: '02',
    title: 'Canonical Receipts',
    text: 'Signed receipts as the portable decision record. Verification stays offline-capable and implementation-agnostic.',
    icon: Receipt,
    color: 'secondary',
  },
  {
    num: '03',
    title: 'Adapters',
    text: 'Map existing protocols and rails into one receipt format. Receipts remain portable as infrastructure changes.',
    icon: Plug,
    color: 'tertiary',
  }
]

export default function CoreInvariants() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Guard against SSR and browsers without IntersectionObserver
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      // Fallback: add class immediately
      const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-reveal')
      elements?.forEach((el) => el.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="invariants home-section">
      <div className="home-container">
        <div className="invariants-header reveal">
          <span className="home-eyebrow">The primitive</span>
          <h2 className="home-title">
            One primitive: signed receipts
            <br />
            <span className="dim">bound to policy.</span>
          </h2>
          <p className="home-lede">
            PEAC returns a signed receipt that can be verified offline and replayed
            in audits, billing, or incident review. When policies exist, receipts
            bind to the policy state at decision time.
          </p>
        </div>

        <div className="invariants-grid stagger-reveal">
          {invariants.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.num} className={`invariant-card color-${item.color}`}>
                <div className="card-glow" />
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="card-num">{item.num}</span>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .invariants {
          border-top: 1px solid var(--border-default);
          border-bottom: 1px solid var(--border-default);
        }

        .invariants-header {
          max-width: 640px;
          margin-bottom: var(--space-16);
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .dim {
          color: var(--text-tertiary);
        }

        .invariants-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .invariant-card {
          position: relative;
          padding: var(--space-8) var(--space-6);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .invariant-card:hover {
          border-color: var(--border-default);
          box-shadow: var(--shadow-xl);
          transform: translateY(-6px);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, var(--accent-brand-subtle) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .invariant-card:hover .card-glow {
          opacity: 1;
        }

        .color-secondary .card-glow {
          background: radial-gradient(circle, var(--accent-secondary-subtle) 0%, transparent 60%);
        }

        .color-tertiary .card-glow {
          background: radial-gradient(circle, var(--accent-brand-faint) 0%, var(--accent-secondary-faint) 50%, transparent 70%);
        }

        .card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-brand-subtle) 0%, var(--accent-secondary-faint) 100%);
          border-radius: var(--radius-xl);
          color: var(--accent-brand);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .invariant-card:hover .card-icon {
          transform: scale(1.08);
        }

        .color-secondary .card-icon {
          background: linear-gradient(135deg, var(--accent-secondary-subtle) 0%, var(--accent-secondary-faint) 100%);
          color: var(--brand-secondary);
        }

        .color-tertiary .card-icon {
          background: linear-gradient(135deg, var(--accent-brand-subtle) 0%, var(--accent-secondary-subtle) 100%);
          color: var(--accent-brand);
        }

        .card-num {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          padding: 4px 10px;
          background: var(--surface-card);
          border-radius: var(--radius-md);
        }

        .card-title {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .card-text {
          font-size: var(--text-sm);
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-reveal > * {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stagger-reveal.in-view > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .stagger-reveal.in-view > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .stagger-reveal.in-view > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }

        @media (max-width: 900px) {
          .invariants-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .invariant-card {
            padding: var(--space-6) var(--space-5);
          }

          .card-title {
            font-size: var(--text-lg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .stagger-reveal > * {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .card-icon {
            transition: none;
          }

          .card-glow {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
