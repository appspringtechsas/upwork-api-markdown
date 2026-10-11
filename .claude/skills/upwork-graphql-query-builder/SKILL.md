---
name: upwork-graphql-query-builder
description: Use when composing, validating, or debugging a GraphQL query/mutation/subscription against the Upwork API — building a request for job postings, proposals, contracts, search, talent profiles, reports, or messaging, or when asked for an Upwork GraphQL example or sample payload.
---

# Upwork GraphQL query builder

Build operations **from the mirrored docs** (`docs/`), never from memory — Upwork's
schema names and permissions strings are specific. Skill `upwork-api-docs` maps the repo.

## Workflow

1. **Pick the operation.** Browse `docs/queries/README.md` / `docs/mutations/README.md`
   (grouped by domain). Read each candidate's `deprecated:` frontmatter — prefer the
   replacement it names (e.g. `marketplaceJobPostings` is deprecated → `marketplaceJobPostingsSearch`).
2. **Read the operation file** `docs/queries/<name>.md`:
   - `## Arguments` — exact names and types (links lead to `docs/inputs/…` for filter/pagination shapes)
   - `## Required Permissions` — copy the string **verbatim** into the app's scope list
   - `## Response` — the return type; open its file to choose selection-set fields
   - `## Examples` — `Detailed structure` (all top-level sub-selection), `Real-life example`
     (executable query + variables + response), `Sample query variants` (by role, e.g. `jobPostings`, `listClientOffers`)
3. **Expand nested types** by following each field's type link (`docs/types/<T>.md`).
   Fields with parameters are in `## Field arguments` — pass them inline (`field(arg: …)`).
4. **Use the real-life example as the request skeleton**; substitute variables from
   the `Variables` block. Connection types (named `…Connection`) expose `edges`/`node`
   or `items` + a `Pagination` input — copy the pagination shape from the example or
   `docs/inputs/Pagination.md`.
5. **Assemble the request:**
   ```bash
   curl -X POST https://api.upwork.com/graphql \
     -H "Authorization: Bearer <access_token>" \
     -H "Content-Type: application/json" \
     -H "X-Upwork-API-TenantId: <organizationId>" \
     -d '{"query":"query … { … }","variables":{…}}'
   ```
   OAuth2 token acquisition: `docs/getting-started/authentication.md` (Authorization Code / PKCE).
6. **Handle errors with the documented shape** (`docs/operations/error-handling.md`):
   a GraphQL response with `errors[]` uses typed exceptions — check `extensions.code`
   before falling back to generic handling.

## Conventions & gotchas

- Non-null is part of the type (`ID!`, `[JobPostingAttachment!]`) — required args without a default must be sent.
- Scalar docs (`docs/scalars/`): `Long`, `Map`, `DateTime`/`Date`/… are Upwork custom scalars — serialize per their file's description (ISO strings).
- Enum argument values are **bare names** (e.g. `status: PUBLISHED`) — values live in `docs/enums/<E>.md`.
- Union/interface result types (`docs/unions/`, `docs/interfaces/`) need inline fragments per concrete type.
- Mutations with optimistic locking require the current `version` (e.g. `updateJobPosting`) — fetch it first (`jobPosting.version`).
- Subscriptions: the API surface is HTTP; documented event feeds are described in `docs/operations/subscriptions.md`.
- Every field you select must exist in the type's `## Fields` table — GraphQL is strict; a typo is an error response, not silent nulls.

## Verification step

Before answering a "give me a query" request, confirm each field name appears in the
corresponding `docs/types/*.md` field table and quote it; state required permissions
verbatim from the operation file.
