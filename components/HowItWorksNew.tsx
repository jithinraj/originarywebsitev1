'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PublishIllustration, EnforceIllustration, ReceiptIllustration } from './illustrations'

const steps = [
  {
    id: 'publish',
    num: '01',
    title: 'Publish policy',
    tagline: 'Machine-readable terms',
    desc: 'Deploy a policy at /.well-known/peac.txt defining access terms and payment requirements. Agents discover it automatically.',
    Illustration: PublishIllustration,
    gradient: 'linear-gradient(135deg, var(--gray-950) 0%, var(--gray-800) 100%)',
    code: `# /.well-known/peac.txt
version: peac-policy/0.1
issuer: api.example.com
verify: /.well-known/jwks.json

rules:
  /api/*:
    access: paid
    price: 0.001 USD
    methods: [GET, POST]`,
  },
  {
    id: 'enforce',
    num: '02',
    title: 'Enforce at edge',
    tagline: 'Real-time decisions',
    desc: 'Allow, deny, or request payment before serving responses. HTTP 402 status codes trigger programmatic settlement.',
    Illustration: EnforceIllustration,
    gradient: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)',
    code: `HTTP/1.1 402 Payment Required
WWW-Authenticate: PEAC realm="api"
PEAC-Price: 0.001 USD
PEAC-Accept: x402, invoice

{
  "error": "payment_required",
  "price": "0.001 USD"
}`,
  },
  {
    id: 'receipt',
    num: '03',
    title: 'Return receipt',
    tagline: 'Verified record',
    desc: 'Sign and return a PEAC-Receipt. Verifies offline with your public key. Portable across any system.',
    Illustration: ReceiptIllustration,
    gradient: 'linear-gradient(135deg, var(--gray-600) 0%, var(--gray-500) 100%)',
    code: `PEAC-Receipt: eyJhbGciOiJFZERTQSJ9...

// Decoded payload
{
  "typ": "peac-receipt/0.1",
  "iss": "api.example.com",
  "iat": 1737290800,
  "decision": "allow"
}`,
  }
]

