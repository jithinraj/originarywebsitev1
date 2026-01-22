import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MCP - Model Context Protocol",
  description: "MCP (Model Context Protocol) connects AI models to data sources, services, and tools through standardized interfaces.",
  alternates: { canonical: "/glossary/mcp" },
  keywords: "MCP, Model Context Protocol, AI context, agent integrations, data sources, AI tools, context management, agent infrastructure",
  openGraph: {
    title: "MCP - Model Context Protocol",
    description: "Open standard for connecting AI models to data sources, services, and tools through standardized interfaces",
    type: "article",
    url: "/glossary/mcp/",
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP - Model Context Protocol",
    description: "Open standard for connecting AI models to data sources, services, and tools through standardized interfaces",
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
    "name": "MCP",
    "alternateName": "Model Context Protocol",
    "description": "An open protocol for connecting AI models to data sources, services, and tools. Enables agents to access external context and capabilities through standardized interfaces.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/mcp/"
  };

  return (
    <div className="wrap">
      <NavigationHeader />
      <main className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Home</Link>
          {' '}/{' '}
          <Link href="/glossary/" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--text-primary)' }}>MCP</span>
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
          MCP <span style={{ fontSize: 'var(--text-3xl)', color: 'var(--text-secondary)', fontWeight: 400 }}>(Model Context Protocol)</span>
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}>
            <strong>MCP</strong> (Model Context Protocol) is an open standard for connecting AI models and agents to data sources, services, and tools. It provides standardized interfaces for agents to access external context, execute actions, and integrate with third-party systems on the <Link href="/glossary/agentic-web/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>agentic web</Link>.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            What MCP enables
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Data source connections</strong> - Agents access databases, APIs, file systems, and knowledge bases through unified interfaces
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Tool integration</strong> - Agents discover and use external tools and services programmatically
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Context injection</strong> - Dynamic injection of relevant information into agent workflows
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Action execution</strong> - Agents execute operations across multiple systems with standardized commands
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Permission management</strong> - Fine-grained access control for agent capabilities
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            How MCP works
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            MCP defines three core primitives for agent-context interaction:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Resources
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Expose data and content to agents (files, database records, API responses, documents)
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Tools
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Provide callable functions agents can execute (search, calculations, API calls, system commands)
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Prompts
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Define reusable prompt templates with dynamic context injection
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            MCP in the agentic web
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            MCP complements other agentic web protocols by focusing on <em>context access</em> while protocols like <Link href="/glossary/peac/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>PEAC</Link> handle <em>policy enforcement</em> and <Link href="/glossary/a2a/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>A2A</Link> handles <em>agent communication</em>.
          </p>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <p style={{ marginBottom: 'var(--space-3)', fontWeight: 600, color: 'var(--text-primary)' }}>
              Example workflow combining MCP + PEAC:
            </p>
            <ol style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>Agent discovers API through MCP resource registry</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Agent fetches <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> to understand pricing</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Agent pays using <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>HTTP 402</Link> flow</li>
              <li style={{ marginBottom: 'var(--space-2)' }}>Agent receives PEAC-Receipt as proof of payment</li>
              <li style={{ marginBottom: 0 }}>Agent uses MCP to call API tools with receipt-based auth</li>
            </ol>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            MCP server architecture
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            MCP uses a client-server model where:
          </p>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>MCP Clients</strong> - AI applications and agents that consume context and tools
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>MCP Servers</strong> - Services that expose resources, tools, and prompts through standardized interfaces
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>MCP Specification</strong> - JSON-RPC based protocol for client-server communication
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Use cases
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Enterprise integrations</strong> - Connect AI agents to internal databases, CRMs, and business tools
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Knowledge bases</strong> - Agents access company wikis, documentation, and institutional knowledge
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>API orchestration</strong> - Agents combine multiple third-party APIs into complex workflows
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Tool marketplaces</strong> - Standardized discovery and usage of agent tools and plugins
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Multi-modal data access</strong> - Unified interface for text, images, audio, and structured data
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            MCP and receipts
          </h2>
          <p style={{ marginBottom: 'var(--space-8)' }}>
            When MCP servers expose paid resources or tools, they can integrate with PEAC-Receipt verification. Agents present receipts when calling MCP tools, proving they have paid for access. This enables pay-per-use models for MCP resources while maintaining the standardized MCP interface.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/agentic-web/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Agentic Web</Link> - Infrastructure for agent-native internet
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/a2a/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>A2A</Link> - Agent-to-agent communication protocols
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/peac/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>PEAC Protocol</Link> - Policy enforcement and verifiable receipts
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/solutions/ai-builders/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>AI Builders solution</Link> - Build compliant agent systems
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
