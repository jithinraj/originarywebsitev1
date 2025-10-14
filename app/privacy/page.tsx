import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Privacy Policy : Originary',
  description: 'Privacy Policy for Originary - minimal, consent-first data collection for receipts tooling.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/privacy',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  url: 'https://www.originary.xyz/privacy',
  dateModified: '2025-07-27'
}

export default function Privacy() {
  return (
    <div className="wrap">
      <Script id="privacy-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  background: 'rgba(99, 91, 255, 0.1)',
                  border: '1px solid rgba(99, 91, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--space-2) var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--brand-primary)'
                }}>
                  <span>LEGAL</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--gray-900)'
                }}>
                  Privacy Policy
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)'
                }}>
                  We keep collection <strong>minimal</strong> and <strong>consent-first</strong>.
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--gray-500)'
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
                  color: 'var(--gray-700)'
                }}>
              <h2>Controller</h2>
              <p><strong>Curious Explorations Private Limited</strong> (CEPL). Contact: <Link href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)' }}>contact@originary.xyz</Link></p>

              <h2>What we collect</h2>
              <ul>
                <li><strong>Account &amp; billing:</strong> email, name, organization, billing details.</li>
                <li><strong>Operational logs:</strong> verification/receipt events necessary to operate the service.</li>
                <li><strong>Analytics (optional):</strong> anonymized GA4 <strong>only after you consent</strong>; otherwise we don&apos;t load analytics.</li>
                <li><strong>Support messages</strong> you send to us.</li>
              </ul>

              <h2>What we don&apos;t collect</h2>
              <p>No sensitive categories. We do <strong>not</strong> sell personal data.</p>

              <h2>Why we process</h2>
              <ul>
                <li><strong>Contract:</strong> provide and support the services.</li>
                <li><strong>Legitimate interests:</strong> security, abuse prevention, product improvement.</li>
                <li><strong>Consent:</strong> analytics (opt-in; withdraw any time via <strong>Privacy choices</strong> in the footer).</li>
              </ul>

              <h2>Cookies &amp; consent</h2>
              <p>We use <strong>essential</strong> cookies only by default. Analytics runs <strong>only</strong> after opt-in. We respect <strong>Do-Not-Track</strong> and store your decision locally in your browser. We also honor <strong>Global Privacy Control (GPC)</strong> signals as an opt-out for analytics.</p>

              <h2>Sharing</h2>
              <p>We use processors for hosting, payments, and support under contractual safeguards.</p>

              <h2>International transfers</h2>
              <p>Data may be processed outside your country with appropriate safeguards.</p>

              <h2>Retention</h2>
              <p>We retain data as needed for the above purposes and legal obligations, then delete or anonymize.</p>

              <h2>Your rights</h2>
              <p>Subject to law where you live, you may request access, correction, deletion, or portability, and object to or restrict certain processing. Email <strong><Link href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)' }}>contact@originary.xyz</Link></strong>; we will respond within a reasonable period.</p>

              <h2>Security</h2>
              <p>We protect data in transit and at rest and publish our coordinated disclosure policy at <Link href="/security" style={{ color: 'var(--brand-primary)' }}>/security</Link>.</p>

              <h2>Children</h2>
              <p>Not for use by children under 16.</p>

              <h2>Updates</h2>
              <p>We&apos;ll update this Policy as needed and change the &ldquo;Last updated&rdquo; date.</p>

                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/terms" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
                  Terms of Service
                </Link>
                <Link href="/company/contact" className="btn btn-primary">
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