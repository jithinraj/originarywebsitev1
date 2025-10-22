'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Zap, Shield, Database, BarChart, Users, Globe, Star } from 'lucide-react'
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
                'Cryptographically signed JSON-LD receipts',
                'Interactive graph explorer for provenance queries',
                'SIEM & data warehouse connectors out of the box'
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div
            className="section-header"
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-16)'
            }}
          >
            <h2 style={{ marginBottom: 'var(--space-6)' }}>
              Composable products that ship together
            </h2>
            <p
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                maxWidth: '700px',
                margin: '0 auto var(--space-8) auto',
                lineHeight: 1.7
              }}
            >
              Deploy the entire Originary stack or start with the module you need. Every product shares identity, policy, and observability primitives.
            </p>
            <Link href="/products" className="btn btn-secondary">
              <span>Explore all products</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
            <ProductCard
              title="PEAC Core"
              category="Policy Intelligence"
              description="Model your access, consent, attribution, and compensation logic once. PEAC Core negotiates clauses per requester profile and governs propagation."
              features={[
                'Schema guardrails & policy linting',
                'Sandboxed policy simulations',
                'Legal & ops approval workflows'
              ]}
              href="/products/peac"
              delay={0.1}
            />

            <ProductCard
              title="Verify API"
              category="Proof Engine"
              description="Real-time verification and notarization for receipts. Query lineage, revoke access instantly, and anchor proofs where you need them."
              features={[
                'JWS + C2PA cryptographic signatures',
                'Selective disclosure tokens',
                'Immutable audit timeline'
              ]}
              href="/products/verify"
              delay={0.2}
            />

            <ProductCard
              title="Gateway 402"
              category="Settlement Gateway"
              description="Drop-in payment gateway that wraps any endpoint in HTTP 402. Charge per request, stream usage events, and reconcile in minutes."
              features={[
                'Credit pools & prepaid wallets',
                'Adaptive pricing by user segment',
                'Webhook & ledger integrations'
              ]}
              href="/products/gateway-402"
              delay={0.3}
            />

            <ProductCard
              title="Studio"
              category="Developer Experience"
              description="Visual policy builder, testing playground, and analytics dashboard. Ship policy changes with confidence and monitor compliance in real-time."
              features={[
                'Drag-and-drop policy designer',
                'Real-time compliance monitoring',
                'A/B testing for policy variants'
              ]}
              href="/products/studio"
              delay={0.4}
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

function ProductCard({
  title,
  category,
  description,
  features,
  href,
  delay = 0
}: {
  title: string;
  category: string;
  description: string;
  features: string[];
  href: string;
  delay?: number;
}) {
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
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
      }}
    >
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--brand-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'rgba(99, 91, 255, 0.1)',
            padding: 'var(--space-1) var(--space-3)',
            borderRadius: 'var(--radius-full)'
          }}
        >
          {category}
        </span>
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
        {title}
      </h3>

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-6)' }}>
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
            <ArrowRight size={14} style={{
              color: 'var(--gray-400)',
              marginTop: '3px',
              flexShrink: 0
            }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        style={{
          color: 'var(--brand-primary)',
          textDecoration: 'none',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
      >
        <span>Learn more</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}

