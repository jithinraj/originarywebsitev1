'use client'

import { useEffect, useState } from 'react'

export function useEnterClock(entered: boolean, cap = 12): number {
  const [t, setT] = useState(0)

  useEffect(() => {
    if (!entered) return
    let raf = 0
    let start: number | null = null
    const step = (ts: number) => {
      if (start == null) start = ts
      const dt = (ts - start) / 1000
      setT(Math.min(cap, dt))
      if (dt < cap) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [entered, cap])

  return t
}
