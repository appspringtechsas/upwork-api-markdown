---
title: "CreateMilestoneInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "CreateMilestoneInput"
html_id: "definition-CreateMilestoneInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateMilestoneInput"
generated_by: "scripts/convert.mjs"
---


# `CreateMilestoneInput` (input object)

## Description

Input for creating a milestone

## Fields

| Field | Type | Description |
|---|---|---|
| `offerId` | [`ID`](../scalars/ID.md) | Related offer ID |
| `contractId` | [`ID`](../scalars/ID.md) | Related contract ID |
| `description` | [`String`](../scalars/String.md) | Milestone description |
| `instruction` | [`String`](../scalars/String.md) | Applicable instruction |
| `depositAmount` | [`String`](../scalars/String.md) | Amount is in cents. For example 1000 represents 10 USD |
| `dueDate` | [`String`](../scalars/String.md) | Due date requirement |
| `attachmentIds` | [`[ID!]`](../scalars/ID.md) | The list of attachments' IDs (For Internal Usage Only) |

## Examples

### Example

```json
{
  "offerId": 4,
  "contractId": 4,
  "description": "xyz789",
  "instruction": "abc123",
  "depositAmount": "abc123",
  "dueDate": "xyz789",
  "attachmentIds": ["4"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateMilestoneInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractPagingInput](ContractPagingInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreationOfferInput](CreationOfferInput.md) ➡️
