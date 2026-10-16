---
title: "OfferTermsMilestoneInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferTermsMilestoneInput"
html_id: "definition-OfferTermsMilestoneInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferTermsMilestoneInput"
generated_by: "scripts/convert.mjs"
---


# `OfferTermsMilestoneInput` (input object)

## Description

Input for milestone terms in an offer

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`MoneyInput!`](MoneyInput.md) | Milestone amount in the lowest currency denominations (e.g., USD 49.12 would be 4912) |
| `description` | [`String!`](../scalars/String.md) | Milestone description |
| `dueDate` | [`String`](../scalars/String.md) | Milestone due date in yyyy-MM-dd format |
| `instructions` | [`String`](../scalars/String.md) | Milestone instructions |
| `attachments` | [`[String!]`](../scalars/String.md) | `[]` |

## Examples

### Example

```json
{
  "amount": MoneyInput,
  "description": "xyz789",
  "dueDate": "abc123",
  "instructions": "abc123",
  "attachments": ["xyz789"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferTermsMilestoneInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferStipendTerms](OfferStipendTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PrivateFeedbackAdditionalQuestionInput](PrivateFeedbackAdditionalQuestionInput.md) ➡️
