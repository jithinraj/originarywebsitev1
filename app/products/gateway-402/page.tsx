import { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, CreditCard, Shield, ExternalLink, Download } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
  description: 'HTTP 402 commerce gateway for machine-payable APIs. Enable HTTP 402 payments and x402 commerce for agentic economy use cases with standardized payment protocols.',
  keywords: 'HTTP 402, x402, payment gateway, API payments, policy enforcement, enterprise payments, agent commerce, HTTP 402 commerce, x402 commerce',
  authors: [{ name: 'Originary' }],
  openGraph: {
    type: 'website',
    title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
    description: 'HTTP 402 commerce gateway for machine-payable APIs. Enable HTTP 402 payments and x402 commerce for agentic economy use cases.',
    url: 'https://www.originary.xyz/products/gateway-402',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gateway 402 | HTTP 402 & x402 payments for APIs',
    description: 'HTTP 402 commerce gateway for machine-payable APIs. Enable HTTP 402 payments and x402 commerce for agentic economy use cases.',
    images: ['https://www.originary.xyz/og.jpg'],
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
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'rgba(255, 107, 53, 0.1)',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--brand-accent)'
              }}>
                <CreditCard size={16} />
                <span>PAYMENT GATEWAY</span>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-2)'
                }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>HTTP 402</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', fontWeight: 600 }}>x402</span>
                </div>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                The <span className="text-gradient">payment infrastructure</span> for agents
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-6)',
                maxWidth: '900px',
                margin: '0 auto var(--space-6) auto'
              }}>
                Enterprise-grade HTTP 402 Payment Required gateway with multi-rail settlement support. Enable autonomous agents to securely purchase access to your APIs, content, and services through standardized payment protocols.
              </p>

              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '900px',
                margin: '0 auto var(--space-8) auto'
              }}>
                Enable HTTP 402 commerce for AI agents and automated economy use cases. Gateway 402 brings x402 commerce to your infrastructure with machine-payable APIs, agent-native payments, and PEAC-Receipts for every transaction.
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
                <Link href="/company/contact" className="btn btn-primary btn-lg">
                  <span>Talk to payments engineer</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="/downloads/gateway-402-config.yaml"
                  download
                  className="btn btn-secondary btn-lg"
                >
                  <span>Configuration template</span>
                  <Download size={18} />
                </a>
              </div>
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
                  background: 'rgba(255, 107, 53, 0.1)',
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
                  HTTP 402 compliant protocol with agent-native policy negotiation and verifiable receipts.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>HTTP 402</span>
                  <span style={{ background: 'var(--gray-100)', padding: 'var(--space-1) var(--space-2)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)' }}>Agent-native</span>
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
                background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  color: 'var(--white)'
                }}>
                  Deploy enterprise payment infrastructure
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  marginBottom: 'var(--space-8)',
                  color: 'var(--white)',
                  maxWidth: '700px',
                  margin: '0 auto var(--space-8) auto',
                  lineHeight: 1.6
                }}>
                  Enable autonomous agents to purchase access to your APIs and services through standardized payment infrastructure.
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
                      background: 'var(--white)',
                      color: 'var(--brand-primary)',
                      border: 'none'
                    }}
                  >
                    <span>Talk to payments engineer</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/developers"
                    className="btn btn-lg btn-ghost"
                    style={{
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.2)'
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