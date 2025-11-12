'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

const SAMPLE_RECEIPT = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsImtpZCI6InBlYWNfZGVtb18yMDI1In0.eyJpc3MiOiJvcmlnaW5hcnkueHl6Iiwic3ViIjoiZGVtby11c2VyLTEyMyIsImF1ZCI6ImRlbW8tY2xpZW50Iiwia2lkIjoicGVhY19kZW1vXzIwMjUiLCJzaWduZXIiOiJvcmlnaW5hcnkueHl6IiwiYW1vdW50IjowLjAxLCJjdXJyZW5jeSI6IlVTRCIsInJlc291cmNlIjoiaHR0cHM6Ly9vcmlnaW5hcnkueHl6L2RlbW8iLCJhY3Rpb24iOiJyZWFkIiwiZXhwIjoxNzY3MjI1NjAwLCJpYXQiOjE3MzU2MDMyMDB9.demo_signature_placeholder'

interface VerificationResult {
  ok: boolean
  fields?: {
    kid?: boolean
    signer?: boolean
    amount?: boolean
    exp?: boolean
    [key: string]: unknown
  }
  reason?: string
  decoded?: Record<string, unknown>
}

export default function VerifyReceiptDemo() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const pasteDemo = () => {
    setInput(SAMPLE_RECEIPT)
    setResult(null)
  }

  const verify = async () => {
    setIsVerifying(true)
    setResult(null)

    // Simulate verification delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))

    try {
      const parts = input.trim().split('.')
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format')
      }

      const [headerB64, payloadB64] = parts

      // Decode header and payload
      const header = JSON.parse(atob(headerB64))
      const payload = JSON.parse(atob(payloadB64))

      // Check required fields
      const checks = {
        kid: !!(header.kid || payload.kid),
        signer: !!(payload.signer || payload.iss),
        amount: typeof payload.amount === 'number',
        exp: !!payload.exp,
      }

      const allValid = Object.values(checks).every(Boolean)

      setResult({
        ok: allValid,
        fields: checks,
        decoded: { ...header, ...payload },
        reason: allValid ? undefined : 'Missing required claims'
      })
    } catch (error) {
      setResult({
        ok: false,
        reason: error instanceof Error ? error.message : 'Invalid receipt format'
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div
      className="rounded-2xl border p-4 md:p-6"
      style={{
        background: 'var(--white)',
        borderColor: 'var(--gray-200)'
      }}
    >
      <div className="flex gap-2 mb-3 flex-wrap">
        <button
          onClick={pasteDemo}
          className="btn btn-secondary"
          type="button"
        >
          Paste demo receipt
        </button>
        <button
          onClick={verify}
          className="btn btn-primary"
          disabled={!input.trim() || isVerifying}
          type="button"
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </button>
      </div>

      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full h-40 font-mono text-sm p-3 rounded-lg border"
        placeholder="Paste PEAC-Receipt (JWS format)..."
        style={{
          background: 'var(--gray-50)',
          borderColor: 'var(--gray-300)',
          color: 'var(--gray-900)',
          resize: 'vertical'
        }}
      />

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {result.ok ? (
              <div
                className="rounded-xl border p-4"
                style={{
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderColor: 'rgba(34, 197, 94, 0.2)'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle
                    size={20}
                    style={{ color: 'rgb(34, 197, 94)' }}
                  />
                  <p
                    className="font-semibold"
                    style={{ color: 'rgb(34, 197, 94)' }}
                  >
                    Receipt Verified
                  </p>
                </div>

                <div className="space-y-2 mb-3">
                  {result.fields && Object.entries(result.fields).map(([key, valid]) => (
                    <div key={key} className="flex items-center gap-2 text-sm">
                      {valid ? (
                        <CheckCircle size={16} style={{ color: 'rgb(34, 197, 94)' }} />
                      ) : (
                        <XCircle size={16} style={{ color: 'rgb(239, 68, 68)' }} />
                      )}
                      <span style={{ color: 'var(--gray-700)' }}>
                        {key}: {valid ? 'Present' : 'Missing'}
                      </span>
                    </div>
                  ))}
                </div>

                {result.decoded && (
                  <details className="mt-3">
                    <summary
                      className="cursor-pointer text-sm font-medium mb-2"
                      style={{ color: 'var(--gray-700)' }}
                    >
                      Show decoded claims
                    </summary>
                    <pre
                      className="overflow-auto text-xs p-3 rounded"
                      style={{
                        background: 'var(--white)',
                        border: '1px solid var(--gray-200)',
                        color: 'var(--gray-800)'
                      }}
                    >
                      {JSON.stringify(result.decoded, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border p-4"
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  borderColor: 'rgba(239, 68, 68, 0.2)'
                }}
              >
                <div className="flex items-center gap-2">
                  <XCircle size={20} style={{ color: 'rgb(239, 68, 68)' }} />
                  <p
                    className="font-semibold"
                    style={{ color: 'rgb(239, 68, 68)' }}
                  >
                    Verification Failed
                  </p>
                </div>
                <p className="text-sm mt-2" style={{ color: 'var(--gray-700)' }}>
                  {result.reason || 'Invalid receipt format'}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
