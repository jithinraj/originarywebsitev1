'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { WORDMARK_GEOMETRY } from '../../brand/OriginaryLogoMotion'
import { drawMark, type MarkShape } from './marks'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  shape: MarkShape
  sage: boolean
  phase: number
}

/**
 * WordmarkStream: the closing signature. The wordmark set viewport-wide,
 * its letterforms filled with a drifting stream of record marks (dots,
 * squares, seal diamonds, ticks) that part around the cursor. Static single
 * frame under reduced motion; paused off screen.
 */
export function WordmarkStream() {
  const reduced = useReducedMotion()
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const PAPER = '244, 241, 234'
    const SAGE = '154, 208, 170'
    let raf = 0
    let running = false
    let last = 0
    let w = 0
    let h = 0
    let dpr = 1
    let mask: HTMLCanvasElement | null = null
    let particles: Particle[] = []
    const px = { x: -9999, y: -9999 }

    const buildMask = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = wrap.clientWidth
      const pad = Math.max(12, w * 0.014)
      const vb = WORDMARK_GEOMETRY.viewBox
      const scale = (w - pad * 2) / vb.width
      h = Math.ceil(vb.height * scale)
      wrap.style.height = `${h}px`
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      mask = document.createElement('canvas')
      mask.width = canvas.width
      mask.height = canvas.height
      const mctx = mask.getContext('2d')
      if (!mctx) return
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      mctx.translate(pad, 0)
      mctx.scale(scale, scale)
      mctx.translate(-vb.x, -vb.y)
      mctx.fillStyle = '#14110a'
      for (const d of WORDMARK_GEOMETRY.paths) {
        mctx.fill(new Path2D(d))
      }

      const count = Math.min(2100, Math.round((w * h) / 330))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0.16 + Math.random() * 0.34,
        vy: -(0.06 + Math.random() * 0.18),
        size: 2.2 + Math.random() * 3,
        shape: Math.floor(Math.random() * 4) as MarkShape,
        sage: Math.random() < 0.16,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const drawParticle = (p: Particle, a: number) => {
      ctx.fillStyle = p.sage ? `rgba(${SAGE}, ${a})` : `rgba(${PAPER}, ${a})`
      drawMark(ctx, p.x, p.y, p.size, p.shape)
    }

    const render = (time: number, step: boolean) => {
      if (!mask) return
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(mask, 0, 0, w, h)
      ctx.globalCompositeOperation = 'source-atop'
      for (const p of particles) {
        if (step) {
          const dx = p.x - px.x
          const dy = p.y - px.y
          const d2 = dx * dx + dy * dy
          if (d2 < 19600) {
            const d = Math.max(Math.sqrt(d2), 12)
            const f = (1 - d / 140) * 1.9
            p.x += (dx / d) * f
            p.y += (dy / d) * f
          }
          p.x += p.vx + Math.sin(time * 0.8 + p.phase) * 0.08
          p.y += p.vy
          if (p.x > w + 6) p.x = -6
          if (p.y < -6) p.y = h + 6
        }
        const a = 0.5 + Math.sin(time * 1.1 + p.phase) * 0.22
        drawParticle(p, Math.max(0.16, a))
      }
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (t: number) => {
      raf = 0
      if (!running) return
      if (t - last >= 33) {
        last = t
        render(t / 1000, true)
      }
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || reduced) return
      running = true
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    const rebuild = () => {
      buildMask()
      render(0.6, false)
    }

    rebuild()
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(rebuild).catch(() => {})
    }

    const ro = new ResizeObserver(() => rebuild())
    ro.observe(wrap)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.08 },
    )
    io.observe(wrap)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      px.x = e.clientX - rect.left
      px.y = e.clientY - rect.top
    }
    const onLeave = () => {
      px.x = -9999
      px.y = -9999
    }
    wrap.addEventListener('mousemove', onMove, { passive: true })
    wrap.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [reduced])

  return (
    <div ref={wrapRef} className="cin-wordmark" aria-hidden>
      <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  )
}
