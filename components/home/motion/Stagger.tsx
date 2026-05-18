'use client'

import type { CSSProperties, ReactNode } from 'react'
import { Children, isValidElement, cloneElement } from 'react'
import { Reveal } from './Reveal'

type StaggerProps = {
  children: ReactNode
  /** Per-item delay in ms (each child waits N*step ms before revealing). */
  step?: number
  /** Initial delay before the first child reveals. */
  baseDelay?: number
  /** Distance in px each child travels while fading in. */
  distance?: number
  /** Duration of each child reveal in ms. */
  duration?: number
  /** Intersection threshold (0..1). */
  threshold?: number
  /** Optional className/style on the wrapping container. */
  className?: string
  style?: CSSProperties
  as?: 'div' | 'ul' | 'ol' | 'section'
}

/**
 * Stagger wraps each direct child in a Reveal with an increasing delay so a
 * list animates in as a soft cascade. Items pass through any DOM container
 * (`ul`, `ol`, `section`, `div`) so existing layout primitives keep working.
 */
export function Stagger({
  children,
  step = 80,
  baseDelay = 0,
  distance = 10,
  duration = 520,
  threshold = 0.15,
  className,
  style,
  as = 'div',
}: StaggerProps) {
  const Tag = as as 'div'
  return (
    <Tag className={className} style={style}>
      {Children.map(children, (child, i) => {
        const delay = baseDelay + step * i
        if (!isValidElement(child)) {
          return (
            <Reveal delay={delay} distance={distance} duration={duration} threshold={threshold}>
              {child}
            </Reveal>
          )
        }
        return (
          <Reveal
            key={(child.key as string | number | null) ?? i}
            delay={delay}
            distance={distance}
            duration={duration}
            threshold={threshold}
          >
            {cloneElement(child)}
          </Reveal>
        )
      })}
    </Tag>
  )
}
