---
title: "ProposalMilestones"
kind: "object"
domain: "Proposals"
gql_name: "ProposalMilestones"
html_id: "definition-ProposalMilestones"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalMilestones"
generated_by: "scripts/convert.mjs"
---


# `ProposalMilestones` (object)

## Description

Milestone defined in a proposal project plan

## Fields

| Field | Type | Description |
|---|---|---|
| `description` | [`String!`](../scalars/String.md) | Milestone description |
| `dueDate` | [`String!`](../scalars/String.md) | Due date for the milestone |
| `amount` | [`String!`](../scalars/String.md) | Payment amount for the milestone (string format pending Money type migration) |

## Examples

### Example

```json
{
  "description": "abc123",
  "dueDate": "xyz789",
  "amount": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalMilestones" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProposalMetadata](ProposalMetadata.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ProposalProjectPlan](ProposalProjectPlan.md) ➡️
