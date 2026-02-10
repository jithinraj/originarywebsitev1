'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProtocolVsCompany() {
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
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <div className="text-side">
            <span className="eyebrow">Architecture</span>
            <h2 className="title">
              Open standard,
              <br />
              <span className="title-accent">production implementations</span>
            </h2>
            <p className="description">
              PEAC is designed for multiple independent implementations.
              Originary provides one reference stack - you can build your own.
            </p>

            <div className="links">
              <Link href="/peac" className="link-primary">
                <span>Read the Spec</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/pilots" className="link-secondary">
                <span>View Pilots</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="visual-side">
            <div className="stack-visual">
              <div className="stack-layer layer-protocol">
                <span className="layer-label">PEAC Protocol</span>
                <span className="layer-tag">Open Standard</span>
              </div>
              <div className="stack-connector" />
              <div className="stack-layer layer-originary">
                <span className="layer-label">Originary</span>
                <span className="layer-tag">Reference Implementation</span>
              </div>
              <div className="stack-connector" />
              <div className="stack-layer layer-your">
                <span className="layer-label">Your Stack</span>
                <span className="layer-tag">Build Your Own</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 140px 0;
          background: #0a0a0b;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 var(--space-8);
        }

        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .content > * {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .content.visible > * {
          opacity: 1;
          transform: translateY(0);
        }

        .content.visible .visual-side {
          transition-delay: 0.15s;
        }

        /* Text side */
        .eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-brand);
          margin-bottom: 20px;
        }

        .title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 20px;
        }

        .title-accent {
          color: var(--text-muted);
        }

        .description {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-tertiary);
          margin-bottom: 32px;
        }

        .links {
          display: flex;
          gap: 16px;
        }

        .link-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #0a0a0b;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .link-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
        }

        .link-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          padding: 12px 24px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .link-secondary:hover {
          color: white;
        }

        /* Visual side */
        .stack-visual {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .stack-layer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-radius: 12px;
          background: var(--surface-card);
          border: 1px solid var(--border-default);
        }

        .layer-protocol {
          border-color: var(--accent-brand-glow);
          background: var(--accent-brand-faint);
        }

        .layer-originary {
          border-color: var(--accent-secondary-border);
          background: var(--accent-secondary-faint);
        }

        .layer-your {
          border-color: var(--accent-warning-border);
          background: var(--accent-warning-faint);
        }

        .layer-label {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }

        .layer-tag {
          font-size: 12px;
          color: var(--text-muted);
          padding: 4px 10px;
          background: var(--border-subtle);
          border-radius: 6px;
        }

        .stack-connector {
          width: 2px;
          height: 16px;
          background: var(--glass-border-hover);
          margin-left: 40px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .links {
            justify-content: center;
          }

          .stack-visual {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
