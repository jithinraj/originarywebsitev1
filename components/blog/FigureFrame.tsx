'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useEffect } from 'react'
import { useInView, useReducedMotion } from '@/components/home'
import './figures.css'

type FigureFrameProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

/**
 * FigureFrame drives the intra-figure animation defined in figures.css:
 * stroke draw-in and mark fade/rise for the schematic figures inside article
 * bodies. It mirrors Reveal's mechanism as well as its philosophy: the
 * pending and in-view classes are toggled imperatively on the wrapper
 * element rather than through React state, so children render at their
 * finished state by default and only switch to the pre-animation state when
 * the figure is below the fold at hydration. SSR, no-JS, reduced-motion, and
 * above-the-fold figures all show the completed artwork. useInView's
 * built-in safety timeout guarantees the in-view class still lands even if
 * IntersectionObserver never reports.
 */
export function FigureFrame({ children, className, style }: FigureFrameProps) {
  const reduced = useReducedMotion()
  const { ref, entered } = useInView<HTMLDivElement>({ threshold: 0.2 })

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    // Already visible at hydration: skip the pre-animation state entirely,
    // matching Reveal's above-the-fold shortcut.
    if (!inViewport) el.classList.add('fig-pending')
  }, [reduced, ref])

  useEffect(() => {
    if (entered) ref.current?.classList.add('fig-in')
  }, [entered, ref])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
