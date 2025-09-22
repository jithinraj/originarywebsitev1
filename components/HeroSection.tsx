'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'

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
            <div
              className="announcement"
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
                transitionDelay: '0.2s'
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
              <ArrowRight size={14} />
            </div>

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
              <span className="text-gradient">Receipts</span> for the Agentic Web
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '90%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Publish `peac.txt` to declare <strong style={{ color: 'var(--gray-800)' }}>access, consent, attribution, privacy, and pricing</strong>. Agents settle via <strong style={{ color: 'var(--gray-800)' }}>x402</strong> or Stripe/credits/fiat/stablecoin/on-chain via adapters and present a <strong style={{ color: 'var(--gray-800)' }}>Receipt</strong> to prove compliance on every request.
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
              <Link
                href="/company/contact"
                className="btn btn-primary btn-lg"
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>Start building</span>
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

              <button
                className="btn btn-ghost"
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
                <span>Watch demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--gray-500)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: 'var(--space-3)'
                }}
              >
                Works with
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-6)',
                  opacity: 0.7
                }}
              >
                {['MCP', 'A2A', 'x402', 'Stripe'].map((tech, index) => (
                  <div
                    key={tech}
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                      color: 'var(--gray-500)',
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.6s ease ${0.5 + index * 0.1}s`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
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

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '480px',
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
          transform: isHovered ? 'translateY(-4px) rotate(1deg)' : 'translateY(0) rotate(0deg)',
          transition: 'all var(--duration-500) var(--ease-out)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--gradient-brand)',
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform var(--duration-500) var(--ease-out)'
          }}
        />

        {/* Receipt Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-6)',
            paddingBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--gray-100)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--success)',
                animation: 'pulse 2s infinite'
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--success)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Live Receipt <span style={{
                marginLeft: '8px',
                padding: '2px 8px',
                fontSize: '10px',
                background: 'var(--gray-100)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--gray-600)',
                fontWeight: 'normal'
              }}>Demo</span>
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--gray-500)'
            }}
          >
            #8f2c-45aa-9d1e
          </span>
        </div>

        {/* Receipt Content */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <ReceiptRow label="Resource" value="/api/content/atlantic/17" mono />
          <ReceiptRow label="Requester" value="atlas-agent/2.3.1" />
          <ReceiptRow label="Policy" value="peac:0.9.13 - attribution + commercial" />
          <ReceiptRow label="Settlement" value="$0.0025 via x402 (primary)" />
          <ReceiptRow
            label="Status"
            value={
              <span style={{ color: 'var(--success)', fontWeight: 600 }}>
                <Zap size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Receipt Ready
              </span>
            }
          />
        </div>

        {/* Receipt Footer */}
        <div
          style={{
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--gray-100)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
            Cryptographic Proof
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Shield size={16} style={{ color: 'var(--brand-primary)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--gray-500)'
              }}
            >
              0x94cd...5a9b
            </span>
          </div>
        </div>

        {/* Floating indicators */}
        <div
          style={{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--space-4)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--brand-primary)',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0)',
            transition: 'all var(--duration-300) var(--ease-out) 0.1s'
          }}
        />
      </div>

      {/* Background Cards */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '-20px',
          right: '20px',
          height: '80%',
          background: 'var(--white)',
          border: '1px solid var(--gray-100)',
          borderRadius: 'var(--radius-2xl)',
          zIndex: -1,
          transform: 'rotate(-2deg)',
          opacity: 0.7
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '-40px',
          right: '40px',
          height: '60%',
          background: 'var(--white)',
          border: '1px solid var(--gray-100)',
          borderRadius: 'var(--radius-2xl)',
          zIndex: -2,
          transform: 'rotate(-4deg)',
          opacity: 0.4
        }}
      />
    </div>
  )
}

function ReceiptRow({
  label,
  value,
  mono = false
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--space-3)',
        fontSize: 'var(--text-sm)'
      }}
    >
      <span style={{ color: 'var(--gray-600)' }}>{label}</span>
      <span
        style={{
          color: 'var(--gray-900)',
          fontFamily: mono ? 'var(--font-mono)' : 'inherit',
          fontSize: mono ? 'var(--text-xs)' : 'inherit'
        }}
      >
        {value}
      </span>
    </div>
  )
}