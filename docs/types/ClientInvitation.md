---
title: "ClientInvitation"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitation"
html_id: "definition-ClientInvitation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitation"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitation` (object)

## Description

Details about Invitation for client side

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the invitation |
| `client` | [`ClientInvitationParticipant`](ClientInvitationParticipant.md) | Info of client who sent the invitation |
| `freelancer` | [`ClientInvitationParticipant`](ClientInvitationParticipant.md) | Info of freelancer to whom invite was sent |
| `jobPosting` | [`JobPosting!`](JobPosting.md) | Associated job posting with the invitation |
| `invitationLetter` | [`String`](../scalars/String.md) | Invitation letter sent by client |
| `inviteAttempt` | [`Int`](../scalars/Int.md) | invitation attempt |
| `context` | [`ClientInvitationContext`](../enums/ClientInvitationContext.md) | Invite sent to Freelancer or Agency |
| `statusDetails` | [`ClientInvitationStatusDetails`](ClientInvitationStatusDetails.md) | Status details of the invitation |
| `acceptanceDetails` | [`ClientInvitationAcceptanceDetails`](ClientInvitationAcceptanceDetails.md) | Details related to acceptance of the invitation |
| `additionalInfo` | [`ClientInvitationAdditionalInfo`](ClientInvitationAdditionalInfo.md) | additional information about the invitation settings |

## Examples

### Example

```json
{
  "id": "4",
  "client": ClientInvitationParticipant,
  "freelancer": ClientInvitationParticipant,
  "jobPosting": JobPosting,
  "invitationLetter": "abc123",
  "inviteAttempt": 123,
  "context": "Freelancer",
  "statusDetails": ClientInvitationStatusDetails,
  "acceptanceDetails": ClientInvitationAcceptanceDetails,
  "additionalInfo": ClientInvitationAdditionalInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [StringMapOccupation](StringMapOccupation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientInvitationAcceptanceContext](ClientInvitationAcceptanceContext.md) ➡️
