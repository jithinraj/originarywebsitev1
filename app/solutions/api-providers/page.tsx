import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Server, Zap, BarChart3, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monetize agent access - API Providers : Originary',
  description: 'Enable agents to discover and pay for your APIs through standardized protocols. HTTP 402, x402, PEAC receipts, and enterprise billing with compliance built-in.',
  keywords: 'API monetization, HTTP 402, x402, agent payments, PEAC protocol, enterprise billing',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Monetize agent access - API Providers : Originary',
    description: 'Enable agents to discover and pay for your APIs through standardized protocols. HTTP 402, x402, PEAC receipts, and enterprise billing with compliance built-in.',
    url: 'https://originary.xyz/solutions/api-providers',
    images: ['https://originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monetize agent access - API Providers : Originary',
    description: 'Enable agents to discover and pay for your APIs through standardized protocols. HTTP 402, x402, PEAC receipts, and enterprise billing with compliance built-in.',
    images: ['https://originary.xyz/og.jpg'],
    site: '@originaryinc',
    creator: '@originaryinc',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/solutions/api-providers',
  },
}

export default function APIProviders() {
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
                <Server className="inline w-4 h-4 mr-1" />
                API PROVIDERS
              </span>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Monetize agent access</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Enable agents to discover and pay for your APIs through standardized protocols. HTTP 402, x402, PEAC receipts, and enterprise billing with compliance built-in.
              </p>
            </div>
          </div>
        </section>

        {/* Revenue Opportunities */}
        <section className="section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Revenue opportunities</h2>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Transform your APIs into agent-accessible revenue streams with automated discovery, payment processing, and compliance reporting.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <Server className="w-8 h-8" style={{ color: 'var(--brand-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Automated discovery</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Agents find and access your APIs through standardized <code>peac.txt</code> policies
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <Zap className="w-8 h-8" style={{ color: 'var(--brand-secondary)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Instant payments</h3>
                <p style={{ lineHeight: 1.7 }}>
                  HTTP 402 gateway with multi-rail settlement: Stripe, Lightning, bank transfers
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <BarChart3 className="w-8 h-8" style={{ color: 'var(--brand-accent)' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Usage tracking</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Real-time analytics with agent attribution and revenue reporting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Implementation</h2>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Gateway deployment</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Deploy our HTTP 402 gateway in front of your existing APIs. Zero code changes required.
                </p>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>Policy configuration</h3>
                <p style={{ lineHeight: 1.7 }}>
                  Simple YAML configuration for pricing, rate limits, and access controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Start monetizing today</h2>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)'
                }}
              >
                Join API providers earning revenue from autonomous agents. Setup takes less than 30 minutes.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <a href="/company/contact" className="btn btn-primary">
                  Talk to sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="/products/gateway-402" className="btn btn-ghost">
                  Learn about Gateway (402)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}