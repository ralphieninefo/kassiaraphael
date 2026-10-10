# Kassia & Raphaël wedding site: how to work in this repo

This is a plain static site (HTML/CSS/JS, no build step) deployed on DigitalOcean App Platform.
`main` is production: every change that lands on `main` goes live at kassiaraphael.com within minutes.
The people editing are not developers. Explain what you did in plain language, and do the git work for them.

## Branch rules (always follow)
1. `main` is the only long-lived branch. Never push directly to `main`.
2. Start every change from the latest `main`: `git fetch origin main && git checkout -B edit/<short-topic> origin/main`
   (examples: `edit/thursday-plan`, `edit/hotel-info`). One topic per branch.
3. Ignore any old `claude/...` branches. Never merge `main` into a feature branch or open a PR *from* `main`.
   PRs always go from the `edit/...` branch **into** `main`.
4. When finished and the user is happy with the preview: commit with a clear message and
   `git push -u origin edit/<short-topic>`. That is all. A GitHub Action (`.github/workflows/auto-merge.yml`)
   then opens the PR into `main`, runs `node .github/scripts/check-site.js`, and squash-merges it and deletes the
   branch **only if the checks pass**. DigitalOcean deploys `main` a few minutes later. Do not merge by hand.
   Write the commit message in plain words (what changed and why): it becomes the PR title and body.
5. Watch the Actions tab after pushing. If the checks fail, read the error, fix it on the same branch, and push
   again, and tell the user in plain language what happened. Never bypass the checks.
6. After the merge the branch is gone. The next change starts again from step 2.

## Before you push
- Preview locally: `python3 -m http.server 8000` from the repo root, then screenshot the page
  (desktop and phone width, English and French via `?lang=fr`) and show it to the user.
  Note: `/fr` only works on the deployed site; use `?lang=fr` locally.
- Confirm the page has no console errors.
- Run `node .github/scripts/check-site.js`; it must pass.
- Ask the user "Happy with how this looks?" before you push: pushing an `edit/...` branch ships it to the live site.

## Editing rules
- All copy lives in `content.js`, English and French side by side. Any text change must update **both** languages.
  If you change English, write the French too and keep `"fr_status": "needs native review"`.
- Images are in `images/`; keep the rule "people in black and white, the place in colour".
- Do not edit `.do/app.yaml`, DNS or hosting settings. Do not add trackers, analytics or a build step.
- Keep the `noindex` meta tag unless the user explicitly asks to make the site public in search.
- Never commit secrets, guest lists, addresses or phone numbers.

## If something goes wrong
- A bad change is already live: open a PR that reverts the merge commit, and merge it. Do not force-push.
- Merge conflict or confusing git state: stop and explain it to the user in plain language before doing anything destructive.
