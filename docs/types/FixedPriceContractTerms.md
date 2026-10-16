---
title: "FixedPriceContractTerms"
kind: "object"
domain: "Job Posts"
gql_name: "FixedPriceContractTerms"
html_id: "definition-FixedPriceContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FixedPriceContractTerms"
generated_by: "scripts/convert.mjs"
---


# `FixedPriceContractTerms` (object)

## Description

Fixed-price contract terms

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`Money!`](Money.md) | Fixed budget amount |
| `maxAmount` | [`Money`](Money.md) | Maximum budget amount (if range) |
| `engagementDuration` | [`EngagementDuration`](EngagementDuration.md) | Expected project duration |

## Examples

### Example

```json
{
  "amount": Money,
  "maxAmount": Money,
  "engagementDuration": EngagementDuration
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FixedPriceContractTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FeedJobLocation](FeedJobLocation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerClientRelation](FreelancerClientRelation.md) ➡️
