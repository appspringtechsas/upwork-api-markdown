---
title: "RoomStoryEdge"
kind: "object"
domain: "Users and teams"
gql_name: "RoomStoryEdge"
html_id: "definition-RoomStoryEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryEdge"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryEdge` (object)

## Description

Edge type containing a room story node and cursor for pagination

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String`](../scalars/String.md) | Cursor for pagination |
| `node` | [`RoomStory`](RoomStory.md) | Room story data |

## Examples

### Example

```json
{
  "cursor": "abc123",
  "node": RoomStory
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomStoryConnection](RoomStoryConnection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RoomStoryNote](RoomStoryNote.md) ➡️
