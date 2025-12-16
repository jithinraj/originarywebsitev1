import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
  keywords: 'agentic web, orchestration protocol, AI coordination, PEAC protocol',
  robots: 'index,follow',
  openGraph: {
    title: 'Solutions',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    url: 'https://www.originary.xyz/solutions',
    siteName: 'Originary',
    images: [{ url: 'https://www.originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    images: ['https://www.originary.xyz/og.jpg'],
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
                backgroundColor: 'var(--brand-primary-light)',
                color: 'var(--brand-primary)',
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
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', marginBottom: 'var(--space-8)' }}>
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
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Whether you&apos;re protecting content, monetizing APIs, or building AI systems, our platform provides the tools you need for transparent, verifiable interactions.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-2" style={{ gap: 'var(--space-12)' }}>
              {/* Publishers */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>📰</span>
                  <h3>Content Publishers</h3>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Protect intellectual property while enabling legitimate AI training through verifiable consent and attribution.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>IP Protection & Attribution</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Usage Tracking & Analytics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Revenue Generation</span>
                  </div>
                </div>
                <a href="/solutions/publishers" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* API Providers */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🔌</span>
                  <h3>API Providers</h3>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Transform APIs into revenue-generating assets with automated billing, usage tracking, and compliance.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Instant Monetization</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Zero Refactoring Required</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Global Payment Support</span>
                  </div>
                </div>
                <a href="/solutions/api-providers" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* AI Builders */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🤖</span>
                  <h3>AI Builders</h3>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Build ethical AI systems that respect policies, maintain consent, and provide verifiable interaction records.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Policy Compliance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Consent Management</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Scalable Integration</span>
                  </div>
                </div>
                <a href="/solutions/ai-builders" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>

              {/* Enterprise */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: '2rem' }}>🏢</span>
                  <h3>Enterprise</h3>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
                  Comprehensive governance and compliance for large-scale AI coordination initiatives.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Centralized Governance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Security Integration</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--brand-primary)' }}>✓</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>Enterprise Scale</span>
                  </div>
                </div>
                <a href="/solutions/enterprises" className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Customer Success Stories</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Real results from organizations using our solutions in production.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>NewsGlobal Media</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--brand-primary)',
                    backgroundColor: 'var(--brand-primary-light)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    Publisher Solution
                  </span>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', fontStyle: 'italic' }}>
                  &ldquo;Implementing PEAC helped us establish clear policies for agent access to our content while maintaining control over attribution and usage.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Sarah Chen</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Chief Technology Officer</div>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>DataFlow API</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--brand-primary)',
                    backgroundColor: 'var(--brand-primary-light)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    API Provider Solution
                  </span>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', fontStyle: 'italic' }}>
                  &ldquo;Gateway 402 enabled us to implement payment-required flows for our API endpoints. The integration was straightforward and well-documented.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Marcus Rodriguez</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Head of Product</div>
                </div>
              </div>

              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>AutoAgent Systems</h3>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--brand-primary)',
                    backgroundColor: 'var(--brand-primary-light)',
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600
                  }}>
                    AI Builder Solution
                  </span>
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', fontStyle: 'italic' }}>
                  &ldquo;PEAC integration provided the policy framework we needed for enterprise deployments. The receipt system gives us clear audit trails for compliance.&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Dr. Emily Watson</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>VP of Engineering</div>
                </div>
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
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--brand-primary)' }}>
                  Talk to Sales
                </a>
                <a href="/developers" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
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