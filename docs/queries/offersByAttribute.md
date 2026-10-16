---
title: "offersByAttribute"
kind: "query"
gql_name: "offersByAttribute"
returns: "OfferList"
html_id: "query-offersByAttribute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-offersByAttribute"
generated_by: "scripts/convert.mjs"
---


# `offersByAttribute`

## Description

Get offers by search attribute and id.

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns an [`OfferList`](../types/OfferList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`SearchOffersInput!`](../inputs/SearchOffersInput.md) | Contains data for searching |

## Examples

### Detailed structure

#### Query

```graphql
query offersByAttribute($filter: SearchOffersInput!) {
  offersByAttribute(filter: $filter) {
    offers {
      ...OfferFragment
    }
  }
}
```

#### Variables

```json
{"filter": SearchOffersInput}
```

#### Response

```json
{"data": {"offersByAttribute": {"offers": [Offer]}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-offersByAttribute" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [offer](offer.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [offersByAttributes](offersByAttributes.md) ➡️
