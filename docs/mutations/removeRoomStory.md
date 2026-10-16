---
title: "removeRoomStory"
kind: "mutation"
gql_name: "removeRoomStory"
returns: "String!"
html_id: "mutation-removeRoomStory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeRoomStory"
generated_by: "scripts/convert.mjs"
---


# `removeRoomStory`

## Description

Removes a story from a room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`String!`](../scalars/String.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |
| `storyId` | [`ID!`](../scalars/ID.md) | Story identifier |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeRoomStory(
  $roomId: ID!,
  $storyId: ID!
) {
  removeRoomStory(
    roomId: $roomId,
    storyId: $storyId
  )
}
```

#### Variables

```json
{
  "roomId": "4",
  "storyId": "4"
}
```

#### Response

```json
{"data": {"removeRoomStory": "abc123"}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeRoomStory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [removeRoom](removeRoom.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [removeUserFromRoom](removeUserFromRoom.md) ➡️
