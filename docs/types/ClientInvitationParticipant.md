---
title: "ClientInvitationParticipant"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationParticipant"
html_id: "definition-ClientInvitationParticipant"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationParticipant"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationParticipant` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID`](../scalars/ID.md) |  |
| `parentOrganizationId` | [`ID`](../scalars/ID.md) | Parent Organization id of the participant |
| `subOrganizationId` | [`ID`](../scalars/ID.md) | Sub Organization id of the participant |
| `type` | [`ClientInvitationActor`](../enums/ClientInvitationActor.md) | Whether the participant is client, vendor, system or OBO |

## Examples

### Example

```json
{
  "userId": 4,
  "parentOrganizationId": 4,
  "subOrganizationId": "4",
  "type": "Client"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationParticipant" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientInvitationEdge](ClientInvitationEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientInvitationStatusDetails](ClientInvitationStatusDetails.md) ➡️
