export const ease = {
  inOut: (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  out: (t: number) => 1 - Math.pow(1 - t, 3),
  outQuart: (t: number) => 1 - Math.pow(1 - t, 4),
  inOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
}

export const clamp01 = (v: number): number => Math.max(0, Math.min(1, v))

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t

export function tween(
  t: number,
  from: number,
  to: number,
  easeFn: (n: number) => number = ease.inOut,
): number {
  if (t <= from) return 0
  if (t >= to) return 1
  return easeFn((t - from) / (to - from))
}

export function digest(seed: string, n = 10): string {
  const chars = '0123456789abcdef'
  let s = ''
  // FNV-1a offset basis for better seed diffusion.
  let x = 0x811c9dc5
  for (let i = 0; i < seed.length; i++) {
    x ^= seed.charCodeAt(i)
    x = Math.imul(x, 0x01000193) >>> 0
  }
  // Warm-up rounds to spread bits before sampling.
  for (let i = 0; i < 4; i++) {
    x = (Math.imul(x, 1103515245) + 12345) >>> 0
  }
  for (let i = 0; i < n; i++) {
    x = (Math.imul(x, 1103515245) + 12345) >>> 0
    // Sample a shifted nibble so consecutive seeds do not bias toward 0-9.
    s += chars[(x >>> (4 + (i & 7))) & 0xf]
  }
  return s
}
