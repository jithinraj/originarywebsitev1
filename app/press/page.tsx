import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Press : Originary',
  description: 'Press information and media resources for Originary.',
  robots: 'index,follow',
}

export default function Press() {
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
                Press Information
              </h1>

              <div style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--gray-700)' }}>
                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  About <Mark>Originary</Mark>
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Originary delivers receipts for the agentic web. Teams publish peac.txt to declare access, consent, attribution, privacy, and pricing. Agents settle via x402 or Stripe/credits/fiat/stablecoin/on-chain via adapters and present a Receipt to prove compliance on every request.
                </p>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Media Contact
                </h2>
                <div style={{
                  background: 'var(--gray-50)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-8)'
                }}>
                  <p style={{ margin: 0 }}>
                    For press inquiries, please contact:{' '}
                    <a href="mailto:press@originary.xyz" style={{ color: 'var(--brand-primary)' }}>
                      press@originary.xyz
                    </a>
                  </p>
                </div>

                <h2 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  marginTop: 'var(--space-12)',
                  marginBottom: 'var(--space-6)'
                }}>
                  Brand Assets
                </h2>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Download logos and brand assets for media use. Please follow our brand guidelines when using Originary materials.
                </p>
                <p>
                  <a href="/brand" style={{ color: 'var(--brand-primary)' }}>
                    View brand guidelines →
                  </a>
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