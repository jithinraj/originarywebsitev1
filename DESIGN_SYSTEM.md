# Originary design system

The website has one design system: **Originary brand guidelines v17, Carbon + Cobalt (12 October 2026)**.
Every page, component, image route and asset follows it. There is no other palette, theme or logo.

## Source of truth

| What | Where |
|---|---|
| Colour, type, spacing, radius, motion tokens (light and dark) | `app/originary-tokens.css` |
| Element defaults (headings, links, code, focus, reduced motion, print) | `app/originary-base.css` |
| Inline-style handles for the tokens | `components/home/palette.ts` (`PALETTE`, values are CSS variables) |
| Literal token values for OG images and canvas only | `lib/brand-tokens.ts` |
| Wordmark (static master) | `components/brand/OriginaryWordmark.tsx`, geometry in `components/brand/wordmark-geometry.ts` |
| Logo animation (ident) | `components/brand/OriginaryIdent.tsx` |
| Brand kit files | `public/brand/` (wordmark, app icon, social), `public/logo/`, favicons in `public/` |

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

- **One cobalt element per view.** Never on the wordmark, the app icon, headlines or large backgrounds.
- **Primary buttons stay ink** (`--action`), never cobalt.
- **Results always carry an icon and a word**, never colour alone.
- **Focus is a 2 px cobalt outline**, offset 2 px.
- No gradients, glass, glows, textures or stock photography.
- Share of a surface: roughly white 62%, ink 28%, cobalt 6%, results 4%.
- Every text role is at least 4.5 : 1 on its page and panel in both themes.

Light is the default for every visitor. Dark applies only when the reader picks it with the theme toggle in the
header (`components/brand/ThemeToggle.tsx`); the choice is stored in `localStorage` and applied before first paint.

## Typography

IBM Plex for everything but the logo: Sans 300 / 400 / 500 / 600, Mono 400 / 500.

| Style | Spec |
|---|---|
| Hero | Sans 500, 36–58 px (`--text-hero`), −0.028em, line height 1.06 |
| Section | Sans 500, 28–42 px (`--text-section`), −0.022em |
| Card title | Sans 500, 19 px, −0.012em |
| Lede | Sans 400, 17–18 px, line height 1.55 |
| Eyebrow | Mono 11 px, 0.16em, uppercase through styling |
| Machine truth | Mono 13 px |

Headlines use weight 500 and sentence case and are never coloured. Two-tone headlines set the claim in
`--ink` and the qualifier in `--faint`.

## Wordmark

The wordmark is the logo: one lowercase word, drawn, not typed. Reproduce it only from the master geometry.

- Use `<OriginaryWordmark />`. `tone="auto"` shows the ink master in light and the reverse master in dark;
  use `tone="reverse"` on panels that stay dark.
- Header: 64 px bar, wordmark 112 px wide, left-aligned. Centre only on covers and title screens.
- Minimum 120 px wide normally, 96 px at the very least. Below 96 px use the app icon.
- Clear space is one x-height (about one eighth of the wordmark's width) on every side.
- Ink `#0B0B0C` or white only. Never recolour (not even cobalt), stretch, outline, shadow, retype, re-space,
  rotate, or place on mid-tones.
- `alt="Originary"`, or `alt=""` when adjacent text already says Originary.

App icon and favicon: the wordmark's o in white, 260 wide, centred on a 512 ink tile with a 96 corner radius.
It is a container, not a second logo: never place it beside the wordmark as a lockup.

Partner marks: monochrome, one row at 78% opacity, never joined to the wordmark, captioned
"Examples are interoperability surfaces, not partnership claims."

## Logo animation

`<OriginaryIdent />` is the v17 ident: ⊙ → o1 → 1o → originary, 5.0 s, scenes 0.8 · 0.9 · 0.8 · 1.3 · 1.2 s,
ending on the master. It plays once, to open or close (the site uses it as the closing signature). It is
never a loader or a looping decoration and never in colour. Reduced motion shows the final frame.

## Diagrams, icons and motion

- Nodes: `--paper`, 1 px `--rule` border, 6 px radius. Originary's node is the one cobalt element.
- Lines: 1.5 px ink for signed records; dashed grey for anything not evaluated.
- Results at the end of the path, green, amber or red, with an icon and a word.
- Labels: mono, uppercase, 11–13 px.
- Icons: 24 px grid, 1.5 px stroke, no fill, `currentColor`; 14 px inside chips. Only to name a system in a
  diagram, never as decoration on cards.
- Motion: lines draw over 900 ms (`--dur-slow`), hovers 160 ms (`--dur-fast`), cards lift 2 px over 220 ms
  (`--dur-base`). Calm easing, no bounce or overshoot. Reduced motion shows the end state.

## Voice

Calm, precise and infrastructural. Short declarative sentences addressed to you. Sentence case everywhere.
No hype, emoji or exclamation marks. Say what was checked and what was not.

## Rules for code

- Never write a raw colour (`#hex`, `rgb()`, `hsl()`, named colours) outside `app/originary-tokens.css`
  and `lib/brand-tokens.ts`. Use the tokens, or `color-mix(in srgb, var(--ink) N%, transparent)` for a
  one-off alpha.
- Pick tokens by role, not by today's value, so dark mode stays correct (button fill `--action`, not `--ink`).
- OG image routes and canvas code are the only places that use `lib/brand-tokens.ts`.
- `npm run check:brand` enforces the raw-colour rule.
