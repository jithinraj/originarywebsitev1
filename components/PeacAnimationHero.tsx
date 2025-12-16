'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function PeacAnimationHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: 'clamp(120px, 16vh, 180px)',
        paddingBottom: 'clamp(100px, 14vh, 160px)',
        background: 'var(--white)',
        overflow: 'hidden'
      }}
    >
      {/* Animated gradient mesh background */}
      <div className="hero-glow" aria-hidden="true">
        <div className="gradient-orb gradient-orb-3" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'center'
          }}
        >
          {/* Hero Text */}
          <div
            className="hero-text"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                marginBottom: 'var(--space-5)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  color: 'var(--gray-500)',
                  letterSpacing: '0.02em'
                }}
              >
                POLICY, PAYMENTS, AND PROOF FOR AI AND AGENTIC INTERACTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="tracking-tight"
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                marginBottom: 'var(--space-5)',
                color: 'var(--gray-900)',
                opacity: 1,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s'
              }}
            >
              Make AI access<br />
              <span className="text-gradient">paid and provable.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.6,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-6)',
                maxWidth: '440px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Agents and crawlers already hit your pages and APIs. Set terms, require payment when needed, and verify every outcome with signed receipts.
            </p>

            {/* Trademark Proof Section */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.22s',
                marginBottom: 'var(--space-6)'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.8,
                  color: 'var(--gray-400)',
                  maxWidth: '90%',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  margin: 0
                }}
              >
                <span style={{ color: 'var(--gray-500)' }}>ORIGINARY™</span> - Open software.{' '}
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--gray-500)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--gray-300)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Learn, view source, explore &amp; download PEAC Protocol
                </a>
                <br />
                Available for{' '}
                <Link
                  href="/downloads"
                  style={{
                    color: 'var(--gray-500)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--gray-300)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  macOS, Windows, Linux
                </Link>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-cta-buttons"
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-6)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.25s'
              }}
            >
              <Link
                href="/demo"
                className="btn btn-primary btn-lg btn-shine btn-magnetic hero-cta-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  padding: '14px 28px',
                  fontSize: 'var(--text-base)',
                  fontWeight: 600
                }}
              >
                View demo
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/peac"
                className="btn btn-ghost btn-magnetic hero-cta-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  padding: '14px 28px',
                  fontSize: 'var(--text-base)',
                  color: 'var(--gray-600)'
                }}
              >
                Read the spec
              </Link>
            </div>

            {/* Trust line */}
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--gray-400)',
                fontWeight: 500,
                letterSpacing: '0.02em',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              Open protocol · No lock-in · Deploy at the edge ·{' '}
              <Link
                href="/what-is-originary"
                style={{
                  color: 'var(--gray-500)',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--gray-300)'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
              >
                What is Originary?
              </Link>
            </p>

          </div>

          {/* Hero Visual - 3D Policy Card */}
          <div
            className="hero-visual receipt-card-3d"
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}
          >
            <PolicyCard3D />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: var(--space-12) !important;
            text-align: center;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 640px) {
          .hero-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="label-mono"
      style={{
        padding: '4px 8px',
        background: 'var(--gray-100)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--gray-200)'
      }}
    >
      {children}
    </span>
  )
}

// Step content data for each PEAC lifecycle step
const stepContent = [
  {
    badge: 'POLICY',
    filename: 'peac.txt',
    codeType: 'txt',
    code: `# AIPREF snapshot (simplified)
training: deny
rag: allow-with-attribution
commercial_use: negotiate
inference: allow
logging: minimal`,
    metaLeft: 'policy_hash: 9f3c...c2ab',
    metaRight: 'v2025-11-30',
    caption: 'PEAC-Receipt ready - AIPREF-compatible'
  },
  {
    badge: 'ACCESS',
    filename: 'peac.txt',
    codeType: 'txt',
    code: `# Access control
version: 0.9.16
access_control: http-402
protected_paths: [/api/, /models/]
receipts: required`,
    metaLeft: 'challenge: HTTP 402',
    metaRight: 'method: http-402',
    caption: 'Access gated with HTTP 402'
  },
  {
    badge: 'PAYMENT',
    filename: 'peac.txt',
    codeType: 'txt',
    code: `# Payment rails
payments: [x402, stripe]
default_currency: USD

# 402 response
HTTP/1.1 402 Payment Required
Content-Type: application/json`,
    metaLeft: 'rails: x402, stripe',
    metaRight: 'min: 0.01 USD',
    caption: 'Multi-rail payments - normalized payment{}'
  },
  {
    badge: 'RECEIPT',
    filename: 'receipt.json',
    codeType: 'json',
    code: `{
  "subject": "/api/chat",
  "aipref": {"train": "N"},
  "payment": {"rail": "x402"},
  "issued_at": "2025-11-30",
  "kid": "2025-key1"
}`,
    metaLeft: 'PEAC-Receipt: eyJhbGci...',
    metaRight: '',
    caption: 'Signed PEAC-Receipt - verify in <5 ms'
  },
  {
    badge: 'TRACE',
    filename: 'verify.txt',
    codeType: 'txt',
    code: `# Verification endpoint
verify: /peac/verify
public_keys: kid=2025-key1

POST /peac/verify
{ "valid": true, "rail": "x402" }`,
    metaLeft: 'trace_id: 7f92...ab31',
    metaRight: 'valid: 100%',
    caption: 'Verify via /.well-known/peac.txt'
  }
]

