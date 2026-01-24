'use client'

import { useEffect, useRef, useState } from 'react'
import { isBrowser, isTouchDevice, prefersReducedMotion } from '@/lib/clipboard'

/**
 * Subtle cursor glow effect that follows the mouse.
 * Only renders on desktop devices with no reduced motion preference.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (!isBrowser()) return
    // Check for mobile and reduced motion
    const checkDevice = () => {
      setIsMobile(isTouchDevice() || prefersReducedMotion() || window.innerWidth < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (isMobile || !glowRef.current) return

    let animationFrame: number
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      // Smooth interpolation
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    animationFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [isMobile, isVisible])

  if (isMobile) return null

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
      <style jsx>{`
        .cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle at center,
            var(--gradient-mesh-light-purple) 0%,
            var(--border-subtle) 30%,
            transparent 70%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: opacity 0.3s ease;
          mix-blend-mode: screen;
          will-change: transform;
        }

        :global([data-theme="light"]) .cursor-glow {
          mix-blend-mode: multiply;
        }
      `}</style>
    </>
  )
}
