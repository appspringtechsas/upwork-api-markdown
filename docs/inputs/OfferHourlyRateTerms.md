---
title: "OfferHourlyRateTerms"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferHourlyRateTerms"
html_id: "definition-OfferHourlyRateTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferHourlyRateTerms"
generated_by: "scripts/convert.mjs"
---


# `OfferHourlyRateTerms` (input object)

## Description

Hourly rate terms for hourly offers

## Fields

| Field | Type | Description |
|---|---|---|
| `vendorRate` | [`MoneyInput!`](MoneyInput.md) | Hourly rate associated with the offer, currency amount in the lowest currency denominations (so USD 49.12 would be 4912) |
| `weeklyLimit` | [`String`](../scalars/String.md) | Max hour can be logged per week, note: "0" and null/"not set" has different meanings, |
| `manualTimeAllowed` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "vendorRate": MoneyInput,
  "weeklyLimit": "xyz789",
  "manualTimeAllowed": true
}
```
