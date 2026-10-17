'use client'

import { useEffect, useRef } from 'react'

/**
 * ScrollLines: a manifesto heading whose words light up, in reading order, as
 * the reader scrolls. With `track`, progress follows that ancestor (a tall,
 * pinned section) and is also exposed to CSS as --ab-p (0 to 1). Every word is
 * real text from the first paint; without JavaScript or with reduced motion
 * the heading simply renders in ink.
 */
export function ScrollLines({
  lines,
  id,
  className,
  track,
}: {
  lines: string[]
  id?: string
  className?: string
  track?: string
}) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = Array.from(el.querySelectorAll<HTMLElement>('[data-w]'))
    const host = track ? el.closest<HTMLElement>(track) : null
    let raf = 0
    let lit = -1
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      let p: number
      const hr = host?.getBoundingClientRect()
      if (host && hr && hr.height - vh > 80) {
        // Pinned: 0 when the section reaches the top, 1 when it is about to leave.
        const q = Math.min(1, Math.max(0, -hr.top / (hr.height - vh)))
        host.style.setProperty('--ab-p', q.toFixed(3))
        p = Math.min(1, q / 0.72)
      } else {
        const r = el.getBoundingClientRect()
        // 0 when the heading's top reaches 85% of the viewport,
        // 1 when its bottom reaches 60%: fully lit before it leaves.
        p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.25 + r.height)))
      }
      const n = Math.round(p * words.length)
      if (n === lit) return
      lit = n
      words.forEach((w, i) => w.toggleAttribute('data-on', i < n))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    el.setAttribute('data-ready', '')
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [track])

  return (
    <h2 ref={ref} id={id} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="ab-sl-line">
          {line.split(' ').map((w, wi, arr) => (
            <span key={wi} data-w="">
              {w}
              {wi < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
          {li < lines.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  )
}
