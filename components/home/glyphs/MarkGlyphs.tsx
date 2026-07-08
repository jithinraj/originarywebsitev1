/**
 * MarkGlyphs: small inline marks in the origin-seal style. 1.3px strokes,
 * currentColor, square geometry, no fills except center dots. Used beside
 * category titles and footer solution links; never decorative emoji.
 */

export type MarkName =
  | 'target'
  | 'diamond'
  | 'key'
  | 'ledger'
  | 'valve'
  | 'coin'
  | 'link'
  | 'sealCheck'
  | 'pipeline'

const PATHS: Record<MarkName, React.ReactNode> = {
  target: (
    <>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="4.5" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  diamond: (
    <>
      <path d="M16 5 L27 16 L16 27 L5 16 Z" />
      <path d="M16 11 L21 16 L16 21 L11 16 Z" />
    </>
  ),
  key: (
    <>
      <circle cx="10.5" cy="16" r="4.5" />
      <path d="M15 16 H27 M23 16 V20 M27 16 V19" strokeLinecap="round" />
    </>
  ),
  ledger: (
    <>
      <rect x="7" y="6.5" width="18" height="19" />
      <path d="M11 12 H21 M11 16 H21 M11 20 H17" strokeLinecap="round" />
    </>
  ),
  valve: (
    <>
      <path d="M9 6 V13.5 M9 18.5 V26 M23 6 V13.5 M23 18.5 V26" strokeLinecap="round" />
      <path d="M4 16 H24" strokeLinecap="round" />
      <path d="M20.5 12.5 L24 16 L20.5 19.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  coin: (
    <>
      <circle cx="16" cy="16" r="9.5" />
      <circle cx="16" cy="16" r="5" />
      <path d="M16 6.5 V9 M16 23 V25.5" strokeLinecap="round" />
    </>
  ),
  link: (
    <>
      <rect x="6" y="11" width="12" height="10" />
      <rect x="14" y="11" width="12" height="10" />
    </>
  ),
  sealCheck: (
    <>
      <circle cx="16" cy="16" r="10" />
      <path d="M11.5 16.5 L14.5 19.5 L20.5 12.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  pipeline: (
    <>
      <path d="M5 16 H23" strokeLinecap="round" />
      <path d="M19.5 12 L23.5 16 L19.5 20" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 11 V21 M13 9.5 V22.5" strokeLinecap="round" />
    </>
  ),
}

export function MarkGlyph({
  name,
  size = 16,
  style,
}: {
  name: MarkName
  size?: number
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden
      focusable="false"
      style={{ flex: 'none', ...style }}
    >
      {PATHS[name]}
    </svg>
  )
}
