import Link from 'next/link'
import { MAX_W, PAGE_PAD } from './palette'
import { SectionHead } from './atoms/SectionHead'
import { RecordDemo } from './RecordDemo'

/**
 * The product moment: one live signed record, centred. The hero diagram
 * already tells record, verify, share; this section lets you do it.
 */
export function RecordVerifyShare() {
  return (
    <section
      id="see-a-record"
      className="hx-section"
      style={{ maxWidth: `calc(${MAX_W}px + 2 * ${PAGE_PAD})`, margin: '0 auto', paddingLeft: PAGE_PAD, paddingRight: PAGE_PAD }}
    >
      <SectionHead
        eyebrow="See a record"
        title="Check a signed record right here, in your browser."
        body="This is a real Ed25519 signature. Change one field and watch the check fail."
        center
      />
      <div className="rvs-stage">
        <RecordDemo />
      </div>
      <p className="rvs-more">
        <Link href="/how-it-works" className="hx-textlink">
          See how it works
        </Link>
      </p>
    </section>
  )
}
