'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ExternalLink, GitBranch, Package, Tag } from 'lucide-react'

export default function ChangelogPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-4)', lineHeight: 1.2 }}>
              Release History
            </h1>

            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-10)' }}>
              Release notes are published on GitHub alongside each tagged release.
            </p>

            <a
              href="https://github.com/peacprotocol/peac/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', gap: 'var(--space-2)', alignItems: 'center', justifyContent: 'center' }}
            >
              <GitBranch size={18} />
              <span>View releases on GitHub</span>
              <ExternalLink size={16} />
            </a>

            <div
              style={{
                marginTop: 'var(--space-12)',
                textAlign: 'left',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
              }}
            >
              <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                {[
                  { icon: <Tag size={18} />, label: 'Stable version', value: 'v0.12.11' },
                  { icon: <GitBranch size={18} />, label: 'Current wire format', value: 'interaction-record+jwt (stable)' },
                  { icon: <GitBranch size={18} />, label: 'Legacy wire format', value: 'peac-receipt/0.1 (frozen)' },
                  { icon: <Package size={18} />, label: 'License', value: 'Apache-2.0' },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 'var(--space-4)',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--surface-subtle)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-brand)' }}>{row.icon}</span>
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{row.label}</span>
                    </div>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                <a
                  href="https://www.npmjs.com/org/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-brand)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}
                >
                  View packages on npm <ExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: 'var(--space-12)',
                textAlign: 'left',
                maxWidth: '760px',
                margin: 'var(--space-12) auto 0 auto',
              }}
            >
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-8)', color: 'var(--text-primary)' }}>
                Recent Highlights
              </h2>

              {[
                {
                  version: 'v0.12.11',
                  date: 'Apr 15, 2026',
                  items: [
                    'Commerce finality guard: assertExplicitFinality, MapperBoundaryError, commerce.finality_synthesis_blocked',
                    'ACP delegated-payment profile and MPP payment-attempt / settlement mappers',
                    'x402 settlement proof extractor with dual-header precedence',
                    'Go middleware production hardening (panic recovery, bounded rate limiter, Logger/Metrics)',
                    'Cursor, Codex, Claude Code, VS Code plugin packs with pinned MCP server',
                    'peac doctor CLI, offline verify dashboard, Copilot enterprise compatibility checker',
                    'Conformance Section 26 commerce fixtures (20 vectors)',
                    '37 packages, 7,392 tests, 224 conformance IDs, 105 build targets',
                  ],
                },
                {
                  version: 'v0.12.10',
                  date: 'Apr 14, 2026',
                  items: [
                    'Managed runtime evidence floor: adapter-runtime-governance with AGT mapper',
                    'Runtime-governance profile and coverage matrix',
                    'Conformance Section 27 (RTGOV-001 through RTGOV-007)',
                    'Benchmark SLO publication with regression-based gate',
                    '37 packages, 7,392 tests, 224 conformance IDs',
                  ],
                },
                {
                  version: 'v0.12.8',
                  date: 'Apr 10, 2026',
                  items: [
                    'Go 1.26 SDK with Wire 0.2 parity (sign, verify, policy binding)',
                    'Python API-first proof (FastAPI middleware, evidence endpoints)',
                    'Hosted Issue alpha (BYO-key, provisional, disabled by default)',
                    'Managed Agents session evidence summary demo',
                    'Cross-language conformance vectors and CI parity',
                    '35 packages, 7,241 tests, 219 conformance requirement IDs, 97 targets',
                  ],
                },
                {
                  version: 'v0.12.7',
                  date: '',
                  items: [
                    'x402 V2 complete adapter (Layers A+B+C)',
                    'DID resolution adapter (did:key, did:web, caching)',
                    'A2A OAuth PKCE with Device Code types',
                    'gRPC carrier adapter with real SHA-256 receipt_ref',
                    'receipt_url resolution middleware with semaphore',
                    'in-toto v1.0 and SLSA v1.2 provenance mappings (2 new packages)',
                    'ERC-8128 conformance fixtures',
                    '4 spec profile docs, 27 conformance requirement IDs',
                    '35 packages, 7,241 tests, 219 conformance IDs, 95 targets',
                  ],
                },
                {
                  version: 'v0.12.5',
                  date: '',
                  items: [
                    'Per-rail conformance parity: 40 execution-backed fixtures, 4 manifests',
                    'Cross-rail settlement equivalence and asymmetric safety invariant',
                    'AmountMinorStringSchema and isValidAmountMinor()',
                    'Commerce integration matrix',
                    '59 package READMEs with kernel template',
                    'Security: path-to-regexp >=8.4.0, handlebars audit allowlist',
                    '29 packages, 6,915 tests, 92 targets',
                  ],
                },
                {
                  version: 'v0.12.4',
                  date: '',
                  items: [
                    'Commerce evidence across paymentauth, ACP, x402, and Stripe SPT',
                    'New package: @peac/mappings-paymentauth',
                    'x402 v2 dual-header read with upstream artifact separation',
                    'ACP session lifecycle evidence with explicit payment state',
                    'Experimental commerce bundle (peac.commerce-bundle/0.1-experimental)',
                    '29 packages, 6,664 tests, 361 conformance requirements',
                  ],
                },
                {
                  version: 'v0.12.3',
                  date: '',
                  items: [
                    'A2A v1.0.0 dual-version transition normalizer',
                    'MCP Registry published',
                    'Evaluator quickstarts and integration kits',
                    'AIPREF version constants exported',
                  ],
                },
                {
                  version: 'v0.12.2',
                  date: '',
                  items: [
                    '12 typed extension groups with schema validation',
                    '10 type-to-extension mappings with strict/interop enforcement',
                    '9 pillar usage profiles as document overlays',
                    'Commerce event field (6-value closed enum)',
                    'Codegen pipeline for registries',
                  ],
                },
                {
                  version: 'v0.12.1',
                  date: '',
                  items: [
                    'x402 adapter with four-layer architecture',
                    '5-layer verification API with opt-in crypto',
                    'Security dependency updates (undici, hono)',
                    'README rewrite',
                  ],
                },
                {
                  version: 'v0.12.0',
                  date: '',
                  items: [
                    'Interaction Record format stable release (interaction-record+jwt)',
                    '28 packages published on npm',
                    'CodeQL security-extended analysis',
                  ],
                },
                {
                  version: 'v0.12.0-preview.2',
                  date: '',
                  items: [
                    'Release manifest and coherence gate',
                    'Wire 0.1 isolation',
                    'EAT passport adapter',
                    'Quality gates hardening',
                  ],
                },
                {
                  version: 'v0.12.0-preview.1',
                  date: '',
                  items: [
                    'Wire 0.2 format (interaction-record+jwt)',
                    '2-kind architecture (evidence and challenge)',
                    'JOSE hardening (reject embedded keys, crit, zip)',
                    'Policy binding with JCS (RFC 8785) and SHA-256',
                  ],
                },
                {
                  version: 'v0.11.3',
                  date: '',
                  items: [
                    'Zero Trust Profile Pack: 7 sub-profiles as document overlays',
                    'Agent Identity: ActorBinding with 8 proof types and MVIS',
                    'Key rotation lifecycle: 5-state FSM with 30-day overlap',
                    'Reconcile CLI: peac reconcile for receipt reconciliation',
                    'Treaty extension: 4-level commitment_class',
                  ],
                },
                {
                  version: 'v0.11.2',
                  date: '',
                  items: [
                    'Error recovery next_action hints: 7-value closed vocabulary',
                    'Content Signals observation model: 3-state allow/deny/unspecified',
                    'Evidence Carrier receipt_url locator hint (HTTPS-only)',
                    'Plugin Pack distribution contract for agent surfaces',
                    'MCP Registry JSON Schema validation for distribution',
                  ],
                },
                {
                  version: 'v0.11.1',
                  date: '',
                  items: [
                    'Evidence Carrier Contract: PeacEvidenceCarrier + CarrierAdapter types',
                    'Transport size limits: MCP/A2A/UCP 64 KB, ACP/x402/HTTP 8 KB',
                    'receipt_ref = sha256(receipt_jws) with extraction verification',
                    '3-step discovery: Agent Card, well-known, header probe',
                  ],
                },
                {
                  version: 'v0.11.0',
                  date: '',
                  items: [
                    'Zod 4 migration (^4.3.6) across all packages',
                    'MCP Streamable HTTP transport with session isolation (CVE-2026-25536 defense)',
                    'Kernel constraint enforcement pipeline: fail-closed in issue() and verify()',
                    'Integrator kit with conformance harness for third-party implementations',
                  ],
                },
                {
                  version: 'v0.10.14',
                  date: '',
                  items: [
                    'Conformance fixture versioning with schema_version field',
                    'Kernel constraints specification (KERNEL-CONSTRAINTS.md)',
                    'Editorial hygiene sweep and Zod 4 preparation',
                  ],
                },
                {
                  version: 'v0.10.13',
                  date: '',
                  items: [
                    '@peac/mcp-server: open-source MCP tool server with 5 tools (verify, inspect, decode, issue, bundle)',
                    'Capability-based access control with structured outputs',
                    'Unicode scanner CLI regression tests, audit allowlist hardening, path-safety portable hardening',
                  ],
                },
                {
                  version: 'v0.10.12',
                  date: '',
                  items: [
                    '@peac/capture-node: FileSpoolStore and FileDedupeIndex for durable Node.js capture',
                    'OpenClaw adapter: one-call activate() for Cloudflare Workers with generateSigningKey() and peac-keygen CLI',
                    'RFC 9421 proof capture profile with 5 conformance vectors',
                  ],
                },
                {
                  version: 'v0.10.11',
                  date: '',
                  items: [
                    '@peac/rails-stripe: fromCryptoPaymentIntent() for x402 crypto payments',
                    'Registry v0.3.0 with interaction extension and toolcall advisory registries',
                    '@noble/ed25519 v3 upgrade (signAsync/verifyAsync API)',
                    'Supply chain hardening: SECURITY.md, audit gate, lockfile drift detection',
                  ],
                },
                {
                  version: 'v0.10.10',
                  date: '',
                  items: [
                    'Dev toolchain improvements',
                    'Build system optimization',
                  ],
                },
              ].map((release) => (
                <div
                  key={release.version}
                  style={{
                    marginBottom: 'var(--space-8)',
                    padding: 'var(--space-6)',
                    background: 'var(--surface-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <Tag size={16} style={{ color: 'var(--accent-brand)' }} />
                    <span style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-primary)' }}>{release.version}</span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{release.date}</span>
                  </div>
                  <ul style={{ paddingLeft: 'var(--space-6)', color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.8, margin: 0 }}>
                    {release.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
