'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { copyToClipboard } from '@/lib/clipboard'

export default function CompanyHeroSection() {
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
            {/* Brand Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.05s'
              }}
            >
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)',
                letterSpacing: '0.02em'
              }}>
                The Agent Control Plane
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-7xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              Turn AI Traffic<br /><span className="text-gradient">Into Revenue.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '95%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Don&rsquo;t just block bots - manage them. The complete infrastructure to identify, gate, and charge AI agents for API access.
            </p>

            {/* Trademark Proof Section */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.27s',
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
                <span style={{ color: 'var(--text-tertiary)' }}>ORIGINARY™</span> - Open software.{' '}
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
                  Learn, view source, explore &amp; download PEAC Protocol
                </a>
                <br />
                Available for{' '}
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
                  macOS, Windows, Linux
                </Link>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-actions"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 'var(--space-4)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Link
                  href="/declare"
                  className="btn btn-primary btn-lg"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Start Observing (Free)</span>
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

                <Link
                  href="/peac"
                  className="btn btn-secondary btn-lg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none'
                  }}
                >
                  View Protocol
                </Link>
              </div>

              {/* Built on line */}
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-tertiary)',
                  marginTop: 'var(--space-4)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.35s'
                }}
              >
                Built on HTTP&nbsp;402/x402 payments, PEAC-Receipts, AIPREF policies, and AI crawler analytics.
              </p>
            </div>
          </div>

          {/* Hero Visual - Interactive Demo */}
          <div
            className="hero-visual"
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <InteractiveFlowDemo />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        .btn:hover .shine-effect {
          left: 100%;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: var(--space-12) !important;
          }

          .hero-text {
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

function InteractiveFlowDemo() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    { label: 'Policy', icon: '📋', tooltip: 'Reads AIPREF / peac.txt' },
    { label: 'Access', icon: '🔑', tooltip: 'Gates the request' },
    { label: 'Payment', icon: '💳', tooltip: 'x402 / Stripe' },
    { label: 'Receipt', icon: '✅', tooltip: 'Signs PEAC-Receipt (Ed25519)' },
    { label: 'Trace', icon: '📊', tooltip: 'Event logged & tracked' }
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
          transition: 'all 0.5s ease',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          minHeight: '560px'
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
          position: 'relative',
          flexWrap: 'wrap',
          gap: 'var(--space-2)'
        }}>
          {/* Progress Line Background */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            right: '25px',
            height: '2px',
            background: 'var(--border-default)',
            zIndex: 1
          }} />
          {/* Progress Line Fill */}
          <div style={{
            position: 'absolute',
            top: '25px',
            left: '25px',
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
            height: '2px',
            background: 'var(--gradient-brand)',
            zIndex: 1,
            transition: 'width 0.5s ease'
          }} />
          {steps.map((step, index) => (
            <div
              key={step.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-2)',
                position: 'relative',
                zIndex: 2,
                flex: '0 0 auto'
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onTouchStart={() => setHoveredStep(index)}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: currentStep === index ? 'var(--gradient-brand)' : 'var(--surface-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
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
                    bottom: '-50px',
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

        {/* Trace Integration Section */}
        {currentStep === 4 && (
          <div
            style={{
              marginTop: 'var(--space-4)',
              padding: 'var(--space-4)',
              background: 'var(--accent-brand-faint)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--accent-brand-subtle)',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: '16px' }}>📊</span>
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--accent-brand)' }}>
                Tracked in Trace
              </span>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>
              This transaction is now visible in your Trace dashboard with full event details.
            </p>
          </div>
        )}

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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
