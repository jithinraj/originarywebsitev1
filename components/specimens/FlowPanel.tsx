'use client'

import { useEffect, useRef } from 'react'
import './flowpanel.css'

type Slot = 1 | 2 | 3 | 4 | 5 | 6

export type FlowBeat =
  | { kind: 'msg'; dir: 'ltr' | 'rtl'; slot: Slot; label: string; half?: 'l' | 'r' }
  | { kind: 'evt'; slot: Slot; label: string; bad?: boolean }
  | { kind: 'rec'; slot: Slot; label: string }
  | { kind: 'chk'; slot: Slot; label: string }

/**
 * FlowPanel: dark animated sequence diagram. Actors across the top, message
 * beats with a traveling dot, amber event rows, a sage record chit, and a
 * closing check line, all staggered on one shared CSS clock. Plays while in
 * view; renders the complete static picture under reduced motion.
 */
export function FlowPanel({
  actors,
  beats,
  label,
  style,
}: {
  actors: string[]
  beats: FlowBeat[]
  /** Accessible summary of what the diagram shows. */
  label: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('play')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('play', e.isIntersecting))
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="fp-flow" ref={ref} role="img" aria-label={label} tabIndex={0} style={style}>
      <div className="fp-actors" aria-hidden>
        {actors.map((a) => (
          <span className="fp-actor" key={a}>
            {a}
          </span>
        ))}
      </div>
      <div className="fp-steps" aria-hidden>
        {beats.map((b, i) => {
          if (b.kind === 'msg') {
            const half = b.half ? ` half-${b.half}` : ''
            return (
              <div className={`fp-msg ${b.dir}${half} fp-s${b.slot}`} key={i}>
                <span className="fp-line" />
                <span className="fp-head" />
                <span className="fp-label">{b.label}</span>
                <span className="fp-dot" />
              </div>
            )
          }
          if (b.kind === 'evt') {
            return (
              <div className={`fp-evt${b.bad ? ' bad' : ''} fp-s${b.slot}`} key={i}>
                {b.label}
              </div>
            )
          }
          if (b.kind === 'rec') {
            return (
              <div className={`fp-rec fp-s${b.slot}`} key={i}>
                <span className="fp-chit">{b.label}</span>
              </div>
            )
          }
          return (
            <div className={`fp-chk fp-s${b.slot}`} key={i}>
              {b.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
