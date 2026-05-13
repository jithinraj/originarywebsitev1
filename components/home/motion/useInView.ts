'use client'

import { useEffect, useRef, useState } from 'react'

type Options = { threshold?: number; once?: boolean }

export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0.2,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setEntered(true)
            if (once) io.disconnect()
          } else if (!once) {
            setEntered(false)
          }
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])

  return { ref, entered }
}
