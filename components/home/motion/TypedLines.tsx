'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * TypedLines: types terminal lines once, when they scroll into view. Untyped
 * characters stay in the layout (transparent), so nothing shifts as it types.
 * Reduced motion and no-JS show every line at once.
 */
export function TypedLines({
  lines,
  prompt = '$ ',
  after,
  className,
}: {
  lines: Array<{ text: string; prompt?: boolean }>
  prompt?: string
  /** Class for the <pre> that holds the lines. */
  className?: string
  /** Shown once typing finishes (for example the CLI's result line). */
  after?: ReactNode
}) {
  const ref = useRef<HTMLPreElement | null>(null)
  const total = lines.reduce((n, l) => n + l.text.length, 0)
  const [typed, setTyped] = useState(total)
  const [done, setDone] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let started = false
    // Hide the text until it is seen (CSS reads data-armed), then type it.
    el.setAttribute('data-armed', '')
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started) return
        started = true
        setTyped(0)
        setDone(false)
        el.removeAttribute('data-armed')
        const t0 = performance.now()
        const tick = (now: number) => {
          const n = Math.min(total, Math.floor((now - t0) / 18))
          setTyped(n)
          if (n < total) raf = requestAnimationFrame(tick)
          else window.setTimeout(() => setDone(true), 260)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [total])

  const starts = lines.map((_, i) => lines.slice(0, i).reduce((n, l) => n + l.text.length, 0))
  return (
    <>
      <pre ref={ref} className={className}>
        <code>
        {lines.map((l, i) => {
          const shown = Math.max(0, Math.min(l.text.length, typed - starts[i]))
          return (
            <span key={i}>
              {l.prompt ? <span className="protos-p">{prompt}</span> : null}
              {l.text.slice(0, shown)}
              {shown > 0 && shown < l.text.length ? <span className="typed-caret" aria-hidden /> : null}
              <span className="typed-rest" aria-hidden>
                {l.text.slice(shown)}
              </span>
              {i < lines.length - 1 ? '\n' : null}
            </span>
          )
        })}
        </code>
      </pre>
      <div className="typed-after" data-done={done ? '' : undefined}>
        {after}
      </div>
    </>
  )
}
