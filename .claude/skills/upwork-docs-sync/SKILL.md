---
name: upwork-docs-sync
description: Use when running, troubleshooting, scheduling, or extending the daily Upwork documentation sync in this repo — a sync run failed, git push errored, the coverage assertion fired, new sections appear upstream, or the user asks to refresh/resync the docs or set up the daily job.
---

# Upwork docs sync — operations

Pipeline: **pull → fetch → convert to preview → diff vs `docs/` → archive/promote → commit → push** (`scripts/update-docs.mjs`). Exit 0 = success; nonzero = fetch (3), convert (4), pull (2) or unexpected (1) failure. Run log: `logs/update.log` (gitignored).

## Commands

```bash
node scripts/update-docs.mjs            # full sync (daily job runs this)
node scripts/update-docs.mjs --force    # re-commit even if docs unchanged
node scripts/update-docs.mjs --skip-pull --no-push   # local dry run
node scripts/fetch-docs.mjs             # fetch snapshot only (into .incoming/)
node scripts/convert.mjs --snapshot <dir>  # convert one snapshot into docs/
node scripts/check-links.mjs            # validate links/anchors/images
powershell -File scripts/register-task.ps1 -RunNow    # scheduled task (-Time HH:mm, -Unregister)
```

Requires Node ≥ 18, git + push rights to origin, curl (Node fetch fallback). `npm install` once.

## Design facts to respect

- **Change detection compares generated Markdown** (preview `docs/` vs current), *not* raw HTML hashes: Upwork's CDN injects per-request Cloudflare tokens into the HTML, and image bytes vary per fetch — comparing raw HTML would commit noise daily. Binary image files are excluded from the diff for this reason.
- **Conversion is deterministic**: same snapshot → identical bytes. Never write timestamps into `docs/` files; put provenance in `html-snapshots/` (`INDEX.md`, `LATEST.json`, per-snapshot `meta.json` + `coverage.json`).
- **Coverage assertion**: convert fails unless every `id` under `<article id="content">` renders into some file. That's the 100%-content guarantee — don't weaken it; fix the converter instead.
- **Never hand-edit `docs/`** — edits are overwritten on the next sync. Fix `scripts/convert.mjs` / `scripts/lib/md.mjs` and re-run `npm run convert && npm run check`.

## Troubleshooting

| Symptom | Cause → action |
|---|---|
| `curl: (6) Could not resolve host` / `(28)` / 403 | Upwork bot-filter + transient DNS. Fetcher already retries (`--retry 5`, browser UA, `Referer`). Wait minutes, rerun. |
| `… looks like an error page, aborting` | Validation caught a block page — good; `latest/` untouched. Rerun; if persistent, fetch from another network. |
| `all asset fetches failed` | Assets need `Referer: …/index.html` — keep that header. |
| `CONVERT FAILED` + `COVERAGE GAP: N ids not rendered` | Upstream added new DOM structures. Inspect the archived snapshot under `html-snapshots/` (failed snapshots are kept, not promoted), teach the converter in `scripts/convert.mjs`, then rerun. |
| Push failed after commit | Kept locally; next run pushes first automatically (`git push` then retry). Check SSH (`ssh -T git@github.com`) / token. |
| `git pull` conflict | The repo should have no manual edits; resolve by resetting `docs/` and rerunning the sync. |
| Redirect files (p1.txt…) keep appearing | Don't write scratch output into the repo; use `logs/` (ignored) or `$env:TEMP`. |

## Adding a new docs page

Add an entry to `PAGES` in `scripts/lib/snapshot.mjs` (file, url, minBytes, mustContain),
then render it in `scripts/convert.mjs` (see changelog handling as a template). Assets:
extend `collectAssetUrls()` in `scripts/fetch-docs.mjs`.

## Extending the schema conversion

Operation/definition rendering lives in `renderOperation` / `renderDefinition` /
`parseFieldsTable` (`scripts/convert.mjs`); generic HTML→Markdown in
`scripts/lib/md.mjs` (`MdRenderer`, `fence`). After changes: `node scripts/convert.mjs
&& node scripts/check-links.mjs`, then commit so the daily diff baseline updates.

## Scheduling

Windows: `scripts/register-task.ps1` (Task Scheduler, daily; `-StartWhenAvailable`).
Linux/macOS: cron `0 8 * * * cd <repo> && node scripts/update-docs.mjs >> logs/cron.log 2>&1`.
The machine must be running; sync is idempotent and skips work when upstream is unchanged.
