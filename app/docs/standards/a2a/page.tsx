import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agent-to-Agent (A2A) Communication - Standards Integration',
  description: 'Originary enables secure agent-to-agent communication with PEAC-Receipt verification. Implement trusted A2A workflows with verifiable transaction history and policy enforcement.',
  openGraph: {
    title: 'Agent-to-Agent (A2A) Communication - Standards Integration | Originary',
    description: 'Originary enables secure agent-to-agent communication with PEAC-Receipt verification. Implement trusted A2A workflows with verifiable transaction history and policy enforcement.',
    url: 'https://www.originary.xyz/docs/standards/a2a/',
    type: 'article'
  },
  alternates: {
    canonical: 'https://www.originary.xyz/docs/standards/a2a/'
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Agent-to-Agent (A2A) Communication Integration",
  "description": "Technical documentation for implementing secure agent-to-agent communication with PEAC-Receipt verification",
  "author": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.originary.xyz/#org"
  },
  "url": "https://www.originary.xyz/docs/standards/a2a/"
}

export default function A2APage() {
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
            Agent-to-Agent (A2A) Communication
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
            lineHeight: 1.6
          }}>
            Secure, verifiable communication between autonomous agents
          </p>

          {/* Overview */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Overview
            </h2>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              Agent-to-Agent (A2A) communication enables autonomous agents to interact directly with each other while maintaining verifiable transaction history. Originary provides PEAC-Receipt attach points that allow agents to prove prior interactions and policy compliance.
            </p>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
              When Agent A calls Agent B, Originary issues a signed receipt. Agent B can then attach this receipt when calling Agent C, creating a verifiable chain of agent interactions that can be audited and validated.
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
                  Multi-Agent Workflows
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Coordinate complex workflows where multiple agents collaborate, each maintaining receipts of their contributions.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Policy Enforcement
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Verify that agents have obtained necessary permissions or payments before proceeding with downstream operations.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  Audit Trails
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  Maintain complete, verifiable history of agent interactions for compliance and debugging purposes.
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
              Attaching PEAC-Receipts
            </h3>
            <pre style={{
              background: 'var(--gray-50)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-jetbrains-mono)'
            }}>
{`# Agent B calling Agent C with attached receipt
curl https://agent-c.example.com/api/action \\
  -H "Authorization: Bearer agent-b-token" \\
  -H "PEAC-Receipt: eyJhbGc...agent-a-to-b-receipt"`}
            </pre>

            <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
              Agent C can verify the attached receipt to confirm that Agent B received proper authorization from Agent A before executing the requested action.
            </p>
          </div>

          {/* Benefits */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Benefits
            </h2>
            <ul style={{ color: 'var(--gray-600)', lineHeight: 1.8, paddingLeft: 'var(--space-6)' }}>
              <li>Verifiable chain of custody for agent workflows</li>
              <li>Cryptographic proof of policy compliance</li>
              <li>Reduced fraud in multi-agent systems</li>
              <li>Simplified debugging with complete audit trails</li>
              <li>Standards-based approach compatible with existing protocols</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link href="/docs/a2a/attach-points" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                A2A Attach Points Documentation →
              </Link>
              <Link href="/products/verify" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                Verify API Product →
              </Link>
              <a href="https://peacprotocol.org/" target="_blank" rel="noopener" style={{
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 500
              }}>
                PEAC Protocol Specification →
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
              Build verifiable agent workflows
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
              Start implementing A2A communication with PEAC-Receipts
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
