import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell, LegalDoc, PALETTE } from '@/components/home'

export const metadata: Metadata = {
  title: { absolute: 'Security | Originary' },
  description:
    'Security posture, verification architecture, responsible disclosure, data boundaries, and key management for Originary products and the PEAC Protocol.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/security' },
  openGraph: {
    title: 'Security | Originary',
    description:
      'Security posture, verification architecture, responsible disclosure, data boundaries, and key management for Originary products and the PEAC Protocol.',
    url: '/security',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Security | Originary',
    description:
      'Security posture, verification architecture, responsible disclosure, data boundaries, and key management for Originary products and the PEAC Protocol.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Security Disclosure',
  url: 'https://www.originary.xyz/security',
  dateModified: '2026-04-09',
}

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

export default function Security() {
  return (
    <>
      <Script id="security-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <LegalDoc title="Security" eyebrow="security">
          <p>
            Security posture, supported versions, responsible disclosure, and verification boundaries for Originary.
          </p>

          <h2>Supported versions</h2>
          <p>
            Security fixes are applied to the current stable release only. Older versions may not receive patches. See
            the{' '}
            <Link href="/peac" style={linkStyle}>
              changelog
            </Link>{' '}
            for release history and current release status.
          </p>

          <h2>Verification architecture</h2>
          <p>
            Verification is offline by design. Signed records use Ed25519 (RFC 8032) and compact JWS (RFC 7515).
            Verifiers need only a public key you supply. The supported path is strict offline verification (record plus a
            supplied public key or JWKS, zero network). Originary does not publish an issuer key for its own domain and
            performs no key resolution on your behalf.
          </p>

          <h2>Key management</h2>
          <p>
            Signing keys are Ed25519. The self-hosting issuer generates and holds its own keys; key custody, rotation, and
            revocation are the issuer&apos;s responsibility. Originary does not run signing, key custody, or key resolution
            as a hosted or managed service today.
          </p>

          <h2>Dependency and supply-chain posture</h2>
          <p>
            PEAC Protocol and its packages are open source; their security and publishing posture are maintained in the
            public repository at github.com/peacprotocol/peac. Originary does not run signing, verification, key
            custody, or record storage as a hosted service today.
          </p>

          <h2>Data boundaries</h2>
          <p>
            Signed records contain policy hashes and decisions, not raw request payloads. Records and keys stay in your
            environment; Originary does not host records or run verification as a service today. Supplied-key
            verification runs offline and never depends on Originary being online.
          </p>

          <h2>Network posture</h2>
          <p>
            No implicit fetch. No SSRF. URL fields in records are locator hints only and are never automatically
            dereferenced. The PEAC reference implementation, including its MCP server, is open source; its security posture is
            documented in the public PEAC repository.
          </p>

          <h2>Responsible disclosure</h2>
          <p>
            We appreciate responsible disclosure. Email{' '}
            <strong>
              <Link href="mailto:security@originary.xyz" style={linkStyle}>
                security@originary.xyz
              </Link>
            </strong>{' '}
            or{' '}
            <strong>
              <Link href="mailto:contact@originary.xyz" style={linkStyle}>
                contact@originary.xyz
              </Link>
            </strong>{' '}
            with details and reproduction steps.
          </p>

          <h3>Our commitment</h3>
          <ul>
            <li>We&apos;ll acknowledge within <strong>5 business days</strong></li>
            <li>Keep you updated on our progress</li>
            <li>Provide public credit where possible</li>
            <li>Work with you on responsible disclosure timing</li>
          </ul>

          <h3>Guidelines</h3>
          <ul>
            <li>Please avoid testing against other users&apos; accounts</li>
            <li>Respect rate limits and don&apos;t cause service disruption</li>
            <li>Don&apos;t access or modify data that isn&apos;t yours</li>
            <li>Report vulnerabilities as soon as you discover them</li>
          </ul>

          <h3>Scope</h3>
          <p>This policy covers:</p>
          <ul>
            <li><strong>originary.xyz</strong> and subdomains</li>
            <li>Our APIs and services</li>
            <li>CLI and code samples we publish</li>
            <li>Infrastructure directly under our control</li>
          </ul>

          <h3>What to include</h3>
          <ul>
            <li>Detailed description of the vulnerability</li>
            <li>Steps to reproduce the issue</li>
            <li>Potential impact assessment</li>
            <li>Any proof-of-concept code (if applicable)</li>
            <li>Your preferred method of communication</li>
          </ul>

          <h3>Bounty program</h3>
          <p>
            No formal bounty program at this time. We do provide public credit and our sincere gratitude for responsible
            disclosure.
          </p>

          <h3>Legal</h3>
          <p>We will not pursue legal action against researchers who:</p>
          <ul>
            <li>Follow this responsible disclosure policy</li>
            <li>Act in good faith</li>
            <li>Don&apos;t violate privacy or cause harm</li>
            <li>Don&apos;t access or modify data beyond what&apos;s necessary for testing</li>
          </ul>

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
            <Link href="/.well-known/security.txt" style={linkStyle}>
              View security.txt
            </Link>
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
