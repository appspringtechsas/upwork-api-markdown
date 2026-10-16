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
  "description": "abc123",
  "dueDate": "abc123",
  "attachmentUids": ["abc123"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalMilestoneInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractProposalHourlyTermsInput](ContractProposalHourlyTermsInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractProposalMilestoneTermsV2Input](ContractProposalMilestoneTermsV2Input.md) ➡️
