import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'

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
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://originary.xyz/solutions/api-providers',
  },
}

export default function APIProviders() {
  return (
    <StaticPageLayout>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="kicker">API PROVIDERS</span>
              <h1 className="display">Monetize agent access</h1>
              <p className="sub">Enable agents to discover and pay for your APIs through standardized protocols. HTTP 402, x402, PEAC receipts, and enterprise billing with compliance built-in.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <h2>Revenue opportunities</h2>
              <p>Transform your APIs into agent-accessible revenue streams with automated discovery, payment processing, and compliance reporting.</p>

              <div className="revenue-cards">
                <div className="revenue-card">
                  <h3>Automated discovery</h3>
                  <p>Agents find and access your APIs through standardized <code>peac.txt</code> policies</p>
                </div>
                <div className="revenue-card">
                  <h3>Instant payments</h3>
                  <p>HTTP 402 gateway with multi-rail settlement: Stripe, Lightning, bank transfers</p>
                </div>
                <div className="revenue-card">
                  <h3>Usage tracking</h3>
                  <p>Real-time analytics with agent attribution and revenue reporting</p>
                </div>
              </div>

              <h2>Implementation</h2>
              <div className="grid-2">
                <div className="card">
                  <h3>Gateway deployment</h3>
                  <p>Deploy our HTTP 402 gateway in front of your existing APIs. Zero code changes required.</p>
                </div>
                <div className="card">
                  <h3>Policy configuration</h3>
                  <p>Simple YAML configuration for pricing, rate limits, and access controls.</p>
                </div>
              </div>

              <div className="cta-section">
                <h2>Start monetizing today</h2>
                <p>Join API providers earning revenue from autonomous agents. Setup takes less than 30 minutes.</p>
                <div className="cta-actions">
                  <a href="mailto:contact@originary.xyz" className="btn primary">Talk to sales</a>
                  <a href="/products/gateway-402/" className="btn secondary">Learn about Gateway (402)</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StaticPageLayout>
  )
}