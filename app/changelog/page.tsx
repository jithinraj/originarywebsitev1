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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
