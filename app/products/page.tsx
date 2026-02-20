import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Database, BarChart, Users, Globe, Star, Code } from 'lucide-react'
import ServiceOffers from '@/components/ServiceOffers'

export const metadata: Metadata = {
  title: 'Products | Verify, Gateway, MCP Server, and More',
  description: 'Open-source packages for issuing, capturing, and verifying signed interaction records. Gateway, MCP server, Capture, Verify, and Studio.',
  keywords: 'PEAC protocol, verify API, Gateway 402, MCP server, AI infrastructure, autonomous agents, interaction records',
  robots: 'index,follow',
  openGraph: {
    title: 'Products | Verify, Gateway, MCP Server, and More',
    description: 'Open-source packages for issuing, capturing, and verifying signed interaction records. Gateway, MCP server, Capture, Verify, and Studio.',
    url: '/products',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Verify, Gateway, MCP Server, and More',
    description: 'Open-source packages for issuing, capturing, and verifying signed interaction records. Gateway, MCP server, Capture, Verify, and Studio.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginBottom: 'var(--space-16)'
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--accent-brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  marginBottom: 'var(--space-4)',
                  display: 'block'
                }}
              >
                Complete Product Suite
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Infrastructure for the Agentic Web</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                From policy discovery to payment processing, our comprehensive platform provides everything autonomous agents need to interact safely, legally, and profitably across the internet.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}
              >
                <Link href="/developers" className="btn btn-primary btn-lg">
                  <span>Start Building</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/pricing" className="btn btn-secondary btn-lg">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Start with Declare Band */}
        <section style={{
          background: 'var(--accent-brand-faint)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: 'var(--space-8) 0'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '700px',
                margin: 0
              }}>
                <strong style={{ color: 'var(--accent-brand)' }}>Start with Declare:</strong> Most teams begin with Declare (Policy Kit) to define AI policy and receipts, then add Gateway 402, Verify API, Studio, and Trace as their traffic and compliance needs grow.
              </p>
              <Link href="/declare" className="btn btn-primary btn-sm">
                Get Declare
              </Link>
            </div>
          </div>
        </section>

        {/* Core Products */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Core Orchestration Platform</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                The foundational products that power autonomous AI coordination at scale.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <ProductCard
                icon={<Shield size={32} style={{ color: 'var(--accent-brand)' }} />}
                title="Verify"
                category="Verification Layer"
                description="Deterministic verification for PEAC receipts. Validate signatures offline using published JWKS endpoints. No API callback required."
                features={[
                  'JWS signature verification',
                  'Offline verification support',
                  'Real-time compliance checking',
                  'Audit trail generation',
                  'High availability SLA'
                ]}
                href="/verify"
                status="start-here"
              />

              <ProductCard
                icon={<Zap size={32} style={{ color: 'var(--accent-secondary)' }} />}
                title="Gateway 402"
                category="Payment Gateway"
                description="HTTP 402 payment gateway that transforms any API endpoint into a monetized resource. Works with any configured payment adapter."
                features={[
                  'Rail-neutral payment processing',
                  'Multiple adapter support',
                  'Usage-based billing',
                  'Automatic receipt generation',
                  'Enterprise billing integration'
                ]}
                href="/products/gateway-402"
                status="optional"
              />

              <ProductCard
                icon={<Database size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="PEAC Protocol"
                category="Specification"
                description="The open protocol for machine-readable policies and consent. Enables autonomous agents to discover access terms, pricing, and attribution requirements automatically."
                features={[
                  'Automated policy discovery',
                  'Standardized consent frameworks',
                  'Attribution and licensing rules',
                  'Cross-platform compatibility',
                  'Open source specification'
                ]}
                href="/peac"
                status="open-standard"
              />
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                marginBottom: 'var(--space-16)'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Development & Management Tools</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}
              >
                Visual tools and adapters that accelerate development and simplify operations.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <ProductCard
                icon={<Code size={32} style={{ color: 'var(--accent-brand)' }} />}
                title="Studio"
                category="Visual Builder"
                description="Visual policy builder and testing environment. Create, validate, and deploy PEAC policies with an intuitive drag-and-drop interface."
                features={[
                  'Visual policy editor',
                  'Real-time validation',
                  'Policy testing environment',
                  'Team collaboration',
                  'Deployment automation'
                ]}
                href="/products/studio"
                status="preview"
              />

              <ProductCard
                icon={<Globe size={32} style={{ color: 'var(--accent-secondary)' }} />}
                title="Adapters"
                category="Integration Layer"
                description="Pre-built integrations for popular platforms and frameworks. Connect PEAC to existing infrastructure with zero custom development."
                features={[
                  'Express.js & Next.js adapters',
                  'Cloudflare Workers support',
                  'CDN and edge integrations',
                  'Authentication providers',
                  'Custom adapter framework'
                ]}
                href="/products/adapters"
              />

              <ProductCard
                icon={<BarChart size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Trace"
                category="Audit Layer"
                description="Comprehensive receipt management and observability platform. Track usage, monitor compliance, and generate detailed reports for stakeholders."
                features={[
                  'Receipt observability dashboard',
                  'Compliance reporting',
                  'Revenue tracking',
                  'Custom alert system',
                  'Data export and APIs'
                ]}
                href="/trace"
                status="preview"
              />
            </div>
          </div>
        </section>

        <ServiceOffers />

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              className="cta-card"
              style={{
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
                  background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)',
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
                  Ready to Get Started?
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
                  Choose the products that fit your needs and start building autonomous AI coordination into your platform today.
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
                    href="/developers"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
                      border: 'none'
                    }}
                  >
                    <span>Start Building</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid var(--border-hover)'
                    }}
                  >
                    <span>Talk to Sales</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ProductCard({
  icon,
  title,
  category,
  description,
  features,
  href,
  status
}: {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  features: string[];
  href: string;
  status?: 'start-here' | 'optional' | 'preview' | 'open-standard';
}) {
  // Brand-accent badge system: featured uses brand, others use neutrals
  const statusStyles: Record<string, { bg: string; color: string; label: string; border?: string }> = {
    'start-here': { bg: 'var(--accent-brand-subtle)', color: 'var(--accent-brand)', label: 'Start here', border: 'var(--accent-brand-muted)' },
    'optional': { bg: 'var(--surface-card)', color: 'var(--text-secondary)', label: 'Optional' },
    'preview': { bg: 'var(--accent-warning-muted)', color: 'var(--text-secondary)', label: 'Preview' },
    'open-standard': { bg: 'var(--surface-card)', color: 'var(--text-secondary)', label: 'Open Standard' }
  }

  return (
    <div className="card" style={status === 'start-here' ? { border: '1px solid var(--accent-brand-muted)' } : undefined}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-6)' }}>
        {icon}
        {status && (
          <span
            style={{
              fontSize: '10px',
              fontWeight: 600,
              color: statusStyles[status].color,
              background: statusStyles[status].bg,
              padding: '4px 8px',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {statusStyles[status].label}
          </span>
        )}
      </div>

      <div style={{ marginBottom: 'var(--space-4)' }}>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          {category}
        </span>
      </div>

      <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
        {title}
      </h3>

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
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
              color: 'var(--text-secondary)'
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

      <Link
        href={href}
        style={{
          color: 'var(--accent-brand)',
          textDecoration: 'none',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}
        aria-label={`Learn more about ${title}`}
      >
        <span>Learn more about {title}</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}