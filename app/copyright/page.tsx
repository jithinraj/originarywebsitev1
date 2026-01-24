import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Copyright Notice & Takedown',
  description: 'Copyright notice and takedown process for Originary. Submit infringement notices and counter-notices to contact@originary.xyz.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/copyright',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Copyright Notice & Takedown',
  url: 'https://www.originary.xyz/copyright',
  dateModified: '2025-07-27'
}

export default function Copyright() {
  return (
    <div className="wrap">
      <Script id="copyright-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  background: 'var(--accent-brand-subtle)',
                  border: '1px solid var(--accent-brand-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--accent-brand)'
                }}>
                  <span>LEGAL</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Copyright Notice &amp; Takedown
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  Copyright notice and takedown process for our services.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)'
                }}>
                  Effective from 2025-07-27
                </p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
              <p>If you believe content available through our services infringes your copyright, email <strong><Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link></strong> with:</p>

              <h2>Required information</h2>
              <ul>
                <li>Your contact details</li>
                <li>A description of the copyrighted work</li>
                <li>The location (URL) of the material you believe is infringing</li>
                <li>A statement made in good faith that you have a reasonable belief the use is not authorized</li>
                <li>A statement that the information in your notice is accurate</li>
                <li>Your electronic or physical signature</li>
              </ul>

              <h2>Our process</h2>
              <ul>
                <li>We review all notices promptly</li>
                <li>We may notify the user who posted the content</li>
                <li>We may remove or restrict access to the material</li>
                <li>We may accept a counter-notice where appropriate</li>
              </ul>

              <h2>Counter-notice (if applicable)</h2>
              <ul>
                <li>Your contact information</li>
                <li>Identification of the removed material and its prior location</li>
                <li>A statement that you believe the removal was in error</li>
                <li>Your signature</li>
              </ul>

              <h2>Repeat infringers</h2>
              <p>We may suspend or terminate accounts that repeatedly infringe.</p>

              <h2>Good faith</h2>
              <p>Notices must be submitted in good faith. False or abusive notices may carry legal consequences.</p>

              <h2>Contact</h2>
              <p><Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link></p>

                </div>
              </div>

              <div style={{
                background: 'var(--surface-subtle)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                marginTop: 'var(--space-8)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  <strong>Contact for copyright matters:</strong><br />
                  <Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link>
                </p>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/terms" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
                  Terms of Service
                </Link>
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}