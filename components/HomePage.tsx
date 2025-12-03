'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Zap, Shield, Database } from 'lucide-react'
import ServiceOffers from './ServiceOffers'

export default function WorldClassHomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Value Propositions Section */}
      <section className="section">
        <div className="container">
          <div
            className="section-header"
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-16)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              <span className="text-gradient">Control every policy, payment, and proof</span> from one fabric
            </h2>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.7
              }}
            >
              Enterprise infrastructure for the agentic economy. Legal, product, and engineering teams get a unified control plane for access and revenue without slowing down innovation.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
            <ValueCard
              icon={<Database className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />}
              title="Unified Policy Graph"
              description="Publish once, negotiate everywhere. Originary translates PEAC clauses into enforceable controls across agents, APIs, and downstream systems."
              features={[
                'Auto-generate variants for agents, crawlers, and humans',
                'Version control with full diff history',
                'Multi-tenant isolation and overrides'
              ]}
              delay={0.1}
            />

            <ValueCard
              icon={<Zap className="w-8 h-8" style={{ color: 'var(--brand-secondary)' }} />}
              title="Composable Commerce Rails"
              description="Bring your pricing logic and payment providers. Our gateway brokers credits, fiat, or crypto without refactoring existing endpoints."
              features={[
                'Policy-aware usage metering and throttles',
                'x402, Stripe, and on-chain settlement adapters',
                'Dynamic rate cards per policy segment'
              ]}
              delay={0.2}
            />

            <ValueCard
              icon={<Shield className="w-8 h-8" style={{ color: 'var(--brand-accent)' }} />}
              title="Provable Trust & Analytics"
              description="Every interaction emits a tamper-evident receipt. Stream them into your observability stack or hand to regulators in one click."
              features={[
                'Cryptographically signed receipts (JWS; C2PA-compatible)',
                'Interactive graph explorer for provenance queries',
                'SIEM & data warehouse connectors out of the box'
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <ServiceOffers />

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              background: 'var(--gradient-brand)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'var(--space-16) var(--space-8)',
              color: 'var(--white)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2
                style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}
              >
                Ready to ship Receipts for the agentic web?
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}
              >
                Join the companies building compliant, profitable AI interactions. Powered by an open protocol.
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
                  href="/company/contact"
                  className="btn btn-lg"
                  style={{
                    background: 'var(--white)',
                    color: 'var(--brand-primary)',
                    border: 'none'
                  }}
                >
                  <span>Start building today</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/developers"
                  className="btn btn-lg btn-ghost"
                  style={{
                    color: 'var(--white)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span>Read documentation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({
  icon,
  title,
  description,
  features,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className="card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          marginBottom: 'var(--space-6)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform var(--duration-300) var(--ease-out)'
        }}
      >
        {icon}
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
        {title}
      </h3>

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-3)',
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)'
            }}
          >
            <CheckCircle size={16} style={{
              color: 'var(--success)',
              marginTop: '2px',
              flexShrink: 0
            }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

