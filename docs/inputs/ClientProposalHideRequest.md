---
title: "ClientProposalHideRequest"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalHideRequest"
html_id: "definition-ClientProposalHideRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalHideRequest"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalHideRequest` (input object)

## Description

Client proposal hide request

## Fields

| Field | Type | Description |
|---|---|---|
| `proposalId` | [`ID!`](../scalars/ID.md) | Client proposal identifier |
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier of the proposal |
| `hide` | [`Boolean!`](../scalars/Boolean.md) | Whether to hide the proposal |
| `hideReason` | [`String`](../scalars/String.md) | Reason for hiding the proposal |
| `hideByClientReasonId` | [`ID`](../scalars/ID.md) | Hide by client reason identifier |

## Examples

### Example

```json
{
  "proposalId": "4",
  "jobPostingId": "4",
  "hide": false,
  "hideReason": "abc123",
  "hideByClientReasonId": 4
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalHideRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposalFilter](ClientProposalFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalMessageRequest](ClientProposalMessageRequest.md) ➡️
