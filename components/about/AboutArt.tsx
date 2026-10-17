/**
 * Line icons for /about: the tools people built to check each other's work.
 * Static markup; the draw-on motion is CSS keyed off the surrounding <Stage>.
 * Styles: app/about/about.css.
 */

export type ToolName = 'seal' | 'signature' | 'receipt' | 'audit' | 'digital'

// Every stroke is a <path> with pathLength=1, so CSS can draw it on.
const PATHS: Record<ToolName, string[]> = {
  seal: [
    'M24 6a14 14 0 1 1 0 28a14 14 0 1 1 0-28',
    'M24 12a8 8 0 1 1 0 16a8 8 0 1 1 0-16',
    'M19 33l-4 10 4.5-1.5 2.5 3.5 2-8',
    'M29 33l4 10-4.5-1.5-2.5 3.5-2-8',
  ],
  signature: [
    'M6 30l4 4M10 30l-4 4',
    'M13 31c3-9 6-14 9-12s-3 12 1 12 5-10 8-9-1 8 2 8 4-3 6-5',
    'M6 38h36',
  ],
  receipt: [
    'M13 6h22v34l-3.7-2.5-3.6 2.5-3.7-2.5-3.7 2.5-3.6-2.5L13 40z',
    'M18 14h12',
    'M18 20h12',
    'M18 27h7',
    'M27 27h3',
  ],
  audit: ['M7 11h20', 'M7 18h20', 'M7 25h12', 'M30 22a8 8 0 1 1 0 16a8 8 0 1 1 0-16', 'M36 36l6 6'],
  digital: ['M10 6h22v34l-3.7-2.5-3.6 2.5-3.7-2.5-3.7 2.5-3.6-2.5L10 40z', 'M15 14h12', 'M15 20h12', 'M15 27h6'],
}

export function ToolIcon({ name, index }: { name: ToolName; index: number }) {
  return (
    <svg className="ab-ti" viewBox="0 0 48 48" width="48" height="48" aria-hidden style={{ ['--ti-i' as string]: index }}>
      {PATHS[name].map((d) => (
        <path key={d} className="ab-ti-p" d={d} pathLength={1} />
      ))}
      {name === 'digital' ? (
        <>
          <circle className="ab-ti-bg" cx="34" cy="34" r="9" />
          <path className="ab-ti-p ab-ti-badge" d="M34 25a9 9 0 1 1 0 18a9 9 0 1 1 0-18" pathLength={1} />
          <path className="ab-ti-p ab-ti-badge" d="M30.2 34.3l2.6 2.6 5-5.4" pathLength={1} />
        </>
      ) : null}
    </svg>
  )
}
