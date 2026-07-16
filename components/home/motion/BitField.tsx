'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * BitField: the hero substrate. A precise grid of tiny mono 0/1 glyphs at
 * whisper opacity; a slow wave of bit-flips travels through it and the cursor
 * writes bits, flipping and brightening cells around it. Freshly flipped
 * cells briefly read sage. Static sparse field under reduced motion and on
 * small viewports; dot-grid fallback without canvas.
 */
export function BitField({
  className,
  tone = 'ink',
  focus = 'center',
}: {
  className?: string
  tone?: 'ink' | 'paper'
  /** Where the protected content zone sits: field attenuates inside it. */
  focus?: 'center' | 'left'
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLCanvasElement | null>(null)
  const [mode, setMode] = useState<'live' | 'still' | 'boot'>('boot')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const small = window.matchMedia('(max-width: 640px)').matches
    setMode(reduced || small ? 'still' : 'live')
  }, [reduced])

  useEffect(() => {
    if (mode === 'boot') return
    const canvas = ref.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const GAP = 22
    const FONT_PX = 10
    const INKC = tone === 'paper' ? '244, 241, 234' : '20, 17, 10'
    const SAGE = tone === 'paper' ? '154, 208, 170' : '74, 116, 89'
    const BASE_A = tone === 'paper' ? 0.11 : 0.14
    const LIFT_A = tone === 'paper' ? 0.38 : 0.44

    let raf = 0
    let running = false
    let last = 0
    let w = 0
    let h = 0
    let dpr = 1
    let cols = 0
    let rows = 0
    let bits: Uint8Array = new Uint8Array(0)
    let heat: Float32Array = new Float32Array(0)
    let phase: Float32Array = new Float32Array(0)
    const px = { x: -9999, y: -9999 }

    // Pre-rendered glyph sprites: [glyph 0|1][tone base|lift|sage]
    let sprites: HTMLCanvasElement[][] = []

    const makeSprite = (glyph: string, color: string, alpha: number) => {
      const s = document.createElement('canvas')
      const size = Math.ceil(FONT_PX * dpr * 1.4)
      s.width = size
      s.height = size
      const c = s.getContext('2d')
      if (!c) return s
      c.scale(dpr, dpr)
      c.font = `500 ${FONT_PX}px "IBM Plex Mono", ui-monospace, monospace`
      c.textAlign = 'center'
      c.textBaseline = 'middle'
      c.fillStyle = `rgba(${color}, ${alpha})`
      c.fillText(glyph, size / dpr / 2, size / dpr / 2)
      return s
    }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / GAP) + 1
      rows = Math.ceil(h / GAP) + 1
      const n = cols * rows
      bits = new Uint8Array(n)
      heat = new Float32Array(n)
      phase = new Float32Array(n)
      for (let i = 0; i < n; i++) {
        // Deterministic pseudo-random seed per cell: stable across resizes.
        const x = i % cols
        const y = (i / cols) | 0
        const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
        bits[i] = (s - Math.floor(s)) > 0.5 ? 1 : 0
        phase[i] = (Math.sin(x * 31.7 + y * 17.3) * 12.9898 % 1 + 1) % 1
      }
      sprites = [0, 1].map((g) => [
        makeSprite(String(g), INKC, BASE_A),
        makeSprite(String(g), INKC, LIFT_A),
        makeSprite(String(g), SAGE, 0.72),
      ])
    }

    const render = (time: number, step: boolean) => {
      ctx.clearRect(0, 0, w, h)
      const sprSize = FONT_PX * 1.4
      // Content-zone ellipse: the field thins here so copy stays clean.
      const zcx = focus === 'left' ? w * 0.3 : w * 0.5
      const zcy = focus === 'left' ? h * 0.44 : h * 0.36
      const zrx = Math.max(w * 0.3, 260)
      const zry = Math.max(h * 0.36, 180)
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const i = gy * cols + gx
          const x = gx * GAP + (GAP / 2)
          const y = gy * GAP + 10
          if (step) {
            // Slow diagonal write-wave: when it passes a cell, flip its bit.
            const raw = x * 0.006 + y * 0.004 - time * 0.11 + phase[i]
            const wavePos = ((raw % 1) + 1) % 1
            const inWave = wavePos < 0.014
            const dx = x - px.x
            const dy = y - px.y
            const d2 = dx * dx + dy * dy
            // Cursor write head: gradient influence within ~160px.
            const near = d2 < 25600 ? 1 - Math.sqrt(d2) / 160 : 0
            if (inWave || (near > 0 && Math.random() < near * 0.55)) {
              bits[i] ^= 1
              heat[i] = Math.max(heat[i], near > 0 ? 0.6 + near * 0.4 : 0.55)
            }
            if (near > 0.55) heat[i] = Math.max(heat[i], near)
            if (heat[i] > 0.004) heat[i] *= 0.965
            else heat[i] = 0
          }
          const g = bits[i]
          const hot = heat[i]
          const ex = (x - zcx) / zrx
          const ey = (y - zcy) / zry
          const zd = Math.sqrt(ex * ex + ey * ey)
          const t = Math.min(Math.max((zd - 0.95) / 0.5, 0), 1)
          const atten = 0.12 + 0.88 * t * t
          if (atten < 0.14 && hot < 0.12) continue
          const spr = hot > 0.55 ? sprites[g][2] : hot > 0.12 ? sprites[g][1] : sprites[g][0]
          const grow = 1 + hot * 0.35
          const gs = sprSize * grow
          ctx.globalAlpha = atten
          ctx.drawImage(spr, x - gs / 2, y - gs / 2, gs, gs)
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      raf = 0
      if (!running) return
      if (t - last >= 40) {
        last = t
        render(t / 1000, true)
      }
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || mode !== 'live') return
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

    build()
    render(0.5, false)
    const ro = new ResizeObserver(() => {
      build()
      render(0.5, false)
    })
    ro.observe(parent)

    let io: IntersectionObserver | null = null
    let onVis: (() => void) | null = null
    let onMove: ((e: MouseEvent) => void) | null = null
    let onLeave: (() => void) | null = null
    if (mode === 'live') {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0.05 },
      )
      io.observe(parent)
      onVis = () => (document.hidden ? stop() : start())
      document.addEventListener('visibilitychange', onVis)
      onMove = (e: MouseEvent) => {
        const rect = parent.getBoundingClientRect()
        px.x = e.clientX - rect.left
        px.y = e.clientY - rect.top
      }
      onLeave = () => {
        px.x = -9999
        px.y = -9999
      }
      parent.addEventListener('mousemove', onMove, { passive: true })
      parent.addEventListener('mouseleave', onLeave, { passive: true })
    }

    return () => {
      stop()
      ro.disconnect()
      io?.disconnect()
      if (onVis) document.removeEventListener('visibilitychange', onVis)
      if (onMove) parent.removeEventListener('mousemove', onMove)
      if (onLeave) parent.removeEventListener('mouseleave', onLeave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- focus handler is stable; re-subscribing would restart the animation
  }, [mode, tone])

  if (mode === 'boot') {
    return <div className={`cin-dotgrid${tone === 'paper' ? ' cin-dotgrid-ink' : ''}`} aria-hidden />
  }
  return <canvas ref={ref} className={className} aria-hidden style={{ width: '100%', height: '100%' }} />
}
