import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Glossary | AI Infrastructure Terms",
  description: "Definitions for AI infrastructure terms: PEAC Protocol, HTTP 402, x402, A2A, MCP, AIPREF, ACP, and Agentic Web concepts.",
  alternates: { canonical: "/glossary" },
  keywords: "PEAC, HTTP 402, x402, A2A, MCP, AIPREF, ACP, agentic web, AI infrastructure glossary",
  openGraph: {
    title: "Glossary | AI Infrastructure Terms",
    description: "Definitions for PEAC Protocol, HTTP 402, x402, A2A, MCP, AIPREF, and Agentic Web concepts.",
    type: "website",
    url: "/glossary",
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary | AI Infrastructure Terms",
    description: "Definitions for PEAC Protocol, HTTP 402, x402, A2A, MCP, AIPREF, and Agentic Web concepts.",
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
};

const glossaryTerms = [
  {
    slug: "peac",
    term: "PEAC Protocol",
    short: "Policy, Evidence, Access, Compliance",
    description: "Open protocol for file-based policy discovery and verifiable receipts."
  },
  {
    slug: "http-402-payment-required",
    term: "HTTP 402",
    short: "Payment Required",
    description: "HTTP status code for machine-payable API access and agent payments."
  },
  {
    slug: "x402",
    term: "x402",
    short: "HTTP 402 Payment Extension",
    description: "Stablecoin-backed HTTP 402 payments with structured challenge-response."
  },
  {
    slug: "a2a",
    term: "A2A",
    short: "Agent-to-Agent",
    description: "Protocol for AI agents to transact and verify interactions with each other."
  },
  {
    slug: "mcp",
    term: "MCP",
    short: "Model Context Protocol",
    description: "Protocol for connecting AI models to external tools and data sources."
  },
  {
    slug: "aipref",
    term: "AIPREF",
    short: "AI Preferences",
    description: "Machine-readable AI usage preferences for crawling, training, and inference."
  },
  {
    slug: "acp",
    term: "ACP",
    short: "Agentic Commerce Protocol",
    description: "Framework for AI agents to discover, negotiate, and complete transactions."
  },
  {
    slug: "agentic-web",
    term: "Agentic Web",
    short: "Agent-First Internet",
    description: "Infrastructure layer where AI agents interact, transact, and verify autonomously."
  }
];

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Originary AI Infrastructure Glossary",
    "description": "Definitions for AI infrastructure terms and protocols",
    "url": "https://www.originary.xyz/glossary/",
    "hasDefinedTerm": glossaryTerms.map(t => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.description,
      "url": `https://www.originary.xyz/glossary/${t.slug}/`
    }))
  };

  return (
    <div className="wrap">
      <NavigationHeader />
      <main className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Home</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--text-primary)' }}>Glossary</span>
        </nav>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
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
          <BookOpen size={14} />
          REFERENCE
        </div>

        <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-6)', lineHeight: 1.1, color: 'var(--text-primary)' }}>
          Glossary
        </h1>

        <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-12)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Key terms and protocols for AI infrastructure, agent commerce, and verifiable receipts.
        </p>

        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          {glossaryTerms.map((item) => (
            <Link
              key={item.slug}
              href={`/glossary/${item.slug}/`}
              style={{
                display: 'block',
                padding: 'var(--space-6)',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div>
                  <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>
                    {item.term}
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-brand)', marginBottom: 'var(--space-2)', fontWeight: 500 }}>
                    {item.short}
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
                <ArrowRight size={20} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 'var(--space-1)' }} />
              </div>
            </Link>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
