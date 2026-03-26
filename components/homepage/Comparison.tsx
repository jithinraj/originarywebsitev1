'use client'

import { AnimateIn } from './AnimateIn'

const logEntries = [
  { time: '14:23:01', label: 'Agent invoked tool: check_inventory' },
  { time: '14:23:01', label: 'External API call: GET /api/v2/inventory' },
  { time: '14:23:02', label: 'Policy: tools.check_inventory → allow' },
  { time: '14:23:02', label: 'Result returned to agent' },
]

const recordEntries = [
  { label: 'Issuer', value: 'tools.vendor.com' },
  { label: 'Type', value: 'org.peacprotocol/access' },
  { label: 'Policy', value: 'sha256:3f8a...c7e1 ✓' },
  { label: 'Signature', value: 'Ed25519, valid' },
  { label: 'Verify', value: 'local, no callback' },
]

const rows = [
  { need: 'Debug system behavior', logs: 'Yes', originary: 'Partial' },
  { need: 'Make access decisions', logs: 'Limited', originary: 'Yes' },
  { need: 'Keep an exportable record', logs: 'No', originary: 'Yes' },
  { need: 'Support cross-team review', logs: 'Weak', originary: 'Yes' },
  { need: 'Open standard underneath', logs: 'No', originary: 'Yes' },
]

const adds = [
  'Evaluate requests before action is taken',
  'Apply explicit policy decisions',
  'Keep exportable records for review and disputes',
]

function Cell({ value }: { value: string }) {
  if (value === 'Yes') {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6875rem] font-semibold"
        style={{ background: 'var(--color-verified-bg)', color: 'var(--color-verified)' }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 6l2 2 4-4" stroke="var(--color-verified)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Yes
      </span>
    )
  }
  if (value === 'No') {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6875rem] font-semibold"
        style={{ background: 'var(--color-surface-tertiary)', color: 'var(--color-fg-muted)' }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3.5 6h5" stroke="var(--color-fg-muted)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        No
      </span>
    )
  }
  const colorMap: Record<string, { bg: string; fg: string }> = {
    Partial: { bg: 'var(--color-policy-bg)', fg: 'var(--color-policy)' },
    Limited: { bg: 'var(--color-policy-bg)', fg: 'var(--color-policy)' },
    Weak: { bg: 'var(--color-surface-tertiary)', fg: 'var(--color-fg-muted)' },
  }
  const colors = colorMap[value] ?? { bg: 'var(--color-surface-tertiary)', fg: 'var(--color-fg-muted)' }
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.6875rem] font-semibold"
      style={{ background: colors.bg, color: colors.fg }}
    >
      {value}
    </span>
  )
}

