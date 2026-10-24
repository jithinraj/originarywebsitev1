# Originary design system

The website has one design system: **Originary brand guidelines v17, locked 18 October 2026** (Carbon neutrals,
one cobalt accent). Every page, component, image route and asset follows it. There is no other palette, theme or
logo. v17 is held unchanged for at least twelve months of consistent use; any change to the wordmark needs founder
approval.

## Source of truth

| What | Where |
|---|---|
| Colour, type, spacing, radius, motion and chart tokens (light and dark) | `app/originary-tokens.css` |
| Element defaults (headings, links, code, focus, reduced motion, print) | `app/originary-base.css` |
| Inline-style handles for the tokens | `components/home/palette.ts` (`PALETTE`, values are CSS variables) |
| Literal token values for OG images and canvas only | `lib/brand-tokens.ts` |
| Theme choice (light default, toggle, first-paint script) | `components/brand/theme.ts`, `components/brand/ThemeToggle.tsx` |
| Pause control for looping motion (first-paint script, toggle) | `lib/motion.ts`, `components/home/motion/MotionToggle.tsx` |
| Analytics consent (opt-in, Privacy choices) | `lib/consent.ts`, `components/consent/` |
| Wordmark (static master) | `components/brand/OriginaryWordmark.tsx`, geometry in `components/brand/wordmark-geometry.ts` |
| Logo animation (ident) | `components/brand/OriginaryIdent.tsx` |
| Brand kit files | `public/brand/` (wordmark, app icon, social), favicons in `public/`, manifest icons in `public/icons/` |

`app/globals.css` imports the tokens and the base, nothing else. Tailwind is not used.

## Colour

Ink on white carries almost everything. Cobalt marks where to look and what you can act on. Green, amber
and red state results only, so nothing decorative can be mistaken for a verdict.

| Role | Token | Light | Dark |
|---|---|---|---|
| Page | `--bg` | `#FFFFFF` | `#0B0B0C` |
| Panel | `--wash` | `#F5F5F5` | `#1A1A1A` |
| Card | `--paper` | `#FFFFFF` | `#141414` |
| Hairline | `--hairline` | ink 10% | white 10% |
| Rule | `--rule` | ink 18% | white 18% |
| Text primary | `--ink` | `#0B0B0C` | `#FFFFFF` |
| Text secondary (body) | `--ink-2` | `#3D3D3D` | `#D4D4D4` |
| Text muted | `--muted` | `#5C5C5C` | `#A3A3A3` |
| Qualifier | `--faint` | `#6B6B6B` | `#8F8F8F` |
| Primary action | `--action` / `--on-action` | ink / white | white / ink |
| Link and accent | `--accent`, `--link` | `#2B3FE6` | `#9CA8FF` |
| Hover, pressed | `--accent-press`, `--link-hover` | `#2133C4` | `#BCC5FF` |
| Feature card | `--accent-tint` + `--accent-border` | `#EEF0FE` + `#7D8AF2` | `#1B1E33` + `#5A68C9` |
| Selection | `--selection` | `#D6DCFF` | `#2E3146` |
| Focus ring | `--focus-ring` | `#2B3FE6` | `#9CA8FF` |
| Valid | `--success` | `#137738` | `#4CC27A` |
| Warning | `--warn` | `#9A5B00` | `#E8A33D` |
| Failed | `--danger` | `#C52C26` | `#F07167` |
| Not evaluated (dashed icon) | `--not-evaluated` | `#5C5C5C` | `#A3A3A3` |

Panels that stay dark in both themes (proof consoles, terminals) use `--surface-dark`, `--surface-dark-card`,
`--on-dark`, `--on-dark-muted`, `--hairline-on-dark`, `--rule-on-dark`, `--accent-on-dark` and the
`--*-on-dark` result colours. The Carbon grey scale is `--grey-0` to `--grey-950`.

Rules:

- **Cobalt marks what you can act on** (links, focus, selection) and the one element a composition points to.
  Never on the wordmark, the app icon, headlines or large backgrounds.
- **Primary buttons stay ink** (`--action`), never cobalt.
- **Results always carry an icon and a word**, never colour alone.
- **Focus is a 2 px cobalt outline**, offset 2 px.
- No gradients, glass or glows. One texture only: the bit field (see "The bit field").
- Every text role is at least 4.5 : 1 on its page and panel in both themes.

### Themes

