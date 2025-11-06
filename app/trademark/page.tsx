import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Trademark & Brand Use : Originary',
  description: 'Originary trademark guidelines and brand use policy for proper usage of our marks.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/trademark',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trademark & Brand Use',
  url: 'https://www.originary.xyz/trademark',
  dateModified: '2025-07-27'
}

export default function Trademark() {
  return (
    <div className="wrap">
      <Script id="trademark-json-ld" type="application/ld+json" strategy="beforeInteractive">
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
                  Trademark &amp; Brand Use
                </h1>
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
              <p><strong>&ldquo;Originary&rdquo;</strong> and the Originary logo are trademarks of <strong>Poem, Inc.</strong> Proper use:</p>

              <h2>Permitted use</h2>
              <ul>
                <li>Use &ldquo;Originary™&rdquo; on first prominent mention.</li>
                <li>You may reference Originary for factual compatibility statements.</li>
                <li>Reference our services in truthful comparative statements.</li>
                <li>Use our name when describing integrations or partnerships (with accurate context).</li>
              </ul>

              <p><strong>Do say:</strong> &ldquo;Built with receipts that work with Originary tools.&rdquo;</p>
              <p><strong>Don&apos;t say:</strong> &ldquo;Originary-powered agents&rdquo; (unless we&apos;ve given you written permission).</p>

              <h2>Prohibited use</h2>
              <ul>
                <li>Do <strong>not</strong> use our marks as your product/company name.</li>
                <li>Do <strong>not</strong> imply endorsement without written permission.</li>
                <li>Do <strong>not</strong> create confusingly similar marks.</li>
                <li>Do <strong>not</strong> use our marks in domain names, social media handles, or app names.</li>
                <li>Do <strong>not</strong> modify our logos or use them in a misleading context.</li>
              </ul>

              <h2>Disambiguation</h2>
              <p>In the United States, <strong>&ldquo;Originary&rdquo;</strong> is used by <strong>Poem, Inc.</strong> to identify our open software and developer tools; <strong>Poem, Inc. is not affiliated with any other business using a similar name.</strong></p>
              <p style={{ marginTop: 'var(--space-3)' }}><em>This site refers only to Originary at <Link href="https://www.originary.xyz" style={{ color: 'var(--brand-primary)' }}>https://www.originary.xyz/</Link>.</em></p>

              <h2>Open protocol notice</h2>
              <p>We support the <strong>open-source PEAC protocol</strong>; those assets are governed by their own licenses.</p>

              <h2>Brand inquiries</h2>
              <p><Link href="mailto:contact@originary.xyz" style={{ color: 'var(--brand-primary)' }}>contact@originary.xyz</Link></p>

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