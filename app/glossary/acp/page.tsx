import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ACP – Agent Commerce Protocol",
  description: "ACP (Agent Commerce Protocol) defines standards for agent-initiated commerce including pricing discovery, payment negotiation, and settlement. Core protocol for the agentic web economy.",
  alternates: { canonical: "/glossary/acp/" },
  keywords: "ACP, Agent Commerce Protocol, agent payments, agent economy, automated commerce, PEAC, HTTP 402, agentic web, autonomous transactions",
  openGraph: {
    title: "ACP - Agent Commerce Protocol",
    description: "Standards for agent-initiated commerce including pricing discovery, payment negotiation, and settlement for the agentic web economy",
    type: "article",
    url: "https://www.originary.xyz/glossary/acp/",
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "ACP - Agent Commerce Protocol",
    description: "Standards for agent-initiated commerce including pricing discovery, payment negotiation, and settlement for the agentic web economy",
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "ACP",
    "alternateName": "Agent Commerce Protocol",
    "description": "Protocol standards for agent-initiated commerce including pricing discovery, payment negotiation, automated settlement, and verifiable receipts for autonomous economic activity.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/acp/"
  };

  return (
    <div className="wrap">
      <NavigationHeader />
      <main className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--gray-600)' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Home</Link>
          {' '}/{' '}
          <Link href="/glossary/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--gray-900)' }}>ACP</span>
        </nav>

        <div style={{
          display: 'inline-flex',
          background: 'rgba(99, 91, 255, 0.1)',
          border: '1px solid rgba(99, 91, 255, 0.2)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-2) var(--space-4)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          color: 'var(--brand-primary)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          GLOSSARY TERM
        </div>

        <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-6)', lineHeight: 1.1, color: 'var(--gray-900)' }}>
          ACP <span style={{ fontSize: 'var(--text-3xl)', color: 'var(--gray-600)', fontWeight: 400 }}>(Agent Commerce Protocol)</span>
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-700)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--gray-600)' }}>
            <strong>ACP</strong> (Agent Commerce Protocol) defines standards and patterns for agent-initiated commerce on the <Link href="/glossary/agentic-web/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>agentic web</Link>. It encompasses pricing discovery, payment negotiation, automated settlement, and verifiable receipts for autonomous economic activity between agents and services.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Core ACP components
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Pricing discovery</strong> - Machine-readable pricing through <Link href="/glossary/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC</Link> files, <Link href="/glossary/aipref/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>AIPREF</Link>, and <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402</Link> responses
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Payment protocols</strong> - Standardized flows using HTTP 402, <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>x402</Link>, and multi-rail settlement
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Receipt verification</strong> - Cryptographic PEAC-Receipt tokens as proof of payment and access rights
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Settlement rails</strong> - Support for fiat, stablecoins, crypto, and traditional payment processors
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Compliance tracking</strong> - Auditable trail of all commercial transactions for regulatory requirements
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            How ACP works
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ol style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Service discovery</strong> - Agent finds service through search, referrals, or directories
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Policy reading</strong> - Agent fetches <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> for pricing and terms
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Price negotiation</strong> - Optional negotiation for bulk pricing or custom terms
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Payment initiation</strong> - Agent selects payment rail and initiates transaction
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Receipt issuance</strong> - Payment provider generates signed PEAC-Receipt JWS token
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Access granted</strong> - Agent presents receipt for verified access to paid resources
              </li>
            </ol>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            ACP pricing models
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                Pay-per-use
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Micropayments for individual API calls, content access, or compute resources
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                Subscriptions
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Time-based access with receipts issued for subscription periods
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                Tiered pricing
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Volume-based pricing with automatic tier detection and billing
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                Dynamic pricing
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Real-time price adjustments based on demand, time, or resource availability
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            ACP vs traditional payment APIs
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Traditional Payments
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Human-initiated checkout</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Form-based input</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Browser redirects</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Manual approval flows</li>
                  <li style={{ marginBottom: 0 }}>Email receipts</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  ACP
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Agent-initiated transactions</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Machine-readable protocols</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Direct API flows</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Automated settlement</li>
                  <li style={{ marginBottom: 0 }}>Cryptographic receipts</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Use cases
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>API marketplaces</strong> - Agents discover, purchase, and use APIs without human intervention
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Content licensing</strong> - Automated payment for news articles, research papers, and media assets
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Compute resources</strong> - Pay-per-use access to GPUs, storage, and processing power
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Data access</strong> - Purchase real-time data feeds, datasets, and analytics
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>AI model usage</strong> - Per-token billing for LLM inference and specialized models
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            ACP compliance and security
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Verifiable receipts</strong> - Cryptographically signed proof of payment preventing disputes
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Audit trails</strong> - Complete transaction history for regulatory compliance
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Rate limiting</strong> - Built-in protection against payment abuse and fraud
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Offline verification</strong> - JWS receipts can be validated without issuer API calls
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Multi-currency support</strong> - Standardized handling of fiat, stable coins, and cryptocurrencies
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/products/gateway-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Gateway 402</Link> - Enterprise payment infrastructure for ACP
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC Protocol</Link> - Policy and receipt standards used in ACP
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/a2a/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>A2A</Link> - Agent-to-agent communication patterns
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/agentic-web/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Agentic Web</Link> - Infrastructure enabling agent commerce
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/solutions/api-providers/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>API Providers solution</Link> - Monetize agent access with ACP
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
