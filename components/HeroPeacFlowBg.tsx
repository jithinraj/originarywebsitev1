'use client'

import * as React from 'react'

interface HeroPeacFlowBgProps {
  className?: string
}

/**
 * PEAC Protocol network visualization
 * Agent-to-agent communication with HTTP 402 enforcement flow
 */
export default function HeroPeacFlowBg({ className }: HeroPeacFlowBgProps) {
  const uid = React.useId().replace(/[:]/g, '')
  const glow = `glow${uid}`
  const pathGrad = `pathGrad${uid}`
  const meshGrad = `mesh${uid}`

  return (
    <svg
      className={className}
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id={glow} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id={pathGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.02" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>

        <radialGradient id={meshGrad} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.025" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ══════════ PROTOCOL PACKET SHAPES ══════════ */}
      <g opacity="0.06" stroke="currentColor" strokeWidth="0.4" fill="none">
        {/* Data packet envelopes - network protocol feel */}
        <path d="M 715 175 L 725 170 L 755 170 L 765 175 L 765 195 L 755 200 L 725 200 L 715 195 Z" />
        <path d="M 845 235 L 855 230 L 885 230 L 895 235 L 895 255 L 885 260 L 855 260 L 845 255 Z" />
        <path d="M 790 375 L 800 370 L 830 370 L 840 375 L 840 395 L 830 400 L 800 400 L 790 395 Z" />

        {/* Request/response brackets */}
        <path d="M 920 200 L 910 200 L 910 220 L 920 220" />
        <path d="M 940 200 L 950 200 L 950 220 L 940 220" />
        <path d="M 650 310 L 660 310 L 660 330 L 650 330" />
        <path d="M 670 310 L 680 310 L 680 330 L 670 330" />

        {/* Arrow connectors */}
        <path d="M 760 250 L 780 250 L 775 245 M 780 250 L 775 255" />
        <path d="M 820 350 L 840 350 L 835 345 M 840 350 L 835 355" />
      </g>

      {/* ══════════ AMBIENT GLOW ══════════ */}
      <circle cx="880" cy="300" r="120" fill={`url(#${meshGrad})`}>
        <animate attributeName="opacity" values="0.7;1;0.7" dur="8s" repeatCount="indefinite" />
      </circle>

      {/* ══════════ CONNECTION PATHS ══════════ */}
      <path d="M 680 200 Q 780 230, 876 296" fill="none" stroke={`url(#${pathGrad})`} strokeWidth="1" />
      <path d="M 700 340 Q 790 320, 876 300" fill="none" stroke={`url(#${pathGrad})`} strokeWidth="1" />
      <path d="M 740 440 Q 810 390, 876 304" fill="none" stroke={`url(#${pathGrad})`} strokeWidth="1" />
      <path d="M 780 160 Q 830 200, 876 296" fill="none" stroke={`url(#${pathGrad})`} strokeWidth="1" />

      {/* ══════════ PROTOCOL DATA FLOW ══════════ */}
      <g fontFamily="'SF Mono', 'Fira Code', monospace" fontSize="5" fill="currentColor" opacity="0.1">
        {/* Flowing protocol fragments */}
        <text>
          <animateMotion path="M 680 200 Q 780 230, 876 296" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
          req
        </text>
        <text>
          <animateMotion path="M 700 340 Q 790 320, 876 300" dur="4.5s" repeatCount="indefinite" begin="0.8s" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4.5s" repeatCount="indefinite" begin="0.8s" />
          pol
        </text>
        <text>
          <animateMotion path="M 876 300 Q 790 320, 700 340" dur="4.5s" repeatCount="indefinite" begin="2.5s" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4.5s" repeatCount="indefinite" begin="2.5s" />
          sig
        </text>
        <text>
          <animateMotion path="M 740 440 Q 810 390, 876 304" dur="5.5s" repeatCount="indefinite" begin="1.2s" />
          <animate attributeName="opacity" values="0;1;1;0" dur="5.5s" repeatCount="indefinite" begin="1.2s" />
          jwt
        </text>
      </g>

      {/* ══════════ NETWORK NODES ══════════ */}
      {/* Node A */}
      <g>
        <circle cx="680" cy="200" r="2" fill="currentColor" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.55;0.35" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="680" cy="200" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2">
          <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Node B */}
      <g>
        <circle cx="700" cy="340" r="2" fill="currentColor" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.55;0.35" dur="3.5s" repeatCount="indefinite" begin="0.4s" />
        </circle>
        <circle cx="700" cy="340" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2">
          <animate attributeName="r" values="4;8;4" dur="3.5s" repeatCount="indefinite" begin="0.4s" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3.5s" repeatCount="indefinite" begin="0.4s" />
        </circle>
      </g>

      {/* Node C */}
      <g>
        <circle cx="740" cy="440" r="2" fill="currentColor" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.55;0.35" dur="4s" repeatCount="indefinite" begin="0.8s" />
        </circle>
        <circle cx="740" cy="440" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2">
          <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" begin="0.8s" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="4s" repeatCount="indefinite" begin="0.8s" />
        </circle>
      </g>

      {/* Node D */}
      <g>
        <circle cx="780" cy="160" r="2" fill="currentColor" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.55;0.35" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
        </circle>
        <circle cx="780" cy="160" r="4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2">
          <animate attributeName="r" values="4;8;4" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3.2s" repeatCount="indefinite" begin="1.2s" />
        </circle>
      </g>

      {/* Central Hub */}
      <g>
        <circle cx="880" cy="300" r="2.5" fill="currentColor" opacity="0.28">
          <animate attributeName="opacity" values="0.28;0.4;0.28" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="880" cy="300" r="5" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.15">
          <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ══════════ DATA PACKETS ══════════ */}
      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 680 200 Q 780 230, 876 296" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.2s" repeatCount="indefinite" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 876 296 Q 780 230, 680 200" dur="2.2s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.2s" repeatCount="indefinite" begin="1.1s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 700 340 Q 790 320, 876 300" dur="1.8s" repeatCount="indefinite" begin="0.2s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="1.8s" repeatCount="indefinite" begin="0.2s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 876 300 Q 790 320, 700 340" dur="1.8s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="1.8s" repeatCount="indefinite" begin="1.1s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 740 440 Q 810 390, 876 304" dur="2.5s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 876 304 Q 810 390, 740 440" dur="2.5s" repeatCount="indefinite" begin="1.75s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.5s" repeatCount="indefinite" begin="1.75s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 780 160 Q 830 200, 876 296" dur="2s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2s" repeatCount="indefinite" begin="0.8s" />
      </circle>

      <circle r="1.5" fill="currentColor" filter={`url(#${glow})`}>
        <animateMotion path="M 876 296 Q 830 200, 780 160" dur="2s" repeatCount="indefinite" begin="1.8s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2s" repeatCount="indefinite" begin="1.8s" />
      </circle>

      {/* ══════════ PROTOCOL STATUS INDICATORS ══════════ */}
      <g fontFamily="'SF Mono', 'Fira Code', monospace" fill="currentColor">
        {/* Centered checkmark at hub */}
        <text x="880" y="302" fontSize="5" textAnchor="middle" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite" />
          ✓
        </text>
        {/* HTTP 402 - PEAC enforcement status */}
        <text x="895" y="285" fontSize="4" opacity="0.1">
          <animate attributeName="opacity" values="0;0.15;0.15;0" dur="4s" repeatCount="indefinite" begin="0.5s" />
          402
        </text>
        {/* HTTP 200 - successful after payment */}
        <text x="895" y="320" fontSize="4" opacity="0.1">
          <animate attributeName="opacity" values="0;0.15;0.15;0" dur="4s" repeatCount="indefinite" begin="2.5s" />
          200
        </text>
        {/* Receipt indicator */}
        <text x="850" y="270" fontSize="3.5" opacity="0.08">
          <animate attributeName="opacity" values="0;0.12;0.12;0" dur="5s" repeatCount="indefinite" begin="1s" />
          rcpt
        </text>
      </g>

      {/* ══════════ PEAC PROTOCOL LABELS ══════════ */}
      <g fontFamily="'SF Mono', monospace" fontSize="4" fill="currentColor" opacity="0.08">
        <text x="660" y="195">agent</text>
        <text x="680" y="335">client</text>
        <text x="725" y="435">api</text>
        <text x="765" y="155">host</text>
      </g>

      {/* ══════════ ALGORITHM FLOW MARKERS ══════════ */}
      <g opacity="0.05" stroke="currentColor" strokeWidth="0.4" fill="none">
        {/* Small circuit-like right angles */}
        <path d="M 820 220 L 840 220 L 840 240" />
        <path d="M 830 360 L 850 360 L 850 340" />
        <path d="M 900 250 L 920 250 L 920 270" />
      </g>

      {/* ══════════ AMBIENT SPARKLES ══════════ */}
      <g opacity="0.12">
        <circle cx="920" cy="220" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="950" cy="340" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="660" cy="270" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="860" cy="140" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        <circle cx="970" cy="280" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.3;0.55;0.3" dur="3.2s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="720" cy="380" r="0.6" fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" begin="0.8s" />
        </circle>
      </g>

      {/* Reduced motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          svg * { animation: none !important; }
        }
      `}</style>
    </svg>
  )
}
