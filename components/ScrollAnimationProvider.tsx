'use client'

import { useEffect } from 'react'
import { isBrowser, prefersReducedMotion } from '@/lib/clipboard'

/**
 * ScrollAnimationProvider - Adds scroll-triggered animations
 *
 * Supports these animation classes:
 * - .animate-on-scroll - Basic fade up
 * - .scroll-fade-up - Enhanced fade up with longer distance
 * - .scroll-fade-scale - Fade with scale effect
 * - .scroll-fade-left - Fade in from left
 * - .scroll-fade-right - Fade in from right
 * - .reveal - Legacy reveal class
 * - .section-header-animate - Section header stagger
 * - .stagger-children - Parent for staggered child animations
 * - .stagger-fast - Faster stagger timing
 *
 * Respects prefers-reduced-motion for accessibility.
 */
export default function ScrollAnimationProvider() {
  useEffect(() => {
    if (!isBrowser()) return

    const animationSelector = '.animate-on-scroll, .scroll-fade-up, .scroll-fade-scale, .scroll-fade-left, .scroll-fade-right, .reveal, .section-header-animate, .stagger-children, .stagger-fast'

    // Check for reduced motion preference or missing IntersectionObserver
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      // Still add in-view class but immediately for users who prefer reduced motion or older browsers
      const allAnimated = document.querySelectorAll(animationSelector)
      allAnimated.forEach((el) => el.classList.add('in-view'))
      return
    }

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

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(animationSelector)
    animatedElements.forEach((el) => {
      // Only observe elements not already in view
      if (!el.classList.contains('in-view')) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
