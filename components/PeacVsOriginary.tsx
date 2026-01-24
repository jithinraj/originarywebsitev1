'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

export default function PeacVsOriginary() {
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
    <section ref={sectionRef} className="comparison home-section">
      <div className="home-container">
        <div className="comparison-header reveal">
          <span className="home-eyebrow">Ecosystem</span>
          <h2 className="home-title">
            Open standard.
            <br />
            <span className="dim">Production implementations.</span>
          </h2>
        </div>

        <div className="comparison-grid stagger-reveal">
          <div className="comparison-card standard">
            <div className="card-label">Open standard</div>
            <h3>PEAC Protocol</h3>
            <p>
              A neutral standard with open governance and multiple independent implementations.
              Rail- and vendor-agnostic by design.
            </p>
            <ul>
              <li>Open governance</li>
              <li>Conformance testing</li>
              <li>Multiple implementations</li>
            </ul>
            <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" className="card-link">
              View on GitHub
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>

          <div className="comparison-divider">
            <span className="divider-line" />
            <span className="divider-badge">+</span>
            <span className="divider-line" />
          </div>

          <div className="comparison-card originary">
            <div className="card-label accent">Steward</div>
            <h3>Originary Platform</h3>
            <p>
              Deployable components, integrations, and operational tooling.
              Hosted options for production deployments.
            </p>
            <ul>
              <li>Managed hosting</li>
              <li>Enterprise support</li>
              <li>Compliance tooling</li>
            </ul>
            <span className="card-note">Production-ready in weeks.</span>
          </div>
        </div>

        <p className="comparison-footer reveal">
          Any implementer can generate and verify the same receipts.
        </p>
      </div>

      <style jsx>{`
        .comparison {
          border-top: 1px solid var(--border-default);
        }

        .comparison-header {
          max-width: 560px;
          margin-bottom: 56px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dim {
          color: var(--text-tertiary);
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 32px;
          align-items: stretch;
        }

        .comparison-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid var(--border-default);
          background: var(--surface-elevated);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comparison-card:hover {
          border-color: var(--border-default);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .card-label {
          align-self: flex-start;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          background: var(--surface-card);
          border: 1px solid var(--border-default);
        }

        .card-label.accent {
          color: var(--accent-brand);
          background: linear-gradient(135deg, var(--accent-brand-subtle) 0%, var(--accent-secondary-faint) 100%);
          border-color: var(--accent-brand-muted);
        }

        .comparison-card h3 {
          margin: 0;
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .comparison-card p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .comparison-card ul {
          margin: 8px 0 0;
          padding-left: 20px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .card-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .card-link:hover {
          gap: 10px;
          color: var(--accent-brand);
        }

        .card-note {
          margin-top: auto;
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--accent-brand);
        }

        .originary {
          border-color: var(--accent-brand-muted);
        }

        .originary:hover {
          border-color: var(--accent-brand);
        }

        .comparison-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 0;
        }

        .divider-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(180deg, transparent, var(--border-default), transparent);
        }

        .divider-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          color: var(--text-tertiary);
          font-weight: 600;
          font-size: 14px;
        }

        .comparison-footer {
          margin-top: 40px;
          text-align: center;
          color: var(--text-tertiary);
          font-size: 0.9375rem;
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
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stagger-reveal.in-view > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .stagger-reveal.in-view > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .stagger-reveal.in-view > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }

        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .comparison-divider {
            flex-direction: row;
            padding: 0 16px;
          }

          .divider-line {
            width: auto;
            height: 1px;
            flex: 1;
            background: linear-gradient(90deg, transparent, var(--border-default), transparent);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .stagger-reveal > * {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
