---
title: "removeJobPostingTag"
kind: "mutation"
gql_name: "removeJobPostingTag"
returns: "Boolean!"
html_id: "mutation-removeJobPostingTag"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeJobPostingTag"
generated_by: "scripts/convert.mjs"
---


# `removeJobPostingTag`

## Description

Removes a custom annotation tag from a job posting. Returns true when a tag row is deleted; false when the tag was not present. Calls `marketplaceOpeningsDS` `DELETE /job/{uid}/annotations/tag/{name}`.

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingUid` | [`ID!`](../scalars/ID.md) | Marketplace job posting (opening) UID to untag. |
| `tag` | [`String!`](../scalars/String.md) | Annotation tag name to remove. |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeJobPostingTag(
  $jobPostingUid: ID!,
  $tag: String!
) {
  removeJobPostingTag(
    jobPostingUid: $jobPostingUid,
    tag: $tag
  )
}
```

#### Variables

```json
{
  "jobPostingUid": "4",
  "tag": "xyz789"
}
```

#### Response

```json
{"data": {"removeJobPostingTag": true}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeJobPostingTag" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [createJobPosting](createJobPosting.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [updateJobPosting](updateJobPosting.md) ➡️
