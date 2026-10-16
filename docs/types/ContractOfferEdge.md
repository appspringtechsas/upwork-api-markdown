---
title: "ContractOfferEdge"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractOfferEdge"
html_id: "definition-ContractOfferEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractOfferEdge"
generated_by: "scripts/convert.mjs"
---


# `ContractOfferEdge` (object)

## Description

Edge wrapper containing a contract offer node

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Pagination cursor |
| `node` | [`ContractOfferResult`](ContractOfferResult.md) | Contract offer result node |

## Examples

### Example

```json
{
  "cursor": "abc123",
  "node": ContractOfferResult
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractOfferEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractOfferConnection](ContractOfferConnection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractOfferLastEvent](ContractOfferLastEvent.md) ➡️
