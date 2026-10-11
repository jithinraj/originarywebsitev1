/**
 * Client-side exception rules for the /action-review demonstration.
 *
 * Rules operate on source-reported observations, not independently
 * established facts. All cases are synthetic; nothing leaves the browser.
 */

export type Source = 'agent' | 'company' | 'gateway' | 'payment' | 'collector'
export type Basis = 'direct_observation' | 'upstream_report'
export type Severity = 'critical' | 'high' | 'medium' | 'low' | 'none'
export type CaseStatus = 'monitoring' | 'open' | 'in_review' | 'resolved'

export type ReviewEvent = {
  event_id: string
  source: Source
  issuer: string
  basis: Basis
  kind: string
  occurred_at: string
  summary: string
  revision?: number
  approved_by?: string
  approval_evidence_ref?: string
  amount_minor?: string
  currency?: string
}

export type Finding = {
  code: string
  severity: Severity
  title: string
  detail: string
  event_ids: string[]
}

export type AuditEntry = {
  id: string
  at: string
  actor: string
  action: 'status_changed' | 'note_added' | 'new_event_reopened' | 'event_added'
  note: string | null
  from_status: CaseStatus
  to_status: CaseStatus
}

export type ReviewCase = {
  id: string
  operation_ref: string
  title: string
  status: CaseStatus
  severity: Severity
  findings: Finding[]
  events: ReviewEvent[]
  audit: AuditEntry[]
  updated_at: string
}

const FINAL = new Set(['operation.succeeded', 'operation.failed', 'operation.cancelled', 'operation.expired'])
const RANK: Record<Severity, number> = { critical: 4, high: 3, medium: 2, low: 1, none: 0 }

export const SEVERITY_ORDER: Severity[] = ['critical', 'high', 'medium', 'low', 'none']

/** Fixed review clock so server and browser render identical output. */
export const REVIEW_CLOCK = Date.parse('2026-10-09T16:00:00Z')

export function analyze(events: ReviewEvent[], now = REVIEW_CLOCK) {
  const findings: Finding[] = []
  const add = (code: string, severity: Severity, title: string, detail: string, refs: ReviewEvent[]) =>
    findings.push({ code, severity, title, detail, event_ids: Array.from(new Set(refs.map((e) => e.event_id))) })
  const kinds = (k: string) => events.filter((e) => e.kind === k)

  const failures = kinds('operation.failed')
  if (failures.length)
    add(
      'reported_failure',
      'high',
      'Operation reported failed',
      'At least one source reported failure. This is not an independently verified business outcome.',
      failures,
    )

  const terminal = events.filter((e) => FINAL.has(e.kind))
  const distinctTerminal = Array.from(new Set(terminal.map((e) => e.kind)))
  if (distinctTerminal.length > 1)
    add(
      'conflicting_outcomes',
      'critical',
      'Contradictory final-state reports',
      `The records contain incompatible final states: ${distinctTerminal.map((k) => k.split('.')[1]).join(', ')}. Investigate issuers and chronology.`,
      terminal,
    )

  const denied = kinds('gateway.denied')
  const success = kinds('operation.succeeded')
  if (denied.length && success.length)
    add(
      'policy_outcome_discrepancy',
      'critical',
      'Gateway denial and reported success',
      'A gateway reported denial while a source reported successful execution. Correlation does not show a policy bypass on its own.',
      [...denied, ...success],
    )

  const approvals = events.filter(
    (e) => e.kind.startsWith('operation.') && e.approved_by === 'user' && !e.approval_evidence_ref,
  )
  if (approvals.length)
    add(
      'approval_unsubstantiated',
      'medium',
      'User approval assertion lacks an independent artifact',
      'Agent or company assertions about user approval do not independently establish human consent.',
      approvals,
    )

  const lastProgress = kinds('operation.in_progress').sort(
    (a, b) => Date.parse(b.occurred_at) - Date.parse(a.occurred_at),
  )[0]
  if (
    lastProgress &&
    !terminal.some((e) => Date.parse(e.occurred_at) >= Date.parse(lastProgress.occurred_at)) &&
    now - Date.parse(lastProgress.occurred_at) > 30 * 60_000
  )
    add(
      'unknown_outcome',
      'high',
      'Operation outcome still unknown',
      'A source last reported in progress over 30 minutes ago. A timeout is not a failure.',
      [lastProgress],
    )

  const amounts = events.filter((e) => e.amount_minor !== undefined)
  const currencies = Array.from(new Set(amounts.map((e) => e.currency)))
  if (currencies.length === 1 && new Set(amounts.map((e) => e.amount_minor)).size > 1)
    add(
      'amount_disagreement',
      'medium',
      'Sources reported different amounts',
      'Amounts differ for the same currency. These may be different lifecycle phases; compare semantics before calling this a discrepancy.',
      amounts,
    )

  const rank = Math.max(0, ...findings.map((f) => RANK[f.severity]))
  const severity = SEVERITY_ORDER.find((s) => RANK[s] === rank) ?? 'none'
  return { findings, severity, has_issue: findings.length > 0 }
}

/** Re-run rules after events change; reopens a resolved case when a new event raises an issue. */
export function recompute(c: ReviewCase, at: string, reason?: AuditEntry['action']): ReviewCase {
  const result = analyze(c.events)
  const next: CaseStatus = result.has_issue && (c.status === 'monitoring' || c.status === 'resolved') ? 'open' : c.status
  const audit = [...c.audit]
  if (reason === 'event_added' && c.status === 'resolved' && next === 'open')
    audit.push({
      id: `a-${audit.length + 1}-${at}`,
      at,
      actor: 'system',
      action: 'new_event_reopened',
      note: 'New event arrived after resolution',
      from_status: c.status,
      to_status: next,
    })
  return { ...c, findings: result.findings, severity: result.severity, status: next, audit, updated_at: at }
}

