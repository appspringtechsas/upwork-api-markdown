---
title: "marketplaceJobPostingsContents"
kind: "query"
gql_name: "marketplaceJobPostingsContents"
returns: "[MarketplaceJobPostingsContents]!"
html_id: "query-marketplaceJobPostingsContents"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostingsContents"
generated_by: "scripts/convert.mjs"
---


# `marketplaceJobPostingsContents`

## Description

Get marketplace job postings content by ID

## Required Permissions

"Read marketplace Job Postings"

## Response

Returns [`[MarketplaceJobPostingsContents]!`](../types/MarketplaceJobPostingsContents.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `ids` | [`[ID!]!`](../scalars/ID.md) | Job posting identifiers |

## Examples

### Detailed structure

#### Query

```graphql
query marketplaceJobPostingsContents($ids: [ID!]!) {
  marketplaceJobPostingsContents(ids: $ids) {
    id
    ciphertext
    title
    description
    publishedDateTime
    annotations {
      ...MarketplacePostingAnnotationsFragment
    }
  }
}
```

#### Variables

```json
{"ids": [4]}
```

#### Response

```json
{
  "data": {
    "marketplaceJobPostingsContents": [
      {
        "id": "4",
        "ciphertext": "xyz789",
        "title": "xyz789",
        "description": "abc123",
        "publishedDateTime": "xyz789",
        "annotations": MarketplacePostingAnnotations
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostingsContents" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [marketplaceJobPostings](marketplaceJobPostings.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [countries](countries.md) ➡️
