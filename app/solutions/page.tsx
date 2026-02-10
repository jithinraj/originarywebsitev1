import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
  keywords: 'AI agents, orchestration protocol, AI coordination, PEAC protocol',
  robots: 'index,follow',
  openGraph: {
    title: 'Solutions',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    url: '/solutions',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: 'var(--accent-brand-muted)',
                color: 'var(--accent-brand)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-6)'
              }}>
                SOLUTIONS
              </div>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Solutions for Every Role</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
                Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.
              </p>
              <a href="mailto:contact@originary.xyz" className="btn btn-primary">
                Talk to us
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Tailored Solutions for Every Role</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Whether you&apos;re protecting content, monetizing APIs, or building AI systems, our platform provides the tools you need for transparent, verifiable interactions.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-2" style={{ gap: 'var(--space-12)' }}>
              {/* Publishers */}
              <div id="publishers" className="card" style={{ scrollMarginTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>📰</span>
                  <h3>Content Publishers</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Protect intellectual property while enabling legitimate AI training through verifiable consent and attribution.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>IP Protection & Attribution</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Usage Tracking & Analytics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Revenue Generation</span>
                  </div>
                </div>
                <a href="/solutions/publishers" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* API Providers */}
              <div id="api-providers" className="card" style={{ scrollMarginTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🔌</span>
                  <h3>API Providers</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Transform APIs into revenue-generating assets with automated billing, usage tracking, and compliance.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Instant Monetization</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Zero Refactoring Required</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Global Payment Support</span>
                  </div>
                </div>
                <a href="/solutions/api-providers" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* AI Builders */}
              <div id="ai-builders" className="card" style={{ scrollMarginTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🤖</span>
                  <h3>AI Builders</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Build ethical AI systems that respect policies, maintain consent, and provide verifiable interaction records.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Policy Compliance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Consent Management</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Scalable Integration</span>
                  </div>
                </div>
                <a href="/solutions/ai-builders" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* Enterprise */}
              <div id="enterprise" className="card" style={{ scrollMarginTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🏢</span>
                  <h3>Enterprise</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Governance and compliance for AI at scale.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Centralized Governance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Security Integration</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Enterprise Scale</span>
                  </div>
                </div>
                <a href="/solutions/enterprises" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Use cases</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                PEAC receipts apply across publishers, API providers, and agent builders.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>Publishers</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-brand)',
                    backgroundColor: 'var(--accent-brand-muted)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    Content Access
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Publish peac.txt to declare access, attribution, and pricing policies. Receive signed receipts when agents access content, creating verifiable evidence of compliance.
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>API Providers</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-brand)',
                    backgroundColor: 'var(--accent-brand-muted)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    Payment Settlement
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Use Gateway 402 and x402 to implement payment-required API endpoints. Receipts record each transaction for billing reconciliation and dispute resolution.
                </p>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>Agent Builders</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-brand)',
                    backgroundColor: 'var(--accent-brand-muted)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    Audit Trails
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Collect receipts as agents interact with APIs and content. Build verifiable audit trails for compliance reporting and cost tracking across multi-agent workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <div className="card cta-card">
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Ready to Get Started?</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Join organizations building the future of AI coordination
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--accent-brand)' }}>
                  Talk to Sales
                </a>
                <a href="/developers" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--border-hover)' }}>
                  Developer Docs
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