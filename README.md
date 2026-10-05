# Kassia & Raphaël — kassiaraphael.com

One-page bilingual (EN/FR) wedding site. Plain HTML/CSS/JS, no build step, no tracking.
Hidden from search engines (`<meta name="robots" content="noindex, nofollow">`).

## Editing copy
All text lives in **`content.js`**, with English and French side by side per entry.
French strings are drafts marked `"fr_status": "needs native review"`; flip to `"reviewed"` once checked.
Type ordinary spaces in French; the non-breaking spaces before `: ; ! ?` and inside `« »` are added automatically.

## Language
`/fr` (or `?lang=fr`) shows French. Otherwise: the visitor's last choice (localStorage), then browser language.

## Images
- `images/hero-bw.jpg`: hero photo (shown as a tilted archival print)
- `images/couple-2.jpg`: second print, in the Weekend section
Rule: people in black and white, the place in colour.
- `images/lake-1.jpg`: Lake Albano from the villa, cropped 2:1, colour
- `images/venue-tower.jpg`, `images/venue-aerial.jpg`: 4:5 colour, under the venue copy.
  **Interim crops from screenshots**: replace with the originals at the same paths (1000x1250 or larger)
- `images/villa-line-drawing-ink.svg`: villa drawing in ink lines, for cream sections (used in the venue)
- `images/villa-line-drawing-cream.svg`: the same drawing in cream lines, for brick sections

## Icons
`favicon.ico` (16/32), `images/icon-192.png`, `images/apple-touch-icon.png`: K&R monogram on brick.

## Fonts
Neuton and Pinyon Script, self-hosted in `fonts/` (SIL Open Font License).
To use a different script face, add its `@font-face` and change `--script` in `styles.css`.

## Before launch
- **Email:** the site lists `hello@kassiaraphael.com`. Set up forwarding at your domain/DNS provider
  (e.g. Cloudflare Email Routing or ImprovMX, both free) to raphaelkassia2027@gmail.com, then send a test.
- **Link previews:** `images/og.jpg` (1200x630, hero crop). The `og:` tags use absolute
  `https://kassiaraphael.com/` URLs, so previews only work once the domain is live.
- Verify the train route, station name and times on Trenitalia (`travel_2` in `content.js`).
- French copy reviewed by a native speaker.

## Local preview
    python3 -m http.server 8000
(Use `?lang=fr` locally; the `/fr` path only works on the deployed site.)

## Deploy (DigitalOcean App Platform)
Static Site from `main`, no build command, output dir `/`; see `.do/app.yaml`.
