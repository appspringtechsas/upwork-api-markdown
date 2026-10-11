---
title: "OfferMilestoneTerms"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferMilestoneTerms"
html_id: "definition-OfferMilestoneTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferMilestoneTerms"
generated_by: "scripts/convert.mjs"
---


# `OfferMilestoneTerms` (input object)

## Description

Milestone terms for fixed-price offers

## Fields

| Field | Type | Description |
|---|---|---|
| `budget` | [`MoneyInput!`](MoneyInput.md) | milestone amount in the lowest currency denominations (so USD 49.12 would be 4912) |
| `milestoneList` | [`[OfferTermsMilestoneInput!]!`](OfferTermsMilestoneInput.md) | List of milestones |

## Examples

### Example

```json
{
  "budget": MoneyInput,
  "milestoneList": [OfferTermsMilestoneInput]
}
```
