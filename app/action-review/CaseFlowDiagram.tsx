import { PALETTE } from '@/components/home/palette'
import { SANS } from '@/components/home/typography'
import { Mono } from '@/components/home/atoms/Mono'

const SOURCES = [
  ['agent', 'proposed, confirmed'],
  ['company', 'succeeded, failed'],
  ['gateway', 'allowed, denied'],
  ['payment', 'authorized, captured'],
]
const RULES = ['reported failure', 'conflicting outcomes', 'gateway vs result', 'unsupported approval', 'unknown outcome', 'amount disagreement']

function Stage({ step, title, children, ink = false }: { step: string; title: string; children: React.ReactNode; ink?: boolean }) {
  return (
    <div className={`ard-stage${ink ? ' ink' : ''}`}>
      <Mono size={10.5} color={ink ? 'var(--on-dark-muted)' : PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
        {step}
      </Mono>
      <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em', margin: '8px 0 12px', color: ink ? PALETTE.onDark : PALETTE.ink }}>
        {title}
      </div>
      {children}
    </div>
  )
}

/**
 * How a case forms: source reports fan in, are correlated by operation
 * reference, run through the rules, and become a case a person decides on.
 * HTML rather than SVG so text stays crisp and the flow reflows on phones.
 */
export function CaseFlowDiagram() {
  return (
    <figure
      className="ard"
      aria-label="Diagram: reports from agents, companies, gateways and payment providers are grouped by operation reference, checked by six exception rules, and become a case that a reviewer decides on and can export."
      style={{ margin: 0 }}
    >
      <Stage step="01 · Sources report" title="Separate systems, separate claims">
        <ul className="ard-chips">
          {SOURCES.map(([name, kinds]) => (
            <li key={name}>
              <Mono size={11.5} color={PALETTE.ink}>
                {name}
              </Mono>
              <Mono size={10.5} color={PALETTE.faint}>
                {kinds}
              </Mono>
            </li>
          ))}
        </ul>
      </Stage>
      <span className="ard-arrow" aria-hidden />
      <Stage step="02 · Correlate" title="One operation, every report">
        <div className="ard-ref">
          <Mono size={11.5} color={PALETTE.ink}>
            operation_ref
          </Mono>
          <Mono size={10.5} color={PALETTE.faint}>
            acme:workflow-88
          </Mono>
        </div>
        <p className="ard-note">Each report keeps its issuer, basis and timestamp. Nothing is merged or overwritten.</p>
      </Stage>
      <span className="ard-arrow" aria-hidden />
      <Stage step="03 · Check" title="Six exception rules">
        <ol className="ard-rules">
          {RULES.map((r, i) => (
            <li key={r}>
              <Mono size={10.5} color={PALETTE.faint}>
                {String(i + 1).padStart(2, '0')}
              </Mono>
              <Mono size={11} color={PALETTE.ink}>
                {r}
              </Mono>
            </li>
          ))}
        </ol>
      </Stage>
      <span className="ard-arrow" aria-hidden />
      <Stage step="04 · Decide" title="A case a person resolves" ink>
        <div className="ard-states">
          {['open', 'in review', 'resolved'].map((s, i) => (
            <span key={s} className={`ard-state s${i}`}>
              {s}
            </span>
          ))}
        </div>
        <p className="ard-note on-ink">Every status change carries the reviewer&apos;s reason in the activity trail.</p>
      </Stage>
      <span className="ard-arrow" aria-hidden />
      <Stage step="05 · Hand off" title="Export what was found">
        <div className="ard-out">
          <Mono size={11} color={PALETTE.ink}>
            case report (JSON)
          </Mono>
          <Mono size={10.5} color={PALETTE.faint}>
            unsigned, source-attributed
          </Mono>
        </div>
        <div className="ard-out dashed">
          <Mono size={11} color={PALETTE.ink}>
            evidence case
          </Mono>
          <Mono size={10.5} color={PALETTE.faint}>
            signed records, when required
          </Mono>
        </div>
      </Stage>
    </figure>
  )
}
