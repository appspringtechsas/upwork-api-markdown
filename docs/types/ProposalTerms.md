---
title: "ProposalTerms"
kind: "object"
domain: "Proposals"
gql_name: "ProposalTerms"
html_id: "definition-ProposalTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalTerms"
generated_by: "scripts/convert.mjs"
---


# `ProposalTerms` (object)

## Description

Proposal terms, vendor applied on

## Fields

| Field | Type | Description |
|---|---|---|
| `chargeRate` | [`Money!`](Money.md) | Hourly contracts: hourly charge rate or fixed price contracts charge rate |
| `estimatedDuration` | [`ProposalEngagementDuration`](ProposalEngagementDuration.md) | Duration metadata item |
| `upfrontPaymentPercent` | [`Float`](../scalars/Float.md) | Upfront payment percent. Is NULL in case of hourly contracts. Always 0 or more for fixed price contracts. |
| `connectsBid` | [`Int`](../scalars/Int.md) | Connects bid on a boosted proposal. NULL when the proposal was not boosted. |

## Examples

### Example

```json
{
  "chargeRate": Money,
  "estimatedDuration": ProposalEngagementDuration,
  "upfrontPaymentPercent": 987.65,
  "connectsBid": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProposalReason](ProposalReason.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UpdateClientProposalResult](UpdateClientProposalResult.md) ➡️
