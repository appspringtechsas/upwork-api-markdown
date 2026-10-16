---
title: "languages"
kind: "query"
gql_name: "languages"
returns: "[Language!]!"
html_id: "query-languages"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-languages"
generated_by: "scripts/convert.mjs"
---


# `languages`

## Description

Get the list of languages

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Common Functionality - Read And Write Access"

## Response

Returns [`[Language!]!`](../types/Language.md)

## Examples

### Detailed structure

#### Query

```graphql
query languages {
  languages {
    iso639Code
    active
    englishName
  }
}
```

#### Response

```json
{
  "data": {
    "languages": [
      {
        "iso639Code": "abc123",
        "active": true,
        "englishName": "xyz789"
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-languages" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [countries](countries.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [reasons](reasons.md) ➡️
