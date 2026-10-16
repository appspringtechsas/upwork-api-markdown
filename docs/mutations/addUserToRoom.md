---
title: "addUserToRoom"
kind: "mutation"
gql_name: "addUserToRoom"
returns: "Boolean!"
html_id: "mutation-addUserToRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addUserToRoom"
generated_by: "scripts/convert.mjs"
---


# `addUserToRoom`

## Description

Adds users to an existing room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |
| `roomUsers` | [`[RoomUserInput!]!`](../inputs/RoomUserInput.md) | List of users to add |

## Examples

### Detailed structure

#### Query

```graphql
mutation addUserToRoom(
  $roomId: ID!,
  $roomUsers: [RoomUserInput!]!
) {
  addUserToRoom(
    roomId: $roomId,
    roomUsers: $roomUsers
  )
}
```

#### Variables

```json
{
  "roomId": "4",
  "roomUsers": [RoomUserInput]
}
```

#### Response

```json
{"data": {"addUserToRoom": true}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-addUserToRoom" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [addTeamActivity](addTeamActivity.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [archiveRoom](archiveRoom.md) ➡️
