'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { safeMatchMedia } from '@/lib/clipboard'

interface Node {
  id: number
  x: number
  y: number
  label: string
}

interface Packet {
  id: number
  from: Node
  to: Node
  progress: number
  startTime: number
  duration: number
  phase: 'request' | 'challenge' | 'receipt'
}

interface AgentNetworkCanvasProps {
  className?: string
}

const NODE_LABELS = ['Agent', 'API', 'Publisher', 'Verifier', 'Consumer', 'Gateway']

export default function AgentNetworkCanvas({ className = '' }: AgentNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const nodesRef = useRef<Node[]>([])
  const packetsRef = useRef<Packet[]>([])
  const lastPacketTimeRef = useRef(0)
  const packetIdRef = useRef(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = safeMatchMedia('(prefers-reduced-motion: reduce)')
    if (!mediaQuery) return
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const generateNodes = useCallback((width: number, height: number): Node[] => {
    const positions = [
      { x: width * 0.92, y: height * 0.15, label: 'Agent' },
      { x: width * 0.78, y: height * 0.08, label: 'API' },
      { x: width * 0.95, y: height * 0.45, label: 'Publisher' },
      { x: width * 0.88, y: height * 0.82, label: 'Verifier' },
      { x: width * 0.72, y: height * 0.92, label: 'Gateway' },
    ]

    return positions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      label: pos.label,
    }))
  }, [])

  const findConnectedNodes = useCallback((node: Node, nodes: Node[], maxDistance: number = 600): Node[] => {
    return nodes.filter(other => {
      if (other.id === node.id) return false
      const dist = Math.sqrt((other.x - node.x) ** 2 + (other.y - node.y) ** 2)
      return dist <= maxDistance
    })
  }, [])

  const createPacket = useCallback((nodes: Node[]) => {
    if (nodes.length < 2) return null

    const from = nodes[Math.floor(Math.random() * nodes.length)]
    const connected = findConnectedNodes(from, nodes)
    if (connected.length === 0) return null

    const to = connected[Math.floor(Math.random() * connected.length)]
    packetIdRef.current++

    const phases: Array<'request' | 'challenge' | 'receipt'> = ['request', 'challenge', 'receipt']

    return {
      id: packetIdRef.current,
      from,
      to,
      progress: 0,
      startTime: performance.now(),
      duration: 2500 + Math.random() * 1500,
      phase: phases[Math.floor(Math.random() * phases.length)],
    }
  }, [findConnectedNodes])

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const nodes = nodesRef.current
    const packets = packetsRef.current

    ctx.clearRect(0, 0, width, height)

    ctx.strokeStyle = 'rgba(203, 213, 225, 0.25)'
    ctx.lineWidth = 1
    ctx.setLineDash([4, 6])

    nodes.forEach(node => {
      const connected = findConnectedNodes(node, nodes)
      connected.forEach(other => {
        if (other.id > node.id) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      })
    })
    ctx.setLineDash([])

    nodes.forEach(node => {
      ctx.fillStyle = 'rgba(241, 245, 249, 0.9)'
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)'
      ctx.lineWidth = 1

      const boxWidth = 56
      const boxHeight = 24
      const radius = 4

      ctx.beginPath()
      ctx.roundRect(node.x - boxWidth / 2, node.y - boxHeight / 2, boxWidth, boxHeight, radius)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'rgba(71, 85, 105, 0.8)'
      ctx.font = '10px ui-monospace, monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(node.label, node.x, node.y)
    })

    packets.forEach((packet, index) => {
      const elapsed = time - packet.startTime
      packet.progress = Math.min(1, elapsed / packet.duration)

      const dx = packet.to.x - packet.from.x
      const dy = packet.to.y - packet.from.y
      const x = packet.from.x + dx * packet.progress
      const y = packet.from.y + dy * packet.progress

      let color = '#635bff'
      let label = 'REQ'

      if (packet.phase === 'challenge') {
        color = '#f59e0b'
        label = '402'
      } else if (packet.phase === 'receipt') {
        color = '#10b981'
        label = 'RCP'
      }

      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(x - 14, y - 8, 28, 16, 3)
      ctx.fill()

      ctx.fillStyle = 'white'
      ctx.font = 'bold 8px ui-monospace, monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(label, x, y)

      if (packet.progress >= 1) {
        packets.splice(index, 1)
      }
    })
  }, [findConnectedNodes])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
      nodesRef.current = generateNodes(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = (time: number) => {
      const rect = container.getBoundingClientRect()

      if (!prefersReducedMotion) {
        const timeSinceLastPacket = time - lastPacketTimeRef.current
        const maxPackets = 3

        if (timeSinceLastPacket > 3000 + Math.random() * 4000 && packetsRef.current.length < maxPackets) {
          const newPacket = createPacket(nodesRef.current)
          if (newPacket) {
            packetsRef.current.push(newPacket)
            lastPacketTimeRef.current = time
          }
        }
      }

      draw(ctx, rect.width, rect.height, time)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    setTimeout(() => {
      if (!prefersReducedMotion) {
        const initialPacket = createPacket(nodesRef.current)
        if (initialPacket) {
          packetsRef.current.push(initialPacket)
          lastPacketTimeRef.current = performance.now()
        }
      }
    }, 1000)

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [generateNodes, createPacket, draw, prefersReducedMotion])

  return (
    <div ref={containerRef} className={`agent-network-container ${className}`}>
      <canvas ref={canvasRef} className="agent-network-canvas" />
      <style jsx>{`
        .agent-network-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .agent-network-canvas {
          position: absolute;
          inset: 0;
        }
      `}</style>
    </div>
  )
}
