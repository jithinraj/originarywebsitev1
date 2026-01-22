import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'A2A Attach Points | Agent-to-Agent Transactions',
  description: 'Embed PEAC-Receipts in A2A protocol messages for verifiable agent-to-agent transactions. Documentation for A2A attach points and multi-agent workflows.',
  robots: 'index,follow',
  alternates: {
    canonical: '/docs/a2a/attach-points'
  },
  openGraph: {
    title: 'A2A Attach Points | Agent-to-Agent Transactions',
    description: 'A2A protocol documentation for agent to agent transactions and agent-to-agent communication. Embed PEAC-Receipts in A2A protocol messages for verifiable agent to agent transactions.',
    url: '/docs/a2a/attach-points',
    siteName: 'Originary',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A2A Attach Points | A2A Protocol and Agent to Agent Transactions',
    description: 'A2A protocol for agent to agent transactions. Embed PEAC-Receipts in A2A protocol messages for verifiable communication.',
  }
}

export default function A2AAttachPointsDocPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--surface-elevated)' }}>
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              A2A INTEGRATION
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              A2A Attach Points
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              A2A protocol documentation for agent to agent transactions and agent-to-agent communication. Learn how to embed PEAC-Receipts in A2A protocol messages to provide verifiable proof of authorization, payment, and policy compliance for agent to agent transactions in multi-agent systems.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                A2A + PEAC Integration
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                The Agent2Agent (A2A) protocol by Google enables communication and interoperability between AI agents. Originary extends A2A by attaching PEAC-Receipts to agent messages, creating an auditable chain of custody.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                When one agent requests data or action from another, the response can include a PEAC-Receipt proving payment was made, policies were respected, and the transaction is verifiable.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                5-Minute Quickstart
              </h2>
              <ol style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Configure your A2A agent with Originary middleware</li>
                <li>Define access policies in <code style={{ background: 'var(--surface-card)', padding: '2px 6px', borderRadius: '4px' }}>peac.txt</code></li>
                <li>When responding to agent requests, attach PEAC-Receipt in message metadata</li>
                <li>Receiving agents can verify receipts via Originary API</li>
                <li>Build trust chains across multi-agent workflows</li>
              </ol>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Code Example
              </h2>
              <pre style={{
                background: 'var(--text-primary)',
                color: 'var(--surface-card)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`// A2A message with PEAC-Receipt
const message = {
  to: 'agent-b@example.com',
  from: 'agent-a@example.com',
  content: { /* agent message */ },
  metadata: {
    'peac-receipt': signedJWT,
    'payment-evidence': { status: 'verified' }
  }
}

// Receiving agent verifies
await originary.verify(message.metadata['peac-receipt'])`}
              </pre>
            </div>

            {/* Related Resources */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Related Resources
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Link href="/integrations/a2a" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  A2A protocol integration overview →
                </Link>
                <Link href="/docs/receipts" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  PEAC-Receipts and AI usage receipts →
                </Link>
                <Link href="/peac" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  PEAC Protocol and Policy Layer →
                </Link>
                <Link href="/solutions/ai-builders" style={{
                  color: 'var(--accent-brand)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500
                }}>
                  AI infrastructure tools for AI builders →
                </Link>
              </div>
            </div>

            <div style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginTop: 'var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Build verifiable agent networks
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Add PEAC-Receipts to your A2A protocol messages and enable agent to agent transactions with Originary.
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
