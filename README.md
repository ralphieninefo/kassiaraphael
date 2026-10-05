# Kassia & Raphaël — kassiaraphael.com

One-page bilingual (EN/FR) wedding site. Plain HTML/CSS/JS, no build step, no tracking.
Hidden from search engines (`<meta name="robots" content="noindex, nofollow">`).

## Editing copy
All text lives in **`content.js`**, with English and French side by side per entry.
French strings are drafts marked `"fr_status": "needs native review"`; flip to `"reviewed"` once checked.
Type ordinary spaces in French; the non-breaking spaces before `: ; ! ?` and inside `« »` are added automatically.

## Language
`/fr` (or `?lang=fr`) shows French. Otherwise: the visitor's last choice (localStorage), then browser language.

## Images (placeholders for now; replace the files, keep the paths)
- `images/hero-bw.jpg`: hero photo, shown in black and white (3:2 landscape works best)
- `images/villa-1.jpg`, `images/lake-1.jpg`
- optional `images/villa-line-drawing.svg`: if present, replaces the hairline divider automatically

## Fonts
Neuton and Pinyon Script, self-hosted in `fonts/` (SIL Open Font License).
To use a different script face, add its `@font-face` and change `--script` in `styles.css`.

## Before launch
- Verify the train route, station name and times on Trenitalia (`travel_2` in `content.js`).
- French copy reviewed by a native speaker.
- Replace the placeholder images.

## Local preview
    python3 -m http.server 8000
(Use `?lang=fr` locally; the `/fr` path only works on the deployed site.)

## Deploy (DigitalOcean App Platform)
Static Site from `main`, no build command, output dir `/`; see `.do/app.yaml`.
