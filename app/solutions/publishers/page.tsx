import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Protect and monetize content - Publishers : Originary',
  description: 'Set preferences for AI training and usage. Verify compliance with attribution requirements. Monetize content access through automated licensing and payment.',
  keywords: 'content protection, AI training preferences, content monetization, automated licensing, attribution requirements',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Protect and monetize content - Publishers : Originary',
    description: 'Set preferences for AI training and usage. Verify compliance with attribution requirements. Monetize content access through automated licensing and payment.',
    url: 'https://www.originary.xyz/solutions/publishers',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protect and monetize content - Publishers : Originary',
    description: 'Set preferences for AI training and usage. Verify compliance with attribution requirements. Monetize content access through automated licensing and payment.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/solutions/publishers',
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
                color: 'var(--brand-primary)',
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
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', maxWidth: '800px', margin: '0 auto' }}>
                Set preferences for AI training and usage. Verify compliance with attribution requirements. Monetize content access through automated licensing and payment.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Content Control</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Establish clear preferences for how AI systems can access, use, and attribute your content while creating new revenue streams.
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
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
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
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
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
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
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
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
                Get started with simple setup and comprehensive monitoring tools.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>⚡</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Simple Setup</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Add AIPREF and <code style={{ backgroundColor: 'var(--gray-100)', padding: '2px 4px', borderRadius: 'var(--radius-sm)' }}>peac.txt</code> files to your website root to declare your preferences.
                </p>
              </div>

              <div className="card">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>📊</span>
                </div>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>Verification Dashboard</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 'var(--text-sm)' }}>
                  Monitor compliance and track usage through our comprehensive analytics platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ textAlign: 'center', background: 'var(--gradient-brand)', color: 'white' }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'white' }}>Protect Your Content</h2>
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                Join publishers who are taking control of their content in the age of AI.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@originary.xyz" className="btn" style={{ backgroundColor: 'white', color: 'var(--brand-primary)' }}>
                  Talk to our team
                </a>
                <a href="/products/verify/" className="btn" style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                  Learn about verification
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