import { Metadata } from 'next'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'
import Link from 'next/link'
import Script from 'next/script'

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'var(--rule)',
  textUnderlineOffset: 3,
}

export const metadata: Metadata = {
  title: 'Trademark & Brand Use',
  description: 'Originary trademark guidelines and brand use policy for proper usage of our marks.',
  robots: 'noindex,follow',
  alternates: {
    canonical: '/trademark',
  },
  openGraph: {
    title: 'Trademark & Brand Use | Originary',
    description: 'Originary trademark guidelines and brand use policy for proper usage of our marks.',
    url: '/trademark',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trademark & Brand Use | Originary', description: 'Originary trademark guidelines and brand use policy for proper usage of our marks.', images: ['/og'] },
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
    <>
      <Script id="trademark-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <LegalDoc title="Trademark &amp; Brand Use" eyebrow="LEGAL" effective="Last updated 2026-07-20">
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
              <p style={{ marginTop: 12 }}><em>This site refers only to Originary at <Link href="https://www.originary.xyz" style={linkStyle}>https://www.originary.xyz/</Link>.</em></p>

              <h2>PEAC Protocol and open source</h2>
              <p><strong>PEAC Protocol</strong> is open-source software published and maintained by Originary under Apache-2.0. <strong>Originary&trade;</strong> is the software and developer-tools brand of Poem, Inc.</p>
              <p style={{ marginTop: 12 }}>Anyone can implement PEAC Protocol. Originary Verify is a commercial software offering with implementation and deployment support, built on PEAC Protocol.</p>
              <p style={{ marginTop: 12 }}>PEAC Protocol assets and specifications are governed by the Apache-2.0 license. See <Link href="/peac" style={linkStyle}>originary.xyz/peac</Link> for details.</p>

              <h2>Brand inquiries</h2>
              <p>For trademark questions or brand partnerships: <Link href="mailto:contact@originary.xyz" style={linkStyle}>contact@originary.xyz</Link></p>


          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 32 }}>
            <Link href="/terms" style={{ ...linkStyle, textDecoration: 'none', border: '1px solid var(--rule)', padding: '12px 18px', fontSize: 14, fontWeight: 500 }}>
              Terms of Service
            </Link>
            <Link href="/contact" style={{ background: 'var(--action)', color: 'var(--on-action)', border: '1px solid var(--action)', padding: '12px 18px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>
              Contact us
            </Link>
          </div>
        </LegalDoc>
      </PageShell>
    </>
  )
}
