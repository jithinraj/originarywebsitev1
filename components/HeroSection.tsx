'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

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
        background: 'var(--white)',
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
              aria-label="Learn about PEAC-Receipt (open standard)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-4)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: 'var(--brand-primary)',
                cursor: 'pointer',
                transition: 'all var(--duration-200) var(--ease-out)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: '0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(99, 91, 255, 0.15)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(99, 91, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Sparkles size={16} />
              <span>Introducing Receipts for the Agentic Web</span>
              <span style={{
                fontSize: 'var(--text-xs)',
                opacity: 0.7,
                marginLeft: 'var(--space-1)',
                marginRight: 'var(--space-1)'
              }}>•</span>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600 }}>Open standard</span>
              <ArrowRight size={14} />
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
              Every agent call. <span className="text-gradient">One verifiable receipt.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-4)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Originary adds <strong style={{ color: 'var(--gray-800)' }}>policy discovery</strong>, <strong style={{ color: 'var(--gray-800)' }}>HTTP 402 payments</strong>, and a <strong style={{ color: 'var(--gray-800)' }}>PEAC-Receipt</strong> to every response-so access, settlement, and compliance are provable by design. Go live in 5 minutes.
            </p>

            {/* Microproof line */}
            <p
              style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 1.6,
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-8)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.25s'
              }}
            >
              Works with <strong>x402</strong>, <strong>Stripe</strong>, <strong>AIPREF</strong>. Edge-friendly. No SDK lock-in.
            </p>

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
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Link
                  href="/checkout/start"
                  className="btn btn-primary btn-lg"
                  data-analytics-id="hero_cta_start_1usd_clicked"
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>Start for $1</span>
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
                  color: 'var(--gray-500)',
                  marginTop: 'var(--space-1)',
                  textAlign: 'center'
                }}>
                  30-day developer access. No auto-renew.
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
                  color: 'var(--gray-700)'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--white)',
                    border: '1px solid var(--gray-200)',
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
    { label: 'Payment', icon: '💳', tooltip: 'x402 / Stripe / L402' },
    { label: 'Receipt', icon: '✅', tooltip: 'Signs PEAC-Receipt (Ed25519)' }
  ]

  const sampleToken = 'eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDktay4xIiwidHlwIjoiSldUIn0...'

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleToken)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          background: 'var(--white)',
          border: '1px solid var(--gray-200)',
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
                  background: currentStep === index ? 'var(--gradient-brand)' : 'var(--gray-100)',
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
                  color: currentStep === index ? 'var(--brand-primary)' : 'var(--gray-500)',
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
                    background: 'var(--gray-900)',
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
                      borderBottom: '4px solid var(--gray-900)'
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
              background: 'var(--gray-200)',
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
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)'
          }}
        >
          <div style={{ marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--gray-500)' }}>Header:</span>
            <span style={{ color: 'var(--gray-900)', wordBreak: 'break-all', flex: 1 }}>PEAC-Receipt: {sampleToken.substring(0, 20)}...</span>
            <button
              onClick={handleCopy}
              data-analytics-id="hero_copy_receipt_clicked"
              aria-label="Copy PEAC-Receipt token"
              style={{
                padding: 'var(--space-1) var(--space-3)',
                background: 'var(--brand-primary)',
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
            <span style={{ color: 'var(--gray-500)' }}>Resource:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--gray-900)' }}>/api/content</span>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span style={{ color: 'var(--gray-500)' }}>Amount:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--gray-900)' }}>$1.00 USD</span>
          </div>
          <div style={{ marginBottom: 'var(--space-3)' }}>
            <span style={{ color: 'var(--gray-500)' }}>Status:</span>
            <span style={{ marginLeft: 'var(--space-2)', color: 'var(--success)', fontWeight: 600 }}>
              Verified ✓
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ color: 'var(--gray-500)' }}>kid:</span>
              <span style={{ marginLeft: 'var(--space-2)', color: 'var(--gray-900)' }}>2025-09-key1</span>
            </div>
            <Link
              href={`/verify?token=${encodeURIComponent(sampleToken)}`}
              data-analytics-id="hero_verify_receipt_clicked"
              style={{
                padding: 'var(--space-1) var(--space-3)',
                background: 'var(--white)',
                color: 'var(--brand-primary)',
                border: '1px solid var(--brand-primary)',
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
              background: 'var(--gray-900)',
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