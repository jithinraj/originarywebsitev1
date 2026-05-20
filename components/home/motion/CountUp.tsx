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
  const [n, setN] = useState(0)
  const finalText = `${prefix}${value.toLocaleString(locale)}${suffix}`
  const liveText = `${prefix}${n.toLocaleString(locale)}${suffix}`

  useEffect(() => {
    if (!entered) return
    if (reduced) {
      setN(value)
      return
    }
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

  // Inline-grid layered approach: both the (invisible) placeholder sized to
  // the final string and the live (animated) value share grid cell (1,1) so
  // the wrapper width is determined by the placeholder and never reflows.
  const wrapperStyle: CSSProperties = {
    display: 'inline-grid',
    gridTemplateColumns: '1fr',
    fontVariantNumeric: 'tabular-nums',
    ...style,
  }
  const cellStyle: CSSProperties = {
    gridColumn: 1,
    gridRow: 1,
  }

  return (
    <span ref={ref} className={className} style={wrapperStyle} aria-label={finalText}>
      <span aria-hidden style={{ ...cellStyle, visibility: 'hidden' }}>
        {finalText}
      </span>
      <span aria-hidden style={cellStyle}>
        {entered || reduced ? liveText : `${prefix}0${suffix}`}
      </span>
    </span>
  )
}
