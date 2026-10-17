import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'
import { LogStream } from './motion/LogStream'

/**
 * Illustrative diagram: private logs stay on one side of the company
 * boundary; the signed record is the artifact that crosses it. Below it, the
 * four people or systems the record travels to, each with the moment it
 * matters.
 */
const RECORD_ROWS = [
  { label: 'Issuer', line: 'support-agent.example' },
  { label: 'Action', line: 'customer record updated' },
  { label: 'Result', line: 'refunded' },
  { label: 'Signature', line: 'Ed25519 a4OuUC8MwrrNyR9r…' },
]

const DESTINATIONS = [
  {
    who: 'Your team',
    q: 'An incident happens.',
    a: 'See what the system recorded without rebuilding the story from separate logs.',
  },
  {
    who: 'A customer',
    q: 'A customer asks what changed.',
    a: 'Send a record they can inspect instead of screenshots from your dashboard.',
  },
  {
    who: 'An auditor',
    q: 'An auditor asks for evidence.',
    a: 'Share the relevant records without opening production systems.',
  },
  {
    who: 'Another system',
    q: 'Two systems disagree.',
    a: "Compare what each one recorded instead of relying on either side's private log.",
  },
]

export function LogsStayPrivate() {
  return (
    <section
      className="hx-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <SectionHead
        eyebrow="Share"
        title="Share the record,"
        qualifier="not your logs."
        body="Your logs stay inside your system. You send the signed record to whoever needs it, and they check it with your public key."
      />

      <div className="lsp-diagram" aria-hidden>
        <div className="lsp-side">
          <p className="lsp-side-head">
            Your system <span>stays here</span>
          </p>
          <LogStream />
        </div>
        <div className="lsp-boundary">
          <span className="lsp-boundary-label">company boundary</span>
          <span className="lsp-cross">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12h15m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="lsp-side lsp-side-out">
          <p className="lsp-side-head">
            Signed record <span>is sent out</span>
          </p>
          <div className="rc rc-compact">
            <dl className="rc-fields rc-fields-1">
              {RECORD_ROWS.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.line}</dd>
                </div>
              ))}
            </dl>
            <p className="rc-compact-foot">Anyone with the issuer&apos;s public key can verify it.</p>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Operator logs, telemetry, dashboards and traces stay inside your system. Only the signed record crosses the
        company boundary.
      </p>

      <ul className="lsp-dest" role="list">
        {DESTINATIONS.map((d) => (
          <li key={d.who}>
            <p className="lsp-dest-who">{d.who}</p>
            <p className="lsp-dest-q">{d.q}</p>
            <p className="lsp-dest-a">{d.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
