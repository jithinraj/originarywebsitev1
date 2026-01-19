import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Model Context Protocol (MCP) | MCP Receipts and Tools Integration',
  description: 'Model Context Protocol (MCP) integration with MCP receipts and MCP tools for agent coordination. Verifiable PEAC-Receipts for LLM tool calls and MCP agents in agentic workflows.',
  openGraph: {
    title: 'Model Context Protocol (MCP) | MCP Receipts and Agent Coordination',
    description: 'MCP integration with MCP receipts, MCP tools, and agent coordination. Verifiable receipts for Model Context Protocol workflows.',
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
  "headline": "Model Context Protocol (MCP) Integration",
  "description": "Technical documentation for integrating PEAC-Receipts with Model Context Protocol servers and tools",
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
            Model Context Protocol (MCP)
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Verifiable receipts for LLM tool calls and context sharing
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Model Context Protocol (MCP) is an open standard for connecting LLMs to external data sources and tools. Originary extends MCP with PEAC-Receipt verification, providing cryptographic proof of tool invocations and policy compliance.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              When an LLM calls an MCP tool that requires payment or policy adherence, Originary issues a signed receipt that can be verified by downstream systems. This enables trusted tool calling workflows with full audit trails.
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
                  Paid Tool Access
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Monetize MCP tools by requiring payment before execution. PEAC-Receipts prove payment completion for downstream verification.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Multi-Tool Workflows
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Chain multiple MCP tool calls together with verifiable receipts showing the complete workflow execution path.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Policy Enforcement
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Verify that LLMs have obtained necessary permissions before accessing sensitive MCP resources.
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
              MCP Server with PEAC-Receipt
            </h3>
            <pre style={{
              background: 'var(--gray-50)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "fetch_data",
    "arguments": {
      "url": "https://api.example.com/data"
    }
  },
  "receipt": "eyJhbGc...PEAC-Receipt-signature"
}`}
            </pre>

            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              MCP servers can verify attached receipts before executing tools, ensuring proper authorization and payment.
            </p>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits for MCP Providers
            </h2>
            <ul style={{ color: 'var(--gray-600)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Monetize MCP tools with pay-per-call pricing</li>
              <li>Cryptographic verification of tool invocations</li>
              <li>Complete audit trail of LLM tool usage</li>
              <li>Policy enforcement at the tool level</li>
              <li>Compatible with standard MCP implementations</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link href="/docs/mcp/receipts" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                MCP Receipts Documentation →
              </Link>
              <Link href="/products/adapters" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Adapters Product →
              </Link>
              <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                MCP Specification →
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
              Add receipts to your MCP server
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Enable verification and monetization for MCP tools
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
