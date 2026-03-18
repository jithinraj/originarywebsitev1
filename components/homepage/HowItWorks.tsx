'use client'

import { AnimateIn, StaggerContainer, StaggerItem } from './AnimateIn'

const cards = [
  {
    number: '01',
    title: 'Evaluate the request',
    description: 'Classify inbound agent requests before action is taken.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l8 4.5v5c0 4.694-3.298 9.087-8 10.5-4.702-1.413-8-5.806-8-10.5v-5L12 3z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Apply policy',
    description: 'Allow, deny, review, rate-limit, require approval, or charge based on your rules.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Emit the record',
    description: 'Create a portable signed record your team can inspect, verify, and export later.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
]

const timelineSteps = [
  { label: 'Evaluate', description: 'Classify inbound request using available signals', color: 'var(--color-verified)' },
  { label: 'Apply policy', description: 'Your rules determine the access decision', color: 'var(--color-policy)' },
  { label: 'Emit record', description: 'Signed record returned and exportable', color: 'var(--color-audit)' },
]

export function HowItWorks() {
  return (
    <section id="product-flow" className="hp-section hp-alt">
      <div className="hp-container">
        <AnimateIn>
          <span
            className="hp-text-overline"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Three steps
          </span>
          <h2
            className="hp-text-display mt-5 max-w-[42rem]"
            style={{ color: 'var(--color-fg)' }}
          >
            How it works
          </h2>
        </AnimateIn>

        <StaggerContainer delay={0.15} className="mt-8 sm:mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="hp-card p-8 md:p-9 h-full">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--color-surface-secondary)',
                      color: 'var(--color-fg)',
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--color-fg-faint)' }}
                  >
                    {card.number}
                  </span>
                </div>
                <h3
                  className="hp-text-heading mb-3"
                  style={{ color: 'var(--color-fg)' }}
                >
                  {card.title}
                </h3>
                <p
                  className="hp-text-body-sm leading-relaxed"
                  style={{ color: 'var(--color-fg-secondary)' }}
                >
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <div className="mt-14 md:mt-18">
          <AnimateIn delay={0.3}>
            <p
              className="hp-text-overline mb-10 md:mb-12"
              style={{ color: 'var(--color-fg-muted)' }}
            >
              Request lifecycle
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            {/* Desktop */}
            <div className="hidden sm:block">
              <div className="relative">
                <div
                  className="absolute top-[15px] left-[12.5%] right-[12.5%] h-px"
                  style={{ background: 'var(--color-border)' }}
                />
                <div
                  className="absolute top-[14px] left-[12.5%] right-[12.5%] h-[3px] rounded-full hp-timeline-line"
                  style={{ background: 'rgba(226,224,219,0.3)' }}
                />
                <div className="grid grid-cols-3">
                  {timelineSteps.map((step, i) => (
                    <div key={step.label} className="flex flex-col items-center text-center px-2">
                      <div
                        className="relative z-10 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center shadow-sm"
                        style={{
                          borderColor: step.color,
                          background: 'var(--color-surface-elevated)',
                        }}
                      >
                        <span className="text-[0.6875rem] font-bold" style={{ color: step.color }}>
                          {i + 1}
                        </span>
                      </div>
                      <p
                        className="mt-4 text-[0.8125rem] font-semibold tracking-[-0.01em]"
                        style={{ color: 'var(--color-fg)' }}
                      >
                        {step.label}
                      </p>
                      <p
                        className="mt-1.5 text-[0.75rem] leading-relaxed max-w-[160px]"
                        style={{ color: 'var(--color-fg-secondary)' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="sm:hidden relative pl-10">
              <div
                className="absolute top-[4px] bottom-[4px] left-[14px] w-px"
                style={{ background: 'var(--color-border)' }}
              />
              <div className="space-y-7">
                {timelineSteps.map((step, i) => (
                  <div key={step.label} className="relative flex items-start">
                    <div
                      className="absolute left-[-24px] w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center shadow-sm shrink-0"
                      style={{
                        borderColor: step.color,
                        background: 'var(--color-surface-elevated)',
                      }}
                    >
                      <span className="text-[0.6875rem] font-bold" style={{ color: step.color }}>
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <p
                        className="text-[0.8125rem] font-semibold tracking-[-0.01em]"
                        style={{ color: 'var(--color-fg)' }}
                      >
                        {step.label}
                      </p>
                      <p
                        className="mt-1 text-[0.75rem] leading-relaxed"
                        style={{ color: 'var(--color-fg-secondary)' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.5}>
          <p
            className="mt-12 hp-text-body-sm max-w-lg"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            Works with the signals you have today. More signals produce
            stronger decisions and more complete records.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
