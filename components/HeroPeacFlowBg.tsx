'use client'

import * as React from 'react'

interface HeroPeacFlowBgProps {
  className?: string
}

/**
 * Evidence-path background watermark.
 * Near-static verification trace concentrated in the right-lower quadrant.
 * No text, no left cluster, monochrome only.
 */
export default function HeroPeacFlowBg({ className }: HeroPeacFlowBgProps) {
  const uid = React.useId().replace(/[:]/g, '')
  const pathGrad = `pG${uid}`
  const copyMask = `cM${uid}`
  const rightFade = `rF${uid}`

  return (
    <svg
      className={className}
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Path stroke: fades at endpoints */}
        <linearGradient id={pathGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.045" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Copy-protection mask: fades to nothing over the left/center copy zone */}
        <linearGradient id={rightFade} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="55%" stopColor="white" stopOpacity="0" />
          <stop offset="75%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id={copyMask}>
          <rect x="0" y="0" width="1000" height="600" fill={`url(#${rightFade})`} />
        </mask>
      </defs>

      {/* All structure masked: invisible over copy, visible only far right */}
      <g mask={`url(#${copyMask})`}>

        {/* ── EVIDENCE PATH ── */}
        {/* Request arrives → verification → record sealed */}

        {/* Path: request → hub */}
        <path
          d="M 780 155 C 830 190, 870 260, 885 330"
          fill="none" stroke={`url(#${pathGrad})`} strokeWidth="0.4"
        />
        {/* Path: hub → record */}
        <path
          d="M 885 330 C 895 380, 900 430, 895 485"
          fill="none" stroke={`url(#${pathGrad})`} strokeWidth="0.4"
        />
        {/* Secondary trace converging to hub */}
        <path
          d="M 950 215 C 930 260, 910 290, 885 330"
          fill="none" stroke={`url(#${pathGrad})`} strokeWidth="0.3"
        />

        {/* ── NODE: Request (top far-right) ── */}
        <circle cx="780" cy="155" r="0.7" fill="currentColor" opacity="0.055" />

        {/* ── NODE: Second request ── */}
        <circle cx="950" cy="215" r="0.6" fill="currentColor" opacity="0.04" />

        {/* ── NODE: Verification hub (right-center) ── */}
        <circle cx="885" cy="330" r="0.9" fill="currentColor" opacity="0.07">
          <animate
            attributeName="opacity"
            values="0.07;0.11;0.07"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Verification pulse ring: once every 12 seconds */}
        <circle
          cx="885" cy="330" r="2"
          fill="none" stroke="currentColor" strokeWidth="0.12"
          opacity="0"
        >
          <animate attributeName="r" values="2;7;7" dur="12s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.04;0" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* ── NODE: Record sealed (lower far-right) ── */}
        <circle cx="895" cy="485" r="0.7" fill="currentColor" opacity="0.055" />

        {/* ── SINGLE EVIDENCE PACKET ── */}
        {/* One packet traverses the path every 14 seconds */}
        <circle r="0.5" fill="currentColor" opacity="0">
          <animateMotion
            path="M 780 155 C 830 190, 870 260, 885 330 C 895 380, 900 430, 895 485"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            keyTimes="0; 0.5; 1"
          />
          <animate
            attributeName="opacity"
            values="0;0.15;0.15;0.15;0"
            keyTimes="0;0.06;0.4;0.88;1"
            dur="14s"
            repeatCount="indefinite"
          />
        </circle>


      </g>

      {/* Reduced motion: static frame */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          svg * { animation: none !important; }
        }
      `}</style>
    </svg>
  )
}
