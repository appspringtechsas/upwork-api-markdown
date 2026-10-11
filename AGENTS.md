# AGENTS.md — working rules for coding agents in this repo

This repository mirrors the **Upwork GraphQL API documentation** as structured
Markdown, generated and updated automatically. Content is Upwork's; the tooling
and layout are ours.

## The golden rules

1. **`docs/` is generated output — never hand-edit it.** The daily sync
   (`scripts/update-docs.mjs`) regenerates the whole tree from the fetched HTML;
   manual edits are silently lost. If a file looks wrong, fix the converter
   (`scripts/convert.mjs`, `scripts/lib/md.mjs`) and re-run `npm run convert`.
2. **The source of truth is `html-snapshots/latest/`** (raw Upwork HTML +
   `meta.json` with hashes + `coverage.json`). Archived snapshots are immutable;
   add new ones via the sync, don't rewrite old ones.
3. **Conversion is deterministic and self-asserting** (`1811/1811 ids covered` —
   every HTML section must appear in Markdown). Keep both properties when
   modifying the converter; after changes run:
   `node scripts/convert.mjs && node scripts/check-links.mjs`
4. **Change detection compares Markdown, not raw HTML** (the CDN injects
   per-request Cloudflare tokens and serves varying image variants). Don't
   introduce timestamps or volatile fields into generated docs files — they'd
   make every sync look like a content change.

## Layout

- `docs/` — the documentation tree (index READMEs per category; one file per
  query/mutation/type/input/enum; frontmatter with `kind/domain/deprecated/source`)
- `html-snapshots/` — timestamped raw-HTML archives, `latest/`, `LATEST.json`,
  `INDEX.md`, `change-reports/`
- `scripts/` — Node ESM tooling: `fetch-docs.mjs`, `convert.mjs`,
  `update-docs.mjs` (the daily program), `check-links.mjs`, `register-task.ps1`
- `.claude/skills/` — AI-agent skills for using/maintaining the docs
  (`upwork-api-docs`, `upwork-graphql-query-builder`, `upwork-docs-sync`)

## Running / testing

```bash
npm install
node scripts/update-docs.mjs --skip-pull --no-push   # dry-run a sync
node scripts/convert.mjs                              # regenerate docs from latest snapshot
node scripts/check-links.mjs                          # link/anchor/image validation
```

## Git

- Commits by the sync: `docs: sync Upwork API documentation (<UTC stamp>)`.
- Don't commit scratch files; redirect console noise to `logs/` (gitignored) or a
  temp dir. `node_modules/`, `logs/`, `html-snapshots/.incoming/`,
  `html-snapshots/.preview/` are ignored.
- Push goes to `origin/main` over SSH.

## For answering Upwork API questions

Load/use the `upwork-api-docs` skill: lookups live under `docs/` only —
`docs/queries/<name>.md`, `docs/mutations/<name>.md`, `docs/types/<T>.md`,
`docs/inputs/…`, `docs/enums/…`, plus `docs/getting-started/` (auth/keys) and
`docs/operations/` (common info, error handling, examples, subscriptions).
Always honor `deprecated:` frontmatter and ⚠️ markers.
