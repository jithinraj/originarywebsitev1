import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Security Posture and Disclosure',
  description: 'Originary security posture: supported versions, key management, dependency posture, verification architecture, and responsible disclosure. Report vulnerabilities to security@originary.xyz.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/security',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Security Disclosure',
  url: 'https://www.originary.xyz/security',
  dateModified: '2026-04-09'
}

export default function Security() {
  return (
    <div className="wrap">
      <Script id="security-json-ld" type="application/ld+json" strategy="beforeInteractive">
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
                  <span>SECURITY</span>
                </div>

                <h1 style={{
                  fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--text-primary)'
                }}>
                  Security Posture
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  How Originary and PEAC handle verification, key management, dependencies, and security boundaries.
                </p>
              </div>

              {/* Security posture */}
              <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  <h2>Supported versions</h2>
                  <p>Security fixes are applied to the current stable release (v0.12.7) only. Older versions may not receive patches. See the <Link href="/changelog" style={{ color: 'var(--accent-brand)' }}>changelog</Link> for release history.</p>

                  <h2>Verification architecture</h2>
                  <p>Verification is offline by design. Signed records use Ed25519 (RFC 8032) and compact JWS (RFC 7515). Verifiers need only the issuer&apos;s public key via JWKS. No callback to Originary or any external service is required. No implicit network fetch is performed during verification.</p>

                  <h2>Key management</h2>
                  <p>Signing keys are Ed25519. In self-hosted mode, keys are generated and stored locally. In managed mode, keys are backed by cloud KMS (AWS KMS, GCP Cloud KMS, Azure Key Vault, or HashiCorp Vault). Key rotation follows a 5-state lifecycle with 30-day overlap. Revoked keys are tracked.</p>

                  <h2>Dependency and supply-chain posture</h2>
                  <p>All 35 npm packages are published via GitHub OIDC with provenance attestation. CI runs CodeQL security-extended analysis, dependency review, and audit gates. The repository enforces GitHub Actions SHA pinning. No ambient key discovery is performed. All dependencies are lockfile-pinned.</p>

                  <h2>Data boundaries</h2>
                  <p>Signed records contain policy hashes and decisions, not raw request payloads. In self-hosted mode, no data leaves your environment. In managed mode, only key lifecycle operations or record storage (depending on tier) involve Originary infrastructure. Verification never depends on Originary being online.</p>

                  <h2>Network posture</h2>
                  <p>No implicit fetch. No SSRF. URL fields in records are locator hints only and are never automatically dereferenced. The MCP server binds to localhost only with CORS deny-all, rate limiting, and size limits.</p>
                </div>
              </div>

              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>Responsible Disclosure</h2>

              <div className="card" style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-8)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
              <p>We appreciate responsible disclosure. Email <strong><Link href="mailto:security@originary.xyz" style={{ color: 'var(--accent-brand)' }}>security@originary.xyz</Link></strong> or <strong><Link href="mailto:contact@originary.xyz" style={{ color: 'var(--accent-brand)' }}>contact@originary.xyz</Link></strong> with details and reproduction steps.</p>

              <h2>Our commitment</h2>
              <ul>
                <li>We&apos;ll acknowledge within <strong>5 business days</strong></li>
                <li>Keep you updated on our progress</li>
                <li>Provide public credit where possible</li>
                <li>Work with you on responsible disclosure timing</li>
              </ul>

              <h2>Guidelines</h2>
              <ul>
                <li>Please avoid testing against other users&apos; accounts</li>
                <li>Respect rate limits and don&apos;t cause service disruption</li>
                <li>Don&apos;t access or modify data that isn&apos;t yours</li>
                <li>Report vulnerabilities as soon as you discover them</li>
              </ul>

              <h2>Scope</h2>
              <p>This policy covers:</p>
              <ul>
                <li><strong>originary.xyz</strong> and subdomains</li>
                <li>Our APIs and services</li>
                <li>CLI and code samples we publish</li>
                <li>Infrastructure directly under our control</li>
              </ul>

              <h2>What to include</h2>
              <ul>
                <li>Detailed description of the vulnerability</li>
                <li>Steps to reproduce the issue</li>
                <li>Potential impact assessment</li>
                <li>Any proof-of-concept code (if applicable)</li>
                <li>Your preferred method of communication</li>
              </ul>

              <h2>Bounty program</h2>
              <p>No formal bounty program at this time. We do provide public credit and our sincere gratitude for responsible disclosure.</p>

              <h2>Legal</h2>
              <p>We will not pursue legal action against researchers who:</p>
              <ul>
                <li>Follow this responsible disclosure policy</li>
                <li>Act in good faith</li>
                <li>Don&apos;t violate privacy or cause harm</li>
                <li>Don&apos;t access or modify data beyond what&apos;s necessary for testing</li>
              </ul>

                </div>
              </div>

              <div style={{
                background: 'var(--surface-subtle)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                marginTop: 'var(--space-8)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Security contact information is also available in our security.txt file
                </p>
                <Link href="/.well-known/security.txt" className="btn btn-secondary">
                  View security.txt
                </Link>
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