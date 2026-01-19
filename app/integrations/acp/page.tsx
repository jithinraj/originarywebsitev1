import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ACP Integration | Agentic Commerce for AI Agents and APIs',
  description: 'Use the Agentic Commerce Protocol with PEAC for AI agent price discovery, purchases, receipts, and end-to-end commerce flows.',
  openGraph: {
    title: 'ACP Integration | Agentic Commerce for AI Agents and APIs',
    description: 'Use the Agentic Commerce Protocol with PEAC for AI agent price discovery, purchases, receipts, and end-to-end commerce flows.',
    url: '/integrations/acp',
    type: 'article'
  },
  alternates: {
    canonical: '/integrations/acp'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Agentic Commerce Protocol (ACP) Integration",
  "description": "Technical documentation for integrating PEAC-Receipts with Agentic Commerce Protocol for verified AI agent transactions",
  "author": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "url": "https://www.originary.xyz/integrations/acp/"
}

export default function ACPPage() {
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
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
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
            Agentic Commerce Protocol (ACP)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Agentic commerce and agentic transactions for the agentic economy
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Agentic Commerce Protocol (ACP) defines standards for AI agents to conduct commerce autonomously. Originary integrates with ACP to provide verifiable receipts for agent transactions, ensuring trust and auditability in automated commerce workflows.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              When agents execute purchase flows, service bookings, or payment transactions via ACP, Originary issues PEAC-Receipts that prove transaction completion and can be verified by merchants, platforms, and auditors.
            </p>
          </div>

          {/* Getting Started */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Getting Started with ACP
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Integrating Agentic Commerce Protocol into your commerce platform enables AI agents to conduct fully autonomous transactions. The protocol standardizes how agents discover products, negotiate terms, execute payments, and receive verifiable proof of purchase - all without human intervention.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Start by exposing your product catalog in ACP-compatible format. Agents can then browse offerings, compare prices, and initiate purchase flows programmatically. When an agent completes a purchase, Originary issues a PEAC-Receipt containing cryptographic proof of the transaction, payment details, and fulfillment status.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              For commerce platforms, ACP integration provides immediate benefits: reduced fraud through cryptographic verification, automated reconciliation with machine-readable receipts, and expanded market reach to the growing ecosystem of autonomous AI agents. The protocol works with existing payment rails and can be gradually rolled out alongside traditional checkout flows.
            </p>
          </div>

          {/* Use Cases */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Use Cases
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Agent Purchasing
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  AI agents autonomously purchase goods and services with verifiable transaction receipts for reconciliation and compliance.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Service Booking
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Agents book appointments, reservations, and services with cryptographic proof of booking completion.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Payment Verification
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Merchants verify agent payment receipts before fulfilling orders, reducing fraud and chargebacks.
                </p>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Implementation
            </h2>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              ACP Transaction with PEAC-Receipt
            </h3>
            <pre style={{
              background: 'var(--gray-50)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`POST /acp/purchase HTTP/1.1
Host: merchant.example.com
Content-Type: application/json

{
  "item_id": "prod_123",
  "quantity": 1,
  "agent_id": "agent-xyz",
  "receipt": "eyJhbGc...PEAC-Receipt-signature"
}`}
            </pre>

            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              Merchants can verify the attached PEAC-Receipt to confirm payment authorization before fulfilling the order.
            </p>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits for Commerce Platforms
            </h2>
            <ul style={{ color: 'var(--gray-600)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Reduce fraud with cryptographic payment verification</li>
              <li>Enable autonomous agent purchasing at scale</li>
              <li>Complete audit trail for all agent transactions</li>
              <li>Simplified reconciliation and accounting</li>
              <li>Standards-based integration with existing commerce systems</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <a href="https://www.agenticcommerce.dev/" target="_blank" rel="noopener" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Agentic Commerce Protocol →
              </a>
              <Link href="/products/verify" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Verify API Product →
              </Link>
              <a href="https://peacprotocol.org/" target="_blank" rel="noopener" style={{
                color: 'var(--brand-primary)',
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
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            marginTop: 'var(--space-12)'
          }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Enable agent commerce
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Add verifiable receipts to your commerce platform
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
