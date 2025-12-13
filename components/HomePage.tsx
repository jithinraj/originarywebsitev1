'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Scale, Newspaper, Code2, Network } from 'lucide-react'

export default function WorldClassHomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const audiences = [
    {
      icon: <Scale size={28} />,
      title: 'Legal & Compliance',
      description: 'Audit-grade evidence of consent, attribution, and access terms for AI traffic.',
      color: '#635BFF'
    },
    {
      icon: <Newspaper size={28} />,
      title: 'Publishers',
      description: 'Meter and monetize AI access to content with verifiable receipts.',
      color: '#00D4AA'
    },
    {
      icon: <Code2 size={28} />,
      title: 'API Builders',
      description: 'Turn agent API calls into billable, compliant transactions.',
      color: '#FF6B6B'
    },
    {
      icon: <Network size={28} />,
      title: 'A2A Networks',
      description: 'Attach receipts to every agent message across rails.',
      color: '#4ECDC4'
    }
  ]

  return (
    <div>
      {/* Who is Originary for? - Premium Design */}
      <section
        style={{
          background: 'linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%)',
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-20)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, var(--gray-200) 1px, transparent 0)',
            backgroundSize: '48px 48px',
            opacity: 0.5,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative' }}>
          {/* Section Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-16)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--brand-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Built for teams that need proof
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--gray-900)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-4)'
              }}
            >
              Who is Originary for?
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-500)',
                maxWidth: '560px',
                margin: '0 auto'
              }}
            >
              Teams that need receipts, control, and payments for AI and agent traffic.
            </p>
          </div>

          {/* Audience Cards - Premium Grid */}
          <div
            className="audience-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-6)',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className="audience-card"
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-8)',
                  border: '1px solid var(--gray-100)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = audience.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = 'var(--gray-100)'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-xl)',
                    background: `${audience.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-5)',
                    color: audience.color
                  }}
                >
                  {audience.icon}
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    color: 'var(--gray-900)',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  {audience.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-500)',
                    lineHeight: 1.6
                  }}
                >
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .audience-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .audience-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="container">
          <div
            className="cta-card"
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative elements */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-30%',
                left: '-5%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--white)',
                  letterSpacing: '-0.02em'
                }}
              >
                Ready to make AI access provable?
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}
              >
                Start with Declare to publish policy, then layer on Trace, Gateway 402, and Verify as your AI traffic grows.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link
                  href="/declare"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--brand-primary)',
                    border: 'none',
                    fontWeight: 600
                  }}
                >
                  <span>Start with Declare</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-lg btn-ghost"
                  style={{
                    color: 'var(--white)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  <span>Talk to us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
