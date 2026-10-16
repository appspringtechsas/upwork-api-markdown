---
title: "ProposalReason"
kind: "object"
domain: "Proposals"
gql_name: "ProposalReason"
html_id: "definition-ProposalReason"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalReason"
generated_by: "scripts/convert.mjs"
---


# `ProposalReason` (object)

## Description

Vendor or client proposal reason Reason for a proposal status change

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Identifier of the reason for proposal to switch to current status |
| `reason` | [`String!`](../scalars/String.md) | Reason text |
| `description` | [`String`](../scalars/String.md) | Text of the reason for proposal to switch to current status (applicable for declined or withdrawn proposals) |

## Examples

### Example

```json
{
  "id": "4",
  "reason": "xyz789",
  "description": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProposalReason" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ProposalQuestionAnswer](ProposalQuestionAnswer.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ProposalTerms](ProposalTerms.md) ➡️
