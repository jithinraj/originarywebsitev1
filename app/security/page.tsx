import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Security Disclosure',
  description: 'Report security vulnerabilities to security@originary.xyz. We acknowledge reports within 5 business days and follow responsible disclosure guidelines.',
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
  dateModified: '2025-07-27'
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
                  Security Disclosure
                </h1>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-4)'
                }}>
                  We appreciate responsible disclosure and take security seriously.
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