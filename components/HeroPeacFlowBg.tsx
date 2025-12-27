'use client'

import * as React from 'react'

interface HeroPeacFlowBgProps {
  className?: string
}

export default function HeroPeacFlowBg({ className }: HeroPeacFlowBgProps) {
  const uid = React.useId().replace(/[:]/g, '')
  const flowId = `flow-${uid}`
  const arrowId = `arrow-${uid}`

  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker
          id={arrowId}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.3" />
        </marker>

        <style>{`
          .flow-line {
            fill: none;
            stroke: currentColor;
            stroke-opacity: 0.12;
            stroke-width: 1.5;
            stroke-dasharray: 8 4;
          }

          .flow-animated {
            fill: none;
            stroke: currentColor;
            stroke-opacity: 0.35;
            stroke-width: 2;
            stroke-dasharray: 12 88;
            stroke-linecap: round;
            animation: flow-move 4s linear infinite;
          }

          .flow-node {
            fill: rgba(255, 255, 255, 0.9);
            stroke: currentColor;
            stroke-opacity: 0.25;
            stroke-width: 1.5;
          }

          .flow-node-inner {
            fill: currentColor;
            fill-opacity: 0.08;
          }

          .flow-label {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            fill: currentColor;
            fill-opacity: 0.5;
            text-anchor: middle;
          }

          .flow-label-small {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 9px;
            fill: currentColor;
            fill-opacity: 0.35;
            text-anchor: middle;
          }

          .flow-402 {
            fill: none;
            stroke: currentColor;
            stroke-opacity: 0.08;
            stroke-width: 1.5;
            stroke-dasharray: 4 4;
          }

          .flow-402-pulse {
            fill: none;
            stroke: currentColor;
            stroke-opacity: 0;
            stroke-width: 2;
            animation: pulse-402 6s ease-in-out infinite;
          }

          .flow-badge {
            fill: currentColor;
            fill-opacity: 0.06;
          }

          .flow-badge-text {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 8px;
            font-weight: 600;
            fill: currentColor;
            fill-opacity: 0.4;
            text-anchor: middle;
          }

          @keyframes flow-move {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }

          @keyframes pulse-402 {
            0%, 40% { stroke-opacity: 0; }
            50%, 70% { stroke-opacity: 0.25; }
            80%, 100% { stroke-opacity: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .flow-animated, .flow-402-pulse { animation: none !important; }
            .flow-animated { stroke-opacity: 0.2; stroke-dasharray: none; }
          }
        `}</style>
      </defs>

      <g transform="translate(350, 80)">
        <line className="flow-line" x1="0" y1="60" x2="120" y2="60" markerEnd={`url(#${arrowId})`} />
        <line className="flow-animated" x1="0" y1="60" x2="120" y2="60" />

        <line className="flow-line" x1="180" y1="60" x2="300" y2="60" markerEnd={`url(#${arrowId})`} />
        <line className="flow-animated" x1="180" y1="60" x2="300" y2="60" style={{ animationDelay: '1s' }} />

        <line className="flow-line" x1="360" y1="60" x2="420" y2="60" markerEnd={`url(#${arrowId})`} />
        <line className="flow-animated" x1="360" y1="60" x2="420" y2="60" style={{ animationDelay: '2s' }} />

        <path className="flow-402" d="M 330 45 Q 330 -20, 400 -20 Q 470 -20, 470 45" />
        <path className="flow-402-pulse" d="M 330 45 Q 330 -20, 400 -20 Q 470 -20, 470 45" />
        <rect className="flow-badge" x="370" y="-35" width="60" height="18" rx="4" />
        <text className="flow-badge-text" x="400" y="-22">HTTP 402</text>

        <g transform="translate(-30, 40)">
          <rect className="flow-node" x="-28" y="-18" width="56" height="36" rx="6" />
          <rect className="flow-node-inner" x="-24" y="-14" width="48" height="28" rx="4" />
          <text className="flow-label" x="0" y="4">Agent</text>
          <text className="flow-label-small" x="0" y="38">Request</text>
        </g>

        <g transform="translate(150, 40)">
          <rect className="flow-node" x="-40" y="-18" width="80" height="36" rx="6" />
          <rect className="flow-node-inner" x="-36" y="-14" width="72" height="28" rx="4" />
          <text className="flow-label" x="0" y="4">Policy</text>
          <text className="flow-label-small" x="0" y="38">peac.txt</text>
        </g>

        <g transform="translate(330, 40)">
          <rect className="flow-node" x="-34" y="-18" width="68" height="36" rx="6" />
          <rect className="flow-node-inner" x="-30" y="-14" width="60" height="28" rx="4" />
          <text className="flow-label" x="0" y="4">Gateway</text>
          <text className="flow-label-small" x="0" y="38">Verify</text>
        </g>

        <g transform="translate(450, 40)">
          <rect className="flow-node" x="-28" y="-18" width="56" height="36" rx="6" />
          <rect className="flow-node-inner" x="-24" y="-14" width="48" height="28" rx="4" />
          <text className="flow-label" x="0" y="4">Receipt</text>
          <text className="flow-label-small" x="0" y="38">PEAC-Receipt</text>
        </g>
      </g>

      <g transform="translate(350, 220)">
        <line className="flow-line" x1="420" y1="60" x2="300" y2="60" markerEnd={`url(#${arrowId})`} />
        <line className="flow-animated" x1="420" y1="60" x2="300" y2="60" style={{ animationDelay: '3s' }} />

        <text className="flow-label-small" x="360" y="80">Response + Receipt</text>
      </g>
    </svg>
  )
}
