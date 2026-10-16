---
title: "RoomUser"
kind: "object"
domain: "Users and teams"
gql_name: "RoomUser"
html_id: "definition-RoomUser"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomUser"
generated_by: "scripts/convert.mjs"
---


# `RoomUser` (object)

## Description

User participating in a room with their organization and role

## Fields

| Field | Type | Description |
|---|---|---|
| `user` | [`GenericUser`](GenericUser.md) | User information |
| `organization` | [`GenericOrganization`](GenericOrganization.md) | Organization the user belongs to |
| `role` | [`String`](../scalars/String.md) | User's role in the room (owner, admin, participant) |

## Examples

### Example

```json
{
  "user": GenericUser,
  "organization": GenericOrganization,
  "role": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomUser" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomStoryNote](RoomStoryNote.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Snapshot](Snapshot.md) ➡️
