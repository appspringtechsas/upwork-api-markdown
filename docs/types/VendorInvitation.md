---
title: "VendorInvitation"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitation"
html_id: "definition-VendorInvitation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitation"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitation` (object)

## Description

Details about Invitation for vendor side

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the invitation |
| `client` | [`VendorInvitationParticipant`](VendorInvitationParticipant.md) | Info of client who sent the invitation |
| `freelancer` | [`VendorInvitationParticipant`](VendorInvitationParticipant.md) | Info of freelancer to whom invite was sent |
| `jobPosting` | [`MarketplaceJobPosting!`](MarketplaceJobPosting.md) | Associated job posting with the invitation |
| `invitationLetter` | [`String`](../scalars/String.md) | Invitation letter sent by client |
| `inviteAttempt` | [`Int`](../scalars/Int.md) | invitation attempt |
| `context` | [`VendorInvitationContext`](../enums/VendorInvitationContext.md) | Invite sent to Freelancer or Agency |
| `statusDetails` | [`VendorInvitationStatusDetails`](VendorInvitationStatusDetails.md) | Status details of the invitation |
| `acceptanceDetails` | [`VendorInvitationAcceptanceDetails`](VendorInvitationAcceptanceDetails.md) | Details related to acceptance of the invitation |
| `auditDetails` | [`VendorInvitationAuditDetails`](VendorInvitationAuditDetails.md) | audit details of this invitation |
| `annotations` | [`[VendorInvitationAnnotations!]`](../enums/VendorInvitationAnnotations.md) | Annotations associated with the invitation |

## Examples

### Example

```json
{
  "id": "4",
  "client": VendorInvitationParticipant,
  "freelancer": VendorInvitationParticipant,
  "jobPosting": MarketplaceJobPosting,
  "invitationLetter": "xyz789",
  "inviteAttempt": 987,
  "context": "Freelancer",
  "statusDetails": VendorInvitationStatusDetails,
  "acceptanceDetails": VendorInvitationAcceptanceDetails,
  "auditDetails": VendorInvitationAuditDetails,
  "annotations": ["OnHold"]
}
```
