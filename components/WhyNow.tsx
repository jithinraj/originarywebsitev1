'use client'

import { useEffect, useRef } from 'react'
import { AlertTriangle, Clock, FileWarning } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'No portable record',
    desc: 'Disputes become opinions when there is no durable evidence of what was agreed.',
  },
  {
    icon: Clock,
    title: 'Manual compliance',
    desc: 'Audit teams reconstruct history from fragmented logs across multiple systems.',
  },
  {
    icon: FileWarning,
    title: 'Siloed policies',
    desc: 'Each service defines access rules differently. Clients have no standard to discover terms.',
  },
]

export default function WhyNow() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal, .stagger-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="why home-section">
      <div className="home-container">
        <div className="why-layout">
          <div className="why-header reveal">
            <span className="home-eyebrow">The problem</span>
            <h2 className="home-title">
              Agents will act.
              <br />
              <span className="dim">The web needs durable records.</span>
            </h2>
            <p className="home-lede">
              Autonomous systems can access resources, trigger actions, and transact
              across services. Without a portable record of policy and outcome,
              disputes become opinions and compliance becomes manual work.
            </p>
          </div>

          <div className="why-cards stagger-reveal">
            {problems.map((problem, i) => {
              const Icon = problem.icon
              return (
                <div key={i} className="problem-card">
                  <div className="card-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3>{problem.title}</h3>
                  <p>{problem.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .why {
          background: var(--surface-subtle);
          border-top: 1px solid var(--border-default);
        }

        .why-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
          align-items: start;
        }

        .why-header {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
          position: sticky;
          top: 120px;
        }

        .dim {
          color: var(--text-tertiary);
        }

        .why-cards {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .problem-card {
          padding: var(--space-6);
          background: var(--surface-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .problem-card:hover {
          border-color: var(--border-default);
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px) translateX(4px);
        }

        .card-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 171, 0, 0.1) 0%, rgba(255, 100, 0, 0.05) 100%);
          border-radius: var(--radius-xl);
          color: var(--warning);
        }

        .problem-card h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .problem-card p {
          font-size: var(--text-sm);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-reveal > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stagger-reveal.in-view > *:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .stagger-reveal.in-view > *:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .stagger-reveal.in-view > *:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }

        @media (max-width: 900px) {
          .why-layout {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }

          .why-header {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .problem-card {
            padding: var(--space-5);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .stagger-reveal > * {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  )
}
