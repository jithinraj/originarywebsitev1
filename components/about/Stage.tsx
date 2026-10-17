'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

/**
 * Stage: a scroll-triggered entrance for /about. It arms only when the element
 * starts below the fold and the reader allows motion, so the page is complete
 * without JavaScript, nothing above the fold flashes, and each animation plays
 * when it is actually seen. CSS keys off [data-armed]:not([data-in]).
 */
export function Stage({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return
    el.setAttribute('data-armed', '')
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute('data-in', '')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -18% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
