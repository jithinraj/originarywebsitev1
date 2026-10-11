'use client'

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import { PALETTE } from '@/components/home/palette'
import { SANS, MONO } from '@/components/home/typography'
import { Mono } from '@/components/home/atoms/Mono'
import { RUST } from '@/components/specimens/parts'
import {
  REVIEW_CLOCK,
  SIMULATIONS,
  recompute,
  seedCases,
  sha256Hex,
  sortCases,
  type CaseStatus,
  type ReviewCase,
  type Severity,
} from './engine'

const SEVERITY_STYLE: Record<Severity, { fg: string; bg: string; bd: string }> = {
  critical: { fg: RUST, bg: 'rgba(154,59,46,0.08)', bd: 'rgba(154,59,46,0.35)' },
  high: { fg: '#775a32', bg: 'rgba(138,106,60,0.10)', bd: 'rgba(138,106,60,0.35)' },
  medium: { fg: '#3f566e', bg: 'rgba(74,98,124,0.09)', bd: 'rgba(74,98,124,0.32)' },
  low: { fg: PALETTE.faint, bg: PALETTE.paper, bd: PALETTE.hairline },
  none: { fg: PALETTE.faint, bg: PALETTE.paper, bd: PALETTE.hairline },
}
const STATUS_STYLE: Record<CaseStatus, { fg: string; bg: string; bd: string }> = {
  open: { fg: PALETTE.ink, bg: 'transparent', bd: PALETTE.rule },
  in_review: { fg: '#3f566e', bg: 'rgba(74,98,124,0.09)', bd: 'rgba(74,98,124,0.32)' },
  monitoring: { fg: PALETTE.faint, bg: 'transparent', bd: PALETTE.hairline },
  resolved: { fg: '#41654c', bg: 'rgba(74,116,89,0.10)', bd: 'rgba(74,116,89,0.35)' },
}

const pretty = (s: string) => s.split('_').join(' ').split('.').join(' · ')
const clock = (iso: string) => `${iso.slice(5, 10)} ${iso.slice(11, 16)} UTC`

