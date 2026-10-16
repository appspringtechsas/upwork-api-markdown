---
title: "VendorInvitationParticipant"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationParticipant"
html_id: "definition-VendorInvitationParticipant"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationParticipant"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationParticipant` (object)

## Description

Details about the participant of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`GenericUser`](GenericUser.md) | User/Participant |
| `parentOrganization` | [`GenericOrganization`](GenericOrganization.md) | Parent Organization of the participant |
| `subOrganization` | [`GenericOrganization`](GenericOrganization.md) | Sub Organization of the participant |
| `type` | [`VendorInvitationActor`](../enums/VendorInvitationActor.md) | Whether the participant is client, vendor, system or OBO |

## Examples

### Example

```json
{
  "user": GenericUser,
  "parentOrganization": GenericOrganization,
  "subOrganization": GenericOrganization,
  "type": "Client"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationParticipant" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [VendorInvitationEdge](VendorInvitationEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VendorInvitationStatusDetails](VendorInvitationStatusDetails.md) ➡️
