'use client'

import { useEffect, useState } from 'react'
import { onMotionChange, prefersStill } from '@/lib/motion'

/**
 * True when animation should hold still: the OS asks for reduced motion, or the reader paused the
 * site's motion with the pause control (lib/motion.ts).
 */
export function useReducedMotion(): boolean {
  const [still, setStill] = useState(false)

  useEffect(() => {
    const read = () => setStill(prefersStill())
    read()
    return onMotionChange(read)
  }, [])

  return still
}
