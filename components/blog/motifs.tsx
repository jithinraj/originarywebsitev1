import type { ReactNode } from 'react'
import { PALETTE } from '@/components/home'

/**
 * Per-slug schematic marks used in article header plates and blog index
 * cards. One source of truth so both call sites stay visually identical.
 * Each motif is drawn in a 120x84 box with 1.25px ink structure, at most one
 * role-color accent (slate for flow/action, sage for verified/allow, amber
 * for failure/deny), and simple, large shapes so it reads clearly down to
 * the 40-44px sizes it ships at.
 */

const KNOWN_SLUGS = [
  'ai-agent-audit-trail-handoff',
  'mcp-tool-call-audit-evidence',
  'ai-gateway-audit-logs-policy-decisions',
  'agentic-commerce-payment-fulfillment-evidence',
  'ai-agent-customer-requests-completion',
  'verifiable-provisioning-records-agent-infrastructure',
  'aipref-by-ietf',
  'robots-txt-rfc-9309',
  'what-is-http-402',
  'a2a-stack-agent-to-agent-commerce',
  'agent-audit-across-boundaries',
  'evidence-bundle-for-disputes',
] as const

type KnownSlug = (typeof KNOWN_SLUGS)[number]
type MotifKey = KnownSlug | 'archive'

const KNOWN_SLUG_SET: ReadonlySet<string> = new Set(KNOWN_SLUGS)

const SLATE = PALETTE.muted
const SAGE = PALETTE.success
const HAIR = PALETTE.hairline
const LOG = PALETTE.muted

const AMBER = PALETTE.warn

