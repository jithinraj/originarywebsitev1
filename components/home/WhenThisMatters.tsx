import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'

/**
 * Four concrete usage scenarios, shown immediately after the hero.
 */
const SCENARIOS = [
  {
    q: 'Investigate an incident',
    a: 'See what the system reported without reconstructing the whole story from separate logs.',
  },
  {
    q: 'Answer a customer',
    a: 'Share a record they can inspect without giving them access to your internal dashboard.',
  },
  {
    q: 'Support an audit',
    a: 'Provide reviewable records without opening production systems to the reviewer.',
  },
  {
    q: 'Compare conflicting records',
    a: 'See what each system reported when two sides disagree about an action or transaction.',
  },
]

export function WhenThisMatters() {
  return (
    <section
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}` }}
    >
      <SectionTitle title="The record is there when you need it." />
      <div className="wtm-grid" style={{ marginTop: 44 }}>
        {SCENARIOS.map((s) => (
          <div key={s.q} className="wtm-card">
            <p className="wtm-q">{s.q}</p>
            <p className="wtm-a">{s.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
