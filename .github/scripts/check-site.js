// Safety checks that must pass before an edit is merged and deployed.
// Run locally with: node .github/scripts/check-site.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const errors = [];
const fail = (msg) => errors.push(msg);
const root = path.resolve(__dirname, "../..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

// 1. content.js parses and every entry has English and French (or shared text)
const win = {};
try {
  vm.runInNewContext(read("content.js"), { window: win });
} catch (e) {
  fail("content.js does not parse: " + e.message);
}
const content = win.SITE_CONTENT || {};
if (!win.SITE_CONTENT) fail("content.js does not define window.SITE_CONTENT");
for (const [key, v] of Object.entries(content)) {
  if (!v || typeof v !== "object") { fail(`content.js: "${key}" is not an entry`); continue; }
  const hasText = typeof v.text === "string" && v.text.trim();
  const hasBoth = ["en", "fr"].every((l) => typeof v[l] === "string" && v[l].trim());
  if (!hasText && !hasBoth) fail(`content.js: "${key}" needs both en and fr (or a shared "text")`);
}

// 2. index.html: slots point at real content keys, local files exist, noindex stays
const html = read("index.html");
for (const m of html.matchAll(/data-t(?:-alt|-aria|-mailto)?="([^"]+)"/g)) {
  if (!(m[1] in content)) fail(`index.html: data-t slot "${m[1]}" has no entry in content.js`);
}
for (const m of html.matchAll(/(?:src|href)="(\/[^"?#]*)[^"]*"/g)) {
  const rel = m[1].slice(1);
  if (rel && !fs.existsSync(path.join(root, rel))) fail(`index.html: missing file "${m[1]}"`);
}
for (const m of html.matchAll(/(\/images\/[^\s,"']+)\s+\d+w/g)) {
  if (!fs.existsSync(path.join(root, m[1].slice(1)))) fail(`index.html: missing srcset image "${m[1]}"`);
}
if (!/<meta name="robots" content="noindex/.test(html)) fail('index.html: the noindex meta tag was removed');

// 3. script.js has valid syntax
try { new vm.Script(read("script.js")); } catch (e) { fail("script.js has a syntax error: " + e.message); }

if (errors.length) {
  console.error("Site checks FAILED:\n - " + errors.join("\n - "));
  process.exit(1);
}
console.log(`Site checks passed (${Object.keys(content).length} content entries).`);
