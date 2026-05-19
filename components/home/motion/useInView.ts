'use client'

import { useEffect, useRef, useState } from 'react'

type Options = {
  threshold?: number
  once?: boolean
  /**
   * Safety net: force entered=true after this many ms even if the
   * IntersectionObserver never reports an intersection. Guards against
   * stuck-invisible sections on programmatic-scroll captures, prerender
   * snapshots, or any environment where IO does not behave as expected.
   * Set to 0 to disable. Default 1200ms.
   */
  safetyMs?: number
}

export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.2,
  once = true,
  safetyMs = 1200,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Safety: force entered after safetyMs so content never stays hidden.
    let safety: ReturnType<typeof setTimeout> | null = null
    if (safetyMs > 0) {
      safety = setTimeout(() => setEntered(true), safetyMs)
    }

    // If IO is unavailable (older browsers, certain test envs), reveal now.
    if (typeof IntersectionObserver === 'undefined') {
      setEntered(true)
      if (safety) clearTimeout(safety)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setEntered(true)
            if (safety) clearTimeout(safety)
            if (once) io.disconnect()
          } else if (!once) {
            setEntered(false)
          }
        }
      },
      { threshold },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (safety) clearTimeout(safety)
    }
  }, [threshold, once, safetyMs])

  return { ref, entered }
}
