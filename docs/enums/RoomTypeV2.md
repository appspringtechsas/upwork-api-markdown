---
title: "RoomTypeV2"
kind: "enum"
domain: "Users and teams"
gql_name: "RoomTypeV2"
html_id: "definition-RoomTypeV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomTypeV2"
generated_by: "scripts/convert.mjs"
---


# `RoomTypeV2` (enum)

## Values

| Values | Description |
|---|---|
| `ONE_ON_ONE` | Designed for direct chat between two users (can't add others and can never leave the room) |
| `GROUP` | A group room is a regular room that is created on a particular user's request. The user can invite any number of users from their address book, and they can even invite users via email addresses to join the room. Users can be invited with either Admin or Participant roles. Admins can change the name of the room, the topic, invite new users, etc. The creator of the room is, by default, assigned the Owner role. |

## Examples

### Example

```graphql
"ONE_ON_ONE"
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomTypeV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomTypeFilter](RoomTypeFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserPermissionAccess](UserPermissionAccess.md) ➡️
