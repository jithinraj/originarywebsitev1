'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useInView } from './useInView'
import { useReducedMotion } from './useReducedMotion'
import { ease } from './easing'

type CountUpProps = {
  value: number
  /** Animation duration in ms. */
  duration?: number
  /** Locale grouping (defaults to en-US). */
  locale?: string
  /** Optional prefix (e.g. "v"). */
  prefix?: string
  /** Optional suffix (e.g. "+", "k", " tests"). */
  suffix?: string
  /** Class for the rendered span. */
  className?: string
  style?: CSSProperties
}

/**
 * CountUp animates an integer from 0 to `value` when the wrapper element
 * enters the viewport. The wrapper reserves space for the final string at
 * mount time via a hidden placeholder, so the line never reflows during the
 * animation. Honors prefers-reduced-motion (final value rendered instantly).
 */
export function CountUp({
  value,
  duration = 900,
  locale = 'en-US',
  prefix = '',
  suffix = '',
  className,
  style,
}: CountUpProps) {
  const reduced = useReducedMotion()
  const { ref, entered } = useInView<HTMLSpanElement>({ threshold: 0.4, once: true })
  // Start at the final value so server-rendered HTML and the first client
  // paint match the eventual displayed number (avoids placeholder text
  // appearing in text extraction / search snippets).
  const [n, setN] = useState(value)
  const finalText = `${prefix}${value.toLocaleString(locale)}${suffix}`
  const liveText = `${prefix}${n.toLocaleString(locale)}${suffix}`

  useEffect(() => {
    if (!entered) return
    if (reduced) {
      setN(value)
      return
    }
    setN(0)
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setN(Math.round(ease.outQuart(t) * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [entered, reduced, value, duration])

  const wrapperStyle: CSSProperties = {
    display: 'inline-block',
    fontVariantNumeric: 'tabular-nums',
    ...style,
  }

  return (
    <span ref={ref} className={className} style={wrapperStyle} aria-label={finalText}>
      {liveText}
    </span>
  )
}
