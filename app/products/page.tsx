import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Database, BarChart, Users, Globe, Star, Code } from 'lucide-react'
import ServiceOffers from '@/components/ServiceOffers'

export const metadata: Metadata = {
  title: 'Products : Originary',
  description: 'Complete orchestration infrastructure for the agentic web. PEAC Protocol, Verify API, Gateway 402, Studio, and Adapters-everything you need to power autonomous AI coordination.',
  keywords: 'PEAC protocol, verify API, Gateway 402, AI orchestration, autonomous agents, policy enforcement',
  openGraph: {
    title: 'Products : Originary',
    description: 'Complete orchestration infrastructure for the agentic web. PEAC Protocol, Verify API, Gateway 402, Studio, and Adapters-everything you need to power autonomous AI coordination.',
    url: 'https://www.originary.xyz/products/',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products : Originary',
    description: 'Complete orchestration infrastructure for the agentic web. PEAC Protocol, Verify API, Gateway 402, Studio, and Adapters-everything you need to power autonomous AI coordination.',
    images: ['https://www.originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://www.originary.xyz/products/',
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
                  color: 'var(--brand-primary)',
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
                  color: 'var(--gray-600)',
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

        {/* Core Products */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
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
                  color: 'var(--gray-600)',
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
                icon={<Database size={32} style={{ color: 'var(--brand-primary)' }} />}
                title="PEAC Protocol"
                category="Foundation Layer"
                description="The open standard for machine-readable policies and consent. Enables autonomous agents to discover access terms, pricing, and attribution requirements automatically."
                features={[
                  'Automated policy discovery',
                  'Standardized consent frameworks',
                  'Attribution and licensing rules',
                  'Cross-platform compatibility',
                  'Open source specification'
                ]}
                href="/products/peac"
              />

              <ProductCard
                icon={<Shield size={32} style={{ color: 'var(--brand-secondary)' }} />}
                title="Verify API"
                category="Verification Layer"
                description="Cryptographic verification service for PEAC receipts. Provides tamper-proof audit trails and compliance reporting for every AI interaction."
                features={[
                  'JWS signature verification',
                  'Real-time compliance checking',
                  'Blockchain anchoring',
                  'Audit trail generation',
                  'High availability SLA'
                ]}
                href="/products/verify"
              />

              <ProductCard
                icon={<Zap size={32} style={{ color: 'var(--brand-accent)' }} />}
                title="Gateway 402"
                category="Payment Layer"
                description="HTTP 402 payment gateway that transforms any API endpoint into a monetized resource. Handles micropayments, usage tracking, and receipt generation automatically."
                features={[
                  'Instant micropayment processing',
                  'Multiple currency support',
                  'Usage-based billing',
                  'Automatic receipt generation',
                  'Enterprise billing integration'
                ]}
                href="/products/gateway-402"
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
                  color: 'var(--gray-600)',
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
                icon={<Code size={32} style={{ color: 'var(--brand-primary)' }} />}
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
              />

              <ProductCard
                icon={<Globe size={32} style={{ color: 'var(--brand-secondary)' }} />}
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
                title="Receipts"
                category="Audit Layer"
                description="Comprehensive receipt management and analytics platform. Track usage, monitor compliance, and generate detailed reports for stakeholders."
                features={[
                  'Receipt analytics dashboard',
                  'Compliance reporting',
                  'Revenue tracking',
                  'Custom alert system',
                  'Data export and APIs'
                ]}
                href="/receipts"
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
                  Ready to Get Started?
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-xl)',
                    marginBottom: 'var(--space-8)',
                    opacity: 0.9,
                    maxWidth: '600px',
                    margin: '0 auto var(--space-8) auto'
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
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
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
                      border: '1px solid rgba(255,255,255,0.2)'
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
  href
}: {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  features: string[];
  href: string;
}) {
  return (
    <div className="card">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        {icon}
      </div>

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

      <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7, color: 'var(--gray-600)' }}>
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
          color: 'var(--brand-primary)',
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