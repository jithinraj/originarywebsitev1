import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solutions : Originary',
  description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
  keywords: 'agentic web, orchestration protocol, AI coordination, PEAC protocol',
  openGraph: {
    title: 'Solutions : Originary',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    url: 'https://originary.xyz/solutions/',
    siteName: 'Originary',
    images: [{ url: 'https://originary.xyz/og.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions : Originary',
    description: 'Originary helps publishers, API providers, AI builders, and enterprises standardize policy and proof.',
    images: ['https://originary.xyz/og.jpg'],
  },
  alternates: {
    canonical: 'https://originary.xyz/solutions/',
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
                  &ldquo;Implementing PEAC allowed us to monetize our content archive while maintaining editorial control. We&apos;ve generated over $200k in licensing revenue in the first quarter.&rdquo;
                </p>
                <div className="grid grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>400%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Revenue increase</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>95%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Attribution compliance</div>
                  </div>
                </div>
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
                  &ldquo;Gateway 402 transformed our API from a cost center to a profit driver. The integration took just two days, and we&apos;re now processing 50k paid requests daily.&rdquo;
                </p>
                <div className="grid grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>300%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Revenue increase</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>2 days</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Integration time</div>
                  </div>
                </div>
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
                  &ldquo;PEAC integration gave us the compliance framework we needed for enterprise customers. Our agents now handle 10M interactions daily with zero policy violations.&rdquo;
                </p>
                <div className="grid grid-2" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>10M</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Daily interactions</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--brand-primary)' }}>100%</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Compliance rate</div>
                  </div>
                </div>
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
            <div className="card" style={{ textAlign: 'center', background: 'var(--gradient-brand)', color: 'white' }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Ready to Get Started?</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
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