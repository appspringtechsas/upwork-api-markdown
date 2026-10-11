---
title: "ContractOfferConnection"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractOfferConnection"
html_id: "definition-ContractOfferConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractOfferConnection"
generated_by: "scripts/convert.mjs"
---


# `ContractOfferConnection` (object)

## Description

Paginated collection of contract offers

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of results |
| `edges` | [`[ContractOfferEdge]`](ContractOfferEdge.md) | Connection edges |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [ContractOfferEdge],
  "pageInfo": PageInfo
}
```