const MOTIFS: Record<MotifKey, ReactNode> = {
  // Evidence handoff series. A folded-corner case crossing a dashed
  // boundary from a stack of log lines toward a reviewer with a sage tick.
  'ai-agent-audit-trail-handoff': (
    <>
      <path d="M8 22h30" stroke={LOG} strokeWidth="1" />
      <path d="M8 34h24" stroke={LOG} strokeWidth="1" />
      <path d="M8 46h30" stroke={LOG} strokeWidth="1" />
      <path d="M8 58h20" stroke={LOG} strokeWidth="1" />
      <path d="M68 6v72" stroke={HAIR} strokeDasharray="2 3" />
      <path d="M48 28h28l8 8v22H48z" stroke={SLATE} />
      <path d="M76 28v8h8" stroke={SLATE} />
      <circle cx="104" cy="43" r="10" />
      <path d="M99 43.5 102.5 47 109 40" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  // Five steps: three solid and connected, then a dashed hop to a dashed
  // amber node that has not been reached.
  'mcp-tool-call-audit-evidence': (
    <>
      <rect x="4" y="34" width="16" height="16" />
      <rect x="32" y="34" width="16" height="16" />
      <rect x="60" y="34" width="16" height="16" stroke={SLATE} />
      <path d="M20 42h12M48 42h12" />
      <path d="M76 42h18" stroke={HAIR} strokeDasharray="2 3" />
      <rect x="96" y="32" width="20" height="20" stroke={AMBER} strokeDasharray="3 2.5" />
    </>
  ),
  // Decision diamond, enforcement bar, destination circle: two solid
  // statements and a dashed amber third.
  'ai-gateway-audit-logs-policy-decisions': (
    <>
      <path d="M22 26 36 42 22 58 8 42z" stroke={SLATE} />
      <path d="M36 42h18" />
      <rect x="56" y="22" width="6" height="40" />
      <path d="M62 42h20" stroke={HAIR} strokeDasharray="2 3" />
      <circle cx="98" cy="42" r="13" stroke={AMBER} strokeDasharray="3 2.5" />
    </>
  ),
  // A coin and a document joined by a link with a gap; the gap is where
  // fulfillment evidence is missing.
  'agentic-commerce-payment-fulfillment-evidence': (
    <>
      <circle cx="22" cy="42" r="14" stroke={SLATE} />
      <circle cx="22" cy="42" r="8" stroke={SLATE} strokeWidth="1" />
      <path d="M36 42h18" />
      <path d="M62 42h14" stroke={AMBER} strokeDasharray="2 3" />
      <path d="M86 20h18l8 8v36H86z" />
      <path d="M92 36h14M92 44h14M92 52h9" stroke={LOG} strokeWidth="1" />
    </>
  ),
  // A row of status steps ending in a sage completed mark.
  'ai-agent-customer-requests-completion': (
    <>
      <rect x="6" y="34" width="16" height="16" />
      <rect x="34" y="34" width="16" height="16" />
      <rect x="62" y="34" width="16" height="16" />
      <path d="M22 42h12M50 42h12M78 42h12" stroke={HAIR} />
      <rect x="92" y="30" width="24" height="24" stroke={SAGE} />
      <path d="M98 42.5 102 46.5 110 37.5" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Three stacked service blocks, a key mark beside the middle one, and a
  // sealed-record tag connected by a hairline.
  'verifiable-provisioning-records-agent-infrastructure': (
    <>
      <rect x="6" y="8" width="58" height="13" />
      <rect x="6" y="27" width="58" height="13" />
      <rect x="6" y="46" width="58" height="13" />
      <circle cx="76" cy="33.5" r="4" />
      <path d="M80 33.5h6" strokeLinecap="round" />
      <path d="M64 52 88 66" stroke={HAIR} strokeWidth="1" />
      <rect x="88" y="58" width="24" height="16" stroke={SAGE} />
      <path
        d="M93 66.5 96 70 103 63"
        stroke={SAGE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // Three-level preference tree: root branches to two, one branches again;
  // the deepest node is the slate accent.
  'aipref-by-ietf': (
    <>
      <path d="M60 17 34 36" />
      <path d="M60 17 86 36" />
      <path d="M86 46 86 62" stroke={SLATE} />
      <circle cx="60" cy="12" r="5" />
      <circle cx="34" cy="41" r="5" />
      <circle cx="86" cy="41" r="5" />
      <circle cx="86" cy="68" r="5" stroke={SLATE} />
    </>
  ),
  // A path meeting a gate bar, a disallow mark above it in ink, and a
  // thinner allowed path bending around the gate in slate.
  'robots-txt-rfc-9309': (
    <>
      <path d="M4 72c18 0 40 -20 55 -20s37 20 55 20" stroke={SLATE} />
      <path d="M104 68 114 72 104 76" stroke={SLATE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 58h48" />
      <path d="M44 52 54 58 44 64" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="57" y="26" width="4" height="34" />
      <circle cx="59" cy="14" r="7" />
      <path d="M54.5 9.5 63.5 18.5" />
    </>
  ),
  // A rail with a far-left tick, a long dashed dormant span, then three
  // rising slate pulse ticks.
  'what-is-http-402': (
    <>
      <path d="M8 44v12" />
      <path d="M8 50 82 50" strokeDasharray="1 5" strokeLinecap="round" />
      <path d="M82 50 114 50" />
      <path d="M90 50v-10" stroke={SLATE} strokeLinecap="round" />
      <path d="M100 50v-18" stroke={SLATE} strokeLinecap="round" />
      <path d="M110 50v-27" stroke={SLATE} strokeLinecap="round" />
    </>
  ),
  // Two agent nodes either side of a dashed boundary, a record crossing it
  // on a connecting line, slate accent on the record.
  'a2a-stack-agent-to-agent-commerce': (
    <>
      <path d="M60 6v72" stroke={HAIR} strokeDasharray="2 3" />
      <path d="M30 42h22" />
      <path d="M68 42h22" />
      <circle cx="20" cy="42" r="10" />
      <circle cx="100" cy="42" r="10" />
      <rect x="52" y="35" width="16" height="14" stroke={SLATE} />
    </>
  ),
  // A boundary box with three log lines, and a signed-record rect exiting
  // across its edge with a sage tick.
  'agent-audit-across-boundaries': (
    <>
      <rect x="8" y="10" width="70" height="54" />
      <path d="M18 24h34" stroke={LOG} strokeWidth="1" />
      <path d="M18 38h42" stroke={LOG} strokeWidth="1" />
      <path d="M18 52h30" stroke={LOG} strokeWidth="1" />
      <path d="M70 40 84 40" stroke={HAIR} strokeWidth="1" />
      <rect x="84" y="30" width="28" height="20" stroke={SAGE} />
      <path
        d="M90 40 94 44 102 34"
        stroke={SAGE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // An open bundle box holding three files, each linked by hairlines to a
  // slate manifest bar.
  'evidence-bundle-for-disputes': (
    <>
      <path d="M14 40 26 24" />
      <path d="M106 40 94 24" />
      <path d="M37 48 37 18" stroke={HAIR} />
      <path d="M60 48 60 18" stroke={HAIR} />
      <path d="M83 48 83 18" stroke={HAIR} />
      <rect x="20" y="8" width="80" height="10" stroke={SLATE} />
      <path d="M14 40v34h92V40" />
      <rect x="28" y="48" width="18" height="14" />
      <rect x="51" y="48" width="18" height="14" />
      <rect x="74" y="48" width="18" height="14" />
    </>
  ),
  // Fallback for every unmapped (archived) slug: a plain box, all ink, with
  // a hairline lid slightly ajar. No accent.
  archive: (
    <>
      <g transform="rotate(-7 40 28)" stroke={HAIR} strokeWidth="1">
        <rect x="20" y="24" width="70" height="8" />
      </g>
      <rect x="24" y="30" width="72" height="46" />
    </>
  ),
}

type ArticleMotifProps = {
  slug: string
  size?: number
}

/**
 * Renders the schematic mark for a post. Explicit slugs get a bespoke
 * motif; anything else, including every archived post, falls back to the
 * plain archive box, matching the archive category's neutral treatment.
 */
export function ArticleMotif({ slug, size = 44 }: ArticleMotifProps) {
  const key: MotifKey = KNOWN_SLUG_SET.has(slug) ? (slug as KnownSlug) : 'archive'
  const height = Math.round((size * 84) / 120)

  return (
    <svg
      viewBox="0 0 120 84"
      width={size}
      height={height}
      fill="none"
      stroke={PALETTE.ink}
      strokeWidth="1.25"
      aria-hidden="true"
      focusable="false"
      style={{ flex: 'none', display: 'block' }}
    >
      {MOTIFS[key]}
    </svg>
  )
}
