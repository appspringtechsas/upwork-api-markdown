---
title: "ContractProposalMilestoneInput"
kind: "input_object"
domain: "Other"
gql_name: "ContractProposalMilestoneInput"
html_id: "definition-ContractProposalMilestoneInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalMilestoneInput"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalMilestoneInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`MoneyInput!`](MoneyInput.md) | Milestone amount |
| `description` | [`String!`](../scalars/String.md) | Milestone description |
| `dueDate` | [`String`](../scalars/String.md) | Milestone due date, in YYYY-MM-DD format |
| `attachmentUids` | [`[String!]`](../scalars/String.md) | Attachment UIDs for the milestone |

## Examples

### Example

```json
{
  "amount": MoneyInput,
  "description": "xyz789",
  "dueDate": "xyz789",
  "attachmentUids": ["xyz789"]
}
```
