---
title: "PageInfo"
kind: "object"
domain: "Other"
gql_name: "PageInfo"
html_id: "definition-PageInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PageInfo"
generated_by: "scripts/convert.mjs"
---


# `PageInfo` (object)

## Description

Pagination metadata for list responses

## Fields

| Field | Type | Description |
|---|---|---|
| `endCursor` | [`String`](../scalars/String.md) | Cursor to be used to fetch next page in list |
| `hasNextPage` | [`Boolean`](../scalars/Boolean.md) | Boolean indicating whether there is a next page in the list |

## Examples

### Example

```json
{"endCursor": "abc123", "hasNextPage": true}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PageInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Money](Money.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Portrait](Portrait.md) ➡️
