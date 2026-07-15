'use client'

import { useEffect, useRef } from 'react'
import { WORDMARK_GEOMETRY } from '../../brand/OriginaryLogoMotion'

const BINARY = '01101111 01110010 01101001 01100111 01101001 01101110 01100001 01110010 01111001'

/**
 * WordmarkStream: the closing signature. The brand wordmark set viewport-wide,
 * its letterforms engraved with a static grid of 0/1 cells seeded from the
 * word's own 8-bit ASCII. No animation and no pointer interaction; it only
 * redraws on resize.
 */
export function WordmarkStream() {
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
    let w = 0
    let h = 0
    let dpr = 1
    let letterPath: Path2D | null = null
    let cols = 0
    let rows = 0
    let bits: Uint8Array = new Uint8Array(0)
    let sprites: HTMLCanvasElement[][] = []

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
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const i = gy * cols + gx
          // Seed from the word's own encoding so the letters read as binary at rest.
          bits[i] = BITS.charCodeAt((gx + gy * 7) % BITS.length) === 49 ? 1 : 0
        }
      }
      sprites = [0, 1].map((g) => [makeSprite(String(g), 0.09), makeSprite(String(g), 0.3)])
    }

    // Static engraving: draw the ASCII bit grid inside the letterforms once.
    // No animation loop and no pointer interaction; the wordmark is calm.
    const render = () => {
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
          ctx.drawImage(sprites[bits[i]][0], x - sprSize / 2, y - sprSize / 2, sprSize, sprSize)
        }
      }
      ctx.restore()
    }

    const rebuild = () => {
      buildMask()
      render()
    }

    rebuild()
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(rebuild).catch(() => {})
    }

    const ro = new ResizeObserver(() => rebuild())
    ro.observe(wrap)

    return () => {
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className="cin-wordmark" aria-hidden>
      <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  )
}
