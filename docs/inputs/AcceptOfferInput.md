---
title: "AcceptOfferInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "AcceptOfferInput"
html_id: "definition-AcceptOfferInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AcceptOfferInput"
generated_by: "scripts/convert.mjs"
---


# `AcceptOfferInput` (input object)

## Description

Input for accepting an offer

## Fields

| Field | Type | Description |
|---|---|---|
| `offerId` | [`ID!`](../scalars/ID.md) | Offer identifier |
| `message` | [`String`](../scalars/String.md) | Message to the client |

## Examples

### Example

```json
{
  "offerId": "4",
  "message": "abc123"
}
```
