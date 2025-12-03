import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MCP Receipts | Model Context Protocol and MCP Tools Integration',
  description: 'MCP receipts for Model Context Protocol and MCP tools integration. Generate PEAC-Receipts for Model Context Protocol tool calls and MCP operations. Learn how to add verifiable MCP receipts to AI agent tool invocations with audit trails for MCP tools.',
  keywords: 'MCP receipts, Model Context Protocol, MCP tools, MCP integration, Anthropic MCP, PEAC-Receipt, AI tool receipts, agent tool calls, MCP audit trails, verifiable receipts, AI compliance, tool invocation receipts, MCP server',
  alternates: {
    canonical: '/docs/mcp/receipts'
  },
  openGraph: {
    title: 'MCP Receipts | Model Context Protocol and MCP Tools',
    description: 'MCP receipts for Model Context Protocol and MCP tools integration. Generate PEAC-Receipts for Model Context Protocol tool calls and MCP operations.',
    url: 'https://www.originary.xyz/docs/mcp/receipts',
    siteName: 'Originary',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP Receipts | Model Context Protocol and MCP Tools',
    description: 'MCP receipts for Model Context Protocol and MCP tools. Generate PEAC-Receipts for tool calls with audit trails.',
  }
}

export default function MCPReceiptsDocPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              MCP INTEGRATION
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              MCP Receipts
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              MCP receipts for Model Context Protocol and MCP tools integration. Generate verifiable PEAC-Receipts for each Model Context Protocol (MCP) tool call, providing audit trails and compliance tracking for AI agent operations with MCP tools.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                MCP + PEAC Integration
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                The Model Context Protocol (MCP) is Anthropic&rsquo;s open standard for connecting AI assistants to external tools and data sources. Originary extends MCP by generating a cryptographically signed receipt for each tool invocation.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                This provides verifiable proof of which tools were called, when, by whom, and under what policy constraints - essential for compliance and auditing in production AI systems.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                5-Minute Quickstart
              </h2>
              <ol style={{ color: 'var(--gray-600)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Install Originary MCP wrapper: <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>npm install @originary/mcp-wrapper</code></li>
                <li>Wrap your existing MCP server with Originary middleware</li>
                <li>Configure policy constraints in <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>peac.txt</code></li>
                <li>Each tool call now returns with a PEAC-Receipt header</li>
                <li>Query receipts via Originary dashboard for audit trails</li>
              </ol>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Code Example
              </h2>
              <pre style={{
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`import { wrapMCPServer } from '@originary/mcp-wrapper'

const server = wrapMCPServer({
  name: 'my-tool-server',
  tools: [/* your MCP tools */],
  originary: {
    apiKey: process.env.ORIGINARY_API_KEY
  }
})

// Each tool call now includes PEAC-Receipt
// receipt proves: tool name, params, timestamp, policy`}
              </pre>
            </div>

            {/* Related Resources */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Related Resources
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Link href="/integrations/mcp" style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  Model Context Protocol integration overview →
                </Link>
                <Link href="/docs/receipts" style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  PEAC-Receipts and AI usage receipts →
                </Link>
                <Link href="/peac" style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  PEAC Protocol and Policy Layer →
                </Link>
                <Link href="/solutions/ai-builders" style={{
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  AI infrastructure tools for AI builders →
                </Link>
              </div>
            </div>

            <div style={{
              background: 'var(--gray-50)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginTop: 'var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Add MCP receipts to your MCP tools
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Get audit trails for every Model Context Protocol tool invocation with Originary.
              </p>
              <Link href="/developers" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
