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
    gradient: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
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
    gradient: 'linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%)',
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
    gradient: 'linear-gradient(135deg, var(--text-secondary) 0%, var(--text-tertiary) 100%)',
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
            <div key={step.id} className="step-wrapper">
              <div
                className={`step-card ${isVisible ? 'visible' : ''} ${expandedStep === i ? 'expanded' : ''}`}
                style={{ '--delay': `${i * 150 + 300}ms` } as React.CSSProperties}
                onClick={() => setExpandedStep(expandedStep === i ? null : i)}
              >
                <div className="card-glow" style={{ background: step.gradient }} />

                <div className="card-header">
                  <div className={`step-num-ring ${isVisible ? 'visible' : ''}`} style={{ '--delay': `${i * 150 + 500}ms` } as React.CSSProperties}>
                    <span className="step-num">{step.num}</span>
                  </div>
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
                  <div className="card-code" data-nosnippet>
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

              {/* Flow connector arrow */}
              {i < steps.length - 1 && (
                <div className={`flow-connector ${isVisible ? 'visible' : ''}`} style={{ '--delay': `${i * 150 + 700}ms` } as React.CSSProperties}>
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                    <path d="M0 12H40M40 12L30 4M40 12L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
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
          background: var(--surface-base);
          overflow: hidden;
        }

        .section-transition-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(180deg, var(--surface-base) 0%, transparent 100%);
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
            radial-gradient(ellipse 60% 40% at 20% 0%, var(--gradient-mesh-purple) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 30%, var(--gradient-mesh-light-purple) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 100%, var(--gradient-mesh-light-teal) 0%, transparent 50%);
        }

        .bg-mesh {
          display: none;
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
          color: var(--text-tertiary);
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--text-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .how-title {
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin: 0 0 var(--space-4);
          line-height: 1.05;
        }

        .how-subtitle {
          font-size: clamp(var(--text-base), 2vw, var(--text-lg));
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 72px;
        }

        .step-wrapper {
          position: relative;
        }

        .step-num-ring {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flow-connector {
          display: none;
        }

        .step-card {
          position: relative;
          padding: 0;
          background: var(--glass-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-default);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(40px);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        .step-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
          transition-delay: var(--delay);
        }

        .step-card:hover {
          border-color: var(--border-brand);
          transform: translateY(-4px);
          box-shadow: var(--glass-card-shadow);
        }


        .step-card:focus-visible {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .card-glow {
          display: none;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-5) var(--space-6);
          background: linear-gradient(180deg, var(--surface-subtle) 0%, transparent 100%);
          border-bottom: 1px solid var(--border-default);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.1em;
          background: var(--surface-elevated);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-default);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-illustration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface-subtle) 100%);
          border: 1px solid var(--border-default);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-card:hover .step-illustration {
          background: var(--accent-brand-muted);
          border-color: var(--border-brand);
          transform: scale(1.02);
        }

        .step-card:hover .step-num {
          background: var(--accent-brand-muted);
          border-color: var(--border-brand);
          color: var(--accent-brand);
        }

        .card-body {
          position: relative;
          padding: var(--space-6);
        }

        .step-title {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .step-tagline {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--accent-brand);
          margin: 0 0 var(--space-3);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .step-desc {
          font-size: var(--text-sm);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
        }

        .card-indicator {
          display: none;
        }

        .card-expand-hint {
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-secondary);
          text-align: center;
          padding: var(--space-3) var(--space-6);
          margin: 0;
          background: var(--surface-subtle);
          border-top: 1px solid var(--border-default);
          opacity: 1;
          transition: background var(--duration-200) ease, color var(--duration-200) ease;
        }

        .step-card:hover .card-expand-hint {
          background: var(--accent-brand-muted);
          color: var(--accent-brand);
        }

        .step-card.expanded .card-expand-hint {
          color: var(--text-tertiary);
        }

        .card-code {
          margin: 0;
          padding: var(--space-5) var(--space-6);
          background: var(--surface-subtle);
          border-top: 1px solid var(--border-default);
        }

        .step-code-block {
          background: linear-gradient(180deg, var(--code-bg-header) 0%, var(--code-bg) 100%);
          border-radius: var(--radius-xl);
          padding: var(--space-4);
          margin: 0 0 var(--space-4);
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.7;
          color: var(--text-secondary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border-default) inset;
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
          padding: 10px var(--space-5);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-inverted);
          background: var(--text-primary);
          border-radius: 10px;
          text-decoration: none;
          transition: all var(--duration-200) ease;
        }

        .step-card :global(.run-demo-btn:hover) {
          background: var(--text-secondary);
          transform: translateY(-1px);
        }

        .step-card.expanded {
          grid-column: span 1;
        }

        .step-card.expanded .card-expand-hint {
          background: var(--surface-subtle);
          border-top: none;
        }

        @media (min-width: 901px) {
          .step-card.expanded {
            padding-bottom: 0;
          }
        }

        .code-section {
          max-width: 640px;
          margin: 0 auto var(--space-12);
          background: linear-gradient(180deg, var(--code-bg-header) 0%, var(--code-bg) 100%);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow:
            0 0 0 1px var(--border-default),
            var(--shadow-elevated);
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
          background: var(--glass-bg);
          border-bottom: 1px solid var(--border-default);
        }

        .code-dots {
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--surface-subtle);
        }

        .dot.red { background: var(--chrome-red); }
        .dot.yellow { background: var(--chrome-yellow); }
        .dot.green { background: var(--chrome-green); }

        .code-filename {
          flex: 1;
          text-align: center;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
        }

        .code-block {
          padding: var(--space-6);
          margin: 0;
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          line-height: 1.7;
          color: var(--text-secondary);
          overflow-x: auto;
        }

        .code-comment { color: var(--code-color-comment); }
        .code-key { color: var(--code-color-key); }
        .code-string { color: var(--code-color-string); }
        .code-number { color: var(--code-color-number); }
        .code-punct { color: var(--text-muted); }

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
          color: var(--text-inverted);
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-300) var(--ease-out);
          box-shadow: var(--shadow-card);
        }

        .how-cta :global(.cta-primary:hover) {
          background: var(--accent-brand);
          box-shadow: var(--glow-brand);
          transform: translateY(-2px);
        }

        .how-cta :global(.cta-secondary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--surface-elevated);
          border: 1.5px solid var(--border-default);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--duration-300) var(--ease-out);
        }

        .how-cta :global(.cta-secondary:hover) {
          border-color: var(--border-hover);
          color: var(--text-primary);
          box-shadow: var(--shadow-card);
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
          color: var(--text-secondary);
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-electric) 100%);
        }

        .badge-sep {
          width: 3px;
          height: 3px;
          border-radius: var(--radius-full);
          background: var(--border-default);
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

          .card-header {
            padding: var(--space-4) var(--space-5);
          }

          .card-body {
            padding: var(--space-5);
          }

          .card-code {
            padding: var(--space-4) var(--space-5);
          }

          .card-expand-hint {
            padding: var(--space-3) var(--space-5);
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
            gap: 12px;
          }

          .step-illustration {
            width: 48px;
            height: 48px;
            border-radius: 12px;
          }

          .step-title {
            font-size: 18px;
          }

          .step-tagline {
            font-size: 10px;
          }

          .step-desc {
            font-size: 14px;
            line-height: 1.6;
          }

          .card-expand-hint {
            font-size: 11px;
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

          .card-header {
            padding: var(--space-4);
          }

          .card-body {
            padding: var(--space-4);
          }

          .card-code {
            padding: var(--space-4);
          }

          .step-num {
            font-size: 10px;
            padding: 3px 8px;
          }

          .step-illustration {
            width: 44px;
            height: 44px;
            border-radius: 10px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-desc {
            font-size: 13px;
            line-height: 1.6;
          }

          .step-code-block {
            font-size: 10px;
            padding: var(--space-3);
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
          .how-footer {
            transition: none;
            animation: none;
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
