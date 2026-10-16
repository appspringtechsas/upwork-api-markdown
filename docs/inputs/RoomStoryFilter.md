---
title: "RoomStoryFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomStoryFilter"
html_id: "definition-RoomStoryFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryFilter"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryFilter` (input object)

## Description

Filter for room stories

## Fields

| Field | Type | Description |
|---|---|---|
| `roomId_eq` | [`ID!`](../scalars/ID.md) | Room identifier (required) |
| `storyFilter` | [`StoryFilter`](StoryFilter.md) | Additional story filter options |

## Examples

### Example

```json
{"roomId_eq": 4, "storyFilter": StoryFilter}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [RoomStoryFileAttachmentInput](RoomStoryFileAttachmentInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RoomStoryUpdateInputV2](RoomStoryUpdateInputV2.md) ➡️
