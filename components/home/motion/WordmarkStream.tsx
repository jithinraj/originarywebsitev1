'use client'

import { AsciiWordmark } from './AsciiWordmark'

/**
 * WordmarkStream: the closing signature. The master wordmark, drawn in live
 * characters that assemble on first view and play with the cursor; reduced
 * motion shows it still and no-JS shows the master SVG.
 */
export function WordmarkStream() {
  return (
    <div className="cin-wordmark">
      <div style={{ padding: '0 clamp(12px, 1.4vw, 28px)' }}>
        <AsciiWordmark />
      </div>
    </div>
  )
}
