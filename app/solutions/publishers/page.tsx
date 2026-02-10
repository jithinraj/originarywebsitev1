import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Publishers | AI Compliance and Content Protection',
  description: 'AI compliance and provenance tracking for publishers. Set AI preferences with AIPREF, verify compliance, and monetize content with PEAC.',
  keywords: 'AI compliance, AI provenance tracking, AI licensing, content protection, AI preference standard, AIPREF, AI training preferences, content monetization, automated licensing, attribution requirements, PEAC, publishers, content rights',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Publishers | AI Compliance and Content Protection',
    description: 'AI compliance and AI provenance tracking for publishers. Set AI preferences, verify AI compliance with attribution requirements, and monetize content access through automated licensing.',
    url: '/solutions/publishers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publishers | AI Compliance and Content Protection',
    description: 'AI compliance and AI provenance tracking for publishers. Set AI preferences, verify AI compliance with attribution requirements, and monetize content access.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/solutions/publishers',
  },
}

export default function Publishers() {
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
                color: 'var(--accent-brand)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-6)'
              }}>
                PUBLISHERS
              </div>
              <h1 style={{ marginBottom: 'var(--space-6)' }}>
                <span className="text-gradient">Protect and Monetize Content</span>
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                AI compliance and AI provenance tracking for publishers. Set AI preferences for training and usage, verify AI compliance with attribution requirements, and monetize content access through automated licensing with AIPREF and PEAC.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Content Control</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                Establish clear preferences for how AI systems can access, use, and attribute your content while creating new revenue streams through AI licensing and AI commerce for publishers.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
                Use AIPREF and AI preference standard for machine-readable AI access preferences, enabling automated AI licensing and payment flows for your content.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--brand-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Usage Preferences</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Define how your content can be used for training, fine-tuning, and inference
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--brand-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📝</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Attribution Requirements</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Specify citation and credit requirements for all content usage
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--brand-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>💰</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Automated Licensing</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Enable agents to automatically license content through payment protocols
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Implementation</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Get started with simple setup and comprehensive monitoring tools.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--accent-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>⚡</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Simple Setup</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Add AIPREF and <code style={{ backgroundColor: 'var(--surface-card)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac.txt</code> files to your website root to declare your preferences.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--accent-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📊</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Verification Dashboard</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                  Monitor compliance and track usage through our comprehensive analytics platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card cta-card">
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Protect Your Content</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', color: 'var(--white)', lineHeight: 1.6 }}>
                Join publishers who are taking control of their content in the age of AI.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--accent-brand)' }}>
                  Talk to our team
                </a>
                <a href="/trace" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--border-hover)' }}>
                  AI crawler analytics and bot tracking
                </a>
                <a href="/integrations/aipref" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--border-hover)' }}>
                  AIPREF integration
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