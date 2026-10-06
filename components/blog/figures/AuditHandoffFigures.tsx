import { PALETTE } from '@/components/home'
import {
  T,
  Box,
  Arrow,
  Tick,
  Cross,
  SLATE,
  SAGE,
  AMBER,
  FAINT,
  HAIR,
  SLATE_WASH,
  AMBER_WASH,
  svgStyle,
} from './svg-kit'

/**
 * fig. 01 for "An AI agent audit trail has to survive the handoff": your
 * internal systems feed a selected handoff case that crosses the boundary to
 * a reviewer, next to the screenshot path that only carries a conclusion.
 */
export function HandoffCaseDiagram() {
  const internal = ['application logs', 'traces', 'identity service events', 'dashboards']
  const caseItems = ['selected records', 'approval artifact', 'verification material', 'findings and gaps']
  const reviewer = ['Who issued each record?', 'Can I reproduce the checks?', 'Can I make my decision?']
  return (
    <svg
      viewBox="0 0 720 292"
      fill="none"
      role="img"
      aria-label="Diagram: internal logs, traces, identity events, and dashboards feed a selected handoff case of records, approval artifact, verification material, and findings. The case crosses the organizational boundary to a reviewer who can identify issuers, reproduce checks, and decide. A dashboard screenshot also reaches the reviewer but only transfers a conclusion."
      style={svgStyle()}
    >
      <T x={462} y={16} size={9} color={FAINT}>
        BOUNDARY
      </T>
      <path d="M 462 24 V 246" stroke={HAIR} strokeWidth="1.25" strokeDasharray="3 4" />

      {/* Internal systems */}
      <Box x={8} y={34} w={180} h={192} step={1} />
      <T x={98} y={58} step={1}>
        YOUR SYSTEMS
      </T>
      {internal.map((label, i) => (
        <g key={label}>
          <path d={`M 22 ${76 + i * 34} H 174`} stroke={HAIR} strokeWidth="1" />
          <T x={98} y={97 + i * 34} sans step={1}>
            {label}
          </T>
        </g>
      ))}

      <Arrow x1={188} y1={130} x2={248} y2={130} step={2} />
      <T x={218} y={121} size={9} color={SLATE} step={2}>
        SELECT
      </T>

      {/* Handoff case */}
      <Box x={250} y={54} w={176} h={152} stroke={SLATE} fill={SLATE_WASH} step={3} />
      <path d="M 404 54 L 426 76 V 54 Z" fill={PALETTE.bg} stroke={SLATE} strokeWidth="1.25" className="fig-fade fig-step-3" />
      <T x={338} y={80} color={SLATE} step={3}>
        HANDOFF CASE
      </T>
      {caseItems.map((label, i) => (
        <T key={label} x={338} y={110 + i * 24} sans color={PALETTE.ink} step={3}>
          {label}
        </T>
      ))}

      <Arrow x1={426} y1={130} x2={498} y2={130} step={4} />
      <rect x={436} y={112} width={52} height={13} fill={PALETTE.bg} className="fig-fade fig-step-4" />
      <T x={462} y={122} size={9} color={SLATE} step={4}>
        HAND OFF
      </T>

      {/* Reviewer */}
      <Box x={500} y={34} w={212} h={192} step={5} />
      <T x={606} y={58} step={5}>
        REVIEWER, OTHER TEAM
      </T>
      {reviewer.map((q, i) => (
        <g key={q}>
          <Tick x={522} y={96 + i * 40} step={6} />
          <T x={536} y={100 + i * 40} sans anchor="start" color={PALETTE.ink} step={6}>
            {q}
          </T>
        </g>
      ))}

      {/* Screenshot path */}
      <path d="M 98 226 V 270 H 606 V 236" stroke={AMBER} strokeWidth="1.25" strokeDasharray="4 3" className="fig-fade fig-step-6" />
      <path d="M 601 242 L 606 236 L 611 242" stroke={AMBER} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="fig-fade fig-step-6" />
      <rect x={176} y={259} width={352} height={22} fill={PALETTE.bg} stroke={AMBER} strokeWidth="1" className="fig-fade fig-step-6" />
      <Cross x={190} y={270} step={6} />
      <T x={360} y={274} size={9.5} color={AMBER} step={6}>
        SCREENSHOT: TRANSFERS A CONCLUSION, NOT EVIDENCE
      </T>
    </svg>
  )
}

/**
 * fig. 02: the four verification questions. The first three form a
 * repeatable check; the fourth depends on the workflow and the evidence
 * available, and a green signature never answers it.
 */
export function VerificationQuestions() {
  const rows: Array<[string, string]> = [
    ['Does the signature validate under the supplied key?', 'signature'],
    ['Does the record satisfy the format and claim constraints?', 'format + claims'],
    ['Does the key meet the recipient’s issuer and trust policy?', 'issuer policy'],
  ]
  return (
    <svg
      viewBox="0 0 720 248"
      fill="none"
      role="img"
      aria-label="Four verification questions. One: does the signature validate under the supplied key. Two: does the record satisfy format and claim constraints. Three: does the key meet the recipient's issuer and trust policy. These three are repeatable checks. Four: what additional evidence supports the underlying event, which depends on the workflow."
      style={svgStyle()}
    >
      {rows.map(([q, tag], i) => {
        const y = 14 + i * 50
        return (
          <g key={tag}>
            <Box x={8} y={y} w={610} h={40} step={i + 1} />
            <T x={30} y={y + 25} size={10} color={FAINT} step={i + 1}>
              {String(i + 1).padStart(2, '0')}
            </T>
            <T x={54} y={y + 25} sans size={13} anchor="start" color={PALETTE.ink} step={i + 1}>
              {q}
            </T>
            <T x={600} y={y + 25} anchor="end" size={9} color={SAGE} step={i + 1}>
              {tag.toUpperCase()}
            </T>
          </g>
        )
      })}
      <path d="M 630 18 H 638 V 150 H 630" stroke={SAGE} strokeWidth="1.25" className="fig-fade fig-step-4" />
      <T x={646} y={80} anchor="start" size={9.5} color={SAGE} step={4}>
        REPEATABLE
      </T>
      <T x={646} y={94} anchor="start" size={9.5} color={SAGE} step={4}>
        CHECKS
      </T>

      <T x={313} y={180} sans size={11.5} color={AMBER} step={5}>
        A green signature check does not answer the last question.
      </T>

      <Box x={8} y={194} w={610} h={40} stroke={AMBER} fill={AMBER_WASH} dashed step={6} />
      <T x={30} y={219} size={10} color={FAINT} step={6}>
        04
      </T>
      <T x={54} y={219} sans size={13} anchor="start" color={PALETTE.ink} step={6}>
        What additional evidence supports the underlying event?
      </T>
      <T x={600} y={219} anchor="end" size={9} color={AMBER} step={6}>
        THE EVENT
      </T>
      <T x={646} y={210} anchor="start" size={9.5} color={AMBER} step={6}>
        DEPENDS ON
      </T>
      <T x={646} y={224} anchor="start" size={9.5} color={AMBER} step={6}>
        WORKFLOW
      </T>
    </svg>
  )
}
