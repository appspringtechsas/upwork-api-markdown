---
title: "MilestoneTerms"
kind: "object"
domain: "Offers and Contracts"
gql_name: "MilestoneTerms"
html_id: "definition-MilestoneTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MilestoneTerms"
generated_by: "scripts/convert.mjs"
---


# `MilestoneTerms` (object)

## Description

Terms for milestones (AKA Fixed priced)

## Fields

| Field | Type | Description |
|---|---|---|
| `budget` | [`Money`](Money.md) | Budget amount for the milestones |
| `milestones` | [`[Milestone!]`](Milestone.md) | List of milestones |

## Examples

### Example

```json
{
  "budget": Money,
  "milestones": [Milestone]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MilestoneTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MilestoneSubmissions](MilestoneSubmissions.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ModernizedContractOffer](ModernizedContractOffer.md) ➡️
