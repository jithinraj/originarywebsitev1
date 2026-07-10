export type MarkShape = 0 | 1 | 2 | 3

/** Draw one record mark: dot, square, seal diamond, or tick. */
export function drawMark(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  s: number,
  shape: MarkShape,
) {
  if (shape === 0) {
    ctx.beginPath()
    ctx.arc(x, y, s * 0.55, 0, Math.PI * 2)
    ctx.fill()
  } else if (shape === 1) {
    ctx.fillRect(x - s / 2, y - s / 2, s, s)
  } else if (shape === 2) {
    ctx.beginPath()
    ctx.moveTo(x, y - s * 0.7)
    ctx.lineTo(x + s * 0.7, y)
    ctx.lineTo(x, y + s * 0.7)
    ctx.lineTo(x - s * 0.7, y)
    ctx.closePath()
    ctx.fill()
  } else {
    ctx.fillRect(x - s * 0.7, y - 0.6, s * 1.4, 1.2)
  }
}
