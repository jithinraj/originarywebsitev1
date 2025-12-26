'use client'

import { useEffect, useRef } from 'react'
import { FileText, Shield, Receipt } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Publish policy',
    desc: 'Deploy a machine-readable policy at /.well-known/peac.txt defining access terms and payment requirements',
    icon: FileText,
    color: '#635bff',
  },
  {
    num: '02',
    title: 'Enforce at edge',
    desc: 'Allow, deny, or request payment before serving the response with HTTP 402 status codes',
    icon: Shield,
    color: '#00d4aa',
  },
  {
    num: '03',
    title: 'Return receipt',
    desc: 'Sign and return a cryptographic PEAC-Receipt that verifies offline with your public key',
    icon: Receipt,
    color: '#f59e0b',
  }
]

export default function HowItWorksNew() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="how">
      <div className="how-container">
        <div className="how-header reveal">
          <span className="how-label">How it works</span>
          <h2 className="how-title">
            Three steps to verifiable interactions
          </h2>
        </div>

        <div className="how-steps">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`step reveal delay-${i}`}
              style={{ '--accent': step.color } as React.CSSProperties}
            >
              <div className="step-number">{step.num}</div>

              <div className="step-icon">
                <step.icon size={28} strokeWidth={2} />
              </div>

              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-footer reveal delay-3">
          <p className="footer-note">
            Works across all protocols and payment rails
          </p>
        </div>
      </div>

      <style jsx>{`
        .how {
          padding: 140px 0;
          background: #fafafa;
          position: relative;
        }

        .how-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .how-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .how-label {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #737373;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .how-title {
          font-size: 56px;
          font-weight: 600;
          letter-spacing: -0.04em;
          color: #000000;
          margin: 0;
          line-height: 1.1;
        }

        .how-steps {
          display: grid;
          gap: 20px;
          margin-bottom: 80px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 36px 40px;
          background: #ffffff;
          border: 1px solid transparent;
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .step::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step:hover {
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        .step:hover::before {
          opacity: 1;
        }

        .step-number {
          flex-shrink: 0;
          font-family: var(--font-mono);
          font-size: 32px;
          font-weight: 700;
          color: var(--accent);
          opacity: 0.3;
          line-height: 1;
          min-width: 64px;
        }

        .step-icon {
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 14px;
          color: var(--accent);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step:hover .step-icon {
          background: var(--accent);
          border-color: var(--accent);
          color: #ffffff;
          transform: scale(1.05);
        }

        .step-content {
          flex: 1;
          min-width: 0;
        }

        .step-title {
          font-size: 22px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }

        .step-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #525252;
          margin: 0;
          font-weight: 400;
        }

        .how-footer {
          text-align: center;
          padding: 40px;
          background: #ffffff;
          border-radius: 16px;
        }

        .footer-note {
          font-size: 15px;
          color: #737373;
          margin: 0;
          font-weight: 500;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-0 { transition-delay: 0ms; }
        .delay-1 { transition-delay: 80ms; }
        .delay-2 { transition-delay: 160ms; }
        .delay-3 { transition-delay: 240ms; }

        @media (max-width: 768px) {
          .how {
            padding: 100px 0;
          }

          .how-header {
            margin-bottom: 60px;
          }

          .how-title {
            font-size: 40px;
          }

          .how-steps {
            margin-bottom: 60px;
          }

          .step {
            flex-wrap: wrap;
            gap: 24px;
            padding: 32px 28px;
          }

          .step-number {
            order: -1;
            width: 100%;
            font-size: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .step,
          .step-icon {
            transition: none;
          }

          .step:hover .step-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