Light is the default for every reader, whatever their system setting. Dark applies only when the reader picks it
with the theme toggle in the header, and swaps the wordmark to the reverse master. A dark pick is stored in
`localStorage`; picking light clears it. `THEME_INIT_SCRIPT` sets `data-theme` on `<html>` before first paint, so
a reader who chose dark never sees a light flash. This replaces the v17 guide's follow-the-system rule (founder
decision, 24 October 2026).

## Typography

IBM Plex for everything but the logo: Sans 300 / 400 / 500 / 600, Mono 400 / 500.

| Style | Spec |
|---|---|
| Hero | Sans 500, 36–58 px (`--text-hero`), −0.028em, line height 1.06 |
| Section | Sans 500, 28–42 px (`--text-section`), −0.022em |
| Card title | Sans 600, 19 px, −0.012em |
| Body | Sans 400, 16–18 px, line height 1.55 |
| Label | Mono 12 px, 0.12em, uppercase through styling |
| Code | Mono 13–14 px |

- Headlines are sentence case and never coloured: weight 500 at display sizes, 600 below 20 px, where weight
  carries the hierarchy (`h3` to `h6` default to 600).
- Reading text is 16–18 px; 14 px (`--text-body`) only in dense product UI.
- **Nothing on screen is below 12 px.** Mono is for code, identifiers, data and short labels of 12 px or more.
  SVG figures sized in viewBox units (`components/blog/figures/`) are the one exception the gate allows.
- A grey qualifier in a headline (claim in `--ink`, qualifier in `--faint`) is optional, not a formula.
- Labels are uppercase through `text-transform`, not typed capitals.

## Wordmark

The wordmark is the logo: one lowercase word, drawn, not typed. Reproduce it only from the master geometry.

- Use `<OriginaryWordmark />`. `tone="auto"` shows the ink master in light and the reverse master in dark;
  use `tone="reverse"` on panels that stay dark.
- Header: 64 px bar, wordmark 120 px wide (`--wordmark-header-w`), left-aligned, file centred vertically.
  Centre only on covers and title screens.
