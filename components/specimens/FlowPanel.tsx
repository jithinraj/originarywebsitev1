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
 * FlowPanel: dark sequence diagram. Actors across the top, message beats with
 * a travelling dot, neutral event rows, the signed record as the one cobalt
 * node, and a closing result (icon + word). Plays once when it scrolls into
 * view and holds the final frame; the complete picture under reduced motion.
 * Below 640 px the same beats render as a vertical list ("A -> B: message").
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
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('play')
          io.unobserve(e.target)
        })
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
                {b.bad ? <ResultIcon ok={false} /> : null}
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
              <ResultIcon ok />
              {b.label}
            </div>
          )
        })}
      </div>

      {/* Narrow screens: the same beats as a readable vertical list. */}
      <ol className="fp-list" aria-hidden>
        {beats.map((b, i) => {
          if (b.kind === 'msg') {
            const [from, to] = ends(actors.length, b)
            return (
              <li key={i} className="fp-li fp-li-msg">
                <span className="fp-li-who">
                  {actors[from]} <span aria-hidden>&rarr;</span> {actors[to]}
                </span>
                <span className="fp-li-what">{b.label}</span>
              </li>
            )
          }
          if (b.kind === 'rec') return <li key={i} className="fp-li fp-li-rec">{b.label}</li>
          if (b.kind === 'chk')
            return (
              <li key={i} className="fp-li fp-li-chk">
                <ResultIcon ok />
                {b.label}
              </li>
            )
          return (
            <li key={i} className={`fp-li fp-li-evt${b.bad ? ' bad' : ''}`}>
              {b.bad ? <ResultIcon ok={false} /> : null}
              {b.label}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/** Which actors a message runs between, from its span and direction. */
function ends(n: number, b: { dir: 'ltr' | 'rtl'; half?: 'l' | 'r' }): [number, number] {
  const last = Math.max(1, n - 1)
  const mid = Math.min(1, last)
  const [a, z] = b.half === 'l' ? [0, mid] : b.half === 'r' ? [mid, last] : [0, last]
  return b.dir === 'ltr' ? [a, z] : [z, a]
}

/* Results carry an icon and a word, never colour alone. */
function ResultIcon({ ok }: { ok: boolean }) {
  return (
    <svg className="fp-ico" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="8" cy="8" r="6.5" />
      {ok ? (
        <path d="m5.2 8.2 1.9 1.9 3.8-4.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="m5.8 5.8 4.4 4.4m0-4.4-4.4 4.4" strokeLinecap="round" />
      )}
    </svg>
  )
}
