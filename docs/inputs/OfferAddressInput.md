---
title: "OfferAddressInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferAddressInput"
html_id: "definition-OfferAddressInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferAddressInput"
generated_by: "scripts/convert.mjs"
---


# `OfferAddressInput` (input object)

## Description

Address input for offer location

## Fields

| Field | Type | Description |
|---|---|---|
| `addressLine` | [`String`](../scalars/String.md) | Street address |
| `suite` | [`String`](../scalars/String.md) | Suite number |
| `zip` | [`String`](../scalars/String.md) | ZIP code |

## Examples

### Example

```json
{
  "addressLine": "abc123",
  "suite": "abc123",
  "zip": "abc123"
}
```
