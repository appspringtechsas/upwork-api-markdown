---
title: "addJobPostingTag"
kind: "mutation"
gql_name: "addJobPostingTag"
returns: "Boolean!"
html_id: "mutation-addJobPostingTag"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addJobPostingTag"
generated_by: "scripts/convert.mjs"
---


# `addJobPostingTag`

## Description

Adds a custom annotation tag to a job posting. Returns true when a new tag row is inserted; false when the tag already exists. Reserved/system-managed tags (for example `upwork-now`, `premium`) are rejected by the upstream service. Calls `marketplaceOpeningsDS` `POST /job/{uid}/annotations/tag/{name}`.

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingUid` | [`ID!`](../scalars/ID.md) | Marketplace job posting (opening) UID to tag. |
| `tag` | [`String!`](../scalars/String.md) | Custom annotation tag name to add. |

## Examples

### Detailed structure

#### Query

```graphql
mutation addJobPostingTag(
  $jobPostingUid: ID!,
  $tag: String!
) {
  addJobPostingTag(
    jobPostingUid: $jobPostingUid,
    tag: $tag
  )
}
```

#### Variables

```json
{"jobPostingUid": 4, "tag": "abc123"}
```

#### Response

```json
{"data": {"addJobPostingTag": false}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addJobPostingTag" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [mutations index](README.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createJobPosting](createJobPosting.md) ➡️
