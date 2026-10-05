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
- `images/lake-1.jpg`: Lake Albano from the villa, cropped 2:1 and converted to black and white
- `images/villa-line-drawing-ink.svg`: villa drawing in ink lines, for cream sections (used in the venue)
- `images/villa-line-drawing-cream.svg`: the same drawing in cream lines, for brick sections

## Fonts
Neuton and Pinyon Script, self-hosted in `fonts/` (SIL Open Font License).
To use a different script face, add its `@font-face` and change `--script` in `styles.css`.

## Before launch
- Verify the train route, station name and times on Trenitalia (`travel_2` in `content.js`).
- French copy reviewed by a native speaker.

## Local preview
    python3 -m http.server 8000
(Use `?lang=fr` locally; the `/fr` path only works on the deployed site.)

## Deploy (DigitalOcean App Platform)
Static Site from `main`, no build command, output dir `/`; see `.do/app.yaml`.
