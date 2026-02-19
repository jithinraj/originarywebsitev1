'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Activity, ExternalLink, Package, GitBranch } from 'lucide-react'

export default function StatusPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{
          background: 'linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%)',
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-20)'
        }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            Project Status
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            PEAC is an open-source, self-hosted protocol. There is no global uptime to report.
          </p>
        </div>

        {/* Current State */}
        <div style={{
          background: 'var(--surface-elevated)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          marginBottom: 'var(--space-8)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)'
          }}>
            <Activity size={24} style={{ color: 'var(--accent-brand)' }} />
            <h2 style={{
              margin: 0,
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}>
              Protocol State
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gap: 'var(--space-4)'
          }}>
            {[
              { label: 'Wire format', value: 'peac-receipt/0.1 (frozen)' },
              { label: 'Latest release', value: 'v0.10.13' },
              { label: 'Published packages', value: '22 on npm' },
              { label: 'License', value: 'Apache-2.0' },
              { label: 'Release cadence', value: '~weekly during v0.10.x' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-default)'
              }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>{item.label}</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)'
        }}>
          <a
            href="https://github.com/peacprotocol/peac/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
          >
            <GitBranch size={20} style={{ color: 'var(--accent-brand)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>GitHub Releases</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Tagged releases with changelogs</div>
            </div>
            <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-tertiary)' }} />
          </a>

          <a
            href="https://www.npmjs.com/org/peac"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
          >
            <Package size={20} style={{ color: 'var(--accent-secondary)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>npm Packages</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>22 packages at @peac/*</div>
            </div>
            <ExternalLink size={14} style={{ marginLeft: 'auto', color: 'var(--text-tertiary)' }} />
          </a>
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-tertiary)',
          marginTop: 'var(--space-8)'
        }}>
          For deployment-specific status, check with your hosting provider.
        </p>
      </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
