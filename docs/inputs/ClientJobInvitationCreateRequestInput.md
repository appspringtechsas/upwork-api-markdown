---
title: "ClientJobInvitationCreateRequestInput"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientJobInvitationCreateRequestInput"
html_id: "definition-ClientJobInvitationCreateRequestInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientJobInvitationCreateRequestInput"
generated_by: "scripts/convert.mjs"
---


# `ClientJobInvitationCreateRequestInput` (input object)

## Description

Input for creating client job invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `jobPostingId` | [`ID!`](../scalars/ID.md) | ID of the associated job |
| `invitationLetter` | [`String`](../scalars/String.md) | Invitation letter from client |
| `freelancerId` | [`ID!`](../scalars/ID.md) | Freelancer ID |

## Examples

### Example

```json
{
  "jobPostingId": "4",
  "invitationLetter": "xyz789",
  "freelancerId": 4
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientJobInvitationCreateRequestInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientInvitationFilter](ClientInvitationFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalDeclineRequest](ClientProposalDeclineRequest.md) ➡️
