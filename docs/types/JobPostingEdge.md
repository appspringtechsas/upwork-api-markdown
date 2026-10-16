---
title: "JobPostingEdge"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingEdge"
html_id: "definition-JobPostingEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingEdge"
generated_by: "scripts/convert.mjs"
---


# `JobPostingEdge` (object)

## Description

Edge in management job posting connection

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |
| `node` | [`JobPosting`](JobPosting.md) | Job posting node |

## Examples

### Example

```json
{
  "cursor": "abc123",
  "node": JobPosting
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingCustomFields](JobPostingCustomFields.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingInfo](JobPostingInfo.md) ➡️
