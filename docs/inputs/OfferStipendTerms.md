---
title: "OfferStipendTerms"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferStipendTerms"
html_id: "definition-OfferStipendTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferStipendTerms"
generated_by: "scripts/convert.mjs"
---


# `OfferStipendTerms` (input object)

## Description

Stipend terms for stipend-based offers

## Fields

| Field | Type | Description |
|---|---|---|
| `stipend` | [`MoneyInput!`](MoneyInput.md) | Periodic stipend |
| `vendorRate` | [`MoneyInput!`](MoneyInput.md) | Vendor rate |
| `period` | [`OfferPeriodTypeInput!`](../enums/OfferPeriodTypeInput.md) | Stipend period |

## Examples

### Example

```json
{
  "stipend": MoneyInput,
  "vendorRate": MoneyInput,
  "period": "Weekly"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferStipendTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferSearchCommonFilter](OfferSearchCommonFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OfferTermsMilestoneInput](OfferTermsMilestoneInput.md) ➡️
