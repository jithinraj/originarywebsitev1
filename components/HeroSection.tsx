'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { copyToClipboard } from '@/lib/clipboard'

function SlidingText({
  words,
  headings,
  className,
  onIndexChange
}: {
  words: string[],
  headings?: string[],
  className?: string,
  onIndexChange?: (index: number) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        const newIndex = (currentIndex + 1) % words.length
        setCurrentIndex(newIndex)
        onIndexChange?.(newIndex)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length, currentIndex, onIndexChange])

  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        minWidth: '120px',
        textAlign: 'left'
      }}
    >
      <span
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'inline-block'
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: 'var(--space-48)',
        paddingBottom: 'var(--space-32)',
        background: 'var(--surface-elevated)',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--gradient-mesh)',
          opacity: 0.6
        }}
      />

      {/* Animated Gradient Orbs */}
      <div
        className="gradient-orb"
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,91,255,0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />

      <div
        className="gradient-orb"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />

      <div className="container">
        <div
          className="hero-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-16)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Hero Text */}
          <div
            className="hero-text"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Announcement Badge */}
            <Link
              href="/docs/receipts"
              className="announcement"
              aria-label="Learn about PEAC-Receipt (open protocol)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
                marginBottom: 'var(--space-6)',
                fontSize: '12px',
                fontWeight: 450,
                color: 'var(--accent-brand)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: '0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-brand-subtle)'
                e.currentTarget.style.borderColor = 'var(--accent-brand-muted)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-brand-subtle)'
                e.currentTarget.style.borderColor = 'var(--accent-brand-muted)'
              }}
            >
              <span>Receipts for the Agentic Web</span>
              <span style={{
                fontSize: '11px',
                opacity: 0.5,
                marginLeft: '4px',
                marginRight: '4px'
              }}>·</span>
              <span style={{ fontSize: '11px', fontWeight: 500, opacity: 0.7 }}>Open protocol</span>
              <ArrowRight size={12} style={{ marginLeft: '2px', opacity: 0.6 }} />
            </Link>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-7xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              <span className="sr-only">Originary: </span>
              Every agent call. <span className="text-gradient">One verifiable receipt.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Originary adds <strong style={{ color: 'var(--text-primary)' }}>policy discovery</strong>, <strong style={{ color: 'var(--text-primary)' }}>HTTP 402 payments</strong>, and a <strong style={{ color: 'var(--text-primary)' }}>PEAC-Receipt</strong> to every response-so access, settlement, and compliance are provable by design. Go live in 5 minutes.
            </p>

            {/* Brand explainer */}
            <p
              style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.25s'
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Originary™</strong> builds PEAC-compatible tools and standards. <Link href="/trace" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Trace</Link> is our flagship product.
            </p>

            {/* Microproof line */}
            <p
              style={{
                fontSize: '11px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-4)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                fontWeight: 400
              }}
            >
              Works with x402 · Stripe · AIPREF · ERC-8004 · Edge-friendly · No SDK lock-in
            </p>

            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.35s',
                marginBottom: 'var(--space-8)'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  maxWidth: '90%',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  margin: 0
                }}
              >
                <span style={{ color: 'var(--text-tertiary)' }}>ORIGINARY™</span> - Open software. Available for{' '}
                <Link
                  href="/downloads"
                  style={{
                    color: 'var(--text-tertiary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--border-default)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  macOS
                </Link>
                {', '}
                <Link
                  href="/downloads"
                  style={{
                    color: 'var(--text-tertiary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--border-default)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Windows
                </Link>
                {', '}
                <Link
                  href="/downloads"
                  style={{
                    color: 'var(--text-tertiary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--border-default)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Linux
                </Link>
                {' · '}
                <a
                  href="https://github.com/peacprotocol/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-tertiary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid transparent',
                    transition: 'border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--border-default)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Download source code
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-10)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Link
                  href="/developers"
                  className="btn btn-primary btn-lg"
                  data-analytics-id="hero_cta_declare_free_clicked"
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Start with Declare (Free)</span>
                  <ArrowRight size={18} style={{ position: 'relative', zIndex: 2 }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.6s ease',
                      zIndex: 1
                    }}
                    className="shine-effect"
                  />
                </Link>
                <p style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-tertiary)',
                  marginTop: 'var(--space-1)',
                  textAlign: 'center'
                }}>
                  Free OSS tools. No credit card required.
                </p>
              </div>

              <Link
                href="/demo"
                className="btn btn-ghost"
                data-analytics-id="hero_cta_demo_30s_clicked"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Play size={16} style={{ marginLeft: '2px' }} />
                </div>
                <span>See a receipt in 30s</span>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className="hero-visual"
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <InteractiveReceiptDemo />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        .btn:hover .shine-effect {
          left: 100%;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: var(--space-12) !important;
            text-align: center;
          }

          .hero-actions {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  )
}

