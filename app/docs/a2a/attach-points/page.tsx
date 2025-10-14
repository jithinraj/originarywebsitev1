import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'A2A Attach Points : Originary',
  description: 'Embed PEAC-Receipts in Agent2Agent protocol messages. Add verifiable proofs to agent-to-agent communication.',
  openGraph: {
    title: 'A2A Attach Points',
    description: 'Embed PEAC-Receipts in Agent2Agent protocol messages.',
    url: 'https://originary.xyz/docs/a2a/attach-points',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function A2AAttachPointsDocPage() {
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
              A2A INTEGRATION
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              A2A Attach Points
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Embed PEAC-Receipts in Agent2Agent (A2A) protocol messages to provide verifiable proof of authorization, payment, and policy compliance in multi-agent systems.
            </p>

            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                A2A + PEAC Integration
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                The Agent2Agent (A2A) protocol by Google enables communication and interoperability between AI agents. Originary extends A2A by attaching PEAC-Receipts to agent messages, creating an auditable chain of custody.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                When one agent requests data or action from another, the response can include a PEAC-Receipt proving payment was made, policies were respected, and the transaction is verifiable.
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
                <li>Configure your A2A agent with Originary middleware</li>
                <li>Define access policies in <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: '4px' }}>peac.txt</code></li>
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
                Build verifiable agent networks
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Add PEAC-Receipts to your A2A messages with Originary.
              </p>
              <Link href="/checkout/start" className="btn btn-primary">
                Get Started for $1
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
