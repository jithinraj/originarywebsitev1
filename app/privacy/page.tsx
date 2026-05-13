import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Originary' },
  description:
    'How Originary handles personal data, analytics consent, operational logs, processors, transfers, retention, and your rights.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Originary',
    description:
      'How Originary handles personal data, analytics consent, operational logs, processors, transfers, retention, and your rights.',
    url: '/privacy',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Originary',
    description:
      'How Originary handles personal data, analytics consent, operational logs, processors, transfers, retention, and your rights.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  url: 'https://www.originary.xyz/privacy',
  dateModified: '2025-07-27',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function Privacy() {
  return (
    <>
      <Script id="privacy-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <LegalDoc title="Privacy Policy" effective="Effective from 2025-07-27">
          <h2>Controller</h2>
          <p>
            <strong>Poem, Inc.</strong> (global controller). Contact:{' '}
            <Link href="mailto:privacy@originary.xyz" style={linkStyle}>
              privacy@originary.xyz
            </Link>
          </p>

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
          <p>
            We use <strong>essential</strong> cookies only by default. Analytics runs <strong>only</strong> after opt-in.
            We respect <strong>Do-Not-Track</strong> and store your decision locally in your browser. We also honor{' '}
            <strong>Global Privacy Control (GPC)</strong> signals as an opt-out for analytics.
          </p>

          <h2>Sharing</h2>
          <p>We use processors for hosting, payments, and support under contractual safeguards.</p>

          <h2>International transfers</h2>
          <p>
            Data may be processed outside your country with appropriate safeguards. Certain support operations may be
            performed by an India affiliate as a processor under Standard Contractual Clauses (SCCs) and Data Processing
            Agreements (DPAs).
          </p>

          <h2>Retention</h2>
          <p>We retain data as needed for the above purposes and legal obligations, then delete or anonymize.</p>

          <h2>Your rights</h2>
          <p>
            Subject to law where you live, you may request access, correction, deletion, or portability, and object to
            or restrict certain processing. Email{' '}
            <strong>
              <Link href="mailto:privacy@originary.xyz" style={linkStyle}>
                privacy@originary.xyz
              </Link>
            </strong>
            ; we will respond within a reasonable period.
          </p>

          <h2>Security</h2>
          <p>
            We protect data in transit and at rest and publish our coordinated disclosure policy at{' '}
            <Link href="/security" style={linkStyle}>
              /security
            </Link>
            .
          </p>

          <h2>Children</h2>
          <p>Not for use by children under 16.</p>

          <h2>Updates</h2>
          <p>We&apos;ll update this Policy as needed and change the &quot;Last updated&quot; date.</p>

          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: `1px solid ${PALETTE.hairline}`,
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <Link href="/terms" style={linkStyle}>
              Terms of Service
            </Link>
            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
          </div>
        </LegalDoc>
      </PageShell>
    </>
  )
}
