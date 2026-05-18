'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useInView } from './useInView'
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
  /** When true, only animate once on first viewport entry (default true). */
  once?: boolean
  /** Optional className passthrough. */
  className?: string
  /** Optional style passthrough merged before animation styles. */
  style?: CSSProperties
  /** Render as a different HTML element. */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'span'
}

/**
 * Reveal wraps content with a low-amplitude fade-up entrance animation that
 * fires when the element enters the viewport. Honors prefers-reduced-motion
 * by skipping the transform/opacity transition entirely so users who request
 * reduced motion see the final state immediately.
 */
export function Reveal({
  children,
  distance = 12,
  duration = 560,
  delay = 0,
  threshold = 0.18,
  once = true,
  className,
  style,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const { ref, entered } = useInView<HTMLElement>({ threshold, once })

  const animatedStyle: CSSProperties = reduced
    ? {}
    : {
        opacity: entered ? 1 : 0,
        transform: entered ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(0.2, 0.65, 0.25, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.65, 0.25, 1) ${delay}ms`,
        willChange: entered ? 'auto' : 'transform, opacity',
      }

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{ ...style, ...animatedStyle }}
    >
      {children}
    </Tag>
  )
}
