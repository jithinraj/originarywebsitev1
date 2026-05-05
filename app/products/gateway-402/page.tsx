import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CreditCard, Shield } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
  description: 'Paid API record layer for HTTP 402 and x402-style flows. Bind access, terms, payment proof, and result context into signed records.',
  keywords: 'HTTP 402, x402, paid API records, API payments, signed records, enterprise payments, agent commerce, HTTP 402 commerce, x402 commerce',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
    description: 'Paid API record layer for HTTP 402 and x402-style flows. Bind access, terms, payment proof, and result context into signed records.',
    url: '/products/gateway-402',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
    description: 'Paid API record layer for HTTP 402 and x402-style flows. Bind access, terms, payment proof, and result context into signed records.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/products/gateway-402',
  },
}

export default function Gateway402() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is HTTP 402?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HTTP 402 Payment Required is a standard HTTP status code reserved for digital payment systems. When a server returns 402, it indicates that payment is required to access the requested resource. The Gateway 402 implements this standard for API commerce and agent settlement."
        }
      },
      {
        "@type": "Question",
        "name": "What is x402?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "x402 is an open protocol specification for HTTP 402 payment flows. It defines how agents discover payment policies, negotiate terms, submit payments, and receive verifiable receipts. x402 enables standardized agent-to-agent commerce through HTTP headers and structured payment challenges."
        }
      },
      {
        "@type": "Question",
        "name": "Do I get a receipt per call?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every successful payment through Gateway 402 generates a cryptographic PEAC-Receipt that proves payment, access rights, and compliance. These receipts are signed JWS tokens that can be verified offline and used for audit trails, chargebacks, and regulatory compliance."
        }
      }
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Enable HTTP 402 on an endpoint",
    "description": "Configure Gateway 402 to protect your API endpoints with HTTP 402 payment requirements",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Configure payment policy",
        "text": "Define your pricing model, accepted payment methods, and access rules in the Gateway 402 configuration file."
      },
      {
        "@type": "HowToStep",
        "name": "Deploy Gateway 402",
        "text": "Deploy the gateway as a reverse proxy in front of your API endpoints using Docker, Kubernetes, or cloud platforms."
      },
      {
        "@type": "HowToStep",
        "name": "Test payment flow",
        "text": "Send a request without payment to receive a 402 challenge, submit payment, and verify receipt-based access."
      }
    ]
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <NavigationHeader />
      <div className="container" style={{ paddingTop: '100px', paddingBottom: 'var(--space-4)' }}>
        <Breadcrumb items={[
          { label: 'Products', href: '/products' },
          { label: 'Gateway 402' }
        ]} />
      </div>
      <main style={{ paddingTop: '0' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'var(--accent-tertiary-subtle)',
                border: '1px solid var(--accent-tertiary-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-accent)'
              }}>
                <CreditCard size={16} />
                <span>PAID API RECORD LAYER</span>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-2)'
                }}>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>HTTP 402</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>x402</span>
                </div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Paid API access with <span className="text-gradient">signed records</span>.
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Add HTTP 402 or x402-style payment challenges to an API, then return a signed record of the access, terms, payment proof, and result.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-10)',
                maxWidth: '800px',
                margin: '0 auto var(--space-10) auto'
              }}>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap'
              }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <span>Contact us</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/integrations/x402" className="btn btn-secondary btn-lg">
                  <span>View x402 integration</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ maxWidth: '880px', margin: '0 auto var(--space-12) auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>Use this when paid access needs a record.</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', lineHeight: 1.7 }}>
                Originary does not custody funds, replace payment rails, or settle transactions. It records the paid-access boundary so another party can inspect what happened later.
              </p>
            </div>
            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto var(--space-12) auto' }}>
              {[
                'You operate a paid API or data endpoint.',
                'Automated clients create billing or usage disputes.',
                'You want HTTP 402 or x402-style access without losing audit context.',
                'A customer needs proof of access, terms, payment proof, and result.',
              ].map((item) => (
                <div key={item} className="card" style={{ padding: 'var(--space-5)' }}>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-3" style={{ gap: 'var(--space-6)' }}>
              {[
                ['What your stack does', ['challenges', 'payment validation', 'access decision', 'response']],
                ['What Originary records', ['terms digest', 'payment proof reference', 'access decision', 'response/result digest', 'issuer, timestamp, signature']],
                ['What the customer verifies', ['the record came from you', 'the terms matched', 'the action happened in the stated window', 'the record was not modified']],
              ].map(([title, items]) => (
                <div key={title as string} className="card" style={{ padding: 'var(--space-6)' }}>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>{title}</h3>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    {(items as string[]).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>Protocol specification</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'var(--space-20)'
            }}>
              <div className="card" style={{ maxWidth: '400px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-tertiary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-6)'
                }}>
                  <Shield size={28} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <h3>x402 Protocol</h3>
                  <span style={{
                    background: 'var(--brand-accent)',
                    color: 'var(--white)',
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600
                  }}>STANDARD</span>
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Open protocol for HTTP 402 payment flows. Defines challenge headers, payment proof format, and signed-record issuance.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>HTTP 402</span>
                  <span style={{ background: 'var(--surface-card)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Signed records</span>
                </div>
              </div>
            </div>

            <div className="cta-card" style={{
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, var(--glass-border-hover) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Add HTTP 402 to your API
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Deploy as a reverse proxy or middleware. Returns 402 challenges, verifies payment, and issues signed records. Start with the open-source package or talk to us about managed deployment.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  flexWrap: 'wrap'
                }}>
                  <Link
                    href="/company/contact"
                    className="btn btn-lg"
                    style={{
                      background: 'var(--surface-elevated)',
                      color: 'var(--accent-brand)',
                      border: 'none'
                    }}
                  >
                    <span>Contact us</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/developers"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid var(--border-hover)'
                    }}
                  >
                    <span>View deployment guides</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