function PolicyCard3D() {
  const [isHovered, setIsHovered] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { label: 'Policy', icon: '📋' },
    { label: 'Access', icon: '🔑' },
    { label: 'Payment', icon: '💳' },
    { label: 'Receipt', icon: '✅' },
    { label: 'Trace', icon: '📊' }
  ]

  // Animate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [steps.length])

  const currentContent = stepContent[activeStep]

  // Render code with syntax highlighting
  const renderCode = (code: string, type: string) => {
    if (type === 'json') {
      // JSON syntax highlighting
      return code.split('\n').map((line, i) => {
        // Highlight keys
        const highlightedLine = line
          .replace(/"([^"]+)":/g, '<key>"$1"</key>:')
          .replace(/: "([^"]+)"/g, ': <str>"$1"</str>')
          .replace(/: (\d+)/g, ': <num>$1</num>')
          .replace(/: (true|false)/g, ': <bool>$1</bool>')
        return (
          <span key={i} dangerouslySetInnerHTML={{
            __html: highlightedLine
              .replace(/<key>/g, '<span style="color: #7C75FF">')
              .replace(/<\/key>/g, '</span>')
              .replace(/<str>/g, '<span style="color: #22C55E">')
              .replace(/<\/str>/g, '</span>')
              .replace(/<num>/g, '<span style="color: #F59E0B">')
              .replace(/<\/num>/g, '</span>')
              .replace(/<bool>/g, '<span style="color: #EC4899">')
              .replace(/<\/bool>/g, '</span>')
          }} />
        )
      }).reduce((acc: React.ReactNode[], curr, i) => [...acc, curr, <br key={`br-${i}`} />], [] as React.ReactNode[])
    }
    // YAML/txt syntax highlighting
    return code.split('\n').map((line, i) => {
      if (line.startsWith('#')) {
        return <span key={i}><span style={{ color: '#6B7280' }}>{line}</span><br /></span>
      }
      if (line.includes(':')) {
        const [key, ...rest] = line.split(':')
        return (
          <span key={i}>
            <span style={{ color: '#7C75FF' }}>{key}:</span>
            {rest.join(':')}
            <br />
          </span>
        )
      }
      if (line.startsWith('HTTP/') || line.startsWith('POST ') || line.startsWith('WWW-')) {
        return <span key={i}><span style={{ color: '#22C55E' }}>{line}</span><br /></span>
      }
      return <span key={i}>{line}<br /></span>
    })
  }

  return (
    <div
      className="receipt-card-inner"
      style={{
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(99, 91, 255, 0.15) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0.5,
          transition: 'opacity 0.5s ease',
          zIndex: -1
        }}
      />

      {/* Main Card */}
      <div
        className="gradient-border policy-card-main"
        style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'clamp(var(--space-4), 4vw, var(--space-6))',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--gray-200)'
            : '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--gray-200)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Header */}
        <div
          className="policy-card-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-4)',
            flexWrap: 'wrap',
            gap: 'var(--space-2)'
          }}
        >
          <div
            className="badge-status"
            style={{
              transition: 'all 0.3s ease-out'
            }}
          >
            {currentContent.badge}
          </div>
          <span className="label-mono" style={{ fontSize: 'clamp(9px, 2vw, 11px)' }}>/.well-known/peac.txt</span>
        </div>

        {/* Pipeline Steps - Animated Stepper */}
        <PipelineStepper activeStep={activeStep} steps={steps} />

        {/* Dynamic Code Block */}
        <div
          className="code-block-luxury"
          style={{
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--space-4)',
            overflow: 'hidden'
          }}
        >
          <div className="code-block-header">
            <div className="code-block-dots">
              <span className="code-block-dot code-block-dot-red" />
              <span className="code-block-dot code-block-dot-yellow" />
              <span className="code-block-dot code-block-dot-green" />
            </div>
            <span
              className="code-block-filename"
              style={{ transition: 'all 0.3s ease-out' }}
            >
              {currentContent.filename}
            </span>
          </div>
          <div
            className="code-block-body"
            style={{
              fontSize: 'clamp(10px, 2.5vw, 12px)',
              padding: 'clamp(var(--space-3), 3vw, var(--space-4))',
              height: '156px',
              overflow: 'hidden',
              transition: 'opacity 0.3s ease-out',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre', lineHeight: 1.5, overflowX: 'auto' }}>
              <code style={{ color: '#A1A1AA', fontFamily: 'inherit' }}>
                {renderCode(currentContent.code, currentContent.codeType)}
              </code>
            </pre>
          </div>
        </div>

        {/* Dynamic Metadata Row */}
        <div
          className="policy-meta-row"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(var(--space-2), 2vw, var(--space-3))',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(9px, 2vw, 11px)',
            color: 'var(--gray-500)',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
            transition: 'all 0.3s ease-out'
          }}
        >
          <span>{currentContent.metaLeft}</span>
          {currentContent.metaRight && <span>{currentContent.metaRight}</span>}
        </div>

        {/* Footer */}
        <div
          className="policy-card-footer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'var(--space-4)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--gray-200)',
            flexWrap: 'wrap',
            gap: 'var(--space-3)'
          }}
        >
          <span
            style={{
              fontSize: 'clamp(10px, 2vw, 11px)',
              color: 'var(--gray-400)',
              transition: 'all 0.3s ease-out',
              flex: '1 1 auto',
              minWidth: '150px'
            }}
          >
            {currentContent.caption}
          </span>
          <Link
            href="/declare"
            style={{
              fontSize: 'clamp(11px, 2.5vw, 12px)',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap'
            }}
          >
            Try Declare
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .policy-card-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .policy-meta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-1) !important;
          }
          .policy-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .code-block-body {
            font-size: 10px !important;
            padding: var(--space-2) !important;
          }
          .code-block-body pre {
            font-size: 10px !important;
          }
        }
        @media (max-width: 360px) {
          .policy-card-main {
            padding: var(--space-3) !important;
          }
          .code-block-body {
            font-size: 9px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </div>
  )
}

