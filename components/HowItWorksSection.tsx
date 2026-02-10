'use client'

import Link from 'next/link'
import { ArrowRight, Eye, FileCheck, Shield, CreditCard, Scale, Lock, Receipt } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Declare',
    description: 'Define interaction terms: access rules, attribution requirements, and optional settlement conditions.',
    icon: '📋',
    href: '/declare'
  },
  {
    number: '2',
    title: 'Gateway 402',
    description: 'Enforce decisions at the edge or origin with allow/deny/rate-limit and optional HTTP 402 challenges.',
    icon: '🔐',
    href: '/products/gateway-402'
  },
  {
    number: '3',
    title: 'Verify',
    description: 'Verify signed receipts offline (library) or via API for billing, disputes, audits, and partner attestations.',
    icon: '✓',
    href: '/verify'
  },
  {
    number: '4',
    title: 'Trace',
    description: 'Observe decisions and outcomes as evidence events, then export for audits and operations.',
    icon: '📊',
    href: '/trace'
  }
]

const pillars = [
  { icon: Eye, name: 'Access', desc: 'Who can read or call what' },
  { icon: FileCheck, name: 'Attribution', desc: 'Who created the content' },
  { icon: Shield, name: 'Consent', desc: 'What terms were agreed to' },
  { icon: CreditCard, name: 'Commerce', desc: 'How usage is settled' },
  { icon: Scale, name: 'Compliance', desc: 'Regulatory obligations' },
  { icon: Lock, name: 'Privacy', desc: 'Data retention policies' },
  { icon: Receipt, name: 'Provenance', desc: 'Origin and chain of custody' }
]

export default function HowItWorksSection() {
  return (
    <section
      style={{
        padding: 'var(--space-20) 0',
        background: 'var(--surface-subtle)',
        borderTop: '1px solid var(--border-default)',
        borderBottom: '1px solid var(--border-default)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2
            style={{
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-4)',
              letterSpacing: '-0.02em'
            }}
          >
            How it works
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Deploy policy once. Enforce anywhere. Verify outcomes independently.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div
          className="how-it-works-grid animate-on-scroll stagger-children"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)'
          }}
        >
          {steps.map((step) => (
            <Link
              key={step.title}
              href={step.href}
              style={{
                display: 'block',
                padding: 'var(--space-6)',
                background: 'var(--surface-elevated)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border-default)',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'var(--accent-brand)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--border-default)'
              }}
            >
              {/* Step Number Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 'var(--space-4)',
                  right: 'var(--space-4)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--surface-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)'
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, var(--accent-brand-subtle), var(--accent-secondary-subtle))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  marginBottom: 'var(--space-4)'
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-2)'
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                {step.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Row */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-16)'
          }}
        >
          <Link
            href="/developers"
            className="btn btn-primary btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            See implementation docs
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/demo"
            className="btn btn-secondary btn-magnetic"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            Try a live demo request
          </Link>
        </div>

        {/* Seven Pillars of PEAC */}
        <div
          className="animate-on-scroll"
          style={{
            background: 'var(--text-primary)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--space-8)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, var(--accent-brand-muted) 0%, var(--accent-secondary-subtle) 100%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-6)',
                flexWrap: 'wrap'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap'
                }}
              >
                Seven pillars of PEAC
              </span>

              <div
                className="pillars-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                {pillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={pillar.name}
                      title={pillar.desc}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        padding: 'var(--space-2) var(--space-3)',
                        background: 'var(--border-default)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--glass-border-hover)',
                        cursor: 'help',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--border-hover)'
                        e.currentTarget.style.borderColor = 'var(--accent-brand-glow)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--border-default)'
                        e.currentTarget.style.borderColor = 'var(--glass-border-hover)'
                      }}
                    >
                      <Icon size={16} style={{ color: 'var(--accent-brand)' }} />
                      <span
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 500,
                          color: 'var(--text-primary)'
                        }}
                      >
                        {pillar.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
