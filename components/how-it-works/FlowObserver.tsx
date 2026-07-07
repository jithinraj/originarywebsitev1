'use client'

/**
 * FlowObserver: starts each animated how-it-works diagram when it scrolls
 * into view and pauses it off-screen. Mount once on the how-it-works page.
 * Mirrors the site's ScrollAnimationProvider pattern (IntersectionObserver,
 * reduced motion is respected by the CSS, not by JS).
 */
import { useEffect } from 'react'

export default function FlowObserver() {
  useEffect(() => {
    const flows = document.querySelectorAll('[data-flow]')
    if (!('IntersectionObserver' in window)) {
      flows.forEach((el) => el.classList.add('play'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('play', e.isIntersecting))
      },
      { threshold: 0.3 },
    )
    flows.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