interface Step {
  label: string
  icon: string
}

function PipelineStepper({ activeStep, steps }: { activeStep: number; steps: Step[] }) {
  return (
    <>
      <div
        className="pipeline-stepper"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-4)',
          padding: 'var(--space-2) 0',
          position: 'relative'
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="pipeline-step"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              flex: 1,
              minWidth: 0
            }}
          >
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className="pipeline-line"
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '50%',
                  width: '100%',
                  height: '2px',
                  background: 'var(--gray-200)',
                  zIndex: 0
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))',
                    width: index < activeStep ? '100%' : index === activeStep ? '50%' : '0%',
                    transition: 'width 0.5s ease-out'
                  }}
                />
              </div>
            )}

            {/* Icon Circle */}
            <div
              className="pipeline-icon"
              style={{
                width: 'clamp(26px, 6vw, 32px)',
                height: 'clamp(26px, 6vw, 32px)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(11px, 3vw, 14px)',
                background: index === activeStep
                  ? 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))'
                  : 'var(--gray-100)',
                boxShadow: index === activeStep
                  ? '0 4px 12px rgba(99, 91, 255, 0.3)'
                  : 'none',
                transform: index === activeStep ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease-out',
                zIndex: 1,
                position: 'relative',
                flexShrink: 0
              }}
            >
              {step.icon}
            </div>

            {/* Label */}
            <span
              className="pipeline-label"
              style={{
                marginTop: 'var(--space-1)',
                fontSize: 'clamp(8px, 2vw, 11px)',
                fontWeight: index === activeStep ? 600 : 400,
                color: index === activeStep ? 'var(--brand-primary)' : 'var(--gray-500)',
                transition: 'all 0.3s ease-out',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 380px) {
          .pipeline-line {
            top: 12px !important;
          }
        }
      `}</style>
    </>
  )
}
