---
title: "CreateProposalMilestone"
kind: "input_object"
domain: "Other"
gql_name: "CreateProposalMilestone"
html_id: "definition-CreateProposalMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateProposalMilestone"
generated_by: "scripts/convert.mjs"
---


# `CreateProposalMilestone` (input object)

## Description

Input type for proposal milestone

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`Float!`](../scalars/Float.md) | Milestone amount |
| `description` | [`String!`](../scalars/String.md) | Milestone description |
| `dueDate` | [`String`](../scalars/String.md) | Milestone due date (timestamp) |

## Examples

### Example

```json
{
  "amount": 987.65,
  "description": "xyz789",
  "dueDate": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CreateProposalMilestone" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CreateJobProposalInput](CreateJobProposalInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreateProposalQuestion](CreateProposalQuestion.md) ➡️