function InteractiveReceiptDemo() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    { label: 'Policy', icon: '📋', tooltip: 'Reads AIPREF / peac.txt' },
    { label: 'Access', icon: '🔑', tooltip: 'Gates the request' },
    { label: 'Payment', icon: '💳', tooltip: 'x402 / Stripe' },
    { label: 'Receipt', icon: '✅', tooltip: 'Signs PEAC-Receipt (Ed25519)' }
  ]

  const sampleToken = 'eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDktay4xIiwidHlwIjoiSldUIn0...'

  const handleCopy = async () => {
    const success = await copyToClipboard(sampleToken)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      {/* Main Receipt Card */}
      <div
        className="receipt-card"
        style={{
          background: 'var(--surface-elevated)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-8)',
          boxShadow: isHovered ? 'var(--shadow-2xl)' : 'var(--shadow-xl)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all var(--duration-500) var(--ease-out)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Flow Visualization */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-8)',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div
              key={step.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-2)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onTouchStart={() => setHoveredStep(index)}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: currentStep === index ? 'var(--gradient-brand)' : 'var(--surface-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  transition: 'all 0.3s ease',
                  transform: currentStep === index ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: currentStep === index ? 'var(--shadow-lg)' : 'none'
                }}
              >
                {step.icon}
              </div>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: currentStep === index ? 'var(--accent-brand)' : 'var(--text-tertiary)',
                  fontWeight: currentStep === index ? 600 : 400,
                  transition: 'all 0.3s ease'
                }}
              >
                {step.label}
              </span>
              {/* Tooltip */}
              {hoveredStep === index && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--text-primary)',
                    color: 'var(--white)',
                    padding: 'var(--space-2) var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-xs)',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    boxShadow: 'var(--shadow-lg)',
                    pointerEvents: 'none',
                    minWidth: 'max-content'
                  }}
                >
                  {step.tooltip}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '4px solid transparent',
                      borderRight: '4px solid transparent',
                      borderBottom: '4px solid var(--text-primary)'
                    }}
                  />
                </div>
              )}
            </div>
          ))}

          {/* Progress Line */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              right: '30px',
              height: '2px',
              background: 'var(--border-default)',
              zIndex: 1
            }}
          >
            <div
              style={{
                width: `${(currentStep / 3) * 100}%`,
                height: '100%',
                background: 'var(--gradient-brand)',
                transition: 'width 0.5s ease'
              }}
            />
          </div>
        </div>

        {/* Receipt Details */}
        <div
          style={{
            padding: 'var(--space-6)',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-lg)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)'
          }}
        >
          <div style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Header:</span>
            <span style={{ color: 'var(--text-primary)', wordBreak: 'break-all', flex: 1 }}>PEAC-Receipt: {sampleToken.substring(0, 20)}...</span>
            <button
              onClick={handleCopy}
              data-analytics-id="hero_copy_receipt_clicked"
              aria-label="Copy PEAC-Receipt token"
              style={{
                padding: 'var(--space-1) var(--space-3)',
                background: 'var(--accent-brand)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-xs)',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Resource:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--text-primary)' }}>/api/content</span>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Amount:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--text-primary)' }}>$0.10 USD</span>
            <span style={{ marginLeft: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>(example)</span>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Status:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--success)', fontWeight: 600 }}>
              Verified ✓
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ color: 'var(--text-tertiary)' }}>kid:</span>
              <span style={{ marginLeft: 'var(--space-2)', color: 'var(--text-primary)' }}>2025-09-key1</span>
            </div>
            <Link
              href={`/verify?token=${encodeURIComponent(sampleToken)}`}
              data-analytics-id="hero_verify_receipt_clicked"
              style={{
                padding: 'var(--space-1) var(--space-3)',
                background: 'var(--surface-elevated)',
                color: 'var(--accent-brand)',
                border: '1px solid var(--accent-brand)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              Verify
            </Link>
          </div>
        </div>

        {/* Copied toast */}
        {copied && (
          <div
            role="status"
            aria-live="polite"
            style={{
              position: 'absolute',
              bottom: 'var(--space-4)',
              right: 'var(--space-4)',
              background: 'var(--text-primary)',
              color: 'var(--white)',
              padding: 'var(--space-2) var(--space-4)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--text-sm)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 100
            }}
          >
            Copied!
          </div>
        )}

      </div>

      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '-20px',
          right: '20px',
          bottom: '-20px',
          background: 'var(--gradient-mesh)',
          opacity: 0.3,
          borderRadius: 'var(--radius-2xl)',
          zIndex: -1,
          transform: 'rotate(-2deg)'
        }}
      />
    </div>
  )
}