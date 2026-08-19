import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionTitle } from './atoms/Mono'
import { RecordDemo } from './RecordDemo'

/**
 * The product explained in three steps.
 */
const STEPS = [
  { n: '01', title: 'Record', body: 'Your agent, API, tool server or gateway signs selected facts about the action.' },
  { n: '02', title: 'Verify', body: 'Check the record later with the public key you expect.' },
  { n: '03', title: 'Share', body: 'Send it to another team, customer or reviewer without sharing private logs.' },
]

export function RecordVerifyShare() {
  return (
    <section
      id="see-a-record"
      className="home-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', padding: `40px ${PAGE_PAD} 88px ${PAGE_PAD}` }}
    >
      <SectionTitle title="Record the action. Verify it anywhere." />
      <div className="rvs-grid" style={{ marginTop: 44 }}>
        <div className="rvs-rail">
          {STEPS.map((s) => (
            <div key={s.n} className="rvs-step">
              <span className="rvs-num">{s.n}</span>
              <div>
                <p className="rvs-title">{s.title}</p>
                <p className="rvs-body">{s.body}</p>
              </div>
            </div>
          ))}
          <Link href="/how-it-works" className="rvs-link">
            See how it works &rarr;
          </Link>
        </div>
        <RecordDemo />
      </div>
    </section>
  )
}
