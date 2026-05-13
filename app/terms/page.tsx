import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service | Originary' },
  description:
    'Terms of Service for using Originary products, tools, websites, and related services. Includes plans, acceptable use, receipts, and governing law.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | Originary',
    description:
      'Terms of Service for using Originary products, tools, websites, and related services. Includes plans, acceptable use, receipts, and governing law.',
    url: '/terms',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Originary',
    description:
      'Terms of Service for using Originary products, tools, websites, and related services. Includes plans, acceptable use, receipts, and governing law.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Terms of Service for Originary products, tools, websites, and related services.',
  url: 'https://www.originary.xyz/terms',
  dateModified: '2025-07-27',
  publisher: {
    '@type': 'Organization',
    name: 'Poem, Inc.',
    alternateName: 'Originary',
    url: 'https://www.originary.xyz',
  },
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function Terms() {
  return (
    <>
      <Script id="terms-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <LegalDoc title="Terms of Service" effective="Effective from 2025-07-27">
          <h2>Who you&apos;re contracting with</h2>
          <p>
            &quot;Originary&quot;, &quot;we&quot;, and &quot;us&quot; mean <strong>Poem, Inc.</strong>, a Delaware
            corporation, which operates <strong>originary.xyz</strong> and related commercial tools implementing{' '}
            <strong>signed, portable records</strong>.
          </p>

          <h2>What we provide</h2>
          <ul>
            <li>
              <strong>Receipts tooling.</strong> Tools and endpoints to generate, attach, verify, and audit
              cryptographic receipts (e.g., the <code>PEAC-Receipt</code> header).
            </li>
            <li>
              <strong>Policy helpers.</strong> A <code>peac.txt</code> generator/validator and edge header snippets.
            </li>
            <li>
              <strong>Gateways/adapters.</strong> Access to settlement gateway (402) and adapters where enabled on your
              plan.
            </li>
            <li>
              <strong>Open protocol interoperability.</strong> We interoperate with the{' '}
              <strong>open-source PEAC protocol</strong>; those OSS assets are provided under their own licenses.
            </li>
          </ul>

          <h2>Accounts &amp; eligibility</h2>
          <p>
            You must be 18+, create an account, and keep credentials secure. You&apos;re responsible for actions under
            your account.
          </p>

          <h2>Business use</h2>
          <p>
            Our services are intended for business and developer use. You confirm you are using the services on behalf
            of a business or for professional purposes.
          </p>

          <h2>Plans, fees &amp; taxes</h2>
          <ul>
            <li>
              <strong>Developer activation:</strong> one-time activation fee as listed on the pricing page.
              Non-refundable.
            </li>
            <li>
              <strong>Professional / Enterprise:</strong> as listed or quoted; billed in advance. Failure to pay may
              result in suspension.
            </li>
            <li>Prices exclude applicable taxes; you&apos;re responsible for taxes and withholdings.</li>
          </ul>

          <h2>Acceptable use (summary)</h2>
          <p>
            Do not use the services to violate law, infringe rights, evade <code>peac.txt</code> terms, or disrupt
            others&apos; systems. No scraping beyond what applicable <code>peac.txt</code> policies and valid receipts
            permit.
          </p>

          <h2>Your content; data processing</h2>
          <p>
            You own your content. You grant us the rights needed to operate, support, and improve the services. We
            process limited telemetry per the <strong>Privacy Policy</strong>. We do not sell personal data.
          </p>

          <h2>Receipts &amp; verification</h2>
          <p>
            A valid <strong>receipt</strong> may be required on each request to third-party surfaces. Receipts encode
            terms (consent, attribution, retention, permitted purposes, etc.). You are responsible for storing any
            receipts necessary for your audits.
          </p>

          <h2>Third-party rails &amp; OSS</h2>
          <p>
            Adapters (payment rails, runtimes) and OSS packages are third-party offerings; availability and terms may
            change. Use them under their respective licenses.
          </p>

          <h2>Trademark Disclaimer</h2>
          <p>
            All trademarks, logos and brand names are the property of their respective owners. All company, product and
            service names used in this website are for identification purposes only. Use of these names, trademarks and
            brands does not imply endorsement.
          </p>

          <h2>Service changes</h2>
          <p>
            We may improve or modify features from time to time. Where a change materially reduces core functionality of
            a paid plan, we will provide reasonable notice.
          </p>

          <h2>Disclaimers</h2>
          <p>
            Services are provided <strong>&quot;as is&quot;</strong> without warranties of merchantability, fitness, or
            non-infringement, to the extent permitted by law.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law: (a) indirect, incidental, special, or consequential damages are excluded;
            (b) our aggregate liability is capped at amounts you paid in the 12 months before the claim.
          </p>

          <h2>Indemnity</h2>
          <p>You will indemnify us from third-party claims arising from your unlawful use or breach of these Terms.</p>

          <h2>Business transfers</h2>
          <p>
            If we are involved in a merger, acquisition, financing, or sale of assets, your account information may be
            transferred as part of that transaction subject to these Terms and the Privacy Policy.
          </p>

          <h2>Governing law &amp; venue</h2>
          <p>
            These Terms are governed by the laws of <strong>Delaware, USA</strong>. Exclusive venue and jurisdiction lie
            in <strong>state or federal courts in Delaware, USA</strong>.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these Terms. We&apos;ll change the &quot;Last updated&quot; date and, for material changes,
            provide reasonable notice. Continued use means acceptance.
          </p>

          <h2>Contact</h2>
          <p>
            <strong>Legal:</strong>{' '}
            <Link href="mailto:legal@originary.xyz" style={linkStyle}>
              legal@originary.xyz
            </Link>
          </p>
          <p>
            <strong>Address:</strong> Poem, Inc., 1111B S Governors Ave, STE 40987, Dover, DE 19904, USA
          </p>
          <p>
            <strong>Phone:</strong> +1 415 707 0402
          </p>

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
            <Link href="/privacy" style={linkStyle}>
              Privacy Policy
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
