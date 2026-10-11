import { PALETTE } from '@/components/home'
import {
  T,
  Box,
  Arrow,
  Key,
  SLATE,
  AMBER,
  FAINT,
  HAIR,
  SLATE_WASH,
  AMBER_WASH,
  svgStyle,
} from './svg-kit'

/**
 * fig. 01 for "When a customer asks why your AI gateway allowed a request":
 * three observation points, three different statements. The policy decision
 * and the enforcement action may share a deployment but keep distinct
 * meanings; the destination's observation is a separate claim that was not
 * supplied in this hypothetical case.
 */
export function GatewayObservationPoints() {
  const cols: Array<{
    x: number
    q: string
    head: string
    lines: [string, string, string]
    kind: string
    open?: boolean
  }> = [
    {
      x: 8,
      q: 'What did policy evaluation return?',
      head: 'POLICY DECISION POINT',
      lines: ['returned: allow', 'policy revision r17', 'classification as received'],
      kind: 'DECISION',
    },
    {
      x: 252,
      q: 'What did the gateway do?',
      head: 'ENFORCEMENT POINT',
      lines: ['reported action:', 'forwarded', 'plus any content changes'],
      kind: 'ENFORCEMENT CLAIM',
    },
    {
      x: 496,
      q: 'What did the destination receive?',
      head: 'DESTINATION',
      lines: ['receipt observation:', 'not supplied', 'question stays open'],
      kind: 'RECEIVER CLAIM',
      open: true,
    },
  ]
  return (
    <svg
      viewBox="0 0 720 280"
      fill="none"
      role="img"
      aria-label="Three observation points. The policy decision point returned allow under policy revision r17. The enforcement point reported forwarding the request, plus any content changes it made. The destination's receipt observation was not supplied, so that question stays open. The first two may be one deployment but are still two statements. Finding: allow under revision r17, forwarded, downstream receipt not supplied."
      style={svgStyle()}
    >
      <rect x={2} y={36} width={472} height={180} stroke={HAIR} strokeWidth="1.25" strokeDasharray="3 4" fill="none" />
      <T x={238} y={232} size={9} color={FAINT} step={4}>
        MAY BE ONE DEPLOYMENT; STILL TWO STATEMENTS
      </T>

      {cols.map((c, i) => {
        const cx = c.x + 108
        const color = c.open ? AMBER : SLATE
        const step = i * 2 + 1
        return (
          <g key={c.head}>
            <T x={cx} y={26} sans size={12} color={PALETTE.ink} step={step}>
              {c.q}
            </T>
            <Box x={c.x} y={44} w={216} h={32} fill={PALETTE.paper} step={step} />
            <T x={cx} y={64} step={step}>
              {c.head}
            </T>
            <Box
              x={c.x}
              y={86}
              w={216}
              h={86}
              stroke={color}
              fill={c.open ? AMBER_WASH : SLATE_WASH}
              dashed={c.open}
              step={step + 1}
            />
            {c.lines.map((l, j) => (
              <T
                key={l}
                x={cx}
                y={112 + j * 20}
                sans
                size={12}
                color={j === 1 ? (c.open ? AMBER : PALETTE.ink) : PALETTE.muted}
                weight={j === 1 ? 500 : undefined}
                step={step + 1}
              >
                {l}
              </T>
            ))}
            <T x={cx} y={194} size={9} color={color} step={step + 1}>
              {c.kind}
            </T>
            {i < cols.length - 1 ? (
              <Arrow x1={c.x + 216} y1={129} x2={cols[i + 1].x - 2} y2={129} step={step + 1} />
            ) : null}
          </g>
        )
      })}

      <Box x={8} y={244} w={704} h={30} fill={PALETTE.paper} stroke={PALETTE.rule} step={6} />
      <T x={360} y={263} size={9.5} step={6}>
        FINDING: ALLOW UNDER REVISION R17 / FORWARDED / DOWNSTREAM RECEIPT NOT SUPPLIED
      </T>
    </svg>
  )
}

/**
 * fig. 02: who actually signed. A record signed at the gateway, a record
 * signed by a collector about a gateway event, and a record signed later by
 * an exporter from a stored log carry three different signers.
 */
export function WhoSignedFigure() {
  const rows: Array<{
    source: string
    middle?: string
    signer: string
    note: [string, string]
    via?: string
  }> = [
    { source: 'GATEWAY', signer: 'gateway', note: ['signed where the', 'request was handled'], via: 'SIGNED AT THE SOURCE' },
    { source: 'GATEWAY EVENT', middle: 'COLLECTOR', signer: 'collector', note: ['the collector’s', 'statement about it'] },
    { source: 'STORED LOG', middle: 'EXPORTER, LATER', signer: 'exporter', note: ['not evidence of the', 'original commit time'] },
  ]
  return (
    <svg
      viewBox="0 0 720 230"
      fill="none"
      role="img"
      aria-label="Three ways to produce a signed record from a gateway workflow. The gateway signs where the request was handled, so the signer is the gateway. A collector receives a gateway event and signs its own statement, so the signer is the collector. An exporter later transforms a stored log, so the signer is the exporter, and the record is not evidence of the original commit time."
      style={svgStyle()}
    >
      {rows.map((r, i) => {
        const y = 12 + i * 74
        const mid = y + 28
        const step = i * 2 + 1
        const signsAtSource = !r.middle
        return (
          <g key={r.source}>
            <Box x={8} y={y} w={150} h={56} step={step} />
            <T x={83} y={mid + 4} step={step}>
              {r.source}
            </T>
            {signsAtSource ? <Key x={132} y={y + 14} color={SLATE} step={step} /> : null}

            {r.middle ? (
              <>
                <Arrow x1={158} y1={mid} x2={204} y2={mid} color={FAINT} step={step} />
                <Box x={206} y={y} w={150} h={56} step={step + 1} />
                <T x={281} y={mid + 4} step={step + 1}>
                  {r.middle}
                </T>
                <Key x={330} y={y + 14} color={SLATE} step={step + 1} />
                <Arrow x1={356} y1={mid} x2={402} y2={mid} step={step + 1} />
              </>
            ) : (
              <>
                <Arrow x1={158} y1={mid} x2={402} y2={mid} step={step + 1} />
                <T x={281} y={mid - 8} size={9} color={SLATE} step={step + 1}>
                  {r.via}
                </T>
              </>
            )}

            <Box x={404} y={y} w={164} h={56} stroke={SLATE} fill={SLATE_WASH} step={step + 1} />
            <T x={486} y={mid - 4} color={SLATE} step={step + 1}>
              SIGNED RECORD
            </T>
            <T x={486} y={mid + 14} sans size={12} color={PALETTE.ink} step={step + 1}>
              {`signer: ${r.signer}`}
            </T>
            <T x={582} y={mid - 2} sans size={11} anchor="start" step={step + 1}>
              {r.note[0]}
            </T>
            <T x={582} y={mid + 12} sans size={11} anchor="start" step={step + 1}>
              {r.note[1]}
            </T>
          </g>
        )
      })}
    </svg>
  )
}
