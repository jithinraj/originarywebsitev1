'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { useReducedMotion } from './useReducedMotion'

type RevealProps = {
  children: ReactNode
  /** Distance in px the content travels up while fading in. */
  distance?: number
  /** Animation duration in ms. */
  duration?: number
  /** Delay in ms before the animation starts. */
  delay?: number
  /** Intersection threshold (0..1). */
  threshold?: number
  /** Optional className passthrough. */
  className?: string
  /** Optional style passthrough merged before animation styles. */
  style?: CSSProperties
  /** Render as a different HTML element. */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'span'
}

/**
 * Reveal renders its children at the final visible state by default. On
 * client mount, if the element is below the fold, it switches briefly to the
 * pre-animation state and fades in via inline transitions once the element
 * enters the viewport. Above-the-fold elements skip the animation entirely
 * so SSR, no-JS users, full-page screenshot tools, and fast scrollers all
 * see the final state. A 1200 ms safety net guarantees visibility even when
 * IntersectionObserver never fires.
 */
export function Reveal({
  children,
  distance = 12,
  duration = 560,
  delay = 0,
  threshold = 0.12,
  className,
  style,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewport) {
      // Already visible at hydration: don't animate, never hide.
      return
    }

    // Element is below the fold at hydration: stash final state, switch to
    // pre-animation state, observe for intersection, then animate back.
    const reveal = () => {
      el.style.opacity = '1'
      el.style.transform = 'translate3d(0, 0, 0)'
    }

    el.style.opacity = '0'
    el.style.transform = `translate3d(0, ${distance}px, 0)`
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0.65, 0.25, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.65, 0.25, 1) ${delay}ms`
    el.style.willChange = 'transform, opacity'

    let safety: ReturnType<typeof setTimeout> | null = null
    let io: IntersectionObserver | null = null

    const finalize = () => {
      reveal()
      io?.disconnect()
      if (safety) clearTimeout(safety)
    }

    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) finalize()
          }
        },
        { threshold },
      )
      io.observe(el)
    } else {
      // No IO available: reveal immediately.
      finalize()
    }

    // Safety net: never leave content invisible.
    safety = setTimeout(finalize, 1200)

    return () => {
      io?.disconnect()
      if (safety) clearTimeout(safety)
    }
  }, [reduced, distance, duration, delay, threshold])

  const Tag = as as 'div'
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={className} style={style}>
      {children}
    </Tag>
  )
}
