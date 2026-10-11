import { PALETTE } from '@/components/home'
import {
  T,
  Box,
  Arrow,
  Bracket,
  Cross,
  SLATE,
  SAGE,
  AMBER,
  FAINT,
  HAIR,
  AMBER_WASH,
  svgStyle,
} from './svg-kit'

/**
 * fig. 01 for "An MCP tool call can succeed while the job is unfinished":
 * five events in the refund example, each with the system that can report
 * it. The evidence supports the first three; the agent's summary claimed all
 * five.
 */
export function RefundEvidenceLevels() {
  const nodes: Array<{ source: string; title: [string, string]; note: [string, string]; later?: boolean }> = [
    { source: 'APPROVAL SYSTEM', title: ['APPROVAL', 'ISSUED'], note: ['refund permitted for', 'an order and amount'] },
    { source: 'TOOL SERVER', title: ['TOOL', 'INVOKED'], note: ['arguments received', 'by the tool server'] },
    { source: 'TOOL SERVER', title: ['REFUND ID', 'RETURNED'], note: ['provider accepted the', 'request for processing'] },
    { source: 'PAYMENT PROVIDER', title: ['REFUND', 'STATUS'], note: ['reported later', 'by the provider'], later: true },
    { source: 'CUSTOMER', title: ['FUNDS', 'ARRIVE'], note: ['no evidence', 'in this record'], later: true },
  ]
  const X = (i: number) => 4 + i * 147
  return (
    <svg
      viewBox="0 0 720 214"
      fill="none"
      role="img"
      aria-label="Five events in a refund: approval issued by the approval system, tool invoked, refund ID returned by the tool server, refund status reported later by the payment provider, and funds arriving for the customer. Evidence supports the first three. The agent's summary, refund complete, claimed all five."
      style={svgStyle()}
    >
      <Bracket x1={4} x2={714} y={18} label="AGENT TOLD THE CUSTOMER: REFUND COMPLETE" color={AMBER} dashed below={false} step={6} />
      <Bracket x1={4} x2={420} y={56} label="EVIDENCE SUPPORTS: REFUND REQUEST ACCEPTED" color={SAGE} step={4} />

      {nodes.map((n, i) => {
        const x = X(i)
        const cx = x + 61
        const step = Math.min(i + 1, 5)
        return (
          <g key={n.title.join('-')}>
            {i < nodes.length - 1 ? (
              <Arrow
                x1={x + 122}
                y1={127}
                x2={X(i + 1) - 2}
                y2={127}
                color={i >= 2 ? FAINT : SLATE}
                dashed={i >= 2}
                step={step}
              />
            ) : null}
            <T x={cx} y={90} size={9} color={FAINT} step={step}>
              {n.source}
            </T>
            <Box
              x={x}
              y={100}
              w={122}
              h={54}
              stroke={n.later ? FAINT : PALETTE.ink}
              fill={n.later ? PALETTE.bg : i === 2 ? 'rgba(74, 116, 89, 0.08)' : PALETTE.paper}
              dashed={n.later}
              step={step}
            />
            <T x={cx} y={123} color={n.later ? FAINT : PALETTE.ink} step={step}>
              {n.title[0]}
            </T>
            <T x={cx} y={139} color={n.later ? FAINT : PALETTE.ink} step={step}>
              {n.title[1]}
            </T>
            <T x={cx} y={178} sans size={11} step={step}>
              {n.note[0]}
            </T>
            <T x={cx} y={193} sans size={11} step={step}>
              {n.note[1]}
            </T>
          </g>
        )
      })}
    </svg>
  )
}

/**
 * fig. 02: a timeout followed by a retry. The first response is lost, so the
 * agent sees an unknown result; both attempts stay linked to one operation,
 * and only the provider's state and retry semantics resolve the count.
 */
export function TimeoutRetrySequence() {
  const AG = 140
  const TS = 350
  const PR = 540
  const lanes: Array<[number, string]> = [
    [AG, 'AGENT'],
    [TS, 'TOOL SERVER'],
    [PR, 'PROVIDER'],
  ]
  const msg = (y: number, from: number, to: number, label: string, color: string = SLATE, dashed = false, step = 1) => (
    <g>
      <Arrow x1={from} y1={y} x2={to + (to > from ? -2 : 2)} y2={y} color={color} dashed={dashed} step={step} />
      <T x={(from + to) / 2} y={y - 6} sans size={11} color={color === SLATE ? PALETTE.muted : color} step={step}>
        {label}
      </T>
    </g>
  )
  return (
    <svg
      viewBox="0 0 720 274"
      fill="none"
      role="img"
      aria-label="Sequence: attempt one sends a refund request through the tool server to the provider. The provider's response is lost and the agent receives a timeout with an unknown result. Attempt two retries the same operation and the provider returns a refund ID. Whether one or two refunds exist is resolved by provider state and retry rules, not by either attempt alone."
      style={svgStyle()}
    >
      {lanes.map(([x, label]) => (
        <g key={label}>
          <Box x={x - 62} y={10} w={124} h={28} step={1} />
          <T x={x} y={28} step={1}>
            {label}
          </T>
          <path d={`M ${x} 38 V 252`} stroke={HAIR} strokeWidth="1.25" strokeDasharray="3 4" />
        </g>
      ))}

      {/* Operation bracket */}
      <path d="M 30 62 H 22 V 240 H 30" stroke={SLATE} strokeWidth="1.25" className="fig-fade fig-step-1" />
      <T x={38} y={80} anchor="start" size={9} color={SLATE} step={1}>
        ATTEMPT 1
      </T>
      <T x={38} y={190} anchor="start" size={9} color={SLATE} step={4}>
        ATTEMPT 2
      </T>
      <T x={14} y={264} anchor="start" size={9} color={SLATE} step={5}>
        ONE OPERATION REFERENCE, TWO ATTEMPT REFERENCES
      </T>

      {msg(78, AG, TS, 'invoke refund', SLATE, false, 1)}
      {msg(102, TS, PR, 'refund request', SLATE, false, 2)}
      {msg(126, PR, TS, 'response lost', AMBER, true, 3)}
      <Cross x={372} y={126} step={3} />
      {msg(152, TS, AG, 'timeout: result unknown', AMBER, false, 3)}

      {msg(192, AG, TS, 'retry, same operation', SLATE, false, 4)}
      {msg(216, TS, PR, 'refund request', SLATE, false, 5)}
      {msg(240, PR, TS, 'refund id', SLATE, false, 5)}

      {/* Unresolved provider state */}
      <Box x={566} y={140} w={148} h={64} stroke={AMBER} fill={AMBER_WASH} dashed step={6} />
      <T x={640} y={164} color={AMBER} step={6}>
        ONE REFUND OR TWO?
      </T>
      <T x={640} y={180} sans size={10.5} step={6}>
        provider state and retry
      </T>
      <T x={640} y={194} sans size={10.5} step={6}>
        rules decide, not the log
      </T>
      <path d="M 548 170 H 564" stroke={AMBER} strokeWidth="1.25" strokeDasharray="3 3" className="fig-fade fig-step-6" />

    </svg>
  )
}
