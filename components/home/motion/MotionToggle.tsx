'use client'

import { useSyncExternalStore } from 'react'
import { isMotionPaused, onMotionChange, setMotionPaused } from '@/lib/motion'
import './motion-toggle.css'

/**
 * Pause or play every looping animation on the site (lib/motion.ts). It keeps one name and reports its
 * state through aria-pressed, like the theme toggle. Hidden when the OS already asks for reduced
 * motion, since nothing loops then.
 */
export function MotionToggle({ className }: { className?: string }) {
  const paused = useSyncExternalStore(onMotionChange, isMotionPaused, () => false)
  return (
    <button
      type="button"
      className={className ? `mt-toggle ${className}` : 'mt-toggle'}
      onClick={() => setMotionPaused(!paused)}
      aria-label="Pause animations"
      aria-pressed={paused}
      title={paused ? 'Play animations' : 'Pause animations'}
    >
      {paused ? (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M3.5 2.2v7.6L9.6 6z" fill="currentColor" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M3.6 2.4v7.2M8.4 2.4v7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}
