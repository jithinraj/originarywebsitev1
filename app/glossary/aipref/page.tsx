import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AIPREF - AI Preference File Standard",
  description: "AIPREF is a structured format for publishers to express preferences about AI training, usage, and attribution. Machine-readable policy discovery for AI agents.",
  alternates: { canonical: "/glossary/aipref" },
  keywords: "AIPREF, AI preferences, AI training policy, content policy, robots.txt, AI agents, publisher rights",
  openGraph: {
    title: "AIPREF - AI Preference File Standard",
    description: "Structured format for publishers to express preferences about AI training, usage, and attribution",
    type: "article",
    url: "/glossary/aipref/",
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "AIPREF - AI Preference File Standard",
    description: "Structured format for publishers to express preferences about AI training, usage, and attribution",
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
    "name": "AIPREF",
    "description": "A structured format for publishers to express machine-readable preferences about AI training, content usage, attribution requirements, and licensing terms.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/aipref/"
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
          <span style={{ color: 'var(--text-primary)' }}>AIPREF</span>
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
          AIPREF
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}>
            <strong>AIPREF</strong> (AI Preferences) is a structured file format that allows publishers to express machine-readable preferences about how AI systems may use their content. It enables policy discovery for training, attribution, licensing, and usage restrictions.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            What AIPREF defines
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}><strong>Training permissions</strong> - Whether content may be used for model training</li>
              <li style={{ marginBottom: 'var(--space-3)' }}><strong>Attribution requirements</strong> - How content must be credited when used</li>
              <li style={{ marginBottom: 'var(--space-3)' }}><strong>Usage restrictions</strong> - Limitations on how content may be accessed or processed</li>
              <li style={{ marginBottom: 'var(--space-3)' }}><strong>Licensing terms</strong> - Commercial vs non-commercial use policies</li>
              <li style={{ marginBottom: 0 }}><strong>Payment requirements</strong> - Pricing for content access or usage rights</li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            How AIPREF works
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            Publishers place an <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>aipref.txt</code> file in their <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/</code> directory. AI agents and crawlers can discover and parse this file to understand content usage policies before accessing or processing content.
          </p>
          <div style={{
            background: 'var(--text-primary)',
            color: 'var(--surface-card)',
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'auto',
            fontSize: 'var(--text-sm)',
            marginBottom: 'var(--space-8)'
          }}>
            <pre style={{ margin: 0 }}>
              <code>{`# Example /.well-known/aipref.txt
training: no
attribution: required
commercial-use: license-required
payment-url: https://example.com/license
contact: rights@example.com`}</code>
            </pre>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            AIPREF vs robots.txt
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  robots.txt
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Controls crawler access</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Binary allow/disallow</li>
                  <li style={{ marginBottom: 0 }}>Web indexing focused</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  AIPREF
                </h3>
                <ul style={{ paddingLeft: 'var(--space-6)', margin: 0, color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Defines usage policies</li>
                  <li style={{ marginBottom: 'var(--space-2)' }}>Granular permissions</li>
                  <li style={{ marginBottom: 0 }}>AI/ML training focused</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Relation to PEAC Protocol
          </h2>
          <p style={{ marginBottom: 'var(--space-8)' }}>
            AIPREF focuses on <em>discovering</em> content policies, while <Link href="/glossary/peac/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>PEAC</Link> provides the infrastructure for <em>enforcing</em> those policies through payment flows and verifiable receipts. Together, they enable publishers to express preferences and agents to respect them with proof.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/solutions/publishers/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Publishers solution</Link> - Protect and monetize content with AIPREF
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/peac/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>PEAC Protocol</Link> - Verifiable receipts for policy enforcement
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/glossary/agentic-web/" style={{ color: 'var(--accent-brand)', textDecoration: 'underline' }}>Agentic Web</Link> - Infrastructure for autonomous agents
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
