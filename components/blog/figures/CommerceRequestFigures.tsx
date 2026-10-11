import { PALETTE } from '@/components/home'
import {
  T,
  Box,
  Arrow,
  Bracket,
  Tick,
  SLATE,
  SAGE,
  AMBER,
  FAINT,
  MUTED,
  SLATE_WASH,
  SAGE_WASH,
  AMBER_WASH,
  svgStyle,
} from './svg-kit'

/**
 * fig. 01 for "The agent paid. What did it receive?": the seven parts of a
 * paid API purchase, each with the party whose evidence answers it. Payment
 * is one question; fulfillment is four more.
 */
export function PurchaseParts() {
  const parts: Array<{ name: string; who: [string, string] }> = [
    { name: 'OFFER', who: ['presented', 'terms'] },
    { name: 'AUTHORITY', who: ['caller’s', 'permission'] },
    { name: 'PAYMENT', who: ['payment', 'system'] },
    { name: 'PRODUCTION', who: ['API provider', ''] },
    { name: 'TRANSMISSION', who: ['API provider', ''] },
    { name: 'RECEIPT', who: ['buyer', ''] },
    { name: 'ACCEPTANCE', who: ['agreed', 'criteria'] },
  ]
  const W = 98
  const X = (i: number) => 4 + i * 102
  const y = 66
  const h = 44
  const shape = (x: number, first: boolean) =>
    `M ${x} ${y} H ${x + W - 10} L ${x + W} ${y + h / 2} L ${x + W - 10} ${y + h} H ${x} ${
      first ? '' : `L ${x + 10} ${y + h / 2} `
    }Z`
  return (
    <svg
      viewBox="0 0 720 168"
      fill="none"
      role="img"
      aria-label="Seven parts of a paid API purchase: offer, authority, payment, production, transmission, receipt, and acceptance. Payment is answered by the payment system. Production and transmission are reported by the API provider, receipt by the buyer, and acceptance against agreed criteria. Fulfillment needs its own evidence."
      style={svgStyle()}
    >
      <Bracket x1={4} x2={200} y={40} label="CONTEXT" color={FAINT} step={1} />
      <Bracket x1={208} x2={306} y={40} label="PAYMENT" color={SLATE} step={2} />
      <Bracket x1={310} x2={714} y={40} label="FULFILLMENT NEEDS ITS OWN EVIDENCE" color={MUTED} step={4} />
      {parts.map((p, i) => {
        const x = X(i)
        const pay = p.name === 'PAYMENT'
        const step = Math.min(i + 1, 6)
        return (
          <g key={p.name}>
            <path
              d={shape(x, i === 0)}
              stroke={pay ? SLATE : PALETTE.ink}
              strokeWidth="1.25"
              fill={pay ? SLATE_WASH : PALETTE.paper}
              className={`fig-fade fig-step-${step}`}
            />
            <T x={x + W / 2 + (i === 0 ? -2 : 3)} y={y + h / 2 + 4} size={9} color={pay ? SLATE : PALETTE.ink} step={step}>
              {p.name}
            </T>
            <T x={x + W / 2} y={y + h + 24} sans size={11} step={step}>
              {p.who[0]}
            </T>
            {p.who[1] ? (
              <T x={x + W / 2} y={y + h + 38} sans size={11} step={step}>
                {p.who[1]}
              </T>
            ) : null}
          </g>
        )
      })}
    </svg>
  )
}

/**
 * fig. 01 for "Your next customer may be an agent": one possible status
 * model for a delegated request. A polite acknowledgment lands at Received;
 * Completed is reported only by the system responsible for the outcome.
 */
