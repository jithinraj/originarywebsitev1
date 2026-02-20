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
                  { icon: <Tag size={18} />, label: 'Current version', value: 'v0.10.13' },
                  { icon: <GitBranch size={18} />, label: 'Wire format', value: 'peac-receipt/0.1 (frozen)' },
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
                  version: 'v0.10.13',
                  date: 'Feb 19, 2026',
                  items: [
                    '@peac/mcp-server: open-source MCP tool server with 5 tools (verify, inspect, decode, issue, bundle)',
                    'Capability-based access control with structured outputs',
                    'Unicode scanner CLI regression tests, audit allowlist hardening, path-safety portable hardening',
                  ],
                },
                {
                  version: 'v0.10.12',
                  date: 'Feb 16, 2026',
                  items: [
                    '@peac/capture-node: FileSpoolStore and FileDedupeIndex for durable Node.js capture',
                    'OpenClaw adapter: one-call activate() for Cloudflare Workers with generateSigningKey() and peac-keygen CLI',
                    'RFC 9421 proof capture profile with 5 conformance vectors',
                  ],
                },
                {
                  version: 'v0.10.11',
                  date: 'Feb 13, 2026',
                  items: [
                    '@peac/rails-stripe: fromCryptoPaymentIntent() for x402 crypto payments',
                    'Registry v0.3.0 with interaction extension and toolcall advisory registries',
                    '@noble/ed25519 v3 upgrade (signAsync/verifyAsync API)',
                    'Supply chain hardening: SECURITY.md, audit gate, lockfile drift detection',
                  ],
                },
                {
                  version: 'v0.10.10',
                  date: 'Feb 11, 2026',
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
