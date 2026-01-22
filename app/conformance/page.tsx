import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, TestTube, CheckCircle, Layers, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conformance | Originary',
  description: 'PEAC protocol conformance testing. Test vectors, validators, and compatibility levels for implementations.',
  alternates: {
    canonical: '/conformance'
  },
  openGraph: {
    title: 'Conformance | Originary',
    description: 'PEAC protocol conformance testing. Test vectors, validators, and compatibility levels for implementations.',
    url: '/conformance',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  robots: 'index,follow',
}

export default function ConformancePage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--space-6)' }}>

          <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-5)',
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--accent-brand)'
            }}>
              <TestTube size={16} />
              <span>CONFORMANCE</span>
              <span style={{
                background: 'var(--accent-brand)',
                color: 'white',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                marginLeft: 'var(--space-2)'
              }}>Preview</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              Conformance testing
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
              lineHeight: 1.7
            }}>
              Ensure your PEAC implementation behaves correctly.
              Test vectors and validators for consistent interoperability.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-16)'
          }}>
            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-brand-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <TestTube size={24} style={{ color: 'var(--accent-brand)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                    Test Vectors
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                    Reference inputs and expected outputs for core protocol operations.
                    Receipt generation, policy parsing, and verification flows.
                  </p>

                  {/* Command block */}
                  <div style={{
                    background: 'var(--text-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-4)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--border-default)',
                    overflowX: 'auto'
                  }}>
                    <code>pnpm test:conformance</code>
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                      Receipt signing
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                      Policy parsing
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--success)' }} />
                      Verification
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-secondary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Layers size={24} style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                    Compatibility Levels
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                    Three levels of conformance based on implementation scope.
                    Choose the level that matches your integration needs.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                      <strong>Core:</strong> Receipt verification only
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                      <strong>Standard:</strong> Core + policy discovery
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                      <strong>Full:</strong> Standard + receipt issuance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--accent-tertiary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={24} style={{ color: 'var(--brand-accent)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                    Self-Certification
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Run the test suite against your implementation.
                    Passing implementations can display the PEAC conformance badge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Registry Note */}
          <div className="card" style={{
            padding: 'var(--space-8)',
            border: '2px solid var(--accent-brand)',
            borderRadius: 'var(--radius-2xl)',
            background: 'linear-gradient(135deg, var(--accent-brand-faint) 0%, var(--accent-secondary-faint) 100%)',
            marginBottom: 'var(--space-8)'
          }}>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Building a conformant implementation?
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              We welcome independent implementations of the PEAC protocol. The conformance test suite ensures
              your implementation behaves consistently with the specification and can interoperate with other
              PEAC-conformant systems.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 'var(--text-sm)' }}>
              Multiple implementations strengthen the protocol's neutrality and ensure it remains truly open
              and adapter-friendly. If you're building an implementation, we'd love to hear from you.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--surface-subtle)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-20)'
          }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Run the test suite
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '400px', margin: '0 auto var(--space-6)' }}>
              Access test vectors and the validation tool on GitHub.
            </p>
            <Link
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
            >
              <span>View test suite</span>
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
