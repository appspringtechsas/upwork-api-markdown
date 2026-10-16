---
title: "JobPostingConnection"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingConnection"
html_id: "definition-JobPostingConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingConnection"
generated_by: "scripts/convert.mjs"
---


# `JobPostingConnection` (object)

## Description

Connection for management job postings

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of management job postings |
| `edges` | [`[JobPostingEdge]!`](JobPostingEdge.md) | Connection edges containing nodes and cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "totalCount": 123,
  "edges": [JobPostingEdge],
  "pageInfo": PageInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingClassification](JobPostingClassification.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingContent](JobPostingContent.md) ➡️
