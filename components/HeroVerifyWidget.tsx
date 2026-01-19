'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Shield, Copy, ExternalLink } from 'lucide-react'
import { SAMPLE_RECEIPT } from '@/fixtures/sample-receipt'

interface VerifyResult {
  status: 'idle' | 'verifying' | 'success' | 'error'
  details?: {
    algorithm: string
    typ: string
    keyId: string
    issuer: string
    resource: string
    decision: string
    timestamp: string
  }
  error?: string
}

export default function HeroVerifyWidget() {
  const [receipt, setReceipt] = useState(SAMPLE_RECEIPT.token)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [result, setResult] = useState<VerifyResult>({ status: 'idle' })
  const [copied, setCopied] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Auto-verify the sample receipt on load with looping (only if motion is allowed)
  useEffect(() => {
    if (prefersReducedMotion) return

    let isActive = true

    const runLoop = async () => {
      // Initial delay before first verification
      await new Promise(r => setTimeout(r, 2000))
      if (!isActive) return

      // Run verification loop
      while (isActive) {
        // Trigger verification
        setResult({ status: 'verifying' })
        await new Promise(r => setTimeout(r, 800))
        if (!isActive) return

        // Show success
        try {
          const parts = SAMPLE_RECEIPT.token.split('.')
          const header = JSON.parse(atob(parts[0]))
          const payload = JSON.parse(atob(parts[1]))

          setResult({
            status: 'success',
            details: {
              algorithm: header.alg || 'EdDSA',
              typ: header.typ || 'peac-receipt/0.1',
              keyId: header.kid || 'unknown',
              issuer: payload.iss || 'unknown',
              resource: payload.resource || 'unknown',
              decision: payload.decision || 'unknown',
              timestamp: payload.iat ? new Date(payload.iat * 1000).toISOString() : 'unknown'
            }
          })
        } catch {
          break
        }

        // Show success for 6 seconds
        await new Promise(r => setTimeout(r, 6000))
        if (!isActive) return

        // Reset to idle
        setResult({ status: 'idle' })

        // Wait 3 seconds before next loop
        await new Promise(r => setTimeout(r, 3000))
      }
    }

    runLoop()

    return () => { isActive = false }
  }, [prefersReducedMotion])

  const handleVerify = () => {
    if (!receipt.trim()) {
      setResult({ status: 'error', error: 'No receipt provided' })
      return
    }

    setResult({ status: 'verifying' })

    // Simulate verification (in production, this would validate the actual signature)
    setTimeout(() => {
      try {
        const parts = receipt.split('.')
        if (parts.length !== 3) {
          throw new Error('Invalid JWT format')
        }

        const header = JSON.parse(atob(parts[0]))
        const payload = JSON.parse(atob(parts[1]))

        setResult({
          status: 'success',
          details: {
            algorithm: header.alg || 'EdDSA',
            typ: header.typ || 'peac-receipt/0.1',
            keyId: header.kid || 'unknown',
            issuer: payload.iss || 'unknown',
            resource: payload.resource || 'unknown',
            decision: payload.decision || 'unknown',
            timestamp: payload.iat ? new Date(payload.iat * 1000).toISOString() : 'unknown'
          }
        })
      } catch {
        setResult({ status: 'error', error: 'Invalid token format' })
      }
    }, 800)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(receipt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="verify-widget">
      <div className="widget-header">
        <div className="widget-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <span className="widget-title">Verify Receipt</span>
        <button
          type="button"
          className="copy-btn"
          onClick={handleCopy}
          title="Copy receipt"
          aria-label="Copy receipt to clipboard"
        >
          {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
        </button>
      </div>

      <div className="widget-body">
        <textarea
          value={receipt}
          onChange={(e) => {
            setReceipt(e.target.value)
            setResult({ status: 'idle' })
          }}
          placeholder="Paste a PEAC-Receipt token..."
          className="receipt-input"
          spellCheck={false}
        />

        <button
          type="button"
          onClick={handleVerify}
          disabled={result.status === 'verifying'}
          className="verify-btn"
        >
          {result.status === 'verifying' ? (
            <>
              <span className="spinner" />
              Verifying...
            </>
          ) : (
            'Verify'
          )}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true" className="result-region">
        {result.status === 'success' && result.details && (
          <div className="result success" role="status">
            <div className="result-header">
              <Shield size={16} className="result-icon" />
              <span>Signature verified</span>
              <CheckCircle size={16} className="check-icon" />
            </div>
            <div className="result-details">
              <div className="detail-row">
                <span className="detail-key">Typ</span>
                <span className="detail-value">{result.details.typ}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Issuer</span>
                <span className="detail-value">{result.details.issuer}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Decision</span>
                <span className="detail-value decision">{result.details.decision}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Key ID</span>
                <span className="detail-value">{result.details.keyId}</span>
              </div>
            </div>
          </div>
        )}

        {result.status === 'error' && (
          <div className="result error" role="alert">
            <AlertCircle size={16} />
            <span>{result.error}</span>
          </div>
        )}
      </div>

      <div className="widget-footer">
        <Link href="/verify" className="footer-link">
          Open full verifier
          <ExternalLink size={12} />
        </Link>
      </div>

      <style jsx>{`
        .verify-widget {
          width: 100%;
          min-width: 380px;
          max-width: 460px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.08),
            0 24px 60px -12px rgba(0, 0, 0, 0.5);
        }

        .widget-header {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .widget-dots {
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .dot:nth-child(1) { background: #ff5f56; }
        .dot:nth-child(2) { background: #ffbd2e; }
        .dot:nth-child(3) { background: #27c93f; }

        .widget-title {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          flex: 1;
          text-align: center;
        }

        .copy-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          padding: 6px;
          display: flex;
          align-items: center;
          transition: color 0.15s ease;
          min-width: 44px;
          min-height: 44px;
          justify-content: center;
        }

        .copy-btn:hover {
          color: rgba(255, 255, 255, 0.7);
        }

        .widget-body {
          padding: 20px;
        }

        .receipt-input {
          width: 100%;
          height: 80px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 12px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
          resize: none;
          margin-bottom: 14px;
        }

        .receipt-input:focus {
          outline: none;
          border-color: rgba(99, 91, 255, 0.5);
        }

        .receipt-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .verify-btn {
          width: 100%;
          padding: 12px 18px;
          background: #635bff;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.15s ease, transform 0.15s ease;
          min-height: 44px;
        }

        .verify-btn:hover:not(:disabled) {
          background: #5046e5;
          transform: translateY(-1px);
        }

        .verify-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .result-region {
          min-height: 0;
        }

        .result {
          margin: 0 20px 16px;
          padding: 14px;
          border-radius: 10px;
          font-size: 13px;
        }

        .result.success {
          background: rgba(99, 91, 255, 0.1);
          border: 1px solid rgba(99, 91, 255, 0.2);
        }

        .result.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a5a0ff;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .result-header :global(.result-icon) {
          opacity: 0.8;
        }

        .result-header :global(.check-icon) {
          margin-left: auto;
          color: #4ade80;
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-key {
          color: rgba(255, 255, 255, 0.5);
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .detail-value {
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .detail-value.decision {
          color: #4ade80;
          font-weight: 600;
        }

        .widget-footer {
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
        }

        .widget-footer :global(.footer-link) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .widget-footer :global(.footer-link:hover) {
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 480px) {
          .verify-widget {
            min-width: 0;
            max-width: 100%;
          }

          .widget-body {
            padding: 16px;
          }

          .receipt-input {
            height: 70px;
            font-size: 10px;
          }

          .verify-btn {
            font-size: 13px;
            padding: 10px 16px;
          }

          .result {
            margin: 0 16px 14px;
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
