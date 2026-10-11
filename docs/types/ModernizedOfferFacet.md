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
  "creationTimestamp": "xyz789",
  "modificationTimestamp": "xyz789"
}
```
