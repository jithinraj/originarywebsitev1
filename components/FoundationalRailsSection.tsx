'use client'

import { Shield, Fingerprint, CheckCircle, CreditCard, FileCheck, Lock, FileSignature } from 'lucide-react'

export default function FoundationalRailsSection() {
  const pillars = [
    { icon: Shield, label: 'Access', description: 'Policy-aware gating' },
    { icon: Fingerprint, label: 'Attribution', description: 'Enforceable flags' },
    { icon: CheckCircle, label: 'Consent', description: 'Purpose-bound usage' },
    { icon: CreditCard, label: 'Commerce', description: 'HTTP 402 settlement' },
    { icon: FileCheck, label: 'Compliance', description: 'Audit bundles' },
    { icon: Lock, label: 'Privacy', description: 'Selective disclosure (planned)' },
    { icon: FileSignature, label: 'Provenance', description: 'Signed receipts + C2PA' }
  ]

  return (
    <section style={{ padding: 'var(--space-24) 0', background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{
              fontSize: 'clamp(var(--text-3xl), 4vw, var(--text-4xl))',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-4)',
              color: 'var(--gray-900)'
            }}>
              Foundational rails for the agentic web
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              PEAC-compatible primitives that unify the seven pillars of agent infrastructure
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
          }}
          className="pillars-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              const isLastItem = index === pillars.length - 1
              return (
                <div
                  key={pillar.label}
                  className="card pillar-card"
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--white)',
                    border: '1px solid var(--gray-200)',
                    borderRadius: 'var(--radius-xl)',
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    gridColumn: isLastItem ? 'span 1' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.borderColor = 'rgba(99, 91, 255, 0.3)'
                    const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement
                    if (iconDiv) {
                      iconDiv.style.transform = 'scale(1.1) rotate(5deg)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = 'var(--gray-200)'
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
                      background: 'rgba(99, 91, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--space-4)',
                      color: 'var(--brand-primary)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    marginBottom: 'var(--space-2)',
                    color: 'var(--gray-900)'
                  }}>
                    {pillar.label}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--gray-600)',
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
          .pillar-card:nth-child(7) {
            grid-column: 2 / 3;
          }
        }
      `}</style>
    </section>
  )
}
