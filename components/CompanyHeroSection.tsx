'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

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
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(var(--text-5xl), 7vw, var(--text-8xl))',
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
            Originary
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            Receipts, policy, and tooling for the agentic web.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}
          >
            <Link
              href="/trace"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-6)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              See Trace
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://peacprotocol.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-6)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                textDecoration: 'none',
                background: 'var(--white)',
                border: '1px solid var(--gray-300)',
                color: 'var(--gray-700)'
              }}
            >
              What is PEAC?
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @media (max-width: 768px) {
          .hero-content {
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
