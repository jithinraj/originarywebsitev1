'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useInView } from './useInView'

type Props = {
  children?: ReactNode
  /** Base className applied always; `is-in` is appended when in viewport. */
  className: string
  /** Intersection threshold (0..1). */
  threshold?: number
  /** Render as another element. */
  as?: 'div' | 'span' | 'section' | 'aside' | 'header' | 'footer'
  /** Pass through inline styles. */
  style?: CSSProperties
}

/**
 * InViewClass toggles a single `is-in` class on the wrapper when it first
 * enters the viewport. Pair with CSS that defines `.cls.is-in` to drive a
 * one-shot CSS transition (lines drawing, hairlines fading, etc.).
 */
export function InViewClass({
  children,
  className,
  threshold = 0.5,
  as = 'div',
  style,
}: Props) {
  const { ref, entered } = useInView<HTMLElement>({ threshold, once: true })
  const Tag = as as 'div'
  const cls = entered ? `${className} is-in` : className
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={cls} style={style}>
      {children}
    </Tag>
  )
}
