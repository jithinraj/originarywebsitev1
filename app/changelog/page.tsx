'use client'

import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ExternalLink, Tag, Lock, Scale } from 'lucide-react'

export default function ChangelogPage() {
  const facts = [
    {
      icon: <Tag size={20} style={{ color: 'var(--accent-brand)' }} />,
      label: 'Current version',
      value: 'v0.10.9',
    },
    {
      icon: <Lock size={20} style={{ color: 'var(--accent-brand)' }} />,
      label: 'Wire format',
      value: 'peac-receipt/0.1 (frozen)',
    },
    {
      icon: <Scale size={20} style={{ color: 'var(--accent-brand)' }} />,
      label: 'License',
      value: 'Apache-2.0',
    },
  ]

  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section
          className="section"
          style={{
            background: 'var(--gradient-mesh)',
            paddingTop: 'var(--space-24)',
            paddingBottom: 'var(--space-24)',
          }}
        >
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              <h1
                style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                  lineHeight: 1.2,
                }}
              >
                Release History
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)',
                }}
              >
                Release notes are published on GitHub alongside each tagged
                release.
              </p>

              <a
                href="https://github.com/peacprotocol/peac/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                View releases on GitHub
                <ExternalLink size={16} />
              </a>

              {/* Facts */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-12)',
                  flexWrap: 'wrap',
                }}
              >
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-6)',
                      background: 'var(--surface-elevated)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-lg)',
                      minWidth: '180px',
                    }}
                  >
                    {fact.icon}
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {fact.label}
                    </span>
                    <span
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Secondary npm link */}
              <div style={{ marginTop: 'var(--space-8)' }}>
                <a
                  href="https://www.npmjs.com/org/peac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                >
                  View packages on npm
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
