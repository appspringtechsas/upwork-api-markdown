---
title: "OfferTerms"
kind: "object"
domain: "Offers and Contracts"
gql_name: "OfferTerms"
html_id: "definition-OfferTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferTerms"
generated_by: "scripts/convert.mjs"
---


# `OfferTerms` (object)

## Description

Terms associated with the offer

## Fields

| Field | Type | Description |
|---|---|---|
| `expectedStartDate` | [`String`](../scalars/String.md) | Expected start date of offer |
| `expectedEndDate` | [`String`](../scalars/String.md) | Expected end date of offer |
| `fixedPriceTerm` | [`FixedPriceTerm`](FixedPriceTerm.md) | Offer terms for fixed price |
| `hourlyTerms` | [`HourlyTerms`](HourlyTerms.md) | Offer terms for hourly rate |

## Examples

### Example

```json
{
  "expectedStartDate": "abc123",
  "expectedEndDate": "abc123",
  "fixedPriceTerm": FixedPriceTerm,
  "hourlyTerms": HourlyTerms
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferList](OfferList.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PtcData](PtcData.md) ➡️
