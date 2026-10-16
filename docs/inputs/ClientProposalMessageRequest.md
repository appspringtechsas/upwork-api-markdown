---
title: "ClientProposalMessageRequest"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalMessageRequest"
html_id: "definition-ClientProposalMessageRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalMessageRequest"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalMessageRequest` (input object)

## Description

Client proposal message request

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalId` | [`ID!`](../scalars/ID.md) | Client proposal identifier |
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier of the proposal |
| `message` | [`String!`](../scalars/String.md) | Message to send to the freelancer |

## Examples

### Example

```json
{
  "proposalId": 4,
  "jobPostingId": 4,
  "message": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalMessageRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposalHideRequest](ClientProposalHideRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalReadRequest](ClientProposalReadRequest.md) ➡️
