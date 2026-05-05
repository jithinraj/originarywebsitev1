import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Activity, ArrowRight, Bot, CreditCard, GitBranch, PackageCheck, Plug, Shield, ShieldCheck } from 'lucide-react'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Start here | Originary',
  description: 'Choose the fastest path to your first PEAC v0.14.0 signed record for APIs, MCP servers, paymentauth/MPP, ACP, OpenClaw, managed agents, and verification tools.',
  keywords: 'Originary SDK, PEAC Protocol, verifiable interaction records, MCP server, A2A integration, HTTP 402, paymentauth, MPP, ACP, OpenClaw, managed agents, developer tools',
  authors: [{ name: 'Originary' }],
  alternates: {
    canonical: '/developers'
  },
  openGraph: {
    type: 'website',
    title: 'Start here | Originary',
    description: 'Choose the fastest path to your first PEAC v0.14.0 signed record for APIs, MCP servers, paymentauth/MPP, ACP, OpenClaw, managed agents, and verification tools.',
    url: '/developers',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start here | Originary',
    description: 'Choose the fastest path to your first PEAC v0.14.0 signed record for APIs, MCP servers, paymentauth/MPP, ACP, OpenClaw, managed agents, and verification tools.',
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
                Start from the workflow you actually run. Most teams begin by verifying one record, adding records to one API or MCP response, or exporting records from a gateway, runtime, or payment flow.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Guides */}
        <section className="section" id="guides" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <div className="card" style={{ maxWidth: '720px', margin: '0 auto var(--space-8) auto', padding: 'var(--space-6)', textAlign: 'left' }}>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>Most developers should start with one of three paths</h2>
                <ol style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <li>Verify an existing signed record.</li>
                  <li>Add signed records to one API or MCP response.</li>
                  <li>Export records from a gateway, runtime, or payment flow.</li>
                </ol>
              </div>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>Advanced integration paths</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Each path maps to a v0.14.0 package surface in the open PEAC repo.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: 'var(--space-6)', maxWidth: '960px', margin: '0 auto' }}>
              <GuideCard
                icon={<Shield size={24} />}
                title="I need to verify a signed record"
                description="Validate an interaction record signature offline using the issuer's public key. No network call required."
                steps={['Extract the signed record from the PEAC-Receipt header or body carrier', 'Fetch the issuer JWKS (once)', 'Call verifyLocal() with the public key']}
                href="/verify"
                code={`import { verifyLocal } from '@peac/protocol'`}
              />
              <GuideCard
                icon={<Plug size={24} />}
                title="I have an HTTP API that agents call"
                description="Publish a peac.txt policy, add middleware, and return verifiable interaction records in PEAC-Receipt headers."
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
                description="Attach verifiable interaction records to A2A v1.0.0 metadata. Verify authorization and policy compliance at each hop."
                steps={['Issue records with @peac/protocol', 'Attach via A2A metadata carrier', 'Verify at receiving agent']}
                href="/integrations/a2a"
                code="npm install @peac/protocol"
              />
              <GuideCard
                icon={<CreditCard size={24} />}
                title="I need paymentauth or MPP evidence"
                description="Map paymentauth challenges, credentials, receipts, and MPP payment-attempt or settlement events into PEAC evidence."
                steps={['Parse paymentauth or MPP event data', 'Create PEAC payment evidence', 'Keep payment receipts and PEAC records separate']}
                href="/integrations"
                code="npm install @peac/mappings-paymentauth"
              />
              <GuideCard
                icon={<GitBranch size={24} />}
                title="I need ACP or x402 commerce records"
                description="Use ACP session evidence or x402 v1/v2 payment evidence without replacing those protocols' native state machines."
                steps={['Map ACP lifecycle or x402 payment response', 'Preserve native protocol fields', 'Emit a PEAC-Receipt for verification']}
                href="/integrations/acp"
                code="npm install @peac/mappings-acp @peac/adapter-x402"
              />
              <GuideCard
                icon={<ShieldCheck size={24} />}
                title="I use OpenClaw or managed agents"
                description="Capture tool calls, runtime events, permissions, and outcomes as signed records for later inspection."
                steps={['Install the runtime adapter', 'Hash inputs and outputs by default', 'Emit records asynchronously or through your control plane']}
                href="/integrations"
                code="npm install @peac/adapter-openclaw @peac/adapter-managed-agents"
              />
              <GuideCard
                icon={<PackageCheck size={24} />}
                title="I need provenance or attestations"
                description="Connect PEAC records to in-toto and SLSA-style supply-chain evidence while keeping your existing build system."
                steps={['Capture the interaction or release event', 'Map it into provenance evidence', 'Export or verify through your audit pipeline']}
                href="/integrations"
                code="npm install @peac/mappings-intoto @peac/mappings-slsa"
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

            <div
              className="grid"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 'var(--space-8)',
                alignItems: 'stretch',
              }}
            >
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

        {/* v0.14.0 package surface */}
        <section className="section" style={{ background: 'var(--surface-subtle)' }}>
          <div className="container">
            <div style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              background: 'var(--surface-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <Activity size={24} style={{ color: 'var(--accent-brand)', flexShrink: 0 }} />
                <div>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                    v0.14.0 package surface
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Use these package groups when choosing where to start. The current release publishes {FACTS.publishedPackageCount} packages and keeps Wire 0.2 as the stable record format.
                  </p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { label: 'Core', items: ['@peac/protocol', '@peac/crypto', '@peac/schema', '@peac/kernel', '@peac/policy-kit'] },
                  { label: 'Carriers', items: ['@peac/mcp-server', '@peac/mappings-mcp', '@peac/mappings-a2a', '@peac/middleware-express'] },
                  { label: 'Commerce', items: ['@peac/adapter-x402', '@peac/mappings-paymentauth', 'MPP mappers', '@peac/mappings-acp', '@peac/pay402'] },
                  { label: 'Runtimes and audit', items: ['@peac/adapter-openclaw', '@peac/adapter-managed-agents', '@peac/adapter-runtime-governance', '@peac/mappings-intoto', '@peac/mappings-slsa'] },
                ].map((group) => (
                  <div key={group.label} style={{
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    background: 'var(--surface-subtle)',
                  }}>
                    <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>{group.label}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 'var(--space-2)' }}>
                      {group.items.map((item) => (
                        <li key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', overflowWrap: 'anywhere' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
                Originary Verify offers hosted verification, managed keys, and enterprise record exports. Commercial support is available for teams deploying at scale.
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
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', minWidth: 0 }}>
        <div style={{ color: 'var(--accent-brand)', flex: '0 0 auto' }}>{icon}</div>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, lineHeight: 1.2 }}>{title}</h3>
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
        overflowWrap: 'anywhere',
        whiteSpace: 'pre-wrap',
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
        padding: 'clamp(18px, 3vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', minWidth: 0 }}>
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
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>{title}</h3>
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
          overflowX: 'hidden',
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          margin: 0,
          flex: 1,
          width: '100%',
          maxWidth: '100%',
          minWidth: 0,
          boxSizing: 'border-box',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'anywhere',
          WebkitOverflowScrolling: 'touch',
        }}
      ><code style={{ display: 'block', whiteSpace: 'inherit', overflowWrap: 'inherit' }}>{code.trim()}</code></pre>
    </div>
  )
}
