'use client'

import { WORDMARK_GEOMETRY } from '../../brand/OriginaryLogoMotion'

/**
 * WordmarkStream: the closing signature: the canonical Originary wordmark set
 * viewport-wide, STATIC and solid (frozen v2 geometry). Previously a 0/1-engraved
 * canvas; now the clean wordmark per the identity kit.
 */
export function WordmarkStream() {
  const vb = WORDMARK_GEOMETRY.viewBox
  return (
    <div className="cin-wordmark" aria-hidden>
      <div style={{ padding: '0 clamp(12px, 1.4vw, 28px)' }}>
        <svg
          viewBox={`${vb.x} ${vb.y} ${vb.width} ${vb.height}`}
          role="img"
          aria-label="Originary"
          style={{ display: 'block', width: '100%', height: 'auto' }}
          fill="#14110a"
        >
          {WORDMARK_GEOMETRY.paths.map((p, i) => (
            <path key={i} d={p.d} transform={('t' in p && p.t) || WORDMARK_GEOMETRY.transform(p.x)} />
          ))}
        </svg>
      </div>
    </div>
  )
}
