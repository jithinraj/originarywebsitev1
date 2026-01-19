import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Server, LineChart, Clock, Lock, CheckCircle, Settings, Globe, Database, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PEAC in Production | Enterprise Deployment & Operations',
  description: 'Deploy PEAC Protocol at enterprise scale. Managed infrastructure, monitoring, compliance dashboards, and support.',
  keywords: 'PEAC enterprise, PEAC deployment, PEAC operations, agent infrastructure, receipt monitoring, compliance dashboard, enterprise support, PEAC scaling',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'PEAC in Production | Enterprise Deployment & Operations',
    description: 'Deploy PEAC Protocol at enterprise scale. Managed infrastructure, monitoring, compliance dashboards, and support.',
    url: '/products/peac',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEAC in Production | Enterprise Deployment & Operations',
    description: 'Deploy PEAC Protocol at enterprise scale. Managed infrastructure, compliance dashboards, and 24/7 support.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/peac',
  },
}

export default function PEACInProduction() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PEAC in Production",
    "description": "Enterprise deployment and operations for PEAC Protocol - managed infrastructure, monitoring, and support",
    "brand": {
      "@type": "Organization",
      "name": "Originary"
    },
    "category": "Enterprise Software",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "2500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-primary)'
              }}>
                <Server size={16} />
                <span>ENTERPRISE OPERATIONS</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                PEAC <span className="text-gradient">in production</span>
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '48rem',
                margin: '0 auto var(--space-8) auto'
              }}>
                Run PEAC Protocol at enterprise scale with managed infrastructure, real-time monitoring, compliance dashboards, and 24/7 support.
              </p>

              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-10)'
              }}>
                Looking for the open protocol? See <Link href="/peac" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC Protocol</Link>
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <span>Talk to sales</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="btn btn-secondary btn-lg">
                  <span>View pricing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Patterns */}
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-8)',
              textAlign: 'center'
            }} className="metrics-grid">
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>Edge</div>
                <div style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Verification</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>Self</div>
                <div style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Hosted</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>Managed</div>
                <div style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Cloud</div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: 'var(--space-2)' }}>Hybrid</div>
                <div style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>Deployment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Capabilities */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Enterprise capabilities</h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-16)',
              maxWidth: '600px',
              margin: '0 auto var(--space-16) auto'
            }}>
              Everything you need to operate PEAC at scale
            </p>

            <div className="grid grid-3" style={{ marginBottom: 'var(--space-16)' }}>
              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Globe size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Edge deployment</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Deploy receipt verification at the edge for low-latency validation. Supports Cloudflare Workers and other edge runtimes.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Activity size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Real-time monitoring</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Live dashboards for receipt volume, verification rates, error tracking, and agent activity patterns.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Compliance dashboards</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Audit trails, policy enforcement reports, and exportable compliance documentation for regulators.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Database size={28} style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Receipt archive</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Immutable receipt storage with configurable retention. Query receipts by agent, resource, or time range.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(0, 212, 170, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Settings size={28} style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Policy management</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Visual policy editor, version control, staging environments, and rollback capabilities.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(255, 107, 53, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Lock size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Key management</h3>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  EdDSA (Ed25519) signing with configurable key rotation. JWKS endpoint for public key distribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Deployment options</h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-16)',
              maxWidth: '600px',
              margin: '0 auto var(--space-16) auto'
            }}>
              Choose the deployment model that fits your security and compliance requirements
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card" style={{ border: '2px solid var(--gray-200)' }}>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Originary Cloud</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Fully managed deployment on our global infrastructure. Fastest time to production.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Multi-region redundancy', 'Automatic scaling', 'Managed updates', 'Built-in DDoS protection'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-secondary)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ border: '2px solid var(--brand-primary)' }}>
                <div style={{
                  background: 'var(--brand-primary)',
                  color: 'white',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  padding: 'var(--space-1) var(--space-3)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-block',
                  marginBottom: 'var(--space-4)'
                }}>
                  RECOMMENDED
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Hybrid</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Edge verification in your infrastructure with Originary Cloud for observability and management.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Data stays in your VPC', 'Sub-10ms local latency', 'Central management', 'Best of both worlds'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-secondary)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ border: '2px solid var(--gray-200)' }}>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Self-hosted</h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Full control with our enterprise distribution. For air-gapped or highly regulated environments.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Complete data sovereignty', 'Air-gap compatible', 'Custom integrations', 'Enterprise support'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--brand-secondary)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Points */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Integrates with your stack</h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-16)',
              maxWidth: '600px',
              margin: '0 auto var(--space-16) auto'
            }}>
              Drop-in integration with existing infrastructure
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-8)',
              maxWidth: '900px',
              margin: '0 auto'
            }} className="integration-grid">
              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>Edge Runtimes</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Deploy to Cloudflare Workers, Vercel Edge, or other JavaScript edge runtimes
                </p>
              </div>
              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>Protocol Standards</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  HTTP-native with JWS receipts, JWKS discovery, and robots.txt compatibility
                </p>
              </div>
              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>Observability</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  Structured logging and OpenTelemetry-compatible trace export
                </p>
              </div>
              <div className="card">
                <h4 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-lg)' }}>Payment Integration</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                  x402 for HTTP 402 machine payments. Additional processors via webhook integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>Enterprise support</h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-16)',
              maxWidth: '600px',
              margin: '0 auto var(--space-16) auto'
            }}>
              Dedicated assistance for mission-critical deployments
            </p>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <Clock size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h4 style={{ marginBottom: 'var(--space-2)' }}>24/7 Support</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Round-the-clock access to our engineering team for critical issues
                </p>
              </div>
              <div className="card">
                <Zap size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h4 style={{ marginBottom: 'var(--space-2)' }}>Dedicated CSM</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Named customer success manager for strategic planning and optimization
                </p>
              </div>
              <div className="card">
                <LineChart size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
                <h4 style={{ marginBottom: 'var(--space-2)' }}>Quarterly reviews</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Regular business reviews with roadmap previews and capacity planning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="container" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
          <div className="card cta-card">
            <h2 style={{ marginBottom: 'var(--space-6)' }}>Ready to deploy PEAC at scale?</h2>
            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
              Our solutions team will help you design the right deployment architecture for your requirements.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/contact"
                className="btn btn-lg"
                style={{
                  background: 'var(--white)',
                  color: 'var(--brand-primary)',
                  border: 'none'
                }}
              >
                <span>Schedule a demo</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/peac"
                className="btn btn-lg btn-ghost"
                style={{
                  color: 'var(--white)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <span>View open protocol</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </>
  )
}
