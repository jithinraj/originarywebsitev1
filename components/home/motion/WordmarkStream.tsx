'use client'

import { OriginaryIdent } from '../../brand/OriginaryIdent'

/**
 * WordmarkStream: the closing signature. The v17 ident plays once when it
 * comes into view and ends on the master wordmark; reduced motion and no-JS
 * show the master directly.
 */
export function WordmarkStream() {
  return (
    <div className="cin-wordmark" aria-hidden>
      <div style={{ padding: '0 clamp(12px, 1.4vw, 28px)' }}>
        <OriginaryIdent crop="word" />
      </div>
    </div>
  )
}
