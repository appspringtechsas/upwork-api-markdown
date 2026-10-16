---
title: "JobPostsFilter"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostsFilter"
html_id: "definition-JobPostsFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostsFilter"
generated_by: "scripts/convert.mjs"
---


# `JobPostsFilter` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `teamIds` | [`[ID!]`](../scalars/ID.md) | If specified, only job posts belonging to these teams will be fetched |
| `statuses` | [`[String!]`](../scalars/String.md) | Job post status list. Default value is ALL. |
| `excludeHidden` | [`Boolean`](../scalars/Boolean.md) | Whether to exclude hidden openings from result. Default is true. |
| `fields` | [`[String!]`](../scalars/String.md) | Job posts projection fields |

## Examples

### Example

```json
{
  "teamIds": [4],
  "statuses": ["xyz789"],
  "excludeHidden": true,
  "fields": ["abc123"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostsFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingUpdateRequest](JobPostingUpdateRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostToolInput](JobPostToolInput.md) ➡️
