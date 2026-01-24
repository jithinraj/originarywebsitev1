'use client'

import { X, Check } from 'lucide-react'

const beforeItems = [
  'No portable record of what an agent accessed',
  'Disputes rely on server logs alone',
  'Terms and consent are implicit, not verifiable',
]

const afterItems = [
  'Every interaction produces a signature-verified record',
  'Disputes use portable, third-party verifiable evidence',
  'Terms, consent, and attribution are explicit and auditable',
]

export default function WhatThisSolves() {
  return (
    <section className="solves">
      <div className="solves-container">
        <div className="solves-column before">
          <div className="column-header">
            <span className="column-icon-wrapper before-icon">
              <X size={12} strokeWidth={2.5} />
            </span>
            <span className="column-label">Before</span>
          </div>
          <ul className="column-list">
            {beforeItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="solves-divider" aria-hidden="true">
          <div className="divider-line top" />
          <span className="divider-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="divider-line bottom" />
        </div>

        <div className="solves-column after">
          <div className="column-header">
            <span className="column-icon-wrapper after-icon">
              <Check size={12} strokeWidth={2.5} />
            </span>
            <span className="column-label">After</span>
          </div>
          <ul className="column-list">
            {afterItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .solves {
          background: var(--surface-base);
          padding: var(--space-24) 0;
          position: relative;
          overflow: hidden;
        }

        /* Gradient mesh background */
        .solves::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 200%;
          background:
            radial-gradient(ellipse 40% 30% at 30% 30%, var(--gradient-mesh-light-purple) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 70%, var(--gradient-mesh-light-teal) 0%, transparent 50%);
          pointer-events: none;
        }

        .solves::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--border-default) 50%, transparent 100%);
        }

        .solves-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: var(--space-10);
          align-items: stretch;
        }

        .solves-column {
          padding: var(--space-8);
          border-radius: var(--radius-3xl);
          background: var(--glass-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-default);
          box-shadow: var(--shadow-card);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .solves-column:hover {
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-4px);
        }

        .solves-column.before {
          background: var(--glass-card-bg);
        }

        .solves-column.after {
          background: linear-gradient(135deg, var(--glass-card-bg) 0%, var(--accent-brand-muted) 100%);
          border-color: var(--border-brand);
        }

        .solves-column.after:hover {
          border-color: var(--accent-brand);
          box-shadow: var(--glass-card-shadow);
        }

        .column-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }

        .column-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: var(--radius-full);
        }

        .column-icon-wrapper.before-icon {
          background: var(--surface-subtle);
          color: var(--text-muted);
        }

        .column-icon-wrapper.after-icon {
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%);
          color: var(--white);
        }

        .column-label {
          font-size: var(--text-xs);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .before .column-label {
          color: var(--text-muted);
        }

        .after .column-label {
          color: var(--text-primary);
        }

        .column-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .column-list li {
          font-size: var(--text-sm);
          line-height: 1.7;
          padding-left: var(--space-6);
          position: relative;
        }

        .before .column-list li {
          color: var(--text-tertiary);
        }

        .before .column-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: var(--surface-subtle);
          border: 1px solid var(--border-default);
        }

        .after .column-list li {
          color: var(--text-secondary);
          font-weight: 450;
        }

        .after .column-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--accent-brand) 0%, var(--accent-brand-hover) 100%);
          box-shadow: 0 0 0 3px var(--accent-brand-muted);
        }

        .solves-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-3);
          padding: var(--space-8) 0;
        }

        .divider-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(180deg, var(--border-default) 0%, var(--border-hover) 100%);
        }

        .divider-line.top {
          background: linear-gradient(180deg, transparent 0%, var(--border-hover) 100%);
        }

        .divider-line.bottom {
          background: linear-gradient(180deg, var(--border-hover) 0%, transparent 100%);
        }

        .divider-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          color: var(--text-muted);
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 900px) {
          .solves {
            padding: var(--space-16) 0;
          }

          .solves-container {
            gap: var(--space-6);
          }

          .solves-column {
            padding: var(--space-6);
          }
        }

        @media (max-width: 768px) {
          .solves {
            padding: var(--space-12) 0;
          }

          .solves-container {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }

          .solves-divider {
            flex-direction: row;
            padding: var(--space-2) 0;
          }

          .divider-line {
            width: 32px;
            height: 1px;
          }

          .divider-line.top {
            background: linear-gradient(90deg, transparent 0%, var(--border-hover) 100%);
          }

          .divider-line.bottom {
            background: linear-gradient(90deg, var(--border-hover) 0%, transparent 100%);
          }

          .divider-arrow {
            transform: rotate(90deg);
          }

          .solves-column {
            padding: var(--space-5);
          }

          .column-list li {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </section>
  )
}