const t = (minutesBeforeClock: number) => new Date(REVIEW_CLOCK - minutesBeforeClock * 60_000).toISOString()

function evt(
  id: string,
  kind: string,
  source: Source,
  summary: string,
  minutes: number,
  extra: Partial<ReviewEvent> = {},
): ReviewEvent {
  return {
    event_id: id,
    kind,
    source,
    summary,
    issuer: `${source}.demo.invalid`,
    basis: 'upstream_report',
    occurred_at: t(minutes),
    ...extra,
  }
}

const SEED: { id: string; operation_ref: string; title: string; events: ReviewEvent[] }[] = [
  {
    id: 'case-1042',
    operation_ref: 'shop.demo.invalid:exc_1042',
    title: 'Exchange jacket for insulated model; $70 additional charge',
    events: [
      evt('exc1042-propose', 'operation.proposed', 'company', 'Exchange jacket for insulated model; $70 additional charge', 64, {
        revision: 1,
        amount_minor: '7000',
        currency: 'USD',
      }),
      evt('exc1042-confirm', 'operation.confirmed', 'agent', 'Agent reported user approval for the revised exchange', 61, {
        revision: 1,
        approved_by: 'user',
      }),
      evt('exc1042-charge', 'payment.captured', 'payment', 'Payment provider reported capture', 58, {
        amount_minor: '7500',
        currency: 'USD',
      }),
      evt('exc1042-success', 'operation.succeeded', 'company', 'Merchant reported exchange successful', 57, { revision: 1 }),
    ],
  },
  {
    id: 'case-88',
    operation_ref: 'acme:workflow-88',
    title: 'Vendor record update after access review',
    events: [
      evt('wf88-gateway', 'gateway.denied', 'gateway', 'Gateway reported access denied for vendor.update', 41),
      evt('wf88-company', 'operation.succeeded', 'company', 'Downstream service reported success despite the denied gateway request', 39),
    ],
  },
  {
    id: 'case-92',
    operation_ref: 'acme:workflow-92',
    title: 'Subscription cancellation',
    events: [
      evt('wf92-propose', 'operation.proposed', 'agent', 'Agent proposed cancelling the annual subscription', 35),
      evt('wf92-fail', 'operation.failed', 'company', 'Subscription cancellation failed due to timeout', 33),
    ],
  },
  {
    id: 'case-97',
    operation_ref: 'acme:workflow-97',
    title: 'Order cancellation with conflicting final states',
    events: [
      evt('wf97-cancel', 'operation.cancelled', 'agent', 'Agent reported the order cancelled', 29),
      evt('wf97-success', 'operation.succeeded', 'company', 'Fulfilment service reported the order shipped', 26),
    ],
  },
  {
    id: 'case-110',
    operation_ref: 'acme:workflow-110',
    title: 'Change reservation date to November 12',
    events: [
      evt('wf110-propose', 'operation.proposed', 'company', 'Change reservation date to November 12', 22),
      evt('wf110-success', 'operation.succeeded', 'company', 'Reservation date updated', 20),
    ],
  },
  {
    id: 'case-111',
    operation_ref: 'acme:workflow-111',
    title: 'Refund submitted; downstream result unknown',
    events: [evt('wf111-pending', 'operation.in_progress', 'company', 'Refund submitted; downstream result unknown', 90)],
  },
  {
    id: 'case-115',
    operation_ref: 'acme:workflow-115',
    title: 'Read-only account lookup',
    events: [evt('wf115-gateway', 'gateway.allowed', 'gateway', 'Gateway reported allow for read', 12)],
  },
]

export function seedCases(): ReviewCase[] {
  return SEED.map((s) => {
    const updated = s.events.map((e) => e.occurred_at).sort().slice(-1)[0] ?? t(0)
    return recompute(
      { ...s, status: 'monitoring', severity: 'none', findings: [], audit: [], updated_at: updated },
      updated,
    )
  })
}

export function sortCases(cases: ReviewCase[]) {
  return [...cases].sort(
    (a, b) => RANK[b.severity] - RANK[a.severity] || b.updated_at.localeCompare(a.updated_at) || a.id.localeCompare(b.id),
  )
}

/** Simulated incoming reports a visitor can add to the selected case. */
export const SIMULATIONS: { label: string; kind: string; source: Source; summary: string; extra?: Partial<ReviewEvent> }[] = [
  { label: 'Company reports success', kind: 'operation.succeeded', source: 'company', summary: 'Company reported the operation succeeded' },
  { label: 'Company reports failure', kind: 'operation.failed', source: 'company', summary: 'Company reported the operation failed' },
  { label: 'Gateway reports deny', kind: 'gateway.denied', source: 'gateway', summary: 'Gateway reported access denied' },
  {
    label: 'Agent asserts user approval',
    kind: 'operation.confirmed',
    source: 'agent',
    summary: 'Agent reported the user approved',
    extra: { approved_by: 'user' },
  },
]

export async function sha256Hex(value: unknown): Promise<string> {
  const ordered = (v: unknown): unknown =>
    Array.isArray(v)
      ? v.map(ordered)
      : v && typeof v === 'object'
        ? Object.fromEntries(
            Object.keys(v as Record<string, unknown>)
              .sort()
              .map((k) => [k, ordered((v as Record<string, unknown>)[k])]),
          )
        : v
  const bytes = new TextEncoder().encode(JSON.stringify(ordered(value)))
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('')
}
