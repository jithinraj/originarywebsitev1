import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Brand Guidelines : Originary',
  description: 'Brand guidelines and logo usage for Originary.',
  robots: 'index,follow',
}

export default function Brand() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Brand Guidelines
              </h1>

              <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--gray-700)' }}>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  <Mark>Originary</Mark> brand guidelines for consistent use of our wordmark, logo, and visual identity.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Wordmark Usage
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Always use &quot;Originary&quot; (not &quot;originary&quot; or &quot;ORIGINARY&quot;) in written communications.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Logo Downloads
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  For media use and press materials, download our logo pack which includes various formats and color variations suitable for different applications.
                </p>

                <div style={{
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginTop: 'var(--space-8)'
                }}>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>
                    Contact{' '}
                    <a href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)' }}>
                      contact@originary.xyz
                    </a>{' '}
                    for logo files and brand assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}