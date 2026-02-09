'use client'

import { useEffect, useState } from 'react'
import { Globe, FileCheck, CheckCircle, Key } from 'lucide-react'

/**
 * Hero lifecycle diagram -- animated PEAC receipt flow (~5s loop).
 *
 * Storyboard:
 *  1) request -- Agent -> Service lights up
 *  2) policy -- peac.txt discovered
 *  3) minted -- receipt artifact appears (pause -- first "aha")
 *  4) delivered -- same receipt on Agent + Service + Auditor
 *  5) verified -- offline verification panel (long pause -- main "aha")
 *
 * Design rules:
 *  - Receipt shown as tangible artifact card (hash + sig visible)
 *  - Same receipt ID on all 3 delivery targets
 *  - "Verified offline" as terminal climax with public key mention
 *  - Static frame under prefers-reduced-motion shows full story
 *  - All colors from design system tokens
 */

type Phase = 'idle' | 'request' | 'policy' | 'minted' | 'delivered' | 'verified'

const PHASES: Phase[] = ['idle', 'request', 'policy', 'minted', 'delivered', 'verified']

const TIMING: Record<Phase, number> = {
  idle: 500,
  request: 500,
  policy: 600,
  minted: 900,
  delivered: 800,
  verified: 2000,
}

export default function HeroFlowDiagram() {
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    let active = true
    let idx = 0

    const advance = () => {
      if (!active) return
      setPhase(PHASES[idx])
      const delay = TIMING[PHASES[idx]]
      idx = (idx + 1) % PHASES.length
      setTimeout(advance, delay)
    }

    const start = setTimeout(advance, 1200)
    return () => { active = false; clearTimeout(start) }
  }, [])

  const at = (p: Phase) => PHASES.indexOf(phase) >= PHASES.indexOf(p)

  return (
    <div className="flow-diagram" role="img" aria-label="PEAC receipt flow: request, policy check, receipt signed, delivered to both parties, verified offline with public key">
      {/* Chrome header */}
      <div className="flow-chrome">
        <div className="chrome-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="chrome-title">peac lifecycle</span>
        {at('verified') && <span className="chrome-badge">verified</span>}
      </div>

      {/* Participants */}
      <div className="flow-participants">
        <div className={`participant ${at('request') ? 'active' : ''}`}>
          <span className="participant-dot agent" />
          <span className="participant-label">Agent</span>
        </div>
        <div className={`flow-arrow ${at('request') ? 'active' : ''}`}>
          <span className="arrow-line" />
          <span className="arrow-head" />
        </div>
        <div className={`participant ${at('request') ? 'active' : ''}`}>
          <span className="participant-dot service" />
          <span className="participant-label">Service</span>
        </div>
      </div>

      {/* Policy step */}
      <div className="flow-body">
        <div className={`flow-step ${at('policy') ? 'active' : ''} ${phase === 'policy' ? 'current' : ''}`}>
          <div className="step-icon"><Globe size={15} strokeWidth={1.8} /></div>
          <div className="step-content">
            <span className="step-label">Policy discovered</span>
            <span className="step-mono">/.well-known/peac.txt</span>
          </div>
          {at('policy') && <span className="step-progress" />}
        </div>
      </div>

      {/* Receipt artifact -- the tangible object */}
      <div className={`receipt-artifact ${at('minted') ? 'active' : ''}`}>
        <div className="artifact-icon">
          <FileCheck size={16} strokeWidth={1.8} />
        </div>
        <div className="artifact-content">
          <span className="artifact-title">Signed Receipt</span>
          <span className="artifact-id">rec_7f3a</span>
          <span className="artifact-meta">Ed25519 &middot; peac-receipt/0.1</span>
        </div>
      </div>

      {/* Delivery -- same receipt on all sides */}
      <div className={`delivery-row ${at('delivered') ? 'active' : ''}`}>
        <div className="delivery-card card-agent">
          <span className="delivery-dot agent" />
          <span className="delivery-who">Agent</span>
          <code className="delivery-hash">rec_7f3a</code>
        </div>
        <div className="delivery-card card-service">
          <span className="delivery-dot service" />
          <span className="delivery-who">Service</span>
          <code className="delivery-hash">rec_7f3a</code>
        </div>
        <div className="delivery-card card-auditor">
          <span className="delivery-dot auditor" />
          <span className="delivery-who">Auditor</span>
          <code className="delivery-hash">rec_7f3a</code>
        </div>
      </div>

      {/* Verified offline -- the climax */}
      <div className={`flow-verifier ${at('verified') ? 'active' : ''}`}>
        <div className="verifier-header">
          <Key size={12} strokeWidth={2} />
          <span>Verify(rec_7f3a)</span>
          <span className="verifier-offline">offline</span>
        </div>
        <div className="verifier-results">
          <div className="verifier-row">
            <span className="vr-label">Signature</span>
            <span className="vr-value vr-valid">valid</span>
          </div>
          <div className="verifier-row">
            <span className="vr-label">Policy</span>
            <span className="vr-value">matched</span>
          </div>
          <div className="verifier-row verifier-result-row">
            <span className="vr-label">Result</span>
            <span className="vr-value vr-valid">
              <CheckCircle size={12} strokeWidth={2.5} />
              VALID
            </span>
          </div>
        </div>
        <div className="verifier-footer">
          public key &middot; no callback required
        </div>
      </div>

      <style jsx>{`
        .flow-diagram {
          width: 100%;
          min-width: 340px;
          max-width: 420px;
          background: var(--surface-elevated);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          border: 1px solid var(--border-default);
          box-shadow: var(--glass-card-shadow);
          transition: border-color var(--duration-200) ease, box-shadow var(--duration-200) ease;
        }

        .flow-diagram:hover {
          border-color: var(--border-hover);
          box-shadow: var(--glass-card-shadow-hover);
        }

        /* Chrome */
        .flow-chrome {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          background: var(--surface-subtle);
          border-bottom: 1px solid var(--border-subtle);
          gap: 8px;
        }

        .chrome-dots { display: flex; gap: 6px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .chrome-title {
          flex: 1;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.01em;
        }

        .chrome-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-success);
          background: var(--accent-success-muted);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          animation: badgePop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes badgePop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Participants */
        .flow-participants {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 16px 6px;
        }

        .participant {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.3;
          transition: opacity 0.4s ease;
        }

        .participant.active { opacity: 1; }

        .participant-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .participant-dot.agent { background: var(--accent-brand); }
        .participant-dot.service { background: var(--accent-secondary); }

        .participant-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }

        .flow-arrow {
          display: flex;
          align-items: center;
          opacity: 0.15;
          transition: opacity 0.4s ease;
        }

        .flow-arrow.active { opacity: 0.5; }

        .arrow-line {
          width: 40px;
          height: 1px;
          background: var(--text-muted);
        }

        .arrow-head {
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 6px solid var(--text-muted);
        }

        /* Policy step */
        .flow-body {
          padding: 8px 14px 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .flow-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: var(--radius-lg);
          border: 1px solid transparent;
          opacity: 0.25;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flow-step.active {
          opacity: 1;
          background: var(--surface-base);
          border-color: var(--border-subtle);
        }

        .flow-step.current {
          border-color: var(--accent-brand);
          box-shadow: 0 0 0 1px var(--accent-brand-muted);
        }

        .step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: var(--radius-md);
          background: var(--surface-subtle);
          color: var(--text-tertiary);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .flow-step.active .step-icon {
          background: var(--accent-brand-muted);
          color: var(--accent-brand);
        }

        .step-content {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
          flex: 1;
        }

        .step-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .step-mono {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .flow-step.active .step-mono {
          color: var(--text-tertiary);
        }

        .step-progress {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-brand);
          opacity: 0.5;
          animation: dotFade 0.3s ease;
        }

        @keyframes dotFade {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.5; }
        }

        /* Receipt artifact -- the product */
        .receipt-artifact {
          margin: 4px 14px;
          padding: 10px 12px;
          background: var(--surface-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .receipt-artifact.active {
          opacity: 1;
          transform: scale(1);
          border-color: var(--accent-brand);
          box-shadow: 0 0 0 1px var(--accent-brand-muted);
        }

        .artifact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-md);
          background: var(--accent-brand-muted);
          color: var(--accent-brand);
          flex-shrink: 0;
        }

        .artifact-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .artifact-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.02em;
        }

        .artifact-id {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          color: var(--accent-brand);
          letter-spacing: 0.02em;
        }

        .artifact-meta {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
        }

        /* Delivery -- same receipt on all sides */
        .delivery-row {
          display: flex;
          gap: 6px;
          padding: 6px 14px 8px;
        }

        .delivery-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 6px 4px;
          background: var(--surface-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .delivery-row.active .delivery-card {
          opacity: 1;
          transform: translateY(0);
        }

        .delivery-row.active .card-agent { transition-delay: 0s; }
        .delivery-row.active .card-service { transition-delay: 0.1s; }
        .delivery-row.active .card-auditor { transition-delay: 0.2s; }

        .delivery-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .delivery-dot.agent { background: var(--accent-brand); }
        .delivery-dot.service { background: var(--accent-secondary); }
        .delivery-dot.auditor { background: var(--accent-warning); }

        .delivery-who {
          font-size: 9px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .delivery-hash {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          color: var(--accent-brand);
          opacity: 0.8;
        }

        /* Verifier panel -- terminal climax */
        .flow-verifier {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-top: 1px solid transparent;
        }

        .flow-verifier.active {
          max-height: 160px;
          padding: 10px 14px 12px;
          border-top-color: var(--accent-success-border);
          background: var(--accent-success-muted);
        }

        .verifier-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--accent-success-border);
        }

        .verifier-header :global(svg) {
          color: var(--accent-success);
        }

        .verifier-offline {
          font-family: var(--font-mono);
          font-size: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-success);
          background: rgba(0, 0, 0, 0.06);
          padding: 1px 5px;
          border-radius: var(--radius-sm);
          margin-left: auto;
        }

        .verifier-results {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .verifier-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 10px;
        }

        .vr-label {
          color: var(--text-tertiary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 9px;
        }

        .vr-value {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .vr-valid {
          color: var(--accent-success);
          font-weight: 700;
        }

        .verifier-result-row {
          margin-top: 2px;
          padding-top: 4px;
          border-top: 1px solid var(--accent-success-border);
        }

        .verifier-result-row .vr-value {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .verifier-footer {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
          text-align: center;
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid var(--accent-success-border);
          letter-spacing: 0.02em;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .flow-diagram {
            min-width: 0;
            max-width: 100%;
            border-radius: var(--radius-xl);
          }

          .flow-chrome { padding: 8px 12px; }
          .chrome-title { font-size: 10px; }
          .chrome-badge { font-size: 8px; }

          .flow-participants { padding: 10px 12px 4px; gap: 8px; }
          .participant-label { font-size: 10px; }
          .arrow-line { width: 28px; }

          .flow-body { padding: 6px 10px 2px; }
          .flow-step { padding: 6px 8px; gap: 8px; }
          .step-icon { width: 26px; height: 26px; }
          .step-label { font-size: 11px; }
          .step-mono { font-size: 9px; }

          .receipt-artifact { margin: 3px 10px; padding: 8px 10px; gap: 8px; }
          .artifact-icon { width: 28px; height: 28px; }
          .artifact-id { font-size: 13px; }
          .artifact-meta { font-size: 9px; }

          .delivery-row { padding: 4px 10px 6px; gap: 4px; }
          .delivery-card { padding: 5px 3px; }
          .delivery-who { font-size: 8px; }
          .delivery-hash { font-size: 8px; }

          .flow-verifier.active { padding: 8px 12px 10px; }
          .verifier-header { font-size: 10px; margin-bottom: 6px; }
          .verifier-row { font-size: 9px; }
          .vr-label { font-size: 8px; }
          .verifier-footer { font-size: 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-step,
          .receipt-artifact,
          .delivery-card,
          .flow-verifier,
          .participant,
          .flow-arrow {
            transition: none;
          }

          .step-progress,
          .chrome-badge {
            animation: none;
          }

          /* Show complete story in static frame */
          .flow-step { opacity: 1; background: var(--surface-base); border-color: var(--border-subtle); }
          .receipt-artifact { opacity: 1; transform: none; border-color: var(--accent-brand); box-shadow: 0 0 0 1px var(--accent-brand-muted); }
          .delivery-card { opacity: 1; transform: none; }
          .participant { opacity: 1; }
          .flow-arrow { opacity: 0.5; }
          .step-progress { opacity: 0.5; }
          .flow-verifier { max-height: 160px; padding: 10px 14px 12px; border-top-color: var(--accent-success-border); background: var(--accent-success-muted); }
        }
      `}</style>
    </div>
  )
}
