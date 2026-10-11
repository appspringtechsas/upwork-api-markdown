---
title: "RoomStoryCreateInputV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomStoryCreateInputV2"
html_id: "definition-RoomStoryCreateInputV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryCreateInputV2"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryCreateInputV2` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `roomId` | [`ID`](../scalars/ID.md) | ID of the target room |
| `message` | [`String`](../scalars/String.md) | Message to be added in the room |
| `fileAttachments` | [`[RoomStoryFileAttachmentInput!]`](RoomStoryFileAttachmentInput.md) | File attachment details; preferred over fileUids for correct display and download |

## Examples

### Example

```json
{
  "roomId": 4,
  "message": "abc123",
  "fileAttachments": [RoomStoryFileAttachmentInput]
}
```
