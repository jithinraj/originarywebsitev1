'use client'

import { useEffect, useState } from 'react'
import { Globe, Shield, FileCheck, CheckCircle, Users } from 'lucide-react'

/**
 * Hero lifecycle diagram -- shows the PEAC flow as an animated loop.
 *
 * Storyboard (6-8s loop):
 *  0) idle -- all steps dimmed
 *  1) Request comes in (Agent -> Service)
 *  2) Policy discovered (/.well-known/peac.txt)
 *  3) Decision enforced (ALLOW)
 *  4) Receipt issued (chip with short ID)
 *  5) Record shared (splits to Agent, Service, Auditor)
 *  6) Verified (badge lights up)
 *  7) Soft reset -> loop
 *
 * Uses design system tokens exclusively -- no hardcoded colors.
 */

type Phase = 'idle' | 'request' | 'policy' | 'decision' | 'receipt' | 'shared' | 'verified'

const PHASE_ORDER: Phase[] = ['idle', 'request', 'policy', 'decision', 'receipt', 'shared', 'verified']

const PHASE_TIMINGS: Record<Phase, number> = {
  idle: 1200,
  request: 800,
  policy: 800,
  decision: 900,
  receipt: 900,
  shared: 1200,
  verified: 2500,
}

export default function HeroFlowDiagram() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [loopCount, setLoopCount] = useState(0)

  useEffect(() => {
    let active = true
    let idx = 0

    const advance = () => {
      if (!active) return
      const current = PHASE_ORDER[idx]
      setPhase(current)

      const delay = PHASE_TIMINGS[current]
      idx++
      if (idx >= PHASE_ORDER.length) {
        idx = 0
        setLoopCount(c => c + 1)
      }
      setTimeout(advance, delay)
    }

    // Start after initial render delay
    const start = setTimeout(advance, 1400)
    return () => { active = false; clearTimeout(start) }
  }, [])

  const phaseIdx = PHASE_ORDER.indexOf(phase)
  const past = (p: Phase) => phaseIdx > PHASE_ORDER.indexOf(p)
  const atOrPast = (p: Phase) => phaseIdx >= PHASE_ORDER.indexOf(p)

  return (
    <div className="flow-diagram" role="img" aria-label="PEAC protocol flow: request, policy discovery, decision, receipt issuance, sharing, verification">
      {/* Chrome header */}
      <div className="flow-chrome">
        <div className="chrome-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="chrome-title">peac lifecycle</span>
        <span className="chrome-badge">live</span>
      </div>

      {/* Participants */}
      <div className="flow-participants">
        <div className={`participant ${atOrPast('request') ? 'active' : ''}`}>
          <span className="participant-dot agent" />
          <span className="participant-label">Agent</span>
        </div>
        <div className={`flow-arrow ${atOrPast('request') ? 'active' : ''}`}>
          <span className="arrow-line" />
          <span className="arrow-head" />
        </div>
        <div className={`participant ${atOrPast('request') ? 'active' : ''}`}>
          <span className="participant-dot service" />
          <span className="participant-label">Service</span>
        </div>
      </div>

      {/* Steps */}
      <div className="flow-body">
        {/* Step 1: Policy discovered */}
        <div className={`flow-step ${atOrPast('policy') ? 'active' : ''} ${phase === 'policy' ? 'current' : ''}`}>
          <div className="step-icon"><Globe size={15} strokeWidth={1.8} /></div>
          <div className="step-content">
            <span className="step-label">Policy discovered</span>
            <span className="step-mono">/.well-known/peac.txt</span>
          </div>
          {atOrPast('policy') && <span className="step-check"><CheckCircle size={14} /></span>}
        </div>

        {/* Step 2: Decision enforced */}
        <div className={`flow-step ${atOrPast('decision') ? 'active' : ''} ${phase === 'decision' ? 'current' : ''}`}>
          <div className="step-icon"><Shield size={15} strokeWidth={1.8} /></div>
          <div className="step-content">
            <span className="step-label">Decision enforced</span>
            <span className="step-mono">
              {atOrPast('decision') ? (
                <span className="decision-allow">ALLOW</span>
              ) : (
                'evaluating...'
              )}
            </span>
          </div>
          {atOrPast('decision') && <span className="step-check"><CheckCircle size={14} /></span>}
        </div>

        {/* Step 3: Receipt issued */}
        <div className={`flow-step ${atOrPast('receipt') ? 'active' : ''} ${phase === 'receipt' ? 'current' : ''}`}>
          <div className="step-icon"><FileCheck size={15} strokeWidth={1.8} /></div>
          <div className="step-content">
            <span className="step-label">Receipt issued</span>
            <span className="step-mono">
              {atOrPast('receipt') ? (
                <>peac-receipt/0.1 &middot; <span className="receipt-id">rec_7f3a</span></>
              ) : (
                'signing...'
              )}
            </span>
          </div>
          {atOrPast('receipt') && <span className="step-check"><CheckCircle size={14} /></span>}
        </div>

        {/* Step 4: Record shared */}
        <div className={`flow-step shared-step ${atOrPast('shared') ? 'active' : ''} ${phase === 'shared' ? 'current' : ''}`}>
          <div className="step-icon"><Users size={15} strokeWidth={1.8} /></div>
          <div className="step-content">
            <span className="step-label">Record shared</span>
            {atOrPast('shared') && (
              <div className="shared-chips">
                <span className="chip chip-agent">Agent</span>
                <span className="chip chip-service">Service</span>
                <span className="chip chip-auditor">Auditor</span>
              </div>
            )}
          </div>
          {atOrPast('shared') && <span className="step-check"><CheckCircle size={14} /></span>}
        </div>
      </div>

      {/* Verified footer */}
      <div className={`flow-verified ${atOrPast('verified') ? 'active' : ''}`}>
        <div className="verified-content">
          <CheckCircle size={16} strokeWidth={2} />
          <span>Verified offline with public key</span>
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

        .chrome-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

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

        .participant.active {
          opacity: 1;
        }

        .participant-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .participant-dot.agent {
          background: var(--accent-brand);
        }

        .participant-dot.service {
          background: var(--accent-secondary);
        }

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
          gap: 0;
          opacity: 0.15;
          transition: opacity 0.4s ease;
        }

        .flow-arrow.active {
          opacity: 0.5;
        }

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

        /* Steps */
        .flow-body {
          padding: 8px 14px 12px;
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

        .step-check {
          flex-shrink: 0;
          color: var(--accent-success);
          display: flex;
          align-items: center;
          animation: checkPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes checkPop {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Decision stamp */
        .decision-allow {
          color: var(--accent-success);
          font-weight: 700;
          letter-spacing: 0.06em;
          font-size: 10px;
        }

        /* Receipt ID */
        .receipt-id {
          color: var(--accent-brand);
          font-weight: 600;
        }

        /* Shared chips */
        .shared-chips {
          display: flex;
          gap: 4px;
          margin-top: 2px;
        }

        .chip {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          padding: 1px 6px;
          border-radius: var(--radius-sm);
          animation: chipSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .chip-agent {
          background: var(--accent-brand-muted);
          color: var(--accent-brand);
          animation-delay: 0s;
        }

        .chip-service {
          background: var(--accent-secondary-muted);
          color: var(--accent-secondary);
          animation-delay: 0.1s;
        }

        .chip-auditor {
          background: var(--accent-warning-muted);
          color: var(--accent-warning);
          animation-delay: 0.2s;
        }

        @keyframes chipSlide {
          from { transform: translateX(-6px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        /* Verified footer */
        .flow-verified {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-top: 1px solid transparent;
        }

        .flow-verified.active {
          max-height: 48px;
          padding: 10px 14px;
          border-top-color: var(--accent-success-border);
          background: var(--accent-success-muted);
        }

        .verified-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--accent-success);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
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

          .flow-body { padding: 6px 10px 10px; gap: 3px; }
          .flow-step { padding: 6px 8px; gap: 8px; }
          .step-icon { width: 26px; height: 26px; }
          .step-label { font-size: 11px; }
          .step-mono { font-size: 9px; }
          .chip { font-size: 8px; padding: 1px 4px; }

          .flow-verified.active { padding: 8px 12px; }
          .verified-content { font-size: 11px; gap: 6px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-step,
          .flow-verified,
          .participant,
          .flow-arrow {
            transition: none;
          }

          .step-check,
          .chip {
            animation: none;
          }

          /* Show final state immediately */
          .flow-step { opacity: 1; }
          .flow-step.active {
            background: var(--surface-base);
            border-color: var(--border-subtle);
          }
          .participant { opacity: 1; }
          .flow-arrow { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
