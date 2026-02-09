'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Globe, Shield, FileCheck, Package, Zap } from 'lucide-react'

const STEPS = [
  { label: 'Request comes in', icon: Zap, mono: 'POST /api/v1/content' },
  { label: 'Policy surface discovered', icon: Globe, mono: '/.well-known/peac.txt' },
  { label: 'Decision enforced', icon: Shield, mono: 'decision: "allow"' },
  { label: 'Receipt issued', icon: FileCheck, mono: 'peac-receipt/0.1 · EdDSA' },
  { label: 'Bundle exported', icon: Package, mono: 'dispute-bundle.zip' },
] as const

export default function HeroFlowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    // Staggered reveal of steps
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let i = 0; i < STEPS.length; i++) {
      timers.push(setTimeout(() => setActiveStep(i), 1800 + i * 400))
    }
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div ref={containerRef} className="flow-diagram" role="img" aria-label="PEAC protocol flow: request, policy discovery, decision, receipt, bundle">
      <div className="flow-chrome">
        <div className="chrome-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="chrome-title">peac lifecycle</span>
      </div>

      <div className="flow-body">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          const isActive = i <= activeStep
          const isCurrent = i === activeStep

          return (
            <div key={step.label}>
              <div className={`flow-step ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                <div className="step-icon">
                  <Icon size={16} strokeWidth={1.8} />
                </div>
                <div className="step-content">
                  <span className="step-label">{step.label}</span>
                  <span className="step-mono">{step.mono}</span>
                </div>
                <div className="step-status">
                  {isActive && (
                    <span className="status-dot" />
                  )}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flow-connector ${i < activeStep ? 'active' : ''}`}>
                  <ArrowDown size={14} strokeWidth={1.5} />
                </div>
              )}
            </div>
          )
        })}
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
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.12),
            0 24px 48px rgba(0, 0, 0, 0.08);
          transition: border-color var(--duration-200) ease;
        }

        .flow-diagram:hover {
          border-color: var(--border-hover);
        }

        .flow-chrome {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .chrome-dots {
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

        .dot-red {
          background: linear-gradient(180deg, #ff6b5b 0%, #ff5147 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }
        .dot-yellow {
          background: linear-gradient(180deg, #ffca2c 0%, #e5a800 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }
        .dot-green {
          background: linear-gradient(180deg, #2ed158 0%, #1db847 100%);
          box-shadow: 0 0 0 0.5px rgba(0,0,0,0.15), inset 0 -1px 2px rgba(0,0,0,0.1);
        }

        .chrome-title {
          flex: 1;
          text-align: center;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.01em;
        }

        .flow-body {
          padding: 20px 16px 24px;
          display: flex;
          flex-direction: column;
        }

        .flow-step {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-lg);
          border: 1px solid transparent;
          opacity: 0.3;
          transform: translateX(-4px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flow-step.active {
          opacity: 1;
          transform: translateX(0);
          background: var(--surface-base);
          border-color: var(--border-subtle);
        }

        .flow-step.current {
          border-color: var(--accent-brand);
          box-shadow: 0 0 0 1px var(--accent-brand-muted), 0 0 12px -4px var(--accent-brand-glow);
        }

        .step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
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
          gap: 2px;
          min-width: 0;
          flex: 1;
        }

        .step-label {
          font-size: 13px;
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

        .step-status {
          flex-shrink: 0;
          width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-success);
          box-shadow: 0 0 6px var(--accent-success);
        }

        .flow-connector {
          display: flex;
          justify-content: center;
          padding: 4px 0;
          color: var(--text-muted);
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .flow-connector.active {
          opacity: 0.5;
          color: var(--accent-brand);
        }

        @media (max-width: 480px) {
          .flow-diagram {
            min-width: 0;
            max-width: 100%;
            border-radius: var(--radius-xl);
          }

          .flow-chrome {
            padding: 10px 14px;
          }

          .chrome-dots {
            gap: 6px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }

          .flow-body {
            padding: 16px 12px 20px;
          }

          .flow-step {
            padding: 8px 10px;
            gap: 10px;
          }

          .step-icon {
            width: 28px;
            height: 28px;
          }

          .step-label {
            font-size: 12px;
          }

          .step-mono {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-step {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .flow-step.active {
            background: var(--surface-base);
            border-color: var(--border-subtle);
          }

          .flow-connector {
            opacity: 0.4;
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}
