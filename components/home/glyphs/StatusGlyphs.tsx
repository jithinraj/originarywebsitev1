/**
 * StatusGlyphs: evidence-state marks in the origin-seal style. Same geometry
 * rules as MarkGlyphs (32x32, 1.3px strokes, currentColor). Each state is
 * distinguishable by shape alone, so colour is never the only signal.
 */

export type StatusName = 'established' | 'linked' | 'missing' | 'partial'

const PATHS: Record<StatusName, React.ReactNode> = {
  established: (
    <>
      <circle cx="16" cy="16" r="10.5" />
      <path d="m11 16.2 3.4 3.4 6.6-7.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  linked: (
    <>
      <circle cx="16" cy="16" r="10.5" />
      <path d="M13 19a3.5 3.5 0 0 1 0-5l1.8-1.8" strokeLinecap="round" />
      <path d="M19 13a3.5 3.5 0 0 1 0 5l-1.8 1.8" strokeLinecap="round" />
      <path d="m13.8 18.2 4.4-4.4" strokeLinecap="round" />
    </>
  ),
  missing: (
    <>
      <circle cx="16" cy="16" r="10.5" strokeDasharray="3 3" />
      <path d="M11.5 16h9" strokeLinecap="round" />
    </>
  ),
  partial: (
    <>
      <circle cx="16" cy="16" r="10.5" />
      <path d="M16 5.5a10.5 10.5 0 0 1 0 21Z" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M16 5.5v21" />
    </>
  ),
}

export function StatusGlyph({
  name,
  size = 18,
  style,
}: {
  name: StatusName
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

/**
 * MiniRecord: a compact stand-in for a signed record. Field lines above a
 * signature bar, so a card reads as "a record" before any text is scanned.
 * Decorative only.
 */
export function MiniRecord({
  lines = 3,
  denied = false,
  style,
}: {
  lines?: number
  denied?: boolean
  style?: React.CSSProperties
}) {
  const widths = [30, 22, 26, 18]
  return (
    <svg
      viewBox="0 0 44 32"
      width={44}
      height={32}
      fill="none"
      aria-hidden
      focusable="false"
      style={{ flex: 'none', ...style }}
    >
      <rect x="0.65" y="0.65" width="42.7" height="30.7" stroke="currentColor" strokeWidth="1.1" opacity="0.35" />
      {Array.from({ length: lines }).map((_, i) => (
        <rect
          key={i}
          x="6"
          y={6 + i * 5}
          width={widths[i % widths.length]}
          height="1.6"
          fill="currentColor"
          opacity="0.28"
        />
      ))}
      <rect x="6" y="24" width="32" height="3" fill="currentColor" opacity={denied ? 0.22 : 0.6} />
      {denied ? (
        <path d="M8 26.5 36 24.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      ) : null}
    </svg>
  )
}
