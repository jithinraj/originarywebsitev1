import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Originary helps publishers and API providers standardize policy and proof.',
  keywords: 'AI agents, orchestration protocol, AI coordination, PEAC protocol',
  robots: 'noindex,nofollow',
  openGraph: {
    title: 'Solutions',
    description: 'Originary helps publishers and API providers standardize policy and proof.',
    url: '/solutions',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions',
    description: 'Originary helps publishers and API providers standardize policy and proof.',
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
        <section className="section" style={{ paddingTop: '96px', paddingBottom: '40px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>SOLUTIONS</div>
              <h1 style={{ marginBottom: 'var(--space-6)', color: 'var(--text-primary)', fontWeight: 700 }}>
                Where we think PEAC applies
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
                These are the scenarios we are building for. We are looking for design partners in each area. If your team runs agent-facing APIs, tools, or MCP servers, we would like to work with you.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>By role</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Each role has a different starting point. Pick yours.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-2" style={{ gap: 'var(--space-12)' }}>
              {/* Publishers */}
              <div id="publishers" className="card" style={{ scrollMarginTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <h3>Content Publishers</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Publish a peac.txt policy file declaring how AI agents may use your content. Collect signed records when agents comply.
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
                  <h3>API Providers</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                  Add HTTP 402 payment gates to API endpoints. Agents pay per request and receive a signed receipt. No accounts or subscriptions required.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>HTTP 402 Payment Gates</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Zero Refactoring Required</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--accent-brand)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Signed Receipt per Request</span>
                  </div>
                </div>
                <a href="/solutions/api-providers" className="btn btn-secondary" style={{ width: '100%' }}>
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
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Get started</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Install the open-source packages or talk to us about your use case.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--accent-brand)' }}>
                  Contact us
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
