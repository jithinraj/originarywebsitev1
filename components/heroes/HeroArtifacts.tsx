/**
 * Hero artifacts: one per page, so every opening shows something true about
 * the page in the same visual language (record cards, mono fields, one cobalt
 * element). CSS lives in components/home/home.css under "Hero artifacts".
 * All motion is a one-shot entrance; reduced motion shows the final state.
 */

function Check() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="8" cy="8" r="6.5" />
      <path d="m5.2 8.2 1.9 1.9 3.8-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** /records: three different record types, one shape, fanned like a deck. */
export function RecordDeck() {
  const cards: Array<{ type: string; rows: Array<[string, string]> }> = [
    { type: 'Payment event', rows: [['event', 'authorized'], ['mandate', 'sha256:77ab90…'], ['time', '14:08:12Z']] },
    { type: 'Gateway decision', rows: [['request', 'export_billing'], ['result', 'denied'], ['time', '14:10:40Z']] },
    { type: 'MCP tool run', rows: [['tool', 'search_docs'], ['result', 'ok'], ['time', '14:08:11Z']] },
  ]
  return (
    <div className="ha-deck" aria-label="Three record types with the same shape: MCP tool run, gateway decision, payment event">
      {cards.map((c, i) => (
        <div className="ha-card ha-deck-card" key={c.type} style={{ ['--ha-i' as string]: i }}>
          <p className="ha-card-head">
            <span>{c.type}</span>
            <span className="ha-ok">
              <Check /> signed
            </span>
          </p>
          <dl className="ha-rows">
            {c.rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
            <div>
              <dt>signature</dt>
              <dd>Ed25519</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  )
}

/** /agentic-commerce: the payment rail's own artifact, linked to the record of the call it paid for. */
export function PaymentLink() {
  return (
    <div className="ha-link" aria-label="A payment artifact from the payment rail, linked to the signed record of the API call it paid for">
      <div className="ha-card ha-link-a">
        <p className="ha-card-head">
          <span>Payment artifact</span>
          <span className="ha-muted">from the payment rail</span>
        </p>
        <dl className="ha-rows">
          <div>
            <dt>state</dt>
            <dd>authorized</dd>
          </div>
          <div>
            <dt>reference</dt>
            <dd>pay_8f21…</dd>
          </div>
        </dl>
      </div>
      <div className="ha-link-join" aria-hidden>
        <span className="ha-link-line" />
        <span className="ha-link-node">same call</span>
      </div>
      <div className="ha-card ha-link-b">
        <p className="ha-card-head">
          <span>Service record</span>
          <span className="ha-ok">
            <Check /> signed
          </span>
        </p>
        <dl className="ha-rows">
          <div>
            <dt>action</dt>
            <dd>POST /v1/market-data/search</dd>
          </div>
          <div>
            <dt>result</dt>
            <dd>200</dd>
          </div>
          <div>
            <dt>payment ref</dt>
            <dd>pay_8f21…</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

/** /provisioning-records: a stream of infrastructure events, each one a record. */
export function EventStream() {
  const events: Array<[string, string, string]> = [
    ['03:00:00Z', 'credential.rotated', 'deploy-key-7'],
    ['02:58:41Z', 'deployment.created', 'web@a41f2c'],
    ['02:57:10Z', 'account.created', 'svc-reporting'],
    ['02:55:02Z', 'budget.changed', 'team-data +$200'],
    ['02:51:30Z', 'subscription.started', 'search-api'],
  ]
  return (
    <div className="ha-card ha-stream" aria-label="Provisioning events, each issued as a signed record">
      <p className="ha-card-head">
        <span>Provisioning events</span>
        <span className="ha-muted">release-pipeline</span>
      </p>
      <ol className="ha-stream-list" role="list">
        {events.map(([t, e, r], i) => (
          <li key={e} style={{ ['--ha-i' as string]: i }} data-first={i === 0 ? '' : undefined}>
            <span className="ha-stream-t">{t}</span>
            <span className="ha-stream-e">{e}</span>
            <span className="ha-stream-r">{r}</span>
            <span className="ha-ok ha-stream-ok">
              <Check />
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** /how-it-works: the path a record takes, drawn once. */
export function RecordPath() {
  const stops: Array<[string, string]> = [
    ['Your system', 'observes the action'],
    ['Signed record', 'facts, policy, result, time, issuer, signature'],
    ['Their machine', 'checks it offline'],
  ]
  return (
    <div className="ha-path" aria-label="Your system signs a record; it travels to the other party, who checks it offline">
      <span className="ha-path-line" aria-hidden />
      <ol className="ha-path-list" role="list">
        {stops.map(([t, s], i) => (
          <li key={t} style={{ ['--ha-i' as string]: i }} data-record={i === 1 ? '' : undefined}>
            <span className="ha-path-dot" aria-hidden />
            <span className="ha-path-t">{t}</span>
            <span className="ha-path-s">{s}</span>
          </li>
        ))}
      </ol>
      <p className="ha-path-result">
        <Check /> Signature valid, offline
      </p>
    </div>
  )
}

/** /trust: the four answers a reviewer asks first. */
export function TrustGlance({ items }: { items: Array<[string, string, string]> }) {
  return (
    <dl className="ha-card ha-glance" aria-label="Trust at a glance">
      {items.map(([k, v, n], i) => (
        <div key={k} style={{ ['--ha-i' as string]: i }}>
          <dt>{k}</dt>
          <dd>
            <span className="ha-glance-v">{v}</span>
            <span className="ha-glance-n">{n}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** /security: how to report, at a glance. */
export function ReportCard() {
  const rows: Array<[string, React.ReactNode]> = [
    ['email', <a key="e" href="mailto:security@originary.xyz">security@originary.xyz</a>],
    ['machine-readable', <a key="s" href="/.well-known/security.txt">security.txt</a>],
    ['acknowledged', 'within 5 business days'],
    ['bounty', 'none; public credit and our thanks'],
  ]
  return (
    <div className="ha-card ha-report" aria-label="How to report a vulnerability">
      <p className="ha-card-head">
        <span>Report a vulnerability</span>
        <span className="ha-muted">coordinated disclosure</span>
      </p>
      <dl className="ha-rows ha-rows-wide">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/** /evidence-case: the case at a glance, counts taken from the page's own findings. */
export function CaseSummary({ established, missing, notEvaluated }: { established: number; missing: number; notEvaluated: number }) {
  return (
    <div className="ha-card ha-case" aria-label="Illustrative evidence case: what a reviewer can conclude">
      <p className="ha-card-head">
        <span>Reviewer conclusions</span>
        <span className="ha-muted">illustrative case</span>
      </p>
      <dl className="ha-rows ha-rows-wide">
        <div>
          <dt>question</dt>
          <dd>Was the paid MCP tool call delivered?</dd>
        </div>
        <div>
          <dt>established</dt>
          <dd className="ha-c-ok">{established} conclusions</dd>
        </div>
        <div>
          <dt>missing</dt>
          <dd className="ha-c-miss">{missing} gaps</dd>
        </div>
        <div>
          <dt>not evaluated</dt>
          <dd className="ha-c-none">{notEvaluated} open questions</dd>
        </div>
      </dl>
    </div>
  )
}
