'use client'

import HeroPeacFlowBg from '@/components/HeroPeacFlowBg'

export function HeroBackground() {
  return (
    <div className="hp-hero-bg-layer" aria-hidden="true">
      <HeroPeacFlowBg className="hp-hero-bg-svg" />
    </div>
  )
}