- Minimum 120 px wide normally, 96 px at the very least. Below 96 px use the app icon.
- Clear space is one x-height (about one eighth of the wordmark's width) on every side.
- Ink `#0B0B0C` or white only. Never recolour (not even cobalt), stretch, outline, shadow, retype, re-space,
  rotate, or place on mid-tones.
- `alt="Originary"`, or `alt=""` when adjacent text already says Originary.
- The one exception: the ASCII wordmark under the footer (`WordmarkStream`), drawn in characters from the
  master geometry (founder decision, 24 October 2026). Nowhere else is the wordmark retyped or drawn in characters.

### App icon and favicon

Two masters, both the wordmark's o in white on a 512 ink tile with a 96 corner radius:

- **Large master** (o 260 wide): app icons and anything shown at 64 px or more: `apple-touch-icon.png`,
  `public/icons/*` (manifest), `public/brand/app-icon/originary-app-icon*.{svg,png}` from 64 px up.
- **Small master** (o 328 wide, strokes about 13% heavier): favicons, avatars and tabs, 16–48 px:
  `favicon.ico` (16, 32, 48), `favicon.svg`, `favicon-32x32.png`, `public/brand/app-icon/originary-app-icon-small*`,
  and the social avatar.

The tile is a container, not a second logo: never place it beside the wordmark as a lockup. Supply the square,
unmasked tile where a platform applies its own mask. No recolouring, effects, borders or radius changes.

Partner marks: monochrome, one row at 78% opacity, never joined to the wordmark, captioned
"Examples are interoperability surfaces, not partnership claims." Size them optically, not by file dimensions:
every name reads at the caption's letter size (about 10.5 px caps), and marks with a large symbol sit a little
smaller. Check any change on a 2x screenshot of the row.

## Logo animation

`<OriginaryIdent />` is the v17 ident: a dot in the o becomes a stem, the two trade places and the word builds
around them, 5.0 s, scenes 0.8 · 0.9 · 0.8 · 1.3 · 1.2 s, ending on the master. It is for films, keynotes and
launches and plays once. The website does not play it: where a page animates the wordmark in, use a 0.4 s fade.
It is never a loader or a loop and never in colour. Reduced motion shows the final frame.

## Diagrams, icons and motion

- Nodes: `--paper`, 1 px `--rule` border, 6 px radius. Originary's node is the one cobalt element.
- Lines: 1.5 px ink for signed records; dashed grey for anything not evaluated.
- Results at the end of the path, green, amber or red, with an icon and a word.
- Labels: mono, uppercase, 12–13 px.
- Icons: 24 px grid, 1.5 px stroke, no fill, `currentColor`; 14 px inside chips. Only to name a system in a
  diagram, never as decoration on cards.
- Motion: lines draw over 900 ms (`--dur-slow`), hovers 160 ms (`--dur-fast`), cards lift 2 px over 220 ms
  (`--dur-base`). Calm easing, no bounce or overshoot. Reduced motion shows the end state.
- Looping motion (the bit field, the hero flow, logo rows, the log stream, the /about constellation and
  marquee) stops under the reader's pause control as well as under reduced motion: `lib/motion.ts` sets
  `data-motion="paused"` on `<html>`, CSS loops add `:root[data-motion='paused'] … { animation-play-state:
  paused }`, and script loops use `useReducedMotion()`, which reports both. Every stage with a loop carries
  `<MotionToggle className="mt-corner" />` (WCAG 2.2.2).
- Hero and page-hero copy renders at once, with no entrance animation: it is what the page is judged by first.

### The bit field

The site's one texture (`components/home/motion/BitField.tsx`): IBM Plex Mono 0/1 glyphs, 10 px on a 22 px
grid, behind the homepage hero and page heroes. Not on /about, which has the constellation.

- Ink at 6% (7.5% in the dark theme), never above 20%. Densest at the far sides, easing out toward the centre.
- Never behind content: everything marked `data-field-clear` keeps 14 px clear with a 120 px feather. It fades
  in under the header and out at the stage's lower edge.
- Motion: sparse vertical rain. Drops of light fall down single columns at 70–120 px/s (about one new drop
  per column every 80 s, so a handful at once), brightest at the head and fading over a 10-cell trail; each bit a
  head passes flips over 0.5 s. The digits never leave the grid. A few bits also flip on their own (about 0.4%
  a second, over 1.4 s), and the cursor brightens bits within 150 px and stirs a few. Still on phones, under
  reduced motion and when paused.

## Photography and data

Photographs show what exists; charts show what was measured. Both carry a caption, a date and a source.

- Photographs: real work (people, prototypes, instruments, places) as they are; true colour; no stock or generic
  technology imagery, filters, duotones or text over faces. Renders are labelled; a generated image is never shown
  as a photograph.
- Argument charts: `--chart-ink` and greys (`--chart-grey-1`, `--chart-grey-2`); the one series that matters in
  `--chart-focus` (cobalt).
- Research figures: Okabe–Ito with ink in place of black. Lines and marks `--chart-blue`, `--chart-vermilion`,
  `--chart-green`, `--chart-purple`; fills only `--chart-orange`, `--chart-sky`, `--chart-yellow`.
- Label lines directly, start bar axes at zero, cite the source, and keep green, amber and red for results.

## Voice

Talk to the reader: product and docs say you; company and research copy may say we. Fact first, then the
consequence. Name the real thing (API calls, MCP tool runs, agent actions, payment events). State scope honestly:
label examples, mark what was not evaluated, give the method and sample with every result. Sentence case; no
emoji, exclamation marks or superlatives.

- Use: signed, record, verify, issuer, counterparty, boundary, evidence, not evaluated.
- Avoid: trustless, immutable, guaranteed, seamless, AI-powered, revolutionary, breakthrough, world-class.
- Say tamper-evident, never tamper-proof. Say "Signature valid. Settlement not evaluated.", never "Fully verified."
- Originary in running text, with a capital O; lowercase only as the drawn wordmark.

## Rules for code

- Never write a raw colour (`#hex`, `rgb()`, `hsl()`, named colours) outside `app/originary-tokens.css`
  and `lib/brand-tokens.ts`. Use the tokens, or `color-mix(in srgb, var(--ink) N%, transparent)` for a
  one-off alpha.
- Pick tokens by role, not by today's value, so dark mode stays correct (button fill `--action`, not `--ink`).
- OG image routes and canvas code are the only places that use `lib/brand-tokens.ts`.
- `npm run check:brand` enforces the raw-colour rule, the 12 px text floor and the 96 px wordmark minimum;
  `npm run test:brand` holds its regression cases.
- Identifiers keep their case inside uppercase labels: wrap versions, algorithm names, media types and code in
  `<span className="keep-case">` ("v0.16.4", "Ed25519", never "V0.16.4").
- Analytics load only through `components/consent/AnalyticsGate.tsx`, after opt-in, as /privacy describes.
  Never add a tracking script, pixel or preconnect anywhere else.
