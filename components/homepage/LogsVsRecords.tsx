'use client'

import { useState } from 'react'
import { AnimateIn } from './AnimateIn'

export function LogsVsRecords() {
  const [showProof, setShowProof] = useState(false)

  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">
        <AnimateIn>
          <p
            className="hp-text-overline text-center mb-4"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Not another observability product
          </p>
          <h2
            className="hp-text-display text-center mb-4 max-w-[36rem] mx-auto"
            style={{ color: 'var(--color-fg)' }}
          >
            Logs stay inside your system. Records travel.
          </h2>
          <p
            className="text-center text-[0.9375rem] leading-relaxed mb-10 max-w-[32rem] mx-auto"
            style={{ color: 'var(--color-fg-secondary)' }}
          >
            An agent calls your API. What can another party verify?
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          {/* Toggle */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex rounded-lg p-0.5"
              style={{ background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)' }}
            >
              <button
                onClick={() => setShowProof(false)}
                className="px-4 py-1.5 rounded-md text-[0.8125rem] font-semibold transition-all"
                style={{
                  background: !showProof ? 'var(--color-fg)' : 'transparent',
                  color: !showProof ? 'var(--color-fg-inverse)' : 'var(--color-fg-muted)',
                }}
              >
                What most teams have
              </button>
              <button
                onClick={() => setShowProof(true)}
                className="px-4 py-1.5 rounded-md text-[0.8125rem] font-semibold transition-all"
                style={{
                  background: showProof ? 'var(--color-fg)' : 'transparent',
                  color: showProof ? 'var(--color-fg-inverse)' : 'var(--color-fg-muted)',
                }}
              >
                What PEAC adds
              </button>
            </div>
          </div>

          {/* Panels */}
          <div className="max-w-[36rem] mx-auto">
            {!showProof ? (
              <div
                className="rounded-xl p-5 sm:p-6"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface-elevated)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.75rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>
                    Internal observability
                  </span>
                  <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-warning-muted)', color: 'var(--accent-warning)' }}>
                    Local only
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { time: '14:23:01', label: 'Agent invoked MCP tool: check_inventory' },
                    { time: '14:23:01', label: 'Tool called external API: GET /api/v2/inventory' },
                    { time: '14:23:02', label: 'Policy evaluated: tools.check_inventory: allow' },
                    { time: '14:23:02', label: 'Tool returned result to agent' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span className="text-[0.6875rem] font-mono shrink-0 mt-0.5" style={{ color: 'var(--color-fg-muted)' }}>{row.time}</span>
                      <span className="text-[0.8125rem]" style={{ color: 'var(--color-fg-secondary)' }}>{row.label}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-4 text-[0.75rem] font-medium"
                  style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-warning)' }}
                >
                  Useful for debugging. Not portable proof for another party.
                </div>
              </div>
            ) : (
              <div
                className="rounded-xl p-5 sm:p-6"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface-elevated)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.75rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>
                    Signed interaction record
                  </span>
                  <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-success-muted)', color: 'var(--accent-success)' }}>
                    Portable proof
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Issuer', value: 'tools.vendor.com' },
                    { label: 'Type', value: 'org.peacprotocol/access (evidence)' },
                    { label: 'Policy binding', value: 'sha256:3f8a...c7e1 matches published terms' },
                    { label: 'Signature', value: 'Ed25519, valid' },
                    { label: 'Verification', value: 'passed locally, no callback required' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span className="text-[0.6875rem] font-semibold shrink-0 mt-0.5 uppercase tracking-wide" style={{ color: 'var(--accent-success)' }}>
                        &#10003;
                      </span>
                      <div>
                        <span className="text-[0.75rem] font-medium uppercase tracking-wide" style={{ color: 'var(--color-fg-muted)' }}>{row.label}: </span>
                        <span className="text-[0.8125rem]" style={{ color: 'var(--color-fg-secondary)' }}>{row.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-4 text-[0.75rem] font-medium"
                  style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-success)' }}
                >
                  Portable signed proof. Verifiable by any party, offline.
                </div>
              </div>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
