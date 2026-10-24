'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { Consent } from '@/lib/consent'
import './consent.css'

/**
 * The consent question, and the Privacy choices panel once a choice exists. Allow and Decline carry
 * equal weight. Non-modal: the page stays usable while it is open.
 */
export function ConsentPanel({
  consent,
  optOut,
  onChoose,
  onClose,
}: {
  consent: Consent | null
  optOut: boolean
  onChoose: (next: Consent) => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const asking = consent === null && !optOut

  // Opened from Privacy choices: take focus, and close on Escape.
  useEffect(() => {
    if (asking) return
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [asking, onClose])

  const state = consent === 'granted' ? 'You have allowed analytics.' : 'You have declined analytics.'

  return (
    <div ref={ref} className="cn-panel" role="region" aria-labelledby="cn-title" tabIndex={-1}>
      <div className="cn-head">
        <p id="cn-title" className="cn-k">
          {asking ? 'Analytics' : 'Privacy choices'}
        </p>
        {asking ? null : (
          <button type="button" className="cn-x" onClick={onClose} aria-label="Close privacy choices">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      {optOut ? (
        <p className="cn-body">
          Your browser sends a Global Privacy Control or Do Not Track signal, so analytics stay off on this site.
        </p>
      ) : (
        <>
          <p className="cn-body">
            {asking ? 'May we measure how this site is used?' : state} Allowing loads Google Analytics, Amplitude,
            Vercel Analytics and Microsoft Clarity, which records sessions. Nothing loads until you allow it.{' '}
            <Link href="/privacy">Privacy policy</Link>
          </p>
          <div className="cn-actions">
            <button
              type="button"
              className="cn-btn"
              aria-pressed={asking ? undefined : consent === 'granted'}
              onClick={() => onChoose('granted')}
            >
              Allow
            </button>
            <button
              type="button"
              className="cn-btn"
              aria-pressed={asking ? undefined : consent === 'denied'}
              onClick={() => onChoose('denied')}
            >
              Decline
            </button>
          </div>
        </>
      )}
    </div>
  )
}
