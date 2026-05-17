import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'About | Originary' },
  description:
    'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries. Publishes PEAC Protocol.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Originary',
    description:
      'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries.',
    url: '/about',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About | Originary',
    description:
      'Originary builds verification software for machine actions that cross company, vendor, and runtime boundaries.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Originary',
  url: 'https://www.originary.xyz/about',
  publisher: {
    '@type': 'Organization',
    name: 'Originary',
    url: 'https://www.originary.xyz',
  },
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function About() {
  return (
    <>
      <Script id="about-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <LegalDoc title="About Originary" eyebrow="company">
          <p>
            Originary builds verification software for machine actions that cross
            company, vendor, and runtime boundaries.
          </p>

          <p>
            Our work is based on a simple idea: logs help inside one system, but
            counterparties need records they can verify independently.
          </p>

          <p>
            Originary helps teams issue, inspect, export, and verify portable
            signed records for API calls, MCP tool runs, gateway decisions,
            provisioning events, payment workflows, and agent handoffs.
          </p>

          <h2>PEAC Protocol</h2>
          <p>
            Originary publishes and maintains PEAC Protocol, an open standard for
            verifiable interaction records.
          </p>
          <p>
            PEAC is Apache-2.0 licensed and implementation-independent. Originary
            builds practical software, services, and support around the protocol
            for teams that need production deployment, verification workflows,
            and audit-ready exports.
          </p>

          <h2>Company</h2>
          <p>
            Originary is a brand of Poem, Inc., a Delaware corporation. Poem,
            Inc. maintains the Originary products and services built around PEAC
            Protocol.
          </p>

          <h2>Contact</h2>
          <p>
            For pilots, partnerships, security questions, or protocol work,
            contact{' '}
            <Link href="mailto:contact@originary.xyz" style={linkStyle}>
              contact@originary.xyz
            </Link>
            .
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
            <Link href="/peac" style={linkStyle}>
              PEAC Protocol
            </Link>
            <Link href="/downloads" style={linkStyle}>
              Downloads
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
