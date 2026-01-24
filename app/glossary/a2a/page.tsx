import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A2A - Agent-to-Agent Communication",
  description: "A2A (Agent-to-Agent) protocols enable autonomous agents to communicate, negotiate, and transact without human intervention.",
  alternates: { canonical: "/glossary/a2a" },
  keywords: "A2A, agent-to-agent, autonomous agents, agent communication, agent commerce, PEAC, HTTP 402, agentic web",
  openGraph: {
    title: "A2A - Agent-to-Agent Communication",
    description: "Protocols and patterns for autonomous agents to communicate, negotiate, and transact directly without human intervention",
    type: "article",
    url: "/glossary/a2a/",
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "A2A - Agent-to-Agent Communication",
    description: "Protocols and patterns for autonomous agents to communicate, negotiate, and transact directly without human intervention",
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "A2A",
    "alternateName": "Agent-to-Agent",
    "description": "Protocols and communication patterns for autonomous agents to discover, negotiate, transact, and maintain compliance records without human intervention.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/a2a/"
  };

  return (
    <div className="wrap">
      <NavigationHeader />
      <main className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Home</Link>
          {' '}/{' '}
          <Link href="/glossary" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--text-primary)' }}>A2A</span>
        </nav>

        <div style={{
          display: 'inline-flex',
          background: 'var(--accent-brand-subtle)',
          border: '1px solid var(--accent-brand-muted)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-2) var(--space-4)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          color: 'var(--accent-brand)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          GLOSSARY TERM
        </div>

        <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-6)', lineHeight: 1.1, color: 'var(--text-primary)' }}>
          A2A <span style={{ fontSize: 'var(--text-3xl)', color: 'var(--text-secondary)', fontWeight: 400 }}>(Agent-to-Agent)</span>
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}>
            <strong>A2A</strong> (Agent-to-Agent) refers to protocols, standards, and communication patterns that enable autonomous agents to discover, negotiate, transact, and maintain compliance records without human intervention. A2A is fundamental to the <Link href="/glossary/agentic-web" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>agentic web</Link>.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Core A2A capabilities
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Discovery</strong> - Agents find services, policies, and pricing through machine-readable formats (<code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code>, <Link href="/glossary/aipref" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>AIPREF</Link>)
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Negotiation</strong> - Automated agreement on terms, pricing, and service levels without human approval flows
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Payment</strong> - Direct agent-initiated payments using protocols like <Link href="/glossary/http-402-payment-required" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>HTTP 402</Link> and <Link href="/glossary/x402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>x402</Link>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Verification</strong> - Cryptographic receipts (PEAC-Receipt) proving payment, access rights, and compliance
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Audit trails</strong> - Verifiable records of all interactions for compliance and dispute resolution
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            A2A transaction flow
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ol style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent discovers service</strong> - Finds API or content through search, referrals, or directories
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent reads policies</strong> - Fetches machine-readable terms from <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code>
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent attempts access</strong> - Makes initial request to protected resource
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Server returns 402</strong> - Payment required with structured payment challenge
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent pays automatically</strong> - Processes payment through specified rail (stablecoin, fiat, etc.)
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Agent receives receipt</strong> - Gets signed PEAC-Receipt JWS token as proof
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Agent retries with receipt</strong> - Presents receipt in header for verified access
              </li>
            </ol>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            A2A vs traditional APIs
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  Traditional APIs
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Manual sign-up required</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>API keys provisioned by humans</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Monthly billing cycles</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Dashboard-based management</li>
                  <li style={{ marginBottom: 0 }}>Human approval for access</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  A2A APIs
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Automatic discovery</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Self-service payment</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Per-request pricing</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Protocol-based access</li>
                  <li style={{ marginBottom: 0 }}>Zero human intervention</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            A2A protocol stack
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            A2A communication relies on several complementary protocols:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                <Link href="/glossary/peac" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>PEAC</Link>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: 'var(--text-sm)' }}>
                Policy discovery + verifiable receipts
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                <Link href="/glossary/http-402-payment-required" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>HTTP 402 / x402</Link>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: 'var(--text-sm)' }}>
                Payment-required signaling + challenge-response
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                <Link href="/glossary/mcp" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>MCP</Link>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: 'var(--text-sm)' }}>
                Model Context Protocol for agent integrations
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                <Link href="/glossary/aipref" style={{ color: 'var(--accent-brand)', textDecoration: 'none' }}>AIPREF</Link>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: 'var(--text-sm)' }}>
                AI preference files for content usage policies
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Use cases
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>API marketplaces</strong> - Agents browse, purchase, and integrate APIs without human involvement
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Data licensing</strong> - Automated discovery and payment for data access rights
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Computational resources</strong> - Pay-per-use access to GPU, storage, and processing power
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Content syndication</strong> - Agents license and distribute content with proof of payment
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Inter-agent services</strong> - Agents provide services to other agents with automated billing
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/agentic-web" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Agentic Web</Link> - Infrastructure enabling A2A communication
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/products/gateway-402" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Gateway 402</Link> - Payment infrastructure for A2A commerce
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/solutions/api-providers" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>API Providers solution</Link> - Monetize agent access with A2A protocols
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/developers" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Developer Documentation</Link> - Implement A2A in your services
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
