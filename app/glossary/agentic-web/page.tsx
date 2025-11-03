import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agentic Web - Internet for Autonomous Agents - Originary",
  description: "The agentic web is the internet infrastructure optimized for autonomous agents. Machine-readable policies, payment protocols, and verifiable receipts enable agent-to-agent commerce at scale.",
  alternates: { canonical: "https://www.originary.xyz/glossary/agentic-web/" },
  keywords: "agentic web, autonomous agents, AI agents, agent commerce, machine-readable policies, PEAC, HTTP 402, x402, A2A, MCP",
  openGraph: {
    title: "Agentic Web - Internet for Autonomous Agents",
    description: "Internet infrastructure optimized for autonomous agents. Machine-readable policies, payment protocols, and verifiable receipts enable agent-to-agent commerce.",
    type: "article",
    url: "https://www.originary.xyz/glossary/agentic-web/",
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Web - Internet for Autonomous Agents",
    description: "Internet infrastructure optimized for autonomous agents. Machine-readable policies, payment protocols, and verifiable receipts.",
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
    "name": "Agentic Web",
    "alternateName": "Agent Web",
    "description": "The internet infrastructure optimized for autonomous agents to discover, negotiate, and transact without human intervention. Includes machine-readable policies, payment protocols, and verifiable receipts.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/agentic-web/"
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
          <span style={{ color: 'var(--gray-900)' }}>Agentic Web</span>
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
          Agentic Web
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-700)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--gray-600)' }}>
            The <strong>agentic web</strong> is the internet infrastructure optimized for autonomous agents to discover, negotiate, and transact without human intervention. It includes machine-readable policies, payment protocols, verifiable receipts, and standardized communication patterns for agent-to-agent commerce.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Key characteristics
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Machine-readable policies</strong> - Terms of service, pricing, and usage rules in formats agents can parse (<Link href="/glossary/aipref/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>AIPREF</Link>, <Link href="/glossary/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC</Link>)
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Automated payment flows</strong> - Agents discover pricing and pay for services using protocols like <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402</Link> and <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>x402</Link>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Verifiable receipts</strong> - Cryptographic proof of payment, access, and compliance (PEAC-Receipt JWS tokens)
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent-to-agent protocols</strong> - Standardized communication patterns for discovery, negotiation, and settlement
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Decentralized trust</strong> - Cryptographic verification instead of centralized intermediaries
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Traditional web vs agentic web
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Traditional Web
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Optimized for humans</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>HTML/visual interfaces</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Manual sign-ups & billing</li>
                  <li style={{ marginBottom: 0 }}>Cookie/session auth</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                  Agentic Web
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--gray-600)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Optimized for agents</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>JSON/structured data</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Automated discovery & payment</li>
                  <li style={{ marginBottom: 0 }}>Cryptographic receipts</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Core protocols
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                <Link href="/glossary/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>PEAC</Link>
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Policy discovery and verifiable receipts. Agents discover terms and present cryptographic proof of compliance.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>HTTP 402</Link>
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Payment-required status code. Signals that payment is needed to access a resource with inline payment hints.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                <Link href="/glossary/a2a/" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>A2A</Link>
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Agent-to-agent communication protocols. Standardized patterns for discovery, negotiation, and settlement.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--gray-900)' }}>
                <Link href="/glossary/mcp/" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>MCP</Link>
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, margin: 0 }}>
                Model Context Protocol. Enables agents to connect to data sources and services with standardized interfaces.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Use cases
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>API marketplaces</strong> - Agents discover and pay for API access without manual billing setup
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Content licensing</strong> - Publishers monetize content with automated agent-friendly licensing
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>AI training compliance</strong> - Agents discover usage policies and prove compliance with receipts
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Micropayments</strong> - Pay-per-use models for computational resources, data, and services
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Decentralized commerce</strong> - Agent-to-agent transactions without platform intermediaries
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Why the agentic web matters
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            As AI agents become more capable and autonomous, they need infrastructure that enables them to operate independently. The agentic web provides standardized protocols for agents to:
          </p>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>Discover services and pricing programmatically</li>
              <li style={{ marginBottom: 'var(--space-3)' }}>Negotiate terms and make payments automatically</li>
              <li style={{ marginBottom: 'var(--space-3)' }}>Prove compliance and maintain audit trails</li>
              <li style={{ marginBottom: 0 }}>Transact at machine speed without human bottlenecks</li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/solutions/ai-builders/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>AI Builders solution</Link> - Build compliant AI systems for the agentic web
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC Protocol</Link> - Core infrastructure for agentic web
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/a2a/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>A2A</Link> - Agent-to-agent communication protocols
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/products/gateway-402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Gateway 402</Link> - Payment infrastructure for agentic web
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
