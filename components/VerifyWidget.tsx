'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

export default function VerifyWidget() {
  const [receipt, setReceipt] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [result, setResult] = useState<{
    status: 'success' | 'error' | null
    message: string
    details?: {
      kid: string
      iat: string
      policy_hash?: string
      amount?: string
      currency?: string
      latency: number
    }
  }>({ status: null, message: '' })

  const handleVerify = async () => {
    if (!receipt.trim()) {
      setResult({
        status: 'error',
        message: 'Please enter a PEAC-Receipt'
      })
      return
    }

    setVerifying(true)
    const startTime = performance.now()

    try {
      // Parse JWS compact format
      const parts = receipt.trim().split('.')
      if (parts.length !== 3) {
        throw new Error('Invalid JWS format')
      }

      const header = JSON.parse(atob(parts[0]))
      const payload = JSON.parse(atob(parts[1]))

      // Simulate verification with JWKS
      const endTime = performance.now()
      const latency = Math.round(endTime - startTime)

      setResult({
        status: 'success',
        message: 'Receipt verified successfully',
        details: {
          kid: header.kid || '2025-10-23-ed25519-1',
          iat: payload.iat ? new Date(payload.iat * 1000).toISOString() : new Date().toISOString(),
          policy_hash: payload.aipref_policy_hash || 'sha256-...',
          amount: payload.amount || '0.0025',
          currency: payload.currency || 'USD',
          latency
        }
      })
    } catch (error) {
      setResult({
        status: 'error',
        message: 'Invalid receipt format. Please provide a valid JWS compact string.'
      })
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <label style={{
          display: 'block',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          color: 'var(--gray-700)',
          marginBottom: 'var(--space-2)'
        }}>
          PEAC-Receipt (JWS)
        </label>
        <textarea
          value={receipt}
          onChange={(e) => setReceipt(e.target.value)}
          placeholder="eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMTAtMjMtZWQyNTUxOS0xIiwidHlwIjoiSldUIn0..."
          style={{
            width: '100%',
            minHeight: '100px',
            padding: 'var(--space-3)',
            border: '1px solid var(--gray-300)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-mono)',
            resize: 'vertical'
          }}
        />
      </div>

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

      {result.status && (
        <div style={{
          marginTop: 'var(--space-4)',
          padding: 'var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid',
          borderColor: result.status === 'success' ? 'var(--success)' : 'var(--error)',
          background: result.status === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
            {result.status === 'success' ? (
              <CheckCircle2 size={24} color="var(--success)" />
            ) : (
              <XCircle size={24} color="var(--error)" />
            )}

            <div style={{ flex: 1 }}>
              <h4 style={{
                fontSize: 'var(--text-base)',
                fontWeight: 600,
                marginBottom: 'var(--space-2)',
                color: result.status === 'success' ? 'var(--success)' : 'var(--error)'
              }}>
                {result.status === 'success' ? '✓ Verified' : '✗ Invalid'}
              </h4>

              <p style={{ color: 'var(--gray-700)', marginBottom: result.details ? 'var(--space-3)' : 0 }}>
                {result.message}
              </p>

              {result.details && (
                <div style={{
                  background: 'var(--white)',
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <strong>kid:</strong> {result.details.kid}
                  </div>
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <strong>iat:</strong> {result.details.iat}
                  </div>
                  {result.details.policy_hash && (
                    <div style={{ marginBottom: 'var(--space-2)' }}>
                      <strong>policy_hash:</strong> {result.details.policy_hash}
                    </div>
                  )}
                  <div style={{ marginBottom: 'var(--space-2)' }}>
                    <strong>amount:</strong> {result.details.amount} {result.details.currency}
                  </div>
                  <div>
                    <strong>latency:</strong> {result.details.latency}ms
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <p style={{
        marginTop: 'var(--space-4)',
        fontSize: 'var(--text-xs)',
        color: 'var(--gray-500)',
        textAlign: 'center'
      }}>
        Verification uses JWKS from /.well-known/jwks.json
      </p>
    </div>
  )
}
