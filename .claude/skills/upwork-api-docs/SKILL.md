---
name: upwork-api-docs
description: Use when answering questions about the Upwork GraphQL API (queries, mutations, object types, inputs, enums, auth, OAuth2, permissions, rate limits, errors, subscriptions) or when integrating with the Upwork API — explains how the mirrored documentation in this repo is organized so any fact can be looked up in one step.
---

# Upwork API docs — navigation

All user-facing documentation lives **only under `docs/`** (generated). Never glob
or edit outside it for lookups; `html-snapshots/` and `scripts/` are archive/tooling.

## Where things live

| I want…                                        | Go to |
|---|---|
| any query (e.g. `jobPosting`)                  | `docs/queries/<name>.md` — index: `docs/queries/README.md` (grouped by domain) |
| any mutation (e.g. `createJobPosting`)         | `docs/mutations/<name>.md` — index: `docs/mutations/README.md` |
| an object type (field tables)                  | `docs/types/<TypeName>.md` |
| a filter/input object (query/mutation args)    | `docs/inputs/<InputName>.md` |
| an enum's values                               | `docs/enums/<EnumName>.md` |
| scalars (`Long`, `Map`, `DateTime`…)           | `docs/scalars/` |
| interfaces / unions                            | `docs/interfaces/`, `docs/unions/` |
| endpoint URL, auth, OAuth2 grants, API keys    | `docs/getting-started/authentication.md`, `docs/getting-started/keys-management.md` |
| permissions/scopes                             | each operation's **Required Permissions** section; `docs/getting-started/application-permissions.md` |
| error response shape, troubleshooting          | `docs/operations/error-handling.md` |
| rate limits / general request info             | `docs/operations/common-information.md` |
| subscriptions & events                         | `docs/operations/subscriptions.md` |
| worked end-to-end flows (jobs, search, proposals…) | `docs/operations/examples/` |
| what changed upstream recently                 | `docs/changelog.md` |

## Quick facts

- Endpoint: `POST https://api.upwork.com/graphql`
- Auth: OAuth2, `Authorization: Bearer <access_token>`; organization context via `X-Upwork-API-TenantId` header (optional; defaults to user's org)
- Introspection: `https://www.upwork.com/api/graphql/v3/introspect` (see `docs/operations/common-information.md`)
- Access token TTL 24 h, refresh token 2 weeks

## How each file is structured

YAML frontmatter: `title`, `kind` (query/mutation/object/input_object/enum/scalar/interface/union/section), `domain`, `gql_name`, `returns`, `deprecated` (reason string when deprecated), `html_id`, `source` (official docs deep-link). Body: `## Description`, `## Required Permissions` / `## Response` / `## Arguments` (operations) or `## Fields` / `## Values` (types/enums), `## Field arguments` (fields that take args), `## Examples` (detailed structure + real-life query/variables/response + role variants).

## Lookup recipes

- Exact definition: `grep -rl 'gql_name: "createJobPosting"' docs/`
- Who returns type X: `grep -rl '#definition-X\|](.*/X.md)' docs/` — links are relative, e.g. `../types/JobPosting.md`
- Fields of a type: open `docs/types/<T>.md`; each row's type is a link to the next file — traverse by following links
- Every operation of a domain: the `## <Domain>` sections in `docs/queries/README.md`

## Deprecation & near-duplicate names

Always check `deprecated:` in frontmatter or a `⚠️` row marker before recommending
an operation/field/enum value. Similar names are distinct entities — e.g.
`marketplaceJobPostings` (**deprecated** → use `marketplaceJobPostingsSearch`) vs
`marketplaceJobPostingsContents` vs `marketplaceJobPosting`. The index READMEs mark
deprecated entries with ⚠️.

## Rules

- `docs/` is generated daily from upstream HTML (`html-snapshots/latest/`); fix the converter (`scripts/`, skill: upwork-docs-sync), never the output.
- Content is Upwork's; cite `source:` frontmatter when quoting.
- Related skills: upwork-graphql-query-builder (composing operations), upwork-docs-sync (maintenance).
