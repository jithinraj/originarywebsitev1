'use client'

import { Shield, Fingerprint, CheckCircle, CreditCard, FileCheck, Lock, FileSignature, ShieldCheck, Target, Users } from 'lucide-react'

export default function FoundationalRailsSection() {
  const pillars = [
    { icon: Shield, label: 'Access', description: 'Policy-aware gating for AI agents' },
    { icon: Users, label: 'Attribution', description: 'Enforceable creator credits' },
    { icon: CreditCard, label: 'Commerce', description: 'HTTP 402 settlement' },
    { icon: CheckCircle, label: 'Consent', description: 'Purpose-bound usage' },
    { icon: FileCheck, label: 'Compliance', description: 'Audit bundles' },
    { icon: Lock, label: 'Privacy', description: 'Selective disclosure' },
    { icon: FileSignature, label: 'Provenance', description: 'Signed lineage and chain of custody' },
    { icon: ShieldCheck, label: 'Safety', description: 'Defense-in-depth security' },
    { icon: Fingerprint, label: 'Identity', description: 'Cryptographic proof-of-control' },
    { icon: Target, label: 'Purpose', description: 'Declared interaction intent' }
  ]

  return (
    <section style={{ padding: 'var(--space-24) 0', background: 'var(--surface-subtle)' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-4)',
              color: 'var(--text-primary)'
            }}>
              Foundational rails for AI agents
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              PEAC-compatible primitives that unify the core pillars of agent infrastructure
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
          }}
          className="pillars-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.label}
                  className="card pillar-card"
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-xl)',
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.borderColor = 'var(--accent-brand-glow)'
                    const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement
                    if (iconDiv) {
                      iconDiv.style.transform = 'scale(1.1) rotate(5deg)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                    const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement
                    if (iconDiv) {
                      iconDiv.style.transform = 'scale(1) rotate(0deg)'
                    }
                  }}
                >
                  <div
                    className="icon-container"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: 'var(--accent-brand-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-4)',
                      color: 'var(--accent-brand)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)'
                  }}>
                    {pillar.label}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pillars-grid {
          grid-template-columns: repeat(1, 1fr) !important;
        }

        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 768px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