export function DelegatedRequestStatus() {
  const main: Array<{ x: number; label: string; done?: boolean }> = [
    { x: 8, label: 'RECEIVED' },
    { x: 196, label: 'ACCEPTED' },
    { x: 384, label: 'IN PROGRESS' },
    { x: 564, label: 'COMPLETED', done: true },
  ]
  const Y = 118
  const H = 46
  return (
    <svg
      viewBox="0 0 720 286"
      fill="none"
      role="img"
      aria-label="Status model: Received, then Accepted, then In progress, then Completed. From Received the request can move to Needs information, which returns to Accepted. Received, Accepted, and In progress can each end in Rejected or failed. A polite acknowledgment lands at Received, not Completed. Completed is reported by the responsible system."
      style={svgStyle()}
    >
      {/* Needs information loop */}
      <Box x={60} y={22} w={190} h={42} stroke={SLATE} fill={SLATE_WASH} step={2} />
      <T x={155} y={47} color={SLATE} step={2}>
        NEEDS INFORMATION
      </T>
      <Arrow x1={100} y1={Y} x2={100} y2={66} step={2} />
      <Arrow x1={230} y1={64} x2={230} y2={Y - 2} step={3} />

      {main.map((s, i) => (
        <g key={s.label}>
          <Box
            x={s.x}
            y={Y}
            w={150}
            h={H}
            stroke={s.done ? SAGE : PALETTE.ink}
            fill={s.done ? SAGE_WASH : PALETTE.paper}
            step={i + 1}
          />
          <T x={s.x + 75} y={Y + 27} color={s.done ? SAGE : PALETTE.ink} step={i + 1}>
            {s.label}
          </T>
          {s.done ? <Tick x={s.x + 134} y={Y + 14} step={i + 1} /> : null}
          {i < main.length - 1 ? (
            <Arrow x1={s.x + 150} y1={Y + H / 2} x2={main[i + 1].x - 2} y2={Y + H / 2} step={i + 1} />
          ) : null}
        </g>
      ))}

      {/* Rejected or failed */}
      <path d={`M 40 ${Y + H} V 246 H 288`} stroke={AMBER} strokeWidth="1.25" fill="none" pathLength={1} className="fig-draw fig-step-5" />
      <path d="M 282 241 L 288 246 L 282 251" stroke={AMBER} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="fig-fade fig-step-5" />
      <Arrow x1={320} y1={Y + H} x2={320} y2={224} color={AMBER} step={5} />
      <Arrow x1={430} y1={Y + H} x2={430} y2={224} color={AMBER} step={5} />
      <Box x={290} y={226} w={180} h={40} stroke={AMBER} fill={AMBER_WASH} step={5} />
      <T x={380} y={250} color={AMBER} step={5}>
        REJECTED OR FAILED
      </T>
      <T x={380} y={282} sans size={11} step={5}>
        with a reason and any available next step
      </T>

      {/* Annotations */}
      <T x={58} y={190} sans size={11} anchor="start" color={AMBER} step={6}>
        &ldquo;We&rsquo;ve received your request&rdquo;
      </T>
      <T x={58} y={204} sans size={11} anchor="start" color={AMBER} step={6}>
        lands here, not at Completed
      </T>
      <T x={639} y={188} sans size={11} color={SAGE} step={6}>
        reported by the system
      </T>
      <T x={639} y={202} sans size={11} color={SAGE} step={6}>
        that owns the outcome
      </T>
    </svg>
  )
}

/**
 * fig. 02: three observers of one cancellation. Only the billing system has
 * the perspective to report whether renewal was disabled; the support ticket
 * and the agent's acknowledgment are useful but different statements.
 */
export function CompletionPerspectives() {
  const rows: Array<{ source: string; says: string; kind: string; ok?: boolean }> = [
    { source: 'BILLING SYSTEM', says: 'renewal disabled from a date', kind: 'OWNS THE OUTCOME', ok: true },
    { source: 'SUPPORT SYSTEM', says: 'ticket opened', kind: 'USEFUL, DIFFERENT PERSPECTIVE' },
    { source: 'CUSTOMER’S AGENT', says: 'reply received', kind: 'USEFUL, DIFFERENT PERSPECTIVE' },
  ]
  const entry = [92, 110, 128]
  return (
    <svg
      viewBox="0 0 720 214"
      fill="none"
      role="img"
      aria-label="Three observers of a subscription cancellation. The billing system can report renewal disabled from a date and owns the outcome. The support system can report a ticket opened, and the customer's agent can report a reply received; both are useful but come from a different perspective. Only the billing system answers whether renewal is disabled."
      style={svgStyle()}
    >
      {rows.map((r, i) => {
        const y = 14 + i * 68
        const mid = y + 25
        const step = i + 1
        const color = r.ok ? SAGE : FAINT
        const route =
          mid === entry[i] ? `M 410 ${mid} H 488` : `M 410 ${mid} H 450 V ${entry[i]} H 488`
        return (
          <g key={r.source}>
            <Box x={8} y={y} w={176} h={50} stroke={r.ok ? SAGE : PALETTE.ink} fill={r.ok ? SAGE_WASH : PALETTE.paper} step={step} />
            <T x={96} y={mid + 4} color={r.ok ? SAGE : PALETTE.ink} step={step}>
              {r.source}
            </T>
            <T x={202} y={mid} sans size={12.5} anchor="start" color={PALETTE.ink} step={step}>
              {r.says}
            </T>
            <T x={202} y={mid + 16} size={8.5} anchor="start" color={color} step={step}>
              {r.kind}
            </T>
            <path
              d={route}
              stroke={color}
              strokeWidth="1.25"
              strokeDasharray={r.ok ? undefined : '4 3'}
              fill="none"
              className={`fig-fade fig-step-${step + 2}`}
            />
            <Arrow x1={488} y1={entry[i]} x2={498} y2={entry[i]} color={color} step={step + 2} />
          </g>
        )
      })}
      <Box x={500} y={66} w={212} h={84} stroke={PALETTE.ink} step={6} />
      <T x={606} y={100} step={6}>
        IS RENEWAL DISABLED?
      </T>
      <T x={606} y={120} sans size={12} step={6}>
        for this subscription
      </T>
      <Tick x={690} y={84} step={6} />
    </svg>
  )
}
