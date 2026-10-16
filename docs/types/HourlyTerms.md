---
title: "HourlyTerms"
kind: "object"
domain: "Offers and Contracts"
gql_name: "HourlyTerms"
html_id: "definition-HourlyTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyTerms"
generated_by: "scripts/convert.mjs"
---


# `HourlyTerms` (object)

## Description

Terms for hourly rate offer

## Fields

| Field | Type | Description |
|---|---|---|
| `rate` | [`Money`](Money.md) | Hourly rate amount |
| `weeklyHoursLimit` | [`Int`](../scalars/Int.md) | Max hours can be worked for a week |
| ⚠️ `weeklyStipend` | [`Money`](Money.md) | Weekly stipend amount, if in stipened mode **⚠️ Deprecated — Will be removed in future release, use modernized StipendTerms** |
| `manualTimeAllowed` | [`Boolean`](../scalars/Boolean.md) | Flag to indicate whether manual time log is allowed |

## Examples

### Example

```json
{
  "rate": Money,
  "weeklyHoursLimit": 987,
  "weeklyStipend": Money,
  "manualTimeAllowed": false
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [HourlyLimit](HourlyLimit.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Metadata](Metadata.md) ➡️
