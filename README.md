# Kassia & Raphaël — kassiaraphael.com

One-page bilingual (EN/FR) wedding site. Plain HTML/CSS/JS, no build step, no tracking.
Hidden from search engines (`<meta name="robots" content="noindex, nofollow">`).

## Editing copy
All text lives in **`content.js`**, with English and French side by side per entry.
French strings are drafts marked `"fr_status": "needs native review"`; flip to `"reviewed"` once checked.
Type ordinary spaces in French; the non-breaking spaces before `: ; ! ?` and inside `« »` are added automatically.

## Language
`/fr` (or `?lang=fr`) shows French. Otherwise: the visitor's last choice (localStorage), then browser language.

## Page order and palette
Hero (blue) / Welcome (cream) / Our story (blue) / Why Italy + The venue (cream) / The weekend (blue) /
Getting there + Where to stay + Questions (cream) / footer (blue). Never two cream sections in a row.
- `--albano #1E3440` dark sections · `--travertine #F6F3EC` paper · `--ink #3E3E3C` text on cream
- `--ink-soft #55534E` captions and asides on cream · `--silver #A9ABAD` frames and rules only
- `--flammeum #D9692A` small marks on blue · `--terracotta #B5543A` small marks on cream
No gold, no teal or green, no Italian-flag combinations.

## Images
Rule: people in black and white, the place in colour (and only on cream).
Each photo has a JPG (the fallback) plus AVIF and WebP copies at one or more widths (`name-<width>.avif|webp`),
served through `<picture>` with `sizes`; the hero is preloaded. Regenerate the copies whenever a JPG changes.
- `images/hero-cafe-graded.jpg` (+ `-800.jpg`): hero print
- `images/story-graduation-graded.jpg`: Our story print (4:5)
- `images/weekend-swing.jpg`: Weekend print (4:5), film
- `images/film-sculpture.jpg`: the one full-width film photo, after Our story
- `images/venue-tower.jpg`, `images/venue-aerial.jpg`: 4:5 colour, under the venue copy
- `images/lore-plate-1440.jpg`, `lore-plate-2880.jpg`: Lake Albano, Lore section (AVIF/WebP as `lore-plate-<width>`)
- `images/footer-*-graded.jpg`: footer triptych (1:1)
- `images/villa-line-drawing-ink.svg` / `-cream.svg`: villa drawing (venue on cream, footer on blue)
- `images/castel-gandolfo-palazzo-cream.svg`, `castel-gandolfo-fountain-cream.svg`: Kassia's drawings in the Lore

## Mockups
`mockups/` (screenshots, contact sheet, French review sheet) is for review only. It's in `.gitignore`, so it is never deployed.

## Icons
`favicon.ico` (16/32), `images/icon-192.png`, `images/apple-touch-icon.png`: K&R monogram on Albano blue.

## Layout
One spacing scale (`--s-1` to `--s-6`, clamp-based) and one 12-column grid from 1024px, with named
areas `left` (columns 1-5) and `right` (7-12; 6-12 between 1024 and 1279px). Content box: 1200px max.

## Fonts
Neuton, self-hosted in `fonts/` (SIL Open Font License).
The script lines (the names and "Castel Gandolfo, Italy/Italie") are not live text: they are Pinyon Script
(SIL OFL) outlined to inline SVG paths in `index.html`, shaped with HarfBuzz so kerning matches the font.
The words are kept as visually hidden text for screen readers. Changing that wording means regenerating
the SVG paths from the Pinyon Script font (Google Fonts); the font file itself is no longer on the site.

## Before launch
- **Link previews:** `images/og.jpg` (1200x630, hero crop). The `og:` tags use absolute
  `https://kassiaraphael.com/` URLs, so previews only work once the domain is live.
- Verify the train route, station name and times on Trenitalia (`train_text` in `content.js`).
- French copy reviewed by a native speaker.

## Local preview
    python3 -m http.server 8000
(Use `?lang=fr` locally; the `/fr` path only works on the deployed site.)

## Deploy (DigitalOcean App Platform)
Static Site from `main`, no build command, output dir `/`; see `.do/app.yaml`.
