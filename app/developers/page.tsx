import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Code, Terminal, Shield, Bot, Plug, FileCheck } from 'lucide-react'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Start here | Originary',
  description: 'Choose the fastest path to your first signed record for APIs, MCP servers, agent workflows, and verification tools.',
  keywords: 'Originary SDK, PEAC Protocol, verifiable interaction records, MCP server, A2A integration, HTTP 402, developer tools',
  authors: [{ name: 'Originary' }],
  alternates: {
    canonical: '/developers'
  },
  openGraph: {
    type: 'website',
    title: 'Start here | Originary',
    description: 'Choose the fastest path to your first signed record for APIs, MCP servers, agent workflows, and verification tools.',
    url: '/developers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start here | Originary',
    description: 'Choose the fastest path to your first signed record for APIs, MCP servers, agent workflows, and verification tools.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow'
}

export default function Developers() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: '96px', paddingBottom: '40px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', marginBottom: 'var(--space-16)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>DEVELOPERS</div>
              <h1 style={{ marginBottom: 'var(--space-6)', color: 'var(--text-primary)', fontWeight: 700 }}>
                Choose the fastest path to your first signed record
              </h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Start from the workflow you actually run — API publishing, MCP tools, AI agent systems, or local verification. Use the path below to issue, inspect, or verify signed records quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Guides */}
        <section className="section" id="guides" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>Choose your path</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Each path gets you to a working example fast.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '960px', margin: '0 auto' }}>
              <GuideCard
                icon={<Shield size={24} />}
                title="I need to verify a signed record"
                description="Validate an interaction record signature offline using the issuer's public key. No network call required."
                steps={['Extract the PEAC-Receipt header', 'Fetch the issuer JWKS (once)', 'Call verifyLocal() with the public key']}
                href="/verify"
                code={`import { verifyLocal } from '@peac/protocol'`}
              />
              <GuideCard
                icon={<Plug size={24} />}
                title="I have an HTTP API that agents call"
                description="Publish a peac.txt policy, add middleware, and return verifiable interaction records in response headers."
                steps={['Deploy /.well-known/peac.txt', 'Add verification middleware', 'Return signed record headers']}
                href="/integrations/x402"
                code="npm install @peac/protocol @peac/middleware-express"
              />
              <GuideCard
                icon={<Bot size={24} />}
                title="I run an MCP server or tool host"
                description="Install the MCP server to give AI agents five verification tools: verify, inspect, decode, issue, and bundle."
                steps={['Install @peac/mcp-server', 'Configure in Claude Desktop or Cursor', 'Agents verify records via tool calls']}
                href="/integrations/mcp"
                code="npx @peac/mcp-server --help"
              />
              <GuideCard
                icon={<ArrowRight size={24} />}
                title="I need proof across agent hops"
                description="Attach verifiable interaction records to A2A messages. Verify authorization and policy compliance at each hop."
                steps={['Issue records with @peac/protocol', 'Attach via A2A metadata carrier', 'Verify at receiving agent']}
                href="/integrations/a2a"
                code="npm install @peac/protocol"
              />
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section className="section" id="quickstart">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>5-minute quickstart</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Create a policy, validate it, and verify your first record.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <QuickStartCard
                step="1"
                title="Create policy"
                description="Initialize and deploy your policy to /.well-known/peac.txt"
                code={`# Install CLI and init policy
npm i -g @peac/cli
peac policy init --profile api-provider

# Generate deployment files
peac policy generate --out ./public --well-known`}
              />
              <QuickStartCard
                step="2"
                title="Validate policy"
                description="Validate your policy file and test rule matching"
                code={`# Validate policy syntax
peac policy validate peac-policy.yaml

# Explain which rule applies
peac policy explain peac-policy.yaml \\
  --purpose train --type agent

# Output:
# Decision: DENY
# Matched Rule: block-training`}
              />
              <QuickStartCard
                step="3"
                title="Verify a record"
                description="Verify incoming PEAC-Receipt headers in your middleware"
                code={`import { verifyLocal } from '@peac/protocol'
import { importJWK } from '@peac/crypto'

const key = await importJWK(jwk)
const result = await verifyLocal(receiptJws, {
  publicKey: key,
  profile: 'strict',
})

if (result.verified) {
  console.log('Valid:', result.claims)
}`}
              />
            </div>
          </div>
        </section>

        {/* Wire accuracy */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Wire format
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Header:</div>
                <div style={{ color: 'var(--text-primary)' }}>PEAC-Receipt: &lt;compact-JWS&gt;</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Policy discovery:</div>
                <div style={{ color: 'var(--text-primary)' }}>/.well-known/peac.txt</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Current stable format (Wire 0.2):</div>
                <div style={{ color: 'var(--text-primary)' }}>{FACTS.stableWireFormat}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
                <div style={{ color: 'var(--text-secondary)' }}>Legacy format (Wire 0.1, frozen):</div>
                <div style={{ color: 'var(--text-primary)' }}>{FACTS.legacyWireFormat}</div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                  GitHub
                </a>
                <a href="https://www.npmjs.com/org/peac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                  npm
                </a>
                <a href="https://github.com/peacprotocol/peac/releases" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-brand)', textDecoration: 'underline', fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                  Releases
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Open protocol callout */}
        <section className="section" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <div style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              border: '2px solid var(--accent-brand)',
              borderRadius: 'var(--radius-2xl)',
              background: 'var(--accent-brand-faint)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Built on an open protocol
              </h3>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <strong>No vendor lock-in.</strong> PEAC is an open standard ({FACTS.license}). Self-host, use Originary, or build your own conformant implementation. Your policies, records, and verification logic work across any PEAC-conformant system.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: 'var(--space-10)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                Need managed verification or integration support?
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto var(--space-8) auto' }}>
                Originary Verify offers hosted verification, managed keys, and enterprise evidence exports. Commercial support is available for teams deploying at scale.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link href="/products/verify" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span>Originary Verify</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/agent-proof-check" className="btn btn-secondary btn-lg">
                  Proof Check
                </Link>
                <Link href="/agent-auditor" className="btn btn-secondary btn-lg">
                  Agent Auditor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function GuideCard({
  icon,
  title,
  description,
  steps,
  href,
  code
}: {
  icon: React.ReactNode
  title: string
  description: string
  steps: string[]
  href: string
  code: string
}) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <div style={{ color: 'var(--accent-brand)' }}>{icon}</div>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-sm)' }}>{description}</p>
      <ol style={{ margin: 0, paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {steps.map((step, i) => (
          <li key={i} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step}</li>
        ))}
      </ol>
      <code style={{
        display: 'block',
        background: 'var(--surface-subtle)',
        padding: 'var(--space-3)',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-secondary)',
        overflowX: 'auto'
      }}>
        {code}
      </code>
      <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-brand)', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 600, marginTop: 'auto' }}>
        View guide <ArrowRight size={14} />
      </Link>
    </div>
  )
}

function QuickStartCard({
  step,
  title,
  description,
  code
}: {
  step: string
  title: string
  description: string
  code: string
}) {
  return (
    <div
      style={{
        background: 'var(--surface-elevated)',
        border: '1px solid var(--border-default)',
        borderRadius: '18px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'var(--accent-brand)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-inverted)',
          fontSize: '0.75rem',
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {step}
        </div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6, fontSize: '0.9375rem' }}>{description}</p>
      <pre
        style={{
          background: 'var(--code-bg, #111827)',
          color: '#E2E8F0',
          padding: '16px',
          borderRadius: '12px',
          fontSize: '0.8125rem',
          lineHeight: 1.6,
          overflowX: 'auto',
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          margin: 0,
          flex: 1,
          whiteSpace: 'pre',
          WebkitOverflowScrolling: 'touch',
        }}
      ><code>{code.trim()}</code></pre>
    </div>
  )
}
