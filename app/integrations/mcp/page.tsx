import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MCP Integration | @peac/mcp-server for Model Context Protocol',
  description: 'Open-source MCP tool server for PEAC-Receipt verification, inspection, issuance, and bundling. 5 tools with capability-based access control.',
  openGraph: {
    title: 'MCP Integration | @peac/mcp-server for Model Context Protocol',
    description: 'Open-source MCP tool server for PEAC-Receipt verification, inspection, issuance, and bundling. 5 tools with capability-based access control.',
    url: '/integrations/mcp',
    type: 'article'
  },
  alternates: {
    canonical: '/integrations/mcp'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "MCP Integration -- @peac/mcp-server",
  "description": "Open-source MCP tool server for PEAC-Receipt verification, inspection, issuance, and bundling",
  "author": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "url": "https://www.originary.xyz/integrations/mcp/"
}

export default function MCPPage() {
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
            Model Context Protocol (MCP)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Open-source MCP tool server for receipt verification, inspection, issuance, and bundling
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              <code style={{ fontSize: 'var(--text-sm)', background: 'var(--surface-subtle)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>@peac/mcp-server</code> is
              an open-source MCP tool server that exposes five tools for working with PEAC-Receipts. It ships as a standalone npm package and can be integrated into any MCP-compatible host (Claude Desktop, Cursor, custom agents).
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Three <strong>pure tools</strong> (verify, inspect, decode) require no signing keys and work entirely offline. Two <strong>privileged tools</strong> (issue, bundle) require an issuer signing key and are disabled by default -- enabled only when an explicit capability token is provided.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              All tool responses include structured outputs with metadata (server version, policy hash, protocol version) for downstream automation.
            </p>
          </div>

          {/* Tools */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Tools
            </h2>

            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pure (no keys required)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                <code style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>verify-receipt</code>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>Cryptographically verify a PEAC-Receipt signature and structure. Returns pass/fail with detailed check results.</p>
              </div>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                <code style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>inspect-receipt</code>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>Parse and display the decoded payload of a receipt -- claims, extensions, timestamps, and issuer info.</p>
              </div>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                <code style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>decode-receipt</code>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>Raw Base64url decode of a compact JWS receipt into its header, payload, and signature components.</p>
              </div>
            </div>

            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Privileged (issuer key required)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                <code style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>issue-receipt</code>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>Sign and issue a new PEAC-Receipt with specified claims and extensions. Requires an Ed25519 issuer key.</p>
              </div>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
                <code style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>create-bundle</code>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: 'var(--space-1)' }}>Package receipts and supporting evidence into a portable <code>.peac.tar.gz</code> evidence bundle.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Getting Started
            </h2>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              Install
            </h3>
            <pre aria-label="Installation command" style={{
              background: 'var(--surface-subtle)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)',
              marginBottom: 'var(--space-4)'
            }}>
{`npm install @peac/mcp-server`}
            </pre>

            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
              Claude Desktop Configuration
            </h3>
            <pre aria-label="Claude Desktop MCP configuration" style={{
              background: 'var(--surface-subtle)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`{
  "mcpServers": {
    "peac": {
      "command": "npx",
      "args": ["@peac/mcp-server"],
      "env": {
        "PEAC_POLICY_FILE": "./peac.txt"
      }
    }
  }
}`}
            </pre>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              Pure tools are available immediately. Privileged tools (issue, bundle) require an issuer signing key via the <code style={{ fontSize: 'var(--text-sm)', background: 'var(--surface-subtle)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>PEAC_ISSUER_KEY</code> environment variable and an explicit capability token.
            </p>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits
            </h2>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Offline verification -- pure tools work without network access</li>
              <li>Capability-based access control -- privileged tools disabled by default</li>
              <li>Structured outputs with metadata for downstream automation</li>
              <li>Cryptographic verification of receipt signatures and structure</li>
              <li>Evidence bundling for portable audit trails</li>
              <li>Compatible with any MCP host (Claude Desktop, Cursor, custom agents)</li>
              <li>Open source under Apache 2.0</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <a href="https://www.npmjs.com/package/@peac/mcp-server" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                @peac/mcp-server on npm →
              </a>
              <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Source on GitHub →
              </a>
              <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                MCP Specification →
              </a>
              <Link href="/downloads" style={{
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                All Downloads →
              </Link>
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
              Add receipt verification to your MCP workflow
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Install @peac/mcp-server and start verifying receipts in minutes
            </p>
            <Link href="/downloads" className="button-primary">
              Get Started
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
