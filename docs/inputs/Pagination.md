---
title: "Pagination"
kind: "input_object"
domain: "Other"
gql_name: "Pagination"
html_id: "definition-Pagination"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Pagination"
generated_by: "scripts/convert.mjs"
---


# `Pagination` (input object)

## Description

Pagination

## Fields

| Field | Type | Description |
|---|---|---|
| `after` | [`String`](../scalars/String.md) | Identifies the start place of the pagination, e.g. after: "0" will indicate "from the very first element" |
| `first` | [`Int!`](../scalars/Int.md) | Identifies how many records must be returns in a single response, e.g. first: 30 will return 30 elements |

## Examples

### Example

```json
{"after": "abc123", "first": 987}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Pagination" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [IntRange](IntRange.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [SortAttribute](SortAttribute.md) ➡️
