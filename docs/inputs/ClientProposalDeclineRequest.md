---
title: "ClientProposalDeclineRequest"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalDeclineRequest"
html_id: "definition-ClientProposalDeclineRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalDeclineRequest"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalDeclineRequest` (input object)

## Description

Client proposal decline request

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalId` | [`ID!`](../scalars/ID.md) | Proposal identifier to be declined |
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier of the proposal |
| `reason` | [`ID`](../scalars/ID.md) | Identifier of the reason from the available reasons |
| `otherReason` | [`String`](../scalars/String.md) | Other reason if not available in the list |
| `message` | [`String`](../scalars/String.md) | Optional message to the freelancer |

## Examples

### Example

```json
{
  "proposalId": 4,
  "jobPostingId": "4",
  "reason": "4",
  "otherReason": "xyz789",
  "message": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalDeclineRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientJobInvitationCreateRequestInput](ClientJobInvitationCreateRequestInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalFilter](ClientProposalFilter.md) ➡️
