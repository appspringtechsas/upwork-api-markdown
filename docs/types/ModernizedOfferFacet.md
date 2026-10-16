---
title: "ModernizedOfferFacet"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ModernizedOfferFacet"
html_id: "definition-ModernizedOfferFacet"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedOfferFacet"
generated_by: "scripts/convert.mjs"
---


# `ModernizedOfferFacet` (object)

## Description

Offer facet data

## Fields

| Field | Type | Description |
|---|---|---|
| `facetType` | [`FacetType!`](../enums/FacetType.md) | Facet type |
| `data` | [`String`](../scalars/String.md) | Facet data |
| `version` | [`String!`](../scalars/String.md) | Facet version |
| `creationTimestamp` | [`String!`](../scalars/String.md) | Facet creation timestamp |
| `modificationTimestamp` | [`String!`](../scalars/String.md) | Facet modification timestamp |

## Examples

### Example

```json
{
  "facetType": "PAYROLL",
  "data": "xyz789",
  "version": "abc123",
  "creationTimestamp": "abc123",
  "modificationTimestamp": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ModernizedOfferFacet" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ModernizedOffer](ModernizedOffer.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Offer](Offer.md) ➡️
