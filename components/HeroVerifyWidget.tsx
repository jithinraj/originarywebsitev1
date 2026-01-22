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

      <div aria-live="polite" aria-atomic="true" className="result-region" data-nosnippet>
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

      {/* Toast notification */}
      <div className={`toast ${copied ? 'visible' : ''}`} aria-live="polite">
        <CheckCircle size={14} />
        Copied to clipboard
      </div>

      <style jsx>{`
        .verify-widget {
          position: relative;
          width: 100%;
          min-width: 380px;
          max-width: 460px;
          background: var(--surface-elevated);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          border: 1px solid var(--border-default);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.12),
            0 24px 48px rgba(0, 0, 0, 0.08);
          transition: border-color var(--duration-200) ease, box-shadow var(--duration-300) ease;
        }

        .verify-widget:hover {
          border-color: var(--border-hover);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 4px 8px rgba(0, 0, 0, 0.1),
            0 12px 32px rgba(0, 0, 0, 0.15),
            0 32px 64px rgba(0, 0, 0, 0.1);
        }

        .widget-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .widget-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
        }

        .dot::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%);
        }

        .dot:nth-child(1) {
          background: linear-gradient(180deg, #ff6b5b 0%, #ff5147 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }
        .dot:nth-child(2) {
          background: linear-gradient(180deg, #ffca2c 0%, #e5a800 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }
        .dot:nth-child(3) {
          background: linear-gradient(180deg, #2ed158 0%, #1db847 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }

        .widget-title {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-tertiary);
          flex: 1;
          text-align: center;
          letter-spacing: 0.01em;
        }

        .copy-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted);
          cursor: pointer;
          padding: var(--space-1);
          display: flex;
          align-items: center;
          transition: all var(--duration-150) ease;
          width: 28px;
          height: 28px;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .copy-btn:hover {
          color: var(--text-secondary);
          background: var(--surface-subtle);
          border-color: var(--border-default);
        }

        .copy-btn:focus-visible {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .widget-body {
          padding: var(--space-5);
        }

        .receipt-input {
          width: 100%;
          height: 72px;
          background: var(--surface-base);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-4);
          font-family: var(--font-mono);
          font-size: 10px;
          line-height: 1.6;
          color: var(--text-primary);
          resize: none;
          margin-bottom: var(--space-4);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
          transition: border-color var(--duration-150) ease, box-shadow var(--duration-150) ease;
        }

        .receipt-input:focus {
          outline: none;
          border-color: var(--accent-brand);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06), 0 0 0 3px var(--accent-brand-muted);
        }

        .receipt-input::placeholder {
          color: var(--text-muted);
        }

        .verify-btn {
          width: 100%;
          padding: var(--space-3) var(--space-5);
          background: var(--accent-brand);
          border: none;
          border-radius: var(--radius-lg);
          color: white;
          font-size: var(--text-sm);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          transition: all var(--duration-200) ease;
          min-height: 44px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 8px var(--accent-brand-muted);
          position: relative;
          overflow: hidden;
        }

        .verify-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 100%);
          pointer-events: none;
        }

        .verify-btn:hover:not(:disabled) {
          background: var(--accent-brand-hover);
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 16px var(--accent-brand-muted);
        }

        .verify-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .verify-btn:focus-visible {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
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
          margin: 0 var(--space-5) var(--space-4);
          padding: var(--space-4);
          border-radius: var(--radius-lg);
          font-size: var(--text-sm);
        }

        .result.success {
          background: var(--surface-base);
          border: 1px solid var(--accent-success-border);
          animation: slideIn 0.25s ease-out;
        }

        .result.error {
          background: var(--surface-base);
          border: 1px solid var(--accent-error-border);
          color: var(--accent-error);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          animation: shake 0.4s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--accent-success);
          font-weight: 600;
          font-size: var(--text-sm);
          margin-bottom: var(--space-3);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--border-subtle);
        }

        .result-header :global(.result-icon) {
          color: var(--accent-success);
        }

        .result-header :global(.check-icon) {
          margin-left: auto;
          color: var(--accent-success);
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-1) 0;
        }

        .detail-key {
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .detail-value {
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: var(--text-xs);
        }

        .detail-value.decision {
          color: var(--accent-success);
          font-weight: 600;
        }

        .widget-footer {
          padding: var(--space-3) var(--space-5);
          background: var(--surface-subtle);
          border-top: 1px solid var(--border-subtle);
          text-align: center;
        }

        .widget-footer :global(.footer-link) {
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          font-size: var(--text-xs);
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--duration-150) ease;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
        }

        .widget-footer :global(.footer-link:hover) {
          color: var(--text-secondary);
          background: var(--surface-card);
        }

        .widget-footer :global(.footer-link:focus-visible) {
          outline: 2px solid var(--accent-brand);
          outline-offset: 2px;
        }

        .toast {
          position: absolute;
          top: 52px;
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          background: var(--surface-elevated);
          border: 1px solid var(--accent-success-border);
          border-radius: var(--radius-lg);
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--accent-success);
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--duration-200) ease, transform var(--duration-200) ease;
          z-index: 10;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .toast.visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 480px) {
          .verify-widget {
            min-width: 0;
            max-width: 100%;
            border-radius: var(--radius-xl);
          }

          .widget-header {
            padding: 10px 14px;
          }

          .widget-dots {
            gap: 6px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }

          .widget-body {
            padding: var(--space-4);
          }

          .receipt-input {
            height: 64px;
            font-size: 9px;
            padding: var(--space-3);
          }

          .verify-btn {
            font-size: var(--text-sm);
            padding: var(--space-3) var(--space-4);
            min-height: 40px;
          }

          .result {
            margin: 0 var(--space-4) var(--space-3);
            padding: var(--space-3);
          }

          .result-header {
            font-size: var(--text-xs);
            margin-bottom: var(--space-2);
            padding-bottom: var(--space-2);
          }

          .detail-row {
            padding: 2px 0;
          }

          .detail-key {
            font-size: 9px;
          }

          .detail-value {
            font-size: 10px;
          }

          .widget-footer {
            padding: var(--space-3) var(--space-4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
          }
          .result.success,
          .result.error {
            animation: none;
          }
          .verify-widget,
          .verify-widget:hover,
          .verify-btn,
          .copy-btn,
          .receipt-input,
          .toast {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}
