import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Imprint | Originary' },
  description:
    'Company registration, registered agent, and contact information for Originary (Poem, Inc.).',
  robots: { index: true, follow: true },
  alternates: { canonical: '/legal/imprint' },
  openGraph: {
    title: 'Imprint | Originary',
    description: 'Company registration and contact information.',
    url: '/legal/imprint',
    siteName: 'Originary',
    type: 'website',
  },
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function ImprintPage() {
  return (
    <PageShell>
      <LegalDoc title="Imprint" eyebrow="legal">
        <p>
          Company registration and contact information for Originary.
        </p>

        <h2>Company</h2>
        <p>
          <strong>Legal entity:</strong> Poem, Inc.
          <br />
          <strong>Jurisdiction:</strong> Delaware, United States
          <br />
          <strong>Registered office:</strong> Dover, DE 19904, United States
        </p>

        <h2>Contact</h2>
        <p>
          <strong>Email:</strong>{' '}
          <Link href="mailto:contact@originary.xyz" style={linkStyle}>
            contact@originary.xyz
          </Link>
          <br />
          <strong>Phone:</strong>{' '}
          <Link href="tel:+14157070402" style={linkStyle}>
            +1 415-707-0402
          </Link>
        </p>

        <h2>Brand</h2>
        <p>
          <strong>Originary&trade;</strong> is the software and developer-tools
          brand of Poem, Inc. Through Originary, Poem, Inc. publishes and
          maintains PEAC Protocol and offers Originary Verify.
        </p>
        <p>
          <strong>PEAC Protocol</strong> is an open-source protocol published and
          maintained by Originary under Apache-2.0. The protocol specification,
          reference implementations, and core tooling are open-source.
        </p>

        <h2>Other policies</h2>
        <p>
          For related legal documents, see{' '}
          <Link href="/terms" style={linkStyle}>
            Terms of Service
          </Link>
          ,{' '}
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
          , and{' '}
          <Link href="/trust" style={linkStyle}>
            Trust
          </Link>
          . For commercial questions, contact{' '}
          <Link href="mailto:contact@originary.xyz" style={linkStyle}>
            contact@originary.xyz
          </Link>
          .
        </p>
      </LegalDoc>
    </PageShell>
  )
}
