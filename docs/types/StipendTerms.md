---
title: "StipendTerms"
kind: "object"
domain: "Offers and Contracts"
gql_name: "StipendTerms"
html_id: "definition-StipendTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StipendTerms"
generated_by: "scripts/convert.mjs"
---


# `StipendTerms` (object)

## Description

Terms for Stipend

## Fields

| Field | Type | Description |
|---|---|---|
| `stipend` | [`Money`](Money.md) | Stipend amount |
| `vendorRate` | [`Money`](Money.md) | Vendor hourly rate |
| `period` | [`PeriodType`](../enums/PeriodType.md) | Period of time, default is weekly |

## Examples

### Example

```json
{
  "stipend": Money,
  "vendorRate": Money,
  "period": "Weekly"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StipendTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [StipendContractTerm](StipendContractTerm.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Submission](Submission.md) ➡️
