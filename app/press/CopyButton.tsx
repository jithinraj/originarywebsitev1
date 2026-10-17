'use client'

import { useState } from 'react'

/** Copies a boilerplate paragraph to the clipboard. Falls back silently when the clipboard is unavailable. */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className="pr-copy"
      aria-label={`Copy ${label} boilerplate`}
      onClick={() => {
        try {
          void navigator.clipboard.writeText(text).then(() => {
            setDone(true)
            window.setTimeout(() => setDone(false), 1800)
          })
        } catch {
          /* clipboard unavailable */
        }
      }}
    >
      {done ? 'Copied' : 'Copy'}
    </button>
  )
}
