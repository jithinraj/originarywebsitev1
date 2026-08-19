import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'

/**
 * Illustrative diagram: private logs stay on one side of the company
 * boundary; the signed record is the artifact that crosses it.
 */
const LOG_LINES = [
  { label: 'operator log', line: '14:08:11 POST /v1/search 200' },
  { label: 'telemetry', line: 'span 7bc2 latency=412ms' },
  { label: 'dashboard', line: 'metric usage.api +1' },
  { label: 'trace', line: 'parent.span = a4f1d' },
]

const RECORD_ROWS = [
  { label: 'issuer', line: 'support-agent.example' },
  { label: 'action', line: 'customer record updated' },
  { label: 'result', line: 'refunded' },
  { label: 'signature', line: 'a4OuUC8MwrrNyR9r9cj_Fww0…' },
]

export function LogsStayPrivate() {
  return (
    <section
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}` }}
    >
      <SectionTitle
        title="Share the record, not your logs."
        body="Logs are for running your system. PEAC records are built to travel. Send one to a customer, partner, auditor or another service and let them verify it separately."
      />
      <div className="lsp-diagram" style={{ marginTop: 44 }} aria-hidden>
        <div className="lsp-panel">
          <p className="lsp-panel-head">
            Source system <span>private logs stay here</span>
          </p>
          {LOG_LINES.map((r) => (
            <div key={r.label} className="lsp-row">
              <span className="lsp-row-label">{r.label}</span>
              <span className="lsp-row-line">{r.line}</span>
            </div>
          ))}
        </div>
        <div className="lsp-boundary">
          <span>company boundary</span>
        </div>
        <div className="lsp-panel lsp-panel-record">
          <p className="lsp-panel-head">
            Signed record <span className="lsp-travels">travels</span>
          </p>
          {RECORD_ROWS.map((r) => (
            <div key={r.label} className="lsp-row">
              <span className="lsp-row-label">{r.label}</span>
              <span className="lsp-row-line">{r.line}</span>
            </div>
          ))}
          <p className="lsp-recipients">&rarr; customer &middot; partner &middot; auditor &middot; another system</p>
          <p className="lsp-checks">checks the supplied record</p>
        </div>
      </div>
      <p className="lsp-fine" style={{ marginTop: 24 }}>
        No Originary account is required to verify a PEAC record.
      </p>
    </section>
  )
}
