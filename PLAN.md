# Plan: Upwork GraphQL API docs → Markdown repo

Goal (from user):
1. Retrieve https://www.upwork.com/developer/documentation/graphql/api/docs/index.html — DONE (curl.exe works; 5.2MB static SpectaQL page)
2. Transform 100% of content to organized/structured Markdown (human + AI readable)
3. Create skills for AI agents to use the docs properly
4. Save the HTML with date and time
5. Daily-run program: pull → fetch → compare vs latest saved → identify changes → regenerate Markdown → save latest → commit → push

Key decisions (defaults chosen, user can override):
- Node.js scripts (v24 installed), cheerio for HTML parsing, curl.exe for fetching (site 403s plain clients)
- html-snapshots/<UTC ts>/ holds index.html + api-changelog.html + 103 lazy assets + meta.json + coverage.json; latest/ mirror + LATEST.json pointer + INDEX.md
- docs/ tree: introduction, getting-started/, operations/ (+ examples per domain), queries/, mutations/, types/, inputs/, enums/, scalars/, interfaces/, unions/, changelog.md, README indexes, assets/images
- Change detection compares generated Markdown (raw HTML/CDN is volatile: per-request Cloudflare tokens, image variant churn)
- Windows scheduled-task registration helper (scripts/register-task.ps1); cron documented; GitHub Actions noted
- Skills in .claude/skills/ (discovered by OpenCode via compat source AND Claude Code) + AGENTS.md/CLAUDE.md; writing-skills followed (baseline → write → verify)

Inventory (from HTML analysis):
- 89 query-* + 67 mutation-* operations (156 total), grouped by domain (Job Posts, Metadata, Offers and Contracts (+Client), Ontology, Proposals (+Client), Reporting, Search, Talent Clouds, Users and teams (+Client), Workflow, Payment (Client), Other)
- 797 definitions: 433 objects, 179 inputs, 172 enums, 7 scalars, 4 interfaces, 2 unions (each has definition-group-name domain)
- Prose: introduction (+terminology), preparation, keys-management, application-permissions, authentication (+auth-* grants, service accounts), tools, operations (common info, error handling, examples incl. sample flows, subscriptions)
- Deprecations: value/field-level (26 ⚠️ markers in tables), 4 deprecated operations with reasons
- sample-example-variants JSON per operation + lazy-loaded response JSON assets (103 total incl. images)

## Checklist
- [x] Fetch HTML works (browser UA via curl.exe + Referer for assets, retries)
- [x] Explored: api-changelog.html + 103 lazy assets (sample responses + images) fetched too
- [x] scripts/fetch-docs.mjs (download + timestamped snapshot + meta.json + validation)
- [x] scripts/convert.mjs (cheerio → 983 md files: 89 queries, 67 mutations, 797 definitions, 19 prose + indexes + changelog)
- [x] Coverage self-check passes: 1811/1811 ids rendered
- [x] scripts/update-docs.mjs (pull → fetch → convert-preview → markdown-diff → archive → promote latest → report → commit → push)
- [x] Idempotency verified: markdown-content diff (pass 2 = "no changes"); binary image churn excluded
- [x] Quality audit: deprecation markers, field args, examples + real-life + variants, fenced code dedent/lang, local images; scripts/check-links.mjs → all links/anchors resolve
- [x] scripts/register-task.ps1 (daily Windows task; -RunNow/-Unregister; cron documented)
- [x] Skills: baseline retrieval test (RED) → upwork-api-docs, upwork-graphql-query-builder, upwork-docs-sync (GREEN) → verification test running
- [x] AGENTS.md + CLAUDE.md + README.md + .gitignore (node_modules, logs, .incoming, .preview)
- [ ] Skill verification review (REFACTOR if gaps found)
- [ ] Clean history: squash debug commits → tooling commit, then real initial-import commit via update-docs itself, push
- [ ] Final verification pass
