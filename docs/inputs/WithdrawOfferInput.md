---
title: "WithdrawOfferInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "WithdrawOfferInput"
html_id: "definition-WithdrawOfferInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WithdrawOfferInput"
generated_by: "scripts/convert.mjs"
---


# `WithdrawOfferInput` (input object)

## Description

Input for withdrawing an offer

## Fields

| Field | Type | Description |
|---|---|---|
| `offerId` | [`ID!`](../scalars/ID.md) | Offer identifier |
| `message` | [`String`](../scalars/String.md) | Message to vendor |
| `withdrawalReason` | [`WithdrawReason`](../enums/WithdrawReason.md) | Withdrawal reason |

## Examples

### Example

```json
{
  "offerId": "4",
  "message": "xyz789",
  "withdrawalReason": "OFFER_WITHDRAW_REASON_HIRED_DIFFERENT_FREELANCER"
}
```
