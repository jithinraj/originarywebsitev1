import { Metadata } from 'next'
import StaticPageLayout from '@/components/StaticPageLayout'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Trademark & Brand Use',
  description: 'Originary trademark guidelines and brand use policy for proper usage of our marks.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/trademark',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trademark & Brand Use',
  url: 'https://www.originary.xyz/trademark',
  dateModified: '2026-07-20'
}

export default function Trademark() {
  return (
    <div className="wrap">
      <Script id="trademark-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <StaticPageLayout>
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
                  color: '#0a6a9e'
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
                  Trademark &amp; Brand Use
                </h1>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)'
                }}>
                  Last updated 2026-07-20
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
              <p><strong>&ldquo;Originary&rdquo;</strong> and the Originary logo are trademarks of <strong>Poem, Inc.</strong> Proper use:</p>

              <h2>Permitted use</h2>
              <ul>
                <li>Use &ldquo;Originary™&rdquo; on first prominent mention.</li>
                <li>You may reference Originary for factual compatibility statements.</li>
                <li>Reference our services in truthful comparative statements.</li>
                <li>Make factual interoperability statements, without implying endorsement or partnership.</li>
              </ul>

              <p><strong>Do say:</strong> &ldquo;Built with signed records that work with Originary tools.&rdquo;</p>
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
              <p><strong>Originary&trade;</strong> identifies software and developer tools published and offered by <strong>Poem, Inc.</strong>, including PEAC Protocol software and Originary Verify. <strong>Poem, Inc. is not affiliated with any other business using a similar name.</strong></p>
              <p style={{ marginTop: 'var(--space-3)' }}><em>This site refers only to Originary at <Link href="https://www.originary.xyz" style={{ color: 'var(--accent-brand)' }}>https://www.originary.xyz/</Link>.</em></p>

              <h2>PEAC Protocol and open source</h2>
              <p><strong>PEAC Protocol</strong> is open-source software published and maintained by Originary under Apache-2.0. <strong>Originary&trade;</strong> is the software and developer-tools brand of Poem, Inc.</p>
              <p style={{ marginTop: 'var(--space-3)' }}>Anyone can implement PEAC Protocol. Originary Verify is a commercial software offering with implementation and deployment support, built on PEAC Protocol.</p>
              <p style={{ marginTop: 'var(--space-3)' }}>PEAC Protocol assets and specifications are governed by the Apache-2.0 license. See <Link href="/peac" style={{ color: 'var(--accent-brand)' }}>originary.xyz/peac</Link> for details.</p>

              <h2>Brand inquiries</h2>
              <p>For trademark questions or brand partnerships: <Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link></p>

                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                <Link href="/terms" className="btn btn-secondary" style={{ marginRight: 'var(--space-4)' }}>
                  Terms of Service
                </Link>
                <Link href="/contact" className="btn btn-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </StaticPageLayout>
    </div>
  )
}