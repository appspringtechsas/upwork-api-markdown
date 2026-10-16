---
title: "roomStory"
kind: "query"
gql_name: "roomStory"
returns: "RoomStory"
html_id: "query-roomStory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-roomStory"
generated_by: "scripts/convert.mjs"
---


# `roomStory`

## Description

Returns a particular story from a room

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`RoomStory`](../types/RoomStory.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |
| `storyId` | [`ID!`](../scalars/ID.md) | Story identifier |

## Examples

### Detailed structure

#### Query

```graphql
query roomStory(
  $roomId: ID!,
  $storyId: ID!
) {
  roomStory(
    roomId: $roomId,
    storyId: $storyId
  ) {
    id
    room {
      ...RoomFragment
    }
    createdDateTime
    updatedDateTime
    user {
      ...GenericUserFragment
    }
    message
    organization {
      ...GenericOrganizationFragment
    }
    roomStoryNote {
      ...RoomStoryNoteFragment
    }
    attachments {
      ...MessageAttachmentsFragment
    }
  }
}
```

#### Variables

```json
{"roomId": "4", "storyId": 4}
```

#### Response

```json
{
  "data": {
    "roomStory": {
      "id": 4,
      "room": Room,
      "createdDateTime": "abc123",
      "updatedDateTime": "xyz789",
      "user": GenericUser,
      "message": "xyz789",
      "organization": GenericOrganization,
      "roomStoryNote": RoomStoryNote,
      "attachments": [MessageAttachments]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-roomStory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [roomStories](roomStories.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [snapshotsByContractId](snapshotsByContractId.md) ➡️
