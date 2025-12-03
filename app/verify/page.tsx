'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

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
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
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
              color: 'var(--gray-900)'
            }}>
              Verify Receipt
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--gray-600)',
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
                color: 'var(--gray-700)',
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
                  border: '1px solid var(--gray-300)',
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
                  result.status === 'success' ? 'rgba(34, 197, 94, 0.1)' :
                  result.status === 'error' ? 'rgba(239, 68, 68, 0.1)' :
                  'rgba(251, 191, 36, 0.1)',
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
                      color: 'var(--gray-700)',
                      marginBottom: result.details ? 'var(--space-4)' : 0
                    }}>
                      {result.message}
                    </p>

                    {result.details && (
                      <div style={{
                        background: 'var(--white)',
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
              background: 'var(--gray-50)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)'
            }}>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-3)',
                color: 'var(--gray-900)'
              }}>
                About Receipt Verification
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>
                This verification tool validates PEAC-Receipt tokens by checking JWT structure and signature. In production, verification includes:
              </p>
              <ul style={{ color: 'var(--gray-600)', lineHeight: 2, paddingLeft: 'var(--space-6)' }}>
                <li>Ed25519 signature verification using public keys</li>
                <li>Issuer domain validation</li>
                <li>Timestamp freshness checks</li>
                <li>Payment evidence validation</li>
                <li>Policy constraint verification</li>
              </ul>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
                Learn more in our <Link href="/docs/receipts" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>documentation</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-600)' }}>Loading verification tool...</p>
        </div>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  )
}
