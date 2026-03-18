'use client'

import { AnimateIn } from './AnimateIn'

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
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-start">
          <AnimateIn>
            <div>
              <span
                className="hp-text-overline"
                style={{ color: 'var(--color-fg-muted)' }}
              >
                Logs vs. decisions
              </span>
              <h2
                className="hp-text-display mt-5 max-w-[28rem]"
                style={{ color: 'var(--color-fg)' }}
              >
                Why logs are not enough
              </h2>
              <p
                className="mt-7 hp-text-body-lg"
                style={{ color: 'var(--color-fg-secondary)' }}
              >
                Logs and traces help with debugging. They do not replace
                explicit policy decisions or exportable records.
              </p>
              <div className="mt-8">
                <p
                  className="hp-text-body-sm font-medium mb-3"
                  style={{ color: 'var(--color-fg)' }}
                >
                  Originary adds:
                </p>
                <ul className="space-y-2.5">
                  {adds.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-[0.5rem] block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--color-border-strong)' }}
                      />
                      <span
                        className="hp-text-body-sm"
                        style={{ color: 'var(--color-fg-secondary)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div
              className="-mx-1.5 sm:mx-0 overflow-x-auto rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_16px_-4px_rgba(0,0,0,0.03)]"
              style={{
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface-elevated)',
              }}
            >
              <table className="w-full min-w-[420px]">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'rgba(243,242,238,0.4)' }}>
                    <th
                      className="text-left text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6"
                      style={{ color: 'var(--color-fg-muted)' }}
                    >
                      Need
                    </th>
                    <th
                      className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 w-24 sm:w-28 md:w-32"
                      style={{ color: 'var(--color-fg-muted)' }}
                    >
                      Logs / traces
                    </th>
                    <th
                      className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.08em] px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 w-24 sm:w-28 md:w-32"
                      style={{ color: 'var(--color-fg)', background: 'rgba(237,245,240,0.3)' }}
                    >
                      Originary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.need}
                      className="hp-table-row"
                      style={i < rows.length - 1 ? { borderBottom: '1px solid var(--color-border-subtle)' } : undefined}
                    >
                      <td
                        className="text-[0.8125rem] sm:text-[0.875rem] font-medium px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5"
                        style={{ color: 'var(--color-fg)' }}
                      >
                        {row.need}
                      </td>
                      <td className="text-center px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5">
                        <div className="flex justify-center">
                          <Cell value={row.logs} />
                        </div>
                      </td>
                      <td
                        className="text-center px-3 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5"
                        style={{ background: 'rgba(237,245,240,0.1)' }}
                      >
                        <div className="flex justify-center">
                          <Cell value={row.originary} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
