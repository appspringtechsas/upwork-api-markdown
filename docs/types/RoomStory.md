---
title: "RoomStory"
kind: "object"
domain: "Users and teams"
gql_name: "RoomStory"
html_id: "definition-RoomStory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStory"
generated_by: "scripts/convert.mjs"
---


# `RoomStory` (object)

## Description

Message or event posted in a room

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the story |
| `room` | [`Room!`](Room.md) | Information about the associated room |
| `createdDateTime` | [`String!`](../scalars/String.md) | Date time when the story has been created |
| `updatedDateTime` | [`String!`](../scalars/String.md) | Date time when the story has been last updated |
| `user` | [`GenericUser`](GenericUser.md) | Room user who created this story |
| `message` | [`String`](../scalars/String.md) | Message associated with the story |
| `organization` | [`GenericOrganization`](GenericOrganization.md) | Organization context which the story was posted under. |
| `roomStoryNote` | [`RoomStoryNote`](RoomStoryNote.md) | Returns any notes or flags attached to the story, e.g. if it's marked as favorite |
| `attachments` | [`[MessageAttachments]`](MessageAttachments.md) | Message attachments |

## Examples

### Example

```json
{
  "id": 4,
  "room": Room,
  "createdDateTime": "xyz789",
  "updatedDateTime": "abc123",
  "user": GenericUser,
  "message": "xyz789",
  "organization": GenericOrganization,
  "roomStoryNote": RoomStoryNote,
  "attachments": [MessageAttachments]
}
```
