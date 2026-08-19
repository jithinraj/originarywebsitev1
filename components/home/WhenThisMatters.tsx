import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'

/**
 * Four concrete usage scenarios, shown immediately after the hero.
 */
const SCENARIOS = [
  {
    q: 'An incident happens.',
    a: 'See what the system recorded without reconstructing the whole story from separate logs.',
  },
  {
    q: 'A customer asks what changed.',
    a: 'Send them a record they can inspect instead of screenshots from your dashboard.',
  },
  {
    q: 'An auditor asks for evidence.',
    a: 'Share the relevant records without opening production systems.',
  },
  {
    q: 'Two systems disagree.',
    a: "Compare what each one recorded instead of relying on either side's private log.",
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
