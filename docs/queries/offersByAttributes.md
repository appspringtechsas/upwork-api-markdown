---
title: "offersByAttributes"
kind: "query"
gql_name: "offersByAttributes"
returns: "ModernizedContractOfferList"
html_id: "query-offersByAttributes"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-offersByAttributes"
generated_by: "scripts/convert.mjs"
---


# `offersByAttributes`

## Description

Get modernized offers by search for multiple attributes ids.

## Required Permissions

One of: "Offer - Read-Only Access" OR "Offer - Read And Write Access"

## Response

Returns a [`ModernizedContractOfferList`](../types/ModernizedContractOfferList.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`SearchOffersByAttributesInput!`](../inputs/SearchOffersByAttributesInput.md) | Search criteria by attribute IDs |

## Examples

### Detailed structure

#### Query

```graphql
query offersByAttributes($filter: SearchOffersByAttributesInput!) {
  offersByAttributes(filter: $filter) {
    offers {
      ...ModernizedContractOfferFragment
    }
  }
}
```

#### Variables

```json
{"filter": SearchOffersByAttributesInput}
```

#### Response

```json
{
  "data": {
    "offersByAttributes": {
      "offers": [ModernizedContractOffer]
    }
  }
}
```
