'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

const VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_tone;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 8.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0) * 1.7;
  float t = u_time * 0.045;

  vec2 m = u_mouse / u_res;
  float md = distance(vec2(uv.x, uv.y), vec2(m.x, 1.0 - m.y));
  float mw = exp(-md * md * 10.0) * 0.4;

  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t * 0.8));
  vec2 r = vec2(
    fbm(p + 2.4 * q + vec2(1.7, 9.2) + t * 0.6),
    fbm(p + 2.4 * q + vec2(8.3, 2.8) - t * 0.4)
  );
  float f = fbm(p + 2.2 * r + mw);

  float bands = 15.0;
  float d = abs(fract(f * bands) - 0.5);
  float iso = 1.0 - smoothstep(0.02, 0.09, d);

  float depth = smoothstep(0.25, 0.85, f);
  float alpha = iso * (0.045 + depth * 0.075 + mw * 0.5);

  float sageMix = smoothstep(0.58, 0.74, f) * (0.35 + mw);

  vec3 inkLine = mix(vec3(0.078, 0.067, 0.039), vec3(0.29, 0.455, 0.349), sageMix);
  vec3 paperLine = mix(vec3(0.957, 0.945, 0.918), vec3(0.604, 0.816, 0.667), sageMix);
  vec3 line = mix(inkLine, paperLine, u_tone);

  gl_FragColor = vec4(line, alpha * mix(1.0, 0.75, u_tone));
}
`

/**
 * ShaderField: a slow, domain-warped contour field rendered on the GPU. The
 * lines flow like a living survey map and bend toward the cursor. One static
 * frame under reduced motion and on small viewports; dot-grid fallback
 * without WebGL.
 */
export function ShaderField({
  className,
  tone = 'ink',
}: {
  className?: string
  tone?: 'ink' | 'paper'
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLCanvasElement | null>(null)
  const [mode, setMode] = useState<'live' | 'still' | 'fallback' | 'boot'>('boot')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const small = window.matchMedia('(max-width: 640px)').matches
    setMode(reduced || small ? 'still' : 'live')
  }, [reduced])

  useEffect(() => {
    if (mode !== 'live' && mode !== 'still') return
    const canvas = ref.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      powerPreference: 'low-power',
    })
    if (!gl) {
      setMode('fallback')
      return
    }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)
      if (!sh) return null
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return null
      return sh
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) {
      setMode('fallback')
      return
    }
    const prog = gl.createProgram()
    if (!prog) {
      setMode('fallback')
      return
    }
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setMode('fallback')
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'a')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')
    const uTone = gl.getUniformLocation(prog, 'u_tone')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    let raf = 0
    let running = false
    let last = 0
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

    const resize = () => {
      const scale = 0.5 * Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = Math.max(2, Math.round(w * scale))
      canvas.height = Math.max(2, Math.round(h * scale))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const drawFrame = (timeSec: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.08
      mouse.y += (mouse.ty - mouse.y) * 0.08
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, timeSec)
      gl.uniform2f(
        uMouse,
        (mouse.x / Math.max(w, 1)) * canvas.width,
        (mouse.y / Math.max(h, 1)) * canvas.height,
      )
      gl.uniform1f(uTone, tone === 'paper' ? 1 : 0)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (t: number) => {
      raf = 0
      if (!running) return
      if (t - last >= 33) {
        last = t
        drawFrame(t / 1000)
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

    resize()
    drawFrame(12.5)
    const ro = new ResizeObserver(() => {
      resize()
      drawFrame(12.5)
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
        mouse.tx = e.clientX - rect.left
        mouse.ty = e.clientY - rect.top
      }
      onLeave = () => {
        mouse.tx = -9999
        mouse.ty = -9999
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
  }, [mode, tone])

  if (mode === 'fallback') {
    return <div className={`cin-dotgrid${tone === 'paper' ? ' cin-dotgrid-ink' : ''}`} aria-hidden />
  }
  return <canvas ref={ref} className={className} aria-hidden style={{ width: '100%', height: '100%' }} />
}
