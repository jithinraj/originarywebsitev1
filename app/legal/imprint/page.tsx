import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Company registration, registered agent, and contact information for Originary (Poem, Inc.)',
  robots: 'noindex',

  alternates: {
    canonical: '/legal/imprint'
  }
}

export default function ImprintPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px', minHeight: '70vh' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  color: 'var(--accent-brand)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  marginBottom: 'var(--space-6)'
                }}
              >
                LEGAL
              </div>

              <h1
                style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--text-primary)'
                }}
              >
                Imprint
              </h1>

              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
                Company registration and contact information
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
                Company Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Legal Entity
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                    <strong>Poem, Inc.</strong>
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Jurisdiction
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                    Delaware, United States
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Location
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                    Dover, DE 19904, United States
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Contact
                  </h3>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                    Email: <a href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>contact@originary.xyz</a><br />
                    Phone: <a href="tel:+14157070402" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>+1 415-707-0402</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'left', background: 'var(--surface-subtle)' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Brand and trademarks
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                <strong>Originary™</strong> is a brand and trademark of Poem, Inc.
              </p>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <strong>PEAC Protocol</strong> is an open-source standard stewarded by Originary.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                For legal inquiries, please contact us at{' '}
                <a href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>
                  contact@originary.xyz
                </a>
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/trademark" className="btn btn-ghost btn-sm">
                  Trademark Policy
                </Link>
                <Link href="/terms" className="btn btn-ghost btn-sm">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="btn btn-ghost btn-sm">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
