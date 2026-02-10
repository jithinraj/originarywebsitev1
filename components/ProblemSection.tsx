'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProblemSection() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="problem-section">
      {/* Gradient fade from hero */}
      <div className="gradient-fade" />

      <div className="container">
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <div className="text-block">
            <h2 className="title">
              Internal logs aren&apos;t
              <br />
              <span className="title-accent">shared truth</span>
            </h2>
            <p className="description">
              As agents interact with services on our behalf, internal logs lose
              credibility in disputes. The missing piece: a neutral, portable record
              of what happened, under which terms, with cryptographic proof.
            </p>
          </div>

          <div className="visual-block">
            <div className="comparison">
              <div className="comparison-item old">
                <div className="item-header">
                  <span className="item-icon">⚠</span>
                  <span className="item-label">Internal Logs</span>
                </div>
                <div className="item-status bad">Disputed in court</div>
              </div>

              <div className="comparison-arrow">→</div>

              <div className="comparison-item new">
                <div className="item-header">
                  <span className="item-icon">✓</span>
                  <span className="item-label">PEAC Receipt</span>
                </div>
                <div className="item-status good">Verified anywhere</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problem-section {
          position: relative;
          padding: 160px 0 120px;
          background: #0a0a0b;
        }

        /* Gradient fade from hero */
        .gradient-fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, #0a0a0b 0%, transparent 100%);
          pointer-events: none;
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

        .content.visible .visual-block {
          transition-delay: 0.15s;
        }

        /* Text */
        .title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 24px;
        }

        .title-accent {
          background: linear-gradient(135deg, var(--accent-error) 0%, var(--accent-tertiary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-tertiary);
        }

        /* Visual */
        .comparison {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .comparison-item {
          flex: 1;
          background: var(--surface-card);
          border: 1px solid var(--border-default);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .comparison-item.old {
          border-color: var(--accent-error-border);
        }

        .comparison-item.new {
          border-color: var(--accent-secondary-border);
          background: var(--accent-secondary-faint);
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .item-icon {
          font-size: 20px;
        }

        .old .item-icon {
          color: var(--accent-error);
        }

        .new .item-icon {
          color: var(--accent-secondary);
        }

        .item-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .item-status {
          font-size: 13px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
          display: inline-block;
        }

        .item-status.bad {
          background: var(--accent-error-subtle);
          color: var(--accent-error);
        }

        .item-status.good {
          background: var(--accent-secondary-muted);
          color: var(--accent-secondary);
        }

        .comparison-arrow {
          font-size: 24px;
          color: var(--border-on-brand);
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .comparison {
            flex-direction: column;
            max-width: 320px;
            margin: 0 auto;
          }

          .comparison-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  )
}
