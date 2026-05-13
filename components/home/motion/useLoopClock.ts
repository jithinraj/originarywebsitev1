'use client'

import { useEffect, useState } from 'react'

export function useLoopClock(period = 8, paused = false): number {
  const [t, setT] = useState(0)

  useEffect(() => {
    if (paused) return
    let raf = 0
    let start: number | null = null
    let visible = typeof document !== 'undefined' ? !document.hidden : true
    const onVis = () => {
      visible = !document.hidden
      start = null
    }
    document.addEventListener('visibilitychange', onVis)
    const step = (ts: number) => {
      if (!visible) {
        raf = requestAnimationFrame(step)
        return
      }
      if (start == null) start = ts
      const dt = ((ts - start) / 1000) % period
      setT(dt)
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [period, paused])

  return t
}
