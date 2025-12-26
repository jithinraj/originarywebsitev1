'use client'

import { useEffect, useRef } from 'react'

import { FileText, Shield, Receipt } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Publish policy',
    desc: 'Deploy a machine-readable policy at /.well-known/peac.txt',
    icon: FileText,
    color: '#635bff',
  },
  {
    num: '02',
    title: 'Enforce at edge',
    desc: 'Allow, deny, or request payment before serving the response',
    icon: Shield,
    color: '#00d4aa',
  },
  {
    num: '03',
    title: 'Return receipt',
    desc: 'Sign and return a PEAC-Receipt that verifies offline',
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
          <h2 className="how-title">How it works</h2>
          <p className="how-description">
            Three steps to verifiable agent interactions
          </p>
        </div>

        <div className="how-steps">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`step reveal delay-${i}`}
              style={{ '--step-color': step.color } as React.CSSProperties}
            >
              <div className="step-icon-container">
                <step.icon size={24} strokeWidth={2} className="step-icon" />
              </div>
              <span className="step-num">{step.num}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how {
          padding: 160px 0;
          background: linear-gradient(180deg, white 0%, #f8f9fa 50%, #f5f5f7 100%);
          position: relative;
          overflow: hidden;
        }

        .how::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
        }

        .how-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .how-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .how-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--brand-primary);
          text-transform: uppercase;
          margin: 0 0 20px;
          padding: 8px 16px;
          background: rgba(99, 91, 255, 0.06);
          border: 1px solid rgba(99, 91, 255, 0.12);
          border-radius: 100px;
        }

        .how-description {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.035em;
          color: var(--gray-900);
          margin: 0;
          line-height: 1.15;
        }

        .how-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step {
          padding: 40px 32px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .step::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--step-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .step::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, color-mix(in srgb, var(--step-color) 4%, transparent) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .step:hover {
          border-color: color-mix(in srgb, var(--step-color) 25%, transparent);
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--step-color) 12%, transparent),
            0 20px 50px -12px rgba(0, 0, 0, 0.12),
            0 8px 20px -8px color-mix(in srgb, var(--step-color) 15%, transparent);
          transform: translateY(-6px);
        }

        .step:hover::before {
          transform: scaleX(1);
        }

        .step:hover::after {
          opacity: 1;
        }

        .step-icon-container {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--step-color) 10%, transparent);
          border-radius: 14px;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .step:hover .step-icon-container {
          background: color-mix(in srgb, var(--step-color) 15%, transparent);
          transform: scale(1.05);
        }

        .step-icon-container :global(.step-icon) {
          color: var(--step-color);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step:hover .step-icon-container :global(.step-icon) {
          transform: scale(1.1);
        }

        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--step-color);
          margin-bottom: 16px;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--gray-900);
          margin: 0 0 12px;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .step-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--gray-600);
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-0 { transition-delay: 0ms; }
        .delay-1 { transition-delay: 100ms; }
        .delay-2 { transition-delay: 200ms; }

        @media (max-width: 900px) {
          .how-steps {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .step {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
          }

          .step-icon-container {
            flex-shrink: 0;
            margin-bottom: 0;
          }

          .step-num {
            margin-bottom: 8px;
          }
        }

        @media (max-width: 640px) {
          .how {
            padding: 100px 0;
          }

          .how-header {
            margin-bottom: 56px;
          }

          .how-title {
            font-size: 11px;
            padding: 6px 12px;
          }

          .step {
            flex-direction: column;
            padding: 28px;
            gap: 0;
          }

          .step-icon-container {
            width: 48px;
            height: 48px;
            margin-bottom: 20px;
            border-radius: 12px;
          }

          .step-icon-container :global(.step-icon) {
            width: 20px;
            height: 20px;
          }

          .step-title {
            font-size: 19px;
          }

          .step-desc {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .how {
            padding: 80px 0;
          }

          .step {
            padding: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .step {
            transition: none;
          }

          .step:hover {
            transform: none;
          }

          .step::before {
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
