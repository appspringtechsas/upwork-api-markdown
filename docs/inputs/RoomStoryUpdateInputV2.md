---
title: "RoomStoryUpdateInputV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomStoryUpdateInputV2"
html_id: "definition-RoomStoryUpdateInputV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryUpdateInputV2"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryUpdateInputV2` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `storyId` | [`ID!`](../scalars/ID.md) | Id of the story to be updated |
| `roomId` | [`ID!`](../scalars/ID.md) | Id of the room where the story is associated |
| `message` | [`String`](../scalars/String.md) | Updated message for the story |

## Examples

### Example

```json
{
  "storyId": 4,
  "roomId": "4",
  "message": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryUpdateInputV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomStoryFilter](RoomStoryFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RoomUpdateInputV2](RoomUpdateInputV2.md) ➡️
