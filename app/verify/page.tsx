'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { FaqAccordion, FaqJsonLd } from '@/components/faq'
import { verifyFaqs } from '@/content/faqs'

function VerifyContent() {
  const searchParams = useSearchParams()
  const tokenFromUrl = searchParams.get('token')

  const [token, setToken] = useState(tokenFromUrl || '')
  const [verifying, setVerifying] = useState(false)
  const [result, setResult] = useState<{
    status: 'success' | 'error' | 'invalid' | null
    message: string
    details?: any
  }>({ status: null, message: '' })

  useEffect(() => {
    if (tokenFromUrl) {
      setToken(tokenFromUrl)
    }
  }, [tokenFromUrl])

  const handleVerify = async () => {
    if (!token.trim()) {
      setResult({
        status: 'invalid',
        message: 'Please enter a PEAC-Receipt token'
      })
      return
    }

    setVerifying(true)
    setResult({ status: null, message: '' })

    // Simulate verification (Demo mode)
    setTimeout(() => {
      try {
        // Parse JWT header to extract kid
        const parts = token.split('.')
        if (parts.length !== 3) {
          throw new Error('Invalid JWT format')
        }

        const header = JSON.parse(atob(parts[0]))

        setResult({
          status: 'success',
          message: 'Receipt verified successfully',
          details: {
            algorithm: header.alg || 'EdDSA',
            keyId: header.kid || '2025-09-key1',
            issuer: 'originary.xyz',
            resource: '/api/content',
            amount: '$0.10 USD (example)',
            timestamp: new Date().toISOString()
          }
        })
      } catch (error) {
        setResult({
          status: 'error',
          message: 'Invalid token format. Please provide a valid PEAC-Receipt JWT.'
        })
      }
      setVerifying(false)
    }, 1000)
  }

  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              DEMO MODE
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              Verify Receipt
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Paste a PEAC-Receipt token to verify its signature and view claims. This demo validates token format and structure.
            </p>

            {/* Input Card */}
            <div className="card" style={{ marginBottom: 'var(--space-6)', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2)'
              }}>
                PEAC-Receipt Token
              </label>
              <textarea
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDkta2V5MSIsInR5cCI6IkpXVCJ9..."
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: 'var(--space-3)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-mono)',
                  resize: 'vertical',
                  marginBottom: 'var(--space-4)'
                }}
              />

              <button
                onClick={handleVerify}
                disabled={verifying}
                className="btn btn-primary"
                style={{
                  opacity: verifying ? 0.6 : 1,
                  cursor: verifying ? 'not-allowed' : 'pointer'
                }}
              >
                {verifying ? 'Verifying...' : 'Verify Receipt'}
              </button>
            </div>

            {/* Result */}
            {result.status && (
              <div style={{
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid',
                borderColor:
                  result.status === 'success' ? 'var(--success)' :
                  result.status === 'error' ? 'var(--error)' :
                  'var(--warning)',
                background:
                  result.status === 'success' ? 'var(--accent-success-subtle)' :
                  result.status === 'error' ? 'var(--accent-error-subtle)' :
                  'var(--accent-warning-subtle)',
                marginBottom: 'var(--space-8)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  {result.status === 'success' && <CheckCircle2 size={24} color="var(--success)" />}
                  {result.status === 'error' && <XCircle size={24} color="var(--error)" />}
                  {result.status === 'invalid' && <AlertCircle size={24} color="var(--warning)" />}

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                      marginBottom: 'var(--space-2)',
                      color:
                        result.status === 'success' ? 'var(--success)' :
                        result.status === 'error' ? 'var(--error)' :
                        'var(--warning)'
                    }}>
                      {result.status === 'success' ? 'Verified' :
                       result.status === 'error' ? 'Invalid' :
                       'Warning'}
                    </h3>

                    <p style={{
                      color: 'var(--text-secondary)',
                      marginBottom: result.details ? 'var(--space-4)' : 0
                    }}>
                      {result.message}
                    </p>

                    {result.details && (
                      <div style={{
                        background: 'var(--surface-elevated)',
                        padding: 'var(--space-4)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        <div style={{ marginBottom: 'var(--space-2)' }}>
                          <strong>Algorithm:</strong> {result.details.algorithm}
                        </div>
                        <div style={{ marginBottom: 'var(--space-2)' }}>
                          <strong>Key ID:</strong> {result.details.keyId}
                        </div>
                        <div style={{ marginBottom: 'var(--space-2)' }}>
                          <strong>Issuer:</strong> {result.details.issuer}
                        </div>
                        <div style={{ marginBottom: 'var(--space-2)' }}>
                          <strong>Resource:</strong> {result.details.resource}
                        </div>
                        <div style={{ marginBottom: 'var(--space-2)' }}>
                          <strong>Amount:</strong> {result.details.amount}
                        </div>
                        <div>
                          <strong>Timestamp:</strong> {result.details.timestamp}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Info */}
            <div style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)'
            }}>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-3)',
                color: 'var(--text-primary)'
              }}>
                About Receipt Verification
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                This verification tool validates PEAC-Receipt tokens by checking JWT structure and signature. In production, verification includes:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Ed25519 signature verification using public keys</li>
                <li>Issuer domain validation</li>
                <li>Timestamp freshness checks</li>
                <li>Payment evidence validation</li>
                <li>Policy constraint verification</li>
              </ul>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
                Learn more in our <Link href="/docs/receipts" style={{ color: 'var(--accent-brand)', textDecoration: 'none', fontWeight: 600 }}>documentation</Link>.
              </p>
            </div>

            {/* FAQ Section */}
            <FaqAccordion items={verifyFaqs} title="Verification FAQ" />
          </div>
        </section>
      </main>
      <FaqJsonLd items={verifyFaqs} />
      <Footer />
    </div>
  )
}

function VerifySkeleton() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main role="main" aria-label="Verify PEAC-Receipt" style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {/* Real content for SSR/SEO */}
            <div style={{
              display: 'inline-flex',
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--accent-brand)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              DEMO MODE
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--text-primary)'
            }}>
              Verify Receipt
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              Paste a PEAC-Receipt token to verify its signature and view claims. This demo validates token format and structure.
            </p>

            {/* Input card skeleton */}
            <div className="card" style={{ marginBottom: 'var(--space-6)', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2)'
              }}>
                PEAC-Receipt Token
              </label>
              <div style={{
                width: '100%',
                height: '120px',
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-4)',
                animation: 'pulse 1.5s ease-in-out infinite'
              }} />
              <div style={{
                width: '140px',
                height: '44px',
                background: 'var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: '0.1s'
              }} />
            </div>

            {/* SSR-friendly info section */}
            <div style={{
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)'
            }}>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-3)',
                color: 'var(--text-primary)'
              }}>
                About Receipt Verification
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                This verification tool validates PEAC-Receipt tokens by checking JWT structure and signature. In production, verification includes:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Ed25519 signature verification using public keys</li>
                <li>Issuer domain validation</li>
                <li>Timestamp freshness checks</li>
                <li>Payment evidence validation</li>
                <li>Policy constraint verification</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<VerifySkeleton />}>
      <VerifyContent />
    </Suspense>
  )
}
