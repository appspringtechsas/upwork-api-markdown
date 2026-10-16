---
title: "RoomUpdateInputV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomUpdateInputV2"
html_id: "definition-RoomUpdateInputV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomUpdateInputV2"
generated_by: "scripts/convert.mjs"
---


# `RoomUpdateInputV2` (input object)

## Description

Input required to update a room

## Fields

| Field | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | ID of the target room |
| `roomName` | [`String`](../scalars/String.md) | Updated name of the room |
| `topic` | [`String`](../scalars/String.md) | Updated topic name of the room |
| `reason` | [`String`](../scalars/String.md) | Optional note to store reason for the update |
| `readOnly` | [`Boolean`](../scalars/Boolean.md) | Make the room archived |

## Examples

### Example

```json
{
  "roomId": "4",
  "roomName": "abc123",
  "topic": "abc123",
  "reason": "abc123",
  "readOnly": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomUpdateInputV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomStoryUpdateInputV2](RoomStoryUpdateInputV2.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RoomUserInput](RoomUserInput.md) ➡️