export function Comparison() {
  return (
    <section className="hp-section hp-divider">
      <div className="hp-container">

        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-14">
            <span
              className="hp-text-overline"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Logs vs. decisions
            </span>
            <h2
              className="hp-text-display mt-5 max-w-[32rem] mx-auto"
              style={{ color: 'var(--color-fg)' }}
            >
              Logs explain behavior. Records prove decisions.
            </h2>
            <p
              className="mt-5 hp-text-body-lg max-w-[34rem] mx-auto"
              style={{ color: 'var(--color-fg-secondary)' }}
            >
              Logs are useful for debugging inside your systems. They are weak evidence outside them. Originary returns signed records another party can inspect and verify independently.
            </p>
          </div>
        </AnimateIn>

        {/* Side-by-side panels — static, no toggle */}
        <AnimateIn delay={0.1}>
          <div className="max-w-[52rem] mx-auto">

            {/* Desktop: side by side */}
            <div className="hidden md:grid md:grid-cols-2 gap-3">
              {/* Logs panel — dimmed */}
              <div
                className="rounded-xl p-5"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)',
                  opacity: 0.5,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>
                    Internal logs
                  </span>
                  <span className="text-[0.5625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-warning-muted)', color: 'var(--accent-warning)' }}>
                    Local only
                  </span>
                </div>
                <div className="space-y-2.5">
                  {logEntries.map((row) => (
                    <div key={row.label} className="flex items-start gap-2.5">
                      <span className="text-[0.625rem] font-mono shrink-0 mt-0.5" style={{ color: 'var(--color-fg-muted)' }}>{row.time}</span>
                      <span className="text-[0.75rem] leading-snug" style={{ color: 'var(--color-fg-secondary)' }}>{row.label}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 pt-3 text-[0.6875rem] font-medium"
                  style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-warning)' }}
                >
                  Useful for debugging. Not portable.
                </div>
              </div>

              {/* Record panel — highlighted */}
              <div
                className="rounded-xl p-5"
                style={{
                  border: '1px solid var(--color-verified)',
                  background: 'var(--color-surface-elevated)',
                  boxShadow: '0 0 0 1px var(--accent-success-muted)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>
                    Signed record
                  </span>
                  <span className="text-[0.5625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-success-muted)', color: 'var(--accent-success)' }}>
                    Portable proof
                  </span>
                </div>
                <div className="space-y-2.5">
                  {recordEntries.map((row) => (
                    <div key={row.label} className="flex items-start gap-2.5">
                      <span className="text-[0.625rem] font-semibold shrink-0 mt-0.5 uppercase tracking-wide" style={{ color: 'var(--accent-success)' }}>&#10003;</span>
                      <div>
                        <span className="text-[0.625rem] font-medium uppercase tracking-wide" style={{ color: 'var(--color-fg-muted)' }}>{row.label}: </span>
                        <span className="text-[0.75rem]" style={{ color: 'var(--color-fg-secondary)' }}>{row.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 pt-3 text-[0.6875rem] font-medium"
                  style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-success)' }}
                >
                  Verifiable by any party, offline.
                </div>
              </div>
            </div>

            {/* Mobile: stacked, record first */}
            <div className="md:hidden space-y-3">
              <div
                className="rounded-xl p-5"
                style={{ border: '1px solid var(--color-verified)', background: 'var(--color-surface-elevated)' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>Signed record</span>
                  <span className="text-[0.5625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-success-muted)', color: 'var(--accent-success)' }}>Portable proof</span>
                </div>
                <div className="space-y-2.5">
                  {recordEntries.map((row) => (
                    <div key={row.label} className="flex items-start gap-2.5">
                      <span className="text-[0.625rem] font-semibold shrink-0 mt-0.5 uppercase tracking-wide" style={{ color: 'var(--accent-success)' }}>&#10003;</span>
                      <div>
                        <span className="text-[0.625rem] font-medium uppercase tracking-wide" style={{ color: 'var(--color-fg-muted)' }}>{row.label}: </span>
                        <span className="text-[0.75rem]" style={{ color: 'var(--color-fg-secondary)' }}>{row.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 text-[0.6875rem] font-medium" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-success)' }}>
                  Verifiable by any party, offline.
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface-elevated)', opacity: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.6875rem] font-semibold tracking-wide uppercase" style={{ color: 'var(--color-fg-muted)' }}>Internal logs</span>
                  <span className="text-[0.5625rem] font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--accent-warning-muted)', color: 'var(--accent-warning)' }}>Local only</span>
                </div>
                <div className="space-y-2.5">
                  {logEntries.map((row) => (
                    <div key={row.label} className="flex items-start gap-2.5">
                      <span className="text-[0.625rem] font-mono shrink-0 mt-0.5" style={{ color: 'var(--color-fg-muted)' }}>{row.time}</span>
                      <span className="text-[0.75rem]" style={{ color: 'var(--color-fg-secondary)' }}>{row.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 text-[0.6875rem] font-medium" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--accent-warning)' }}>
                  Useful for debugging. Not portable.
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Comparison table */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 sm:mt-16 max-w-[52rem] mx-auto">
            {/* Desktop table */}
            <div
              className="hidden sm:block overflow-x-auto rounded-2xl"
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface-elevated)',
              }}
            >
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--surface-subtle)' }}>
                    <th className="text-left text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-5 py-5 md:px-6" style={{ color: 'var(--color-fg-muted)' }}>Need</th>
                    <th className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-5 py-5 md:px-6 w-28 md:w-32" style={{ color: 'var(--color-fg-muted)' }}>Logs / traces</th>
                    <th className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-5 py-5 md:px-6 w-28 md:w-32" style={{ color: 'var(--color-fg)' }}>Originary</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.need} style={i < rows.length - 1 ? { borderBottom: '1px solid var(--color-border-subtle)' } : undefined}>
                      <td className="text-[0.875rem] font-medium px-5 py-4 md:px-6" style={{ color: 'var(--color-fg)' }}>{row.need}</td>
                      <td className="text-center px-5 py-4 md:px-6"><div className="flex justify-center"><Cell value={row.logs} /></div></td>
                      <td className="text-center px-5 py-4 md:px-6"><div className="flex justify-center"><Cell value={row.originary} /></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {rows.map((row) => (
                <div key={row.need} className="rounded-xl p-4" style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface-elevated)' }}>
                  <p className="text-[0.8125rem] font-medium mb-3" style={{ color: 'var(--color-fg)' }}>{row.need}</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.06em]" style={{ color: 'var(--color-fg-muted)' }}>Logs</span>
                      <Cell value={row.logs} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.06em]" style={{ color: 'var(--color-fg-muted)' }}>Originary</span>
                      <Cell value={row.originary} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Originary adds */}
        <AnimateIn delay={0.3}>
          <div className="mt-10 sm:mt-12 max-w-[36rem] mx-auto text-center">
            <p
              className="hp-text-body-sm font-semibold mb-4"
              style={{ color: 'var(--color-fg)' }}
            >
              Originary adds:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              {adds.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[0.8125rem]"
                  style={{ color: 'var(--color-fg-secondary)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--color-verified)' }}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
