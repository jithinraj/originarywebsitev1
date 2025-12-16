'use client'

import { useEffect } from 'react'

/**
 * ScrollAnimationProvider - Adds scroll-triggered animations
 *
 * Elements with class "animate-on-scroll" will fade in when they enter the viewport.
 * Add "stagger-children" to parent elements for staggered child animations.
 *
 * Respects prefers-reduced-motion for accessibility.
 */
export default function ScrollAnimationProvider() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      threshold: 0.1
    }

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // Once animated, stop observing to prevent re-animation
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Observe all elements with the animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