function Badge({ tone, children }: { tone: { fg: string; bg: string; bd: string }; children: ReactNode }) {
  return (
    <span
      style={{
        fontFamily: MONO,
        fontSize: 10.5,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: tone.fg,
        background: tone.bg,
        border: `1px solid ${tone.bd}`,
        padding: '3px 8px',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Mono size={10.5} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block' }}>
      {children}
    </Mono>
  )
}

const control: CSSProperties = {
  fontFamily: SANS,
  fontSize: 14,
  color: PALETTE.ink,
  background: PALETTE.paper,
  border: `1px solid ${PALETTE.rule}`,
  borderRadius: 0,
  padding: '9px 12px',
  minWidth: 0,
}
const button = (primary = false): CSSProperties => ({
  fontFamily: SANS,
  fontSize: 13.5,
  fontWeight: 500,
  padding: '9px 14px',
  cursor: 'pointer',
  color: primary ? PALETTE.paper : PALETTE.ink,
  background: primary ? PALETTE.ink : 'transparent',
  border: `1px solid ${primary ? PALETTE.ink : PALETTE.rule}`,
  borderRadius: 0,
})

export function ActionReviewConsole() {
  const [cases, setCases] = useState<ReviewCase[]>(seedCases)
  const [selectedId, setSelectedId] = useState<string>(() => sortCases(seedCases())[0].id)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'' | CaseStatus>('')
  const [severity, setSeverity] = useState<'' | Severity>('')
  const [digests, setDigests] = useState<Record<string, string>>({})
  const [disposition, setDisposition] = useState<CaseStatus>('in_review')
  const [note, setNote] = useState('')
  const [message, setMessage] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    return sortCases(cases).filter(
      (c) =>
        (!status || c.status === status) &&
        (!severity || c.severity === severity) &&
        (!q || c.operation_ref.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)),
    )
  }, [cases, search, status, severity])

  const selected = cases.find((c) => c.id === selectedId) ?? null

  const stats = useMemo(
    () => ({
      total: cases.length,
      open: cases.filter((c) => c.status === 'open').length,
      in_review: cases.filter((c) => c.status === 'in_review').length,
      critical: cases.filter((c) => c.severity === 'critical' && c.status !== 'resolved').length,
    }),
    [cases],
  )

  // Local SHA-256 of each event, computed in the browser. Detects local content change only.
  useEffect(() => {
    let live = true
    const pending = cases.flatMap((c) => c.events).filter((e) => !digests[e.event_id])
    if (!pending.length) return
    Promise.all(pending.map(async (e) => [e.event_id, await sha256Hex(e)] as const)).then((pairs) => {
      if (live) setDigests((d) => ({ ...d, ...Object.fromEntries(pairs) }))
    })
    return () => {
      live = false
    }
  }, [cases, digests])

  useEffect(() => {
    if (selected) setDisposition(selected.status === 'monitoring' ? 'in_review' : selected.status)
    setNote('')
    setMessage(null)
    // Reset the form only when the selection changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId])

  function update(id: string, fn: (c: ReviewCase) => ReviewCase) {
    setCases((all) => all.map((c) => (c.id === id ? fn(c) : c)))
  }

  function saveDisposition() {
    if (!selected) return
    const text = note.trim()
    if (disposition === 'open' && !selected.findings.length)
      return setMessage({ kind: 'err', text: 'There are no findings to open.' })
    if (disposition === selected.status && !text) return setMessage({ kind: 'err', text: 'Status unchanged. Add a note or pick a new status.' })
    if (disposition === 'resolved' && text.length < 12)
      return setMessage({ kind: 'err', text: 'A resolution needs a reason of at least 12 characters.' })
    const at = new Date().toISOString()
    update(selected.id, (c) => ({
      ...c,
      status: disposition,
      updated_at: at,
      audit: [
        ...c.audit,
        {
          id: `a-${c.audit.length + 1}-${at}`,
          at,
          actor: 'demo_operator',
          action: disposition !== c.status ? 'status_changed' : 'note_added',
          note: text || null,
          from_status: c.status,
          to_status: disposition,
        },
      ],
    }))
    setNote('')
    setMessage({ kind: 'ok', text: 'Case update recorded in the activity trail for this browser session.' })
  }

  function simulate(index: number) {
    if (!selected) return
    const sim = SIMULATIONS[index]
    const at = new Date(Math.max(Date.now(), REVIEW_CLOCK)).toISOString()
    update(selected.id, (c) =>
      recompute(
        {
          ...c,
          events: [
            ...c.events,
            {
              event_id: `sim-${c.events.length + 1}-${sim.kind}`,
              kind: sim.kind,
              source: sim.source,
              summary: sim.summary,
              issuer: `${sim.source}.demo.invalid`,
              basis: 'upstream_report',
              occurred_at: at,
              ...sim.extra,
            },
          ],
        },
        at,
        'event_added',
      ),
    )
    setMessage({ kind: 'ok', text: `Added a simulated report: ${sim.label.toLowerCase()}. Rules re-ran on the case.` })
  }

  function exportReport() {
    if (!selected) return
    const report = {
      report_version: 'originary-action-review-demo/0.1',
      generated_at: new Date().toISOString(),
      disclaimer:
        'Synthetic demonstration data. NOT a PEAC signed bundle; no signature or issuer authentication was performed. Source assertions may be inaccurate.',
      case: {
        id: selected.id,
        operation_ref: selected.operation_ref,
        status: selected.status,
        severity: selected.severity,
        title: selected.title,
        updated_at: selected.updated_at,
      },
      findings: selected.findings,
      observations: selected.events.map((e) => ({ ...e, local_sha256: digests[e.event_id] ?? null })),
      audit: selected.audit,
      verification: { independent_signatures_verified: false, source_identity_verified: false },
    }
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2) + '\n'], { type: 'application/json' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `originary-action-review-${selected.id}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  function reset() {
    const fresh = seedCases()
    setCases(fresh)
    setSelectedId(sortCases(fresh)[0].id)
    setSearch('')
    setStatus('')
    setSeverity('')
    setMessage(null)
  }

  return (
    <div className="ar-console">
      <div className="ar-metrics" aria-label="Case statistics">
        {[
          ['Operations', stats.total, 'Synthetic operation references'],
          ['Open exceptions', stats.open, 'Need attention'],
          ['In review', stats.in_review, 'Being investigated'],
          ['Critical', stats.critical, 'Conflicting high-impact reports'],
        ].map(([label, value, help]) => (
          <div key={label as string} className="ar-metric">
            <Label>{label}</Label>
            <div style={{ fontFamily: SANS, fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', margin: '6px 0 2px' }}>
              {value}
            </div>
            <div style={{ fontFamily: SANS, fontSize: 12.5, color: PALETTE.faint }}>{help}</div>
          </div>
        ))}
      </div>

      <div className="ar-workspace">
        <section className="ar-panel" aria-label="Operation cases">
          <div className="ar-panel-head">
            <div>
              <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500 }}>Operation cases</div>
              <div style={{ fontFamily: SANS, fontSize: 12.5, color: PALETTE.faint, marginTop: 2 }}>
                Ordered by severity, then newest activity
              </div>
            </div>
            <Mono size={11} color={PALETTE.faint}>
              {visible.length} of {cases.length}
            </Mono>
          </div>
          <div className="ar-filters">
            <label className="ar-sr" htmlFor="ar-search">
              Search operations
            </label>
            <input
              id="ar-search"
              type="search"
              placeholder="Search reference or summary"
              value={search}
              maxLength={100}
              onChange={(e) => setSearch(e.target.value)}
              style={{ ...control, gridColumn: '1 / -1' }}
            />
            <label className="ar-sr" htmlFor="ar-status">
              Filter status
            </label>
            <select id="ar-status" value={status} onChange={(e) => setStatus(e.target.value as '' | CaseStatus)} style={control}>
              <option value="">All statuses</option>
              <option value="open">Open</option>
              <option value="in_review">In review</option>
              <option value="monitoring">Monitoring</option>
              <option value="resolved">Resolved</option>
            </select>
            <label className="ar-sr" htmlFor="ar-severity">
              Filter severity
            </label>
            <select id="ar-severity" value={severity} onChange={(e) => setSeverity(e.target.value as '' | Severity)} style={control}>
              <option value="">All severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="none">None</option>
            </select>
          </div>
          <ul className="ar-list">
            {visible.length === 0 ? (
              <li style={{ padding: '24px 18px', fontFamily: SANS, fontSize: 14, color: PALETTE.faint }}>
                No operations match these filters.
              </li>
            ) : (
              visible.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="ar-row"
                    aria-current={c.id === selectedId ? 'true' : undefined}
                    onClick={() => setSelectedId(c.id)}
                  >
                    <span style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, color: PALETTE.ink, textAlign: 'left' }}>
                      {c.title}
                    </span>
                    <Mono size={11.5} color={PALETTE.faint} style={{ textAlign: 'left', wordBreak: 'break-all' }}>
                      {c.operation_ref}
                    </Mono>
                    <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                      <Badge tone={SEVERITY_STYLE[c.severity]}>{c.severity}</Badge>
                      <Badge tone={STATUS_STYLE[c.status]}>{pretty(c.status)}</Badge>
                      <Mono size={11} color={PALETTE.faint}>
                        {c.events.length} events
                      </Mono>
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="ar-panel-foot">
            <Mono size={11} color={PALETTE.faint}>
              All figures are source-reported
            </Mono>
            <button type="button" onClick={reset} style={{ ...button(), padding: '6px 10px', fontSize: 12.5 }}>
              Reset demo
            </button>
          </div>
        </section>

        <section className="ar-panel ar-inspector" aria-label="Case inspection" aria-live="polite">
          {selected ? (
            <>
              <div className="ar-panel-head" style={{ alignItems: 'flex-start' }}>
                <div style={{ minWidth: 0 }}>
                  <Label>Case inspection</Label>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      margin: '6px 0 8px',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {selected.operation_ref}
                  </div>
                  <span style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <Badge tone={SEVERITY_STYLE[selected.severity]}>{selected.severity}</Badge>
                    <Badge tone={STATUS_STYLE[selected.status]}>{pretty(selected.status)}</Badge>
                  </span>
                </div>
                <button type="button" onClick={exportReport} style={{ ...button(), flexShrink: 0 }}>
                  Export JSON
                </button>
              </div>

              <div className="ar-block">
                <Label>Findings · {selected.findings.length}</Label>
                {selected.findings.length ? (
                  selected.findings.map((f) => (
                    <div key={f.code} className="ar-finding" style={{ borderLeftColor: SEVERITY_STYLE[f.severity].fg }}>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ fontFamily: SANS, fontSize: 14.5, fontWeight: 500 }}>{f.title}</span>
                        <Badge tone={SEVERITY_STYLE[f.severity]}>{f.severity}</Badge>
                      </div>
                      <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.muted, margin: '6px 0 4px' }}>
                        {f.detail}
                      </p>
                      <Mono size={11} color={PALETTE.faint} style={{ wordBreak: 'break-all' }}>
                        events: {f.event_ids.join(', ')}
                      </Mono>
                    </div>
                  ))
                ) : (
                  <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, color: PALETTE.faint, margin: '10px 0 0' }}>
                    No exception rules triggered. An absence of findings is not a certification of safety or success.
                  </p>
                )}
              </div>

              <div className="ar-block">
                <Label>Source observations · {selected.events.length}</Label>
                <p style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.6, color: PALETTE.faint, margin: '8px 0 4px' }}>
                  None of these assertions is cryptographically verified here. Local hashes are not issuer signatures.
                </p>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[...selected.events]
                    .sort((a, b) => a.occurred_at.localeCompare(b.occurred_at) || a.event_id.localeCompare(b.event_id))
                    .map((e) => (
                      <li key={e.event_id} className="ar-event">
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                          <Mono size={11} color={PALETTE.muted}>
                            {e.source} · {pretty(e.basis)}
                          </Mono>
                          <Mono size={11} color={PALETTE.faint}>
                            {clock(e.occurred_at)}
                          </Mono>
                        </div>
                        <div style={{ fontFamily: MONO, fontSize: 12.5, color: PALETTE.ink, margin: '6px 0 2px' }}>{pretty(e.kind)}</div>
                        <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: PALETTE.ink }}>{e.summary}</div>
                        <Mono size={10.5} color={PALETTE.faint} style={{ display: 'block', marginTop: 6, wordBreak: 'break-all' }}>
                          issuer {e.issuer}
                          {e.amount_minor ? ` · ${e.currency} ${(Number(e.amount_minor) / 100).toFixed(2)}` : ''}
                          {e.approved_by ? ` · approved_by ${e.approved_by}` : ''} · sha256{' '}
                          {digests[e.event_id] ? `${digests[e.event_id].slice(0, 14)}...` : 'computing'}
                        </Mono>
                      </li>
                    ))}
                </ol>
                <div style={{ marginTop: 14 }}>
                  <Label>Simulate an incoming report</Label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                    {SIMULATIONS.map((s, i) => (
                      <button key={s.label} type="button" onClick={() => simulate(i)} style={{ ...button(), padding: '6px 10px', fontSize: 12.5 }}>
                        + {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ar-block">
                <Label>Case disposition</Label>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    saveDisposition()
                  }}
                  style={{ display: 'grid', gap: 8, marginTop: 10 }}
                >
                  <label htmlFor="ar-disposition" style={{ fontFamily: SANS, fontSize: 12.5, color: PALETTE.muted }}>
                    Status
                  </label>
                  <select
                    id="ar-disposition"
                    value={disposition}
                    onChange={(e) => setDisposition(e.target.value as CaseStatus)}
                    style={control}
                  >
                    <option value="open">Open</option>
                    <option value="in_review">In review</option>
                    <option value="resolved">Resolved</option>
                  </select>
                  <label htmlFor="ar-note" style={{ fontFamily: SANS, fontSize: 12.5, color: PALETTE.muted, marginTop: 4 }}>
                    Operator note or resolution reason
                  </label>
                  <textarea
                    id="ar-note"
                    rows={3}
                    maxLength={1200}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What you reviewed, what remains uncertain, and why the status changes."
                    style={{ ...control, resize: 'vertical', lineHeight: 1.5 }}
                  />
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <button type="submit" style={button(true)}>
                      Save case update
                    </button>
                    {message ? (
                      <span
                        role={message.kind === 'err' ? 'alert' : 'status'}
                        style={{ fontFamily: SANS, fontSize: 13, color: message.kind === 'err' ? RUST : PALETTE.success }}
                      >
                        {message.text}
                      </span>
                    ) : null}
                  </div>
                </form>
              </div>

              <div className="ar-block" style={{ borderBottom: 'none' }}>
                <Label>Activity trail</Label>
                {selected.audit.length ? (
                  <ol style={{ listStyle: 'none', margin: '8px 0 0', padding: 0 }}>
                    {selected.audit.map((a) => (
                      <li key={a.id} style={{ padding: '8px 0', borderTop: `1px solid ${PALETTE.hairline}` }}>
                        <Mono size={11} color={PALETTE.muted}>
                          {pretty(a.action)} · {a.actor} · {clock(a.at)} · {pretty(a.from_status)} to {pretty(a.to_status)}
                        </Mono>
                        <div style={{ fontFamily: SANS, fontSize: 13.5, color: PALETTE.ink, marginTop: 3 }}>{a.note ?? 'No note'}</div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p style={{ fontFamily: SANS, fontSize: 13.5, color: PALETTE.faint, margin: '8px 0 0' }}>No operator activity recorded.</p>
                )}
              </div>
            </>
          ) : (
            <p style={{ padding: 24, fontFamily: SANS, fontSize: 14, color: PALETTE.faint }}>Select a case to inspect it.</p>
          )}
        </section>
      </div>
    </div>
  )
}
