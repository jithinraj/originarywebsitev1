'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Github, PlayCircle } from 'lucide-react'

export default function TraceHeroSection() {
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
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Announcement Badge */}
          <Link
            href="https://peacprotocol.org"
            className="announcement"
            aria-label="Built on the open PEAC Protocol"
            target="_blank"
            rel="noopener noreferrer"
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
            <span>Built on the open PEAC Protocol</span>
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
            <span className="sr-only">Originary Trace: </span>
            Originary <span className="text-gradient">Trace</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            See which AI crawlers access your site, what they took, and generate verifiable evidence. Built on the open PEAC Protocol.
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
              href="/cloud"
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
              Get Trace Cloud
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://github.com/originaryx/trace?utm_source=originary&utm_medium=site&utm_campaign=trace_oss"
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
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)'
              }}
            >
              <Github size={18} />
              Self-host on GitHub
            </a>

            <Link
              href="/demo"
              className="btn btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-6)',
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                textDecoration: 'none',
                color: 'var(--text-secondary)'
              }}
            >
              <PlayCircle size={18} />
              Try demo
            </Link>
          </div>

          {/* Feature Highlights */}
          <div
            style={{
              marginTop: 'var(--space-16)',
              padding: 'var(--space-8) 0',
              borderTop: '1px solid var(--border-default)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-8)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Crawler Analytics
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  GPTBot, ClaudeBot, Perplexity, search bots
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Compliance Evidence
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  PEAC receipts, verification, exports
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Deploy Anywhere
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  Cloudflare Worker, Nginx, Logpush
                </p>
              </div>
            </div>
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
