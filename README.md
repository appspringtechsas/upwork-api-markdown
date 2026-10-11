# Upwork API in Markdown

Complete, structured Markdown conversion of the official **Upwork GraphQL API
documentation** (https://www.upwork.com/developer/documentation/graphql/api/docs/index.html),
kept up to date by a daily sync program that detects upstream changes, commits
and pushes them here.

The content is generated for both humans and AI agents:

- one Markdown file per query, mutation, object type, input, enum, scalar, interface and union
- YAML frontmatter on every file (kind, domain, GraphQL name, deprecation, source anchor) for tooling
- all cross-links rewritten to local files & anchors (verified by `npm run check`)
- real example queries, variables, responses and per-role query variants
- the raw HTML snapshots (with fetch date & time) kept in `html-snapshots/`

Content copyright Upwork, Inc. — this repo is a convenience mirror for
developers; treat the [official docs](https://www.upwork.com/developer/documentation/graphql/api/docs/index.html)
as the canonical source.

## Used in our research: The real demand on Upwork

This documentation was not just read — it was the key that let us retrieve **all
the data needed for the analysis** in Appspring's research
[**"The real demand on Upwork: what ~30,000 job postings say about who gets hired — and how fast"**](https://www.appspringtech.com/blog/upwork-real-demand-analysis/)
([Leer en español →](https://www.appspringtech.com/blog/demanda-real-upwork-es/)).

Working from the mirrored schema — operations, arguments, required permissions,
connections and example payloads — our team identified and validated the exact
GraphQL calls behind the study: 29,890 job postings captured between July 30 and
September 24, 2026, with sequential activity snapshots feeding a PostgreSQL
ingestion pipeline (queryable by AI agents through a Postgres MCP server,
orchestrated with OpenChamber). The findings — a 10.8% base hire rate, a 10.6-hour
median from posting to hire, first proposals arriving in ~13 minutes — were all
built on data retrieved against the API documented here.

If you want to run marketplace analytics of your own, start with
[`docs/queries/marketplaceJobPostingsSearch.md`](docs/queries/marketplaceJobPostingsSearch.md),
the auth guide in [`docs/getting-started/`](docs/getting-started/README.md),
and the `upwork-graphql-query-builder` skill.

## Layout

```text
docs/                    generated Markdown (do not hand-edit — regenerated daily)
  README.md              index of the whole documentation set
  introduction.md        welcome + terminology
  getting-started/       preparation, keys, permissions, OAuth2 authentication, tools
  operations/            common info, error handling, subscriptions, sample flows
  queries/               one file per GraphQL query (89)
  mutations/             one file per GraphQL mutation (67)
  types/                 object types (433), grouped by domain in README
  inputs/  enums/  scalars/  interfaces/  unions/
  changelog.md           official API changelog
  assets/images/         documentation images (self-contained)
html-snapshots/          raw HTML archive, one folder per capture
  <UTC timestamp>/       index.html + api-changelog.html + 103 sample assets + meta.json (sha256, fetchedAt) + coverage.json
  latest/                mirror of the newest snapshot
  LATEST.json            pointer + hashes of the current "latest" version
  INDEX.md               human-readable table of all snapshots
  change-reports/        per-sync report: what changed, file lists, diffs
scripts/                 the sync program (see below)
.claude/skills/          AI-agent skills for using & maintaining this documentation
AGENTS.md                instructions for coding agents working in this repo
```

## Daily sync

```bash
npm install            # once (cheerio)
node scripts/update-docs.mjs     # or: npm run sync
```

What it does, in order:

1. `git pull --rebase --autostash` (and retries a previously failed `git push`)
2. Fetches `index.html`, `api-changelog.html` and every referenced sample-response/image
   asset into a new timestamped snapshot under `html-snapshots/.incoming/<UTC>/` —
   with bot-block detection (size + content markers) so garbage never overwrites good data
3. Converts the snapshot into a *preview* `docs/` tree (deterministic converter with a
   built-in 100%-coverage assertion: every HTML section id must appear in the Markdown)
4. Compares preview vs current `docs/` → **this is the change detection**. Binary
   images are excluded because the CDN serves varying image variants of the same URL.
5. If something changed: archives the snapshot, promotes it to `html-snapshots/latest/`,
   replaces `docs/`, writes `html-snapshots/change-reports/<stamp>.md`, then
   `git add -A && git commit && git push`
6. If nothing changed: exits 0 after logging a heartbeat to `logs/last-check.json`

Flags: `--force` (commit even when unchanged), `--no-push`, `--skip-pull`.
Run log: `logs/update.log` (gitignored).

### Schedule it

Windows (Task Scheduler, daily 08:00, or `-Time`, `-RunNow`, `-Unregister`):

```powershell
powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1
```

Linux/macOS cron:

```cron
0 8 * * * cd /path/to/upwork-api-markdown && node scripts/update-docs.mjs >> logs/cron.log 2>&1
```

Requirements: Node ≥ 18 (tested on 24), `git` with SSH push access to `origin`,
`curl` (or Node's built-in fetch as fallback). Upwork serves the docs page through
a bot filter, so the fetcher sends browser-like headers with retry/backoff —
occasional transient DNS/403 blips are expected and retried automatically.

## Regenerating or tweaking the Markdown

```bash
npm run convert        # convert html-snapshots/latest -> docs/
npm run check          # validate all internal links/anchors/images in docs/
```

`scripts/convert.mjs` parses the SpectaQL HTML with `cheerio` (`scripts/lib/md.mjs`
is the HTML→Markdown renderer). Conversion is deterministic: the same snapshot
always produces byte-identical Markdown, which is what makes the diff-based change
detection meaningful. Never edit `docs/` by hand — change the converter instead.

## For AI agents

Skills live in `.claude/skills/` (also discovered by OpenCode via `.opencode/skills`-compatible loading) and cover:

- `upwork-api-docs` — how the docs are organized and how to look anything up quickly
- `upwork-graphql-query-builder` — composing valid Upwork GraphQL operations from these docs
- `upwork-docs-sync` — running/maintaining the daily sync safely

See `AGENTS.md` for repo-wide rules.
