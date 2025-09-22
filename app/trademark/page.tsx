import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Trademark : Originary',
  description: 'Trademark information for Originary and usage guidelines.',
  robots: 'index,follow',
}

export default function Trademark() {
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
                Trademark Information
              </h1>

              <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--gray-700)' }}>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  <Mark>Originary</Mark> is our brand for receipts, compliance, and infrastructure for the agentic web. We claim trademark rights in &quot;Originary&quot; for these services. For trademark matters, contact tm@originary.xyz.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Disambiguation
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Originary is not affiliated with the operators of originary.ai. We are separate entities with distinct services and offerings.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Trademark Matters
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  For questions regarding our trademark or potential infringement, please contact us at{' '}
                  <a href="mailto:tm@originary.xyz" style={{ color: 'var(--brand-primary)' }}>
                    tm@originary.xyz
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}