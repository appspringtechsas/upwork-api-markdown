---
title: "VendorInvitationAcceptanceContext"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationAcceptanceContext"
html_id: "definition-VendorInvitationAcceptanceContext"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationAcceptanceContext"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationAcceptanceContext` (object)

## Description

Details related to acceptance of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `organization` | [`GenericOrganization!`](GenericOrganization.md) | Organization associated with the acceptance context |
| `context` | [`VendorInvitationContext`](../enums/VendorInvitationContext.md) | Context indicating whether invite was sent to Freelancer or Agency |
| `acceptedBy` | [`GenericUser!`](GenericUser.md) | User who accepted the invitation |
| `acceptedDateTime` | [`String!`](../scalars/String.md) | Date and time when the invitation was accepted |

## Examples

### Example

```json
{
  "organization": GenericOrganization,
  "context": "Freelancer",
  "acceptedBy": GenericUser,
  "acceptedDateTime": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationAcceptanceContext" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorInvitation](VendorInvitation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorInvitationAcceptanceDetails](VendorInvitationAcceptanceDetails.md) ➡️
