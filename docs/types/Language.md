---
title: "Language"
kind: "object"
domain: "Other"
gql_name: "Language"
html_id: "definition-Language"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Language"
generated_by: "scripts/convert.mjs"
---


# `Language` (object)

## Description

Language definition with ISO code and display name

## Fields

| Field | Type | Description |
|---|---|---|
| `iso639Code` | [`String!`](../scalars/String.md) | [https://en.wikipedia.org/wiki/ISO_639](https://en.wikipedia.org/wiki/ISO_639) |
| `active` | [`Boolean!`](../scalars/Boolean.md) | Flag indicates if the language is active |
| `englishName` | [`String!`](../scalars/String.md) | English name of the language |

## Examples

### Example

```json
{
  "iso639Code": "xyz789",
  "active": false,
  "englishName": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Language" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobCategory](JobCategory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Money](Money.md) ➡️
