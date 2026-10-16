/**
 * Section headline for the home page. Two-tone per brand v17: the claim in
 * ink, the optional qualifier in faint. Sizes come from the type tokens.
 */
export function SectionHead({
  eyebrow,
  title,
  qualifier,
  body,
  id,
  stack = false,
  center = false,
  display = false,
}: {
  eyebrow?: string
  title: string
  qualifier?: string
  body?: string
  id?: string
  /** Set the qualifier on its own line (for narrow columns). */
  stack?: boolean
  center?: boolean
  /** Hero-scale headline, for the closing statement only. */
  display?: boolean
}) {
  return (
    <div className="hx-head" data-center={center ? '' : undefined}>
      {eyebrow ? <p className="hx-eyebrow">{eyebrow}</p> : null}
      <h2 className={display ? 'hx-h2 hx-h2-display' : 'hx-h2'} id={id}>
        {title}
        {qualifier ? (
          <>
            {' '}
            <span className="hx-h2-q" data-stack={stack ? '' : undefined}>
              {qualifier}
            </span>
          </>
        ) : null}
      </h2>
      {body ? <p className="hx-lede">{body}</p> : null}
    </div>
  )
}