export default function HowItWorksNew() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="how">
      <div className="section-transition-top" aria-hidden="true" />

      <div className="how-bg">
        <div className="bg-gradient" />
        <div className="bg-mesh" />
      </div>

      <div className="how-container">
        <div className={`how-header ${isVisible ? 'visible' : ''}`}>
          <div className="label-wrapper">
            <span className="how-label">How it works</span>
          </div>
          <h2 className="how-title">Three steps to verifiable interactions</h2>
          <p className="how-subtitle">Publish terms, enforce decisions, prove what happened</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`step-card ${isVisible ? 'visible' : ''} ${expandedStep === i ? 'expanded' : ''}`}
              style={{ '--delay': `${i * 100 + 300}ms` } as React.CSSProperties}
              onClick={() => setExpandedStep(expandedStep === i ? null : i)}
            >
              <div className="card-glow" style={{ background: step.gradient }} />

              <div className="card-header">
                <span className="step-num">{step.num}</span>
                <div className="step-illustration">
                  <step.Illustration size={64} />
                </div>
              </div>

              <div className="card-body">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-tagline">{step.tagline}</p>
                <p className="step-desc">{step.desc}</p>
              </div>

              {expandedStep === i && (
                <div className="card-code">
                  <pre className="step-code-block">
                    <code>{step.code}</code>
                  </pre>
                  {i === 2 && (
                    <Link href="/verify" className="run-demo-btn">
                      Run demo
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  )}
                </div>
              )}

              <div className="card-expand-hint">
                {expandedStep === i ? 'Click to collapse' : 'Click to see code'}
              </div>

              <div className="card-indicator" style={{ background: step.gradient }} />
            </div>
          ))}
        </div>

        <div className={`code-section ${isVisible ? 'visible' : ''}`}>
          <div className="code-header-bar">
            <div className="code-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="code-filename">PEAC-Receipt</span>
          </div>
          <pre className="code-block">
            <code>
              <span className="code-comment">{`// Signature-verified record`}</span>{'\n'}
              <span className="code-key">PEAC-Receipt</span><span className="code-punct">:</span> <span className="code-string">eyJhbGciOiJFZDI1NTE5...</span>{'\n'}
              {'\n'}
              <span className="code-comment">{`// Decoded payload`}</span>{'\n'}
              <span className="code-punct">{`{`}</span>{'\n'}
              {'  '}<span className="code-key">&quot;v&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;0.10.0&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;iss&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;api.example.com&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;sub&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;agent:example-client&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;iat&quot;</span><span className="code-punct">:</span> <span className="code-number">1703894400</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;action&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;api.query&quot;</span><span className="code-punct">,</span>{'\n'}
              {'  '}<span className="code-key">&quot;status&quot;</span><span className="code-punct">:</span> <span className="code-string">&quot;success&quot;</span>{'\n'}
              <span className="code-punct">{`}`}</span>
            </code>
          </pre>
        </div>

        <div className={`how-cta ${isVisible ? 'visible' : ''}`}>
          <Link href="/demo" className="cta-primary">
            See it in action
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/developers" className="cta-secondary">
            Read the docs
          </Link>
        </div>

        <div className={`how-footer ${isVisible ? 'visible' : ''}`}>
          <div className="footer-badges">
            <span className="badge">
              <span className="badge-dot" />
              Rail-neutral by design
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot" />
              Protocol agnostic
            </span>
            <span className="badge-sep" />
            <span className="badge">
              <span className="badge-dot" />
              Offline verification
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how {
          position: relative;
          padding: 180px 0;
          background: linear-gradient(180deg, var(--gray-50) 0%, var(--gray-100) 50%, var(--gray-50) 100%);
          overflow: hidden;
        }

        .section-transition-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(180deg, var(--gray-50) 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .how-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 20% 0%, rgba(99, 91, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 30%, rgba(99, 91, 255, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(10, 10, 10, 0.05) 0%, transparent 50%);
        }

        .bg-mesh {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99, 91, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 91, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%);
        }

        .how-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .how-header {
          text-align: center;
          margin-bottom: 72px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .how-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .label-wrapper {
          margin-bottom: 20px;
        }

        .how-label {
          display: inline-block;
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--gray-500);
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--gray-950) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .how-title {
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--gray-950);
          margin: 0 0 var(--space-4);
          line-height: 1.05;
        }

        .how-subtitle {
          font-size: clamp(var(--text-base), 2vw, var(--text-lg));
          color: var(--gray-600);
          margin: 0;
          line-height: 1.5;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 72px;
        }

        .step-card {
          position: relative;
          padding: var(--space-8);
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: var(--radius-2xl);
          cursor: pointer;
          transition: all var(--duration-500) cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(40px);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .step-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease, box-shadow 0.5s ease;
          transition-delay: var(--delay);
        }

        .step-card:hover {
          border-color: rgba(99, 91, 255, 0.15);
          box-shadow: 0 12px 40px rgba(99, 91, 255, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 20px 20px 0 0;
        }

        .step-card:hover .card-glow {
          opacity: 1;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--gray-400);
          letter-spacing: 0.08em;
        }

        .step-illustration {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-card:hover .step-illustration {
          transform: scale(1.05);
        }

        .card-body {
          position: relative;
        }

        .step-title {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--gray-950);
          margin: 0 0 var(--space-2);
          letter-spacing: -0.03em;
        }

        .step-tagline {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-500);
          margin: 0 0 var(--space-4);
          letter-spacing: 0.01em;
        }

        .step-desc {
          font-size: var(--text-sm);
          line-height: 1.7;
          color: var(--gray-600);
          margin: 0;
        }

        .card-indicator {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 4px;
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 20px 0 0 20px;
        }

        .step-card:hover .card-indicator {
          opacity: 1;
        }

        .card-expand-hint {
          font-size: var(--text-xs);
          color: var(--gray-400);
          text-align: center;
          margin-top: var(--space-4);
          opacity: 0;
          transition: opacity var(--duration-300) ease;
        }

        .step-card:hover .card-expand-hint {
          opacity: 1;
        }

        .step-card.expanded .card-expand-hint {
          opacity: 0.7;
        }

        .card-code {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .step-code-block {
          background: var(--gray-900);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          margin: 0 0 var(--space-4);
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          line-height: 1.6;
          color: var(--gray-200);
        }

        .step-code-block code {
          white-space: pre;
        }

        .step-card :global(.run-demo-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          width: 100%;
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--white);
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-dark) 100%);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-300) ease;
        }

        .step-card :global(.run-demo-btn:hover) {
          background: linear-gradient(135deg, var(--brand-primary-dark) 0%, var(--brand-primary-dark) 100%);
          transform: translateY(-1px);
        }

        .step-card.expanded {
          grid-column: span 1;
        }

        @media (min-width: 901px) {
          .step-card.expanded {
            padding-bottom: 36px;
          }
        }

        .code-section {
          max-width: 640px;
          margin: 0 auto var(--space-12);
          background: linear-gradient(180deg, var(--gray-900) 0%, var(--gray-950) 100%);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            var(--shadow-2xl);
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s;
        }

        .code-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .code-header-bar {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .code-dots {
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .code-filename {
          flex: 1;
          text-align: center;
          font-size: var(--text-sm);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-mono);
        }

        .code-block {
          padding: var(--space-6);
          margin: 0;
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          line-height: 1.7;
          color: var(--gray-200);
          overflow-x: auto;
        }

        .code-comment { color: var(--gray-500); }
        .code-key { color: #93c5fd; }
        .code-string { color: #86efac; }
        .code-number { color: #fcd34d; }
        .code-punct { color: var(--gray-400); }

        .how-cta {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s;
        }

        .how-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .how-cta :global(.cta-primary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--white);
          background: linear-gradient(135deg, var(--gray-950) 0%, var(--gray-800) 100%);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-300) var(--ease-out);
          box-shadow: var(--shadow-md);
        }

        .how-cta :global(.cta-primary:hover) {
          background: linear-gradient(135deg, var(--gray-800) 0%, var(--gray-700) 100%);
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .how-cta :global(.cta-secondary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-600);
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-300) var(--ease-out);
        }

        .how-cta :global(.cta-secondary:hover) {
          border-color: var(--gray-300);
          color: var(--gray-950);
          box-shadow: var(--shadow-sm);
        }

        .how-footer {
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.85s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.85s;
        }

        .how-footer.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--gray-600);
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--gray-950) 100%);
        }

        .badge-sep {
          width: 3px;
          height: 3px;
          border-radius: var(--radius-full);
          background: var(--gray-300);
        }

        @media (max-width: 1024px) {
          .how {
            padding: 140px 0;
          }

          .how-title {
            font-size: clamp(36px, 5vw, 48px);
          }

          .steps-grid {
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .how {
            padding: 120px 0;
          }

          .how-container {
            padding: 0 20px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .step-card {
            padding: 28px;
          }

          .how-cta {
            flex-direction: column;
            align-items: center;
          }

          .how-cta :global(.cta-primary),
          .how-cta :global(.cta-secondary) {
            width: 100%;
            max-width: 300px;
          }

          .footer-badges {
            flex-direction: column;
            gap: 12px;
          }

          .badge-sep {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .how {
            padding: 100px 0;
          }

          .how-header {
            margin-bottom: 48px;
          }

          .how-title {
            font-size: clamp(28px, 8vw, 36px);
          }

          .how-subtitle {
            font-size: 15px;
          }

          .steps-grid {
            margin-bottom: 48px;
          }

          .step-card {
            padding: 24px;
          }

          .step-title {
            font-size: 22px;
          }

          .step-tagline {
            font-size: 13px;
          }

          .step-desc {
            font-size: 14px;
            line-height: 1.65;
          }

          .code-section {
            margin-left: -20px;
            margin-right: -20px;
            margin-bottom: 48px;
            border-radius: 0;
          }

          .code-block {
            font-size: 12px;
            padding: 20px;
          }

          .how-cta {
            margin-bottom: 48px;
          }

          .badge {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .how {
            padding: 80px 0;
          }

          .how-container {
            padding: 0 16px;
          }

          .how-header {
            margin-bottom: 40px;
          }

          .how-label {
            font-size: 11px;
          }

          .how-title {
            font-size: 26px;
          }

          .step-card {
            padding: 20px;
          }

          .card-header {
            margin-bottom: 20px;
          }

          .step-icon {
            width: 44px;
            height: 44px;
          }

          .step-title {
            font-size: 20px;
          }

          .step-desc {
            font-size: 14px;
            line-height: 1.6;
          }

          .code-section {
            margin-left: -16px;
            margin-right: -16px;
          }

          .code-block {
            font-size: 11px;
            padding: 16px;
          }

          .how-cta :global(.cta-primary),
          .how-cta :global(.cta-secondary) {
            max-width: 100%;
          }

          .badge {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .how-header,
          .step-card,
          .code-section,
          .how-cta,
          .how-footer,
          .step-icon,
          .card-indicator {
            transition: none;
            animation: none;
          }

          .how-header,
          .step-card,
          .code-section,
          .how-cta,
          .how-footer {
            opacity: 1;
            transform: none;
          }

          .step-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
