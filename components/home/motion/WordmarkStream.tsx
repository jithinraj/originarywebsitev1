'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { WORDMARK_GEOMETRY } from '../../brand/OriginaryLogoMotion'

const BINARY = '01101111 01110010 01101001 01100111 01101001 01101110 01100001 01110010 01111001'

/**
 * WordmarkStream: the closing signature. The wordmark set viewport-wide in
 * the brand letterforms, filled with a precise grid of 0/1 cells seeded from
 * the word's own 8-bit ASCII. A slow diagonal wave flips bits as it passes and
 * the cursor acts as a write head, flipping and brightening nearby cells.
 * Static frame under reduced motion.
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
    const GAP = 16
    const FONT_PX = 11
    const BITS = BINARY.replace(/ /g, '')
    let raf = 0
    let running = false
    let last = 0
    let w = 0
    let h = 0
    let dpr = 1
    let letterPath: Path2D | null = null
    let cols = 0
    let rows = 0
    let bits: Uint8Array = new Uint8Array(0)
    let heat: Float32Array = new Float32Array(0)
    let phase: Float32Array = new Float32Array(0)
    let sprites: HTMLCanvasElement[][] = []
    const px = { x: -9999, y: -9999 }

    const makeSprite = (glyph: string, alpha: number) => {
      const spr = document.createElement('canvas')
      const size = Math.ceil(FONT_PX * dpr * 1.6)
      spr.width = size
      spr.height = size
      const c = spr.getContext('2d')
      if (!c) return spr
      c.scale(dpr, dpr)
      c.font = `500 ${FONT_PX}px "IBM Plex Mono", ui-monospace, monospace`
      c.textAlign = 'center'
      c.textBaseline = 'middle'
      c.fillStyle = `rgba(${PAPER}, ${alpha})`
      c.fillText(glyph, size / dpr / 2, size / dpr / 2)
      return spr
    }

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

      letterPath = new Path2D()
      const m = new DOMMatrix().translate(pad, 0).scale(scale).translate(-vb.x, -vb.y)
      for (const d of WORDMARK_GEOMETRY.paths) {
        letterPath.addPath(new Path2D(d), m)
      }

      cols = Math.ceil(w / GAP) + 1
      rows = Math.ceil(h / GAP) + 1
      const n = cols * rows
      bits = new Uint8Array(n)
      heat = new Float32Array(n)
      phase = new Float32Array(n)
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const i = gy * cols + gx
          // Seed from the word's own encoding so the letters read as binary at rest.
          bits[i] = BITS.charCodeAt((gx + gy * 7) % BITS.length) === 49 ? 1 : 0
          const v = Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453
          phase[i] = v - Math.floor(v)
        }
      }
      sprites = [0, 1].map((g) => [makeSprite(String(g), 0.17), makeSprite(String(g), 0.52)])
    }

    const render = (time: number, step: boolean) => {
      if (!letterPath) return
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.clip(letterPath)
      ctx.fillStyle = '#14110a'
      ctx.fillRect(0, 0, w, h)
      const sprSize = FONT_PX * 1.6
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const i = gy * cols + gx
          const x = gx * GAP + GAP / 2
          const y = gy * GAP + GAP / 2
          if (step) {
            // Slow diagonal write-wave flips bits as it passes.
            const raw = x * 0.006 + y * 0.004 - time * 0.09 + phase[i]
            const wavePos = ((raw % 1) + 1) % 1
            const inWave = wavePos < 0.013
            const dx = x - px.x
            const dy = y - px.y
            const d2 = dx * dx + dy * dy
            // Cursor write head: gradient influence within ~150px.
            const near = d2 < 22500 ? 1 - Math.sqrt(d2) / 150 : 0
            if (inWave || (near > 0 && Math.random() < near * 0.5)) {
              bits[i] ^= 1
              heat[i] = Math.max(heat[i], near > 0 ? 0.6 + near * 0.4 : 0.5)
            }
            if (near > 0.5) heat[i] = Math.max(heat[i], near)
            if (heat[i] > 0.004) heat[i] *= 0.94
            else heat[i] = 0
          }
          const hot = heat[i]
          const spr = hot > 0.12 ? sprites[bits[i]][1] : sprites[bits[i]][0]
          const grow = 1 + hot * 0.3
          const gs = sprSize * grow
          ctx.drawImage(spr, x - gs / 2, y - gs / 2, gs, gs)
        }
      }
      ctx.restore()
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
