import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AIPREF Integration | Machine Readable AI Preferences',
  description: 'Integrate AIPREF so AI crawlers can read machine-readable access policies. Combine aipref.json with PEAC for enforceable AI scraping preferences.',
  openGraph: {
    title: 'AIPREF Integration | Machine Readable AI Preferences',
    description: 'Integrate AIPREF so AI crawlers can read machine-readable access policies. Combine aipref.json with PEAC for enforceable AI scraping preferences.',
    url: '/integrations/aipref',
    type: 'article'
  },
  alternates: {
    canonical: '/integrations/aipref'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "AI Preferences (AIPREF) Integration",
  "description": "Technical documentation for implementing AIPREF (IETF Internet-Draft) with Originary policy discovery and verification",
  "author": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "url": "https://www.originary.xyz/integrations/aipref/"
}

export default function AIPREFPage() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" className="container" style={{ marginTop: 'var(--space-32)', marginBottom: 'var(--space-32)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              STANDARDS INTEGRATION
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            AI Preferences (AIPREF)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Machine-readable AI access policies for autonomous agents
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              AIPREF is an <a href="https://datatracker.ietf.org/wg/aipref/" target="_blank" rel="noopener" style={{ color: 'var(--accent-brand)' }}>IETF Internet-Draft</a> for expressing AI access preferences in machine-readable format. Similar to robots.txt for web crawlers, AIPREF allows websites to declare policies for AI agent access, scraping permissions, and usage terms.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Originary extends AIPREF with PEAC-Receipt verification, enabling sites to enforce policies cryptographically. Agents discover policies via <code>/.well-known/aipref.json</code>, and Originary issues receipts proving policy compliance.
            </p>
          </div>

          {/* Getting Started */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Getting Started with AIPREF
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Implementing AIPREF on your website starts with creating a machine-readable policy file at <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', fontSize: '0.9em' }}>/.well-known/aipref.json</code>. This file declares your AI access policies in standardized JSON format, allowing AI agents and crawlers to discover and respect your preferences automatically.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              The AIPREF standard supports multiple policy types: scraping permissions, training data licensing, commercial use restrictions, rate limits, payment requirements, and attribution formats. Agents that support AIPREF will fetch your policy file before accessing content and adjust their behavior accordingly.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              When combined with Originary, AIPREF policies move from advisory to enforceable. Originary reads your aipref.json configuration and enforces policies at the edge, issuing PEAC-Receipts when agents comply with requirements like payment or attribution. This creates verifiable records of compliance that can be audited offline.
            </p>
          </div>

          {/* File Format */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              AIPREF File Format
            </h2>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              Example /.well-known/aipref.json
            </h3>
            <pre style={{
              background: 'var(--surface-subtle)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`{
  "version": "1.0",
  "ai_access": {
    "scraping": "allowed_with_attribution",
    "training": "prohibited",
    "commercial_use": "requires_license"
  },
  "rate_limits": {
    "requests_per_hour": 100
  },
  "payment": {
    "required": true,
    "endpoint": "https://api.example.com/payment"
  },
  "attribution": {
    "required": true,
    "format": "Source: example.com"
  }
}`}
            </pre>
          </div>

          {/* Use Cases */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Use Cases
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Content Licensing
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Publishers declare licensing terms for AI training data. Agents discover terms and obtain licenses before scraping.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Rate Limiting
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Sites declare acceptable request rates. Agents respect limits to avoid being blocked or incurring overage fees.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Attribution Requirements
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Content creators specify attribution formats. Agents include proper citations when using content.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Implementation with Originary
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Originary reads your aipref.json file and enforces policies at the edge. When agents comply with policies (e.g., by paying required fees), Originary issues PEAC-Receipts that prove compliance.
            </p>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              Agent Request with Policy Compliance
            </h3>
            <pre style={{
              background: 'var(--surface-subtle)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`GET /content HTTP/1.1
Host: example.com
PEAC-Receipt: eyJhbGc...policy-compliance-proof
User-Agent: MyAgent/1.0`}
            </pre>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits for Publishers
            </h2>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Machine-readable AI access policies</li>
              <li>Verifiable enforcement of licensing terms</li>
              <li>Automated compliance verification</li>
              <li>Monetization of AI training data</li>
              <li>Standards-based approach compatible with IETF specifications</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link href="/.well-known/aipref.json" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                View Originary&apos;s aipref.json →
              </Link>
              <Link href="/blog/aipref-by-ietf" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                AIPREF by IETF Blog Post →
              </Link>
              <a href="https://www.peacprotocol.org/" target="_blank" rel="noopener" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                PEAC Protocol Specification →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-lg)',
            marginTop: 'var(--space-12)'
          }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Enforce your AI policies
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Implement AIPREF with verifiable compliance receipts
            </p>
            <Link href="/pricing" className="button-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
