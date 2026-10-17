import { OriginaryWordmark } from '../brand/OriginaryWordmark'

/** /press: the wordmark as it ships in the brand kit, ink on white and reversed on ink. */
export function BrandTiles() {
  return (
    <div className="ha-brand" aria-label="The Originary wordmark, ink on white and reversed on ink">
      <div className="ha-brand-tile">
        <OriginaryWordmark width="62%" tone="ink" decorative />
      </div>
      <div className="ha-brand-tile ha-brand-ink">
        <OriginaryWordmark width="62%" tone="reverse" decorative />
      </div>
      <p className="ha-brand-cap">Wordmark, app icon and social assets in SVG and PNG.</p>
    </div>
  )
}
