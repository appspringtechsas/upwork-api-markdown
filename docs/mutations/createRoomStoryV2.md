---
title: "createRoomStoryV2"
kind: "mutation"
gql_name: "createRoomStoryV2"
returns: "RoomStory!"
html_id: "mutation-createRoomStoryV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createRoomStoryV2"
generated_by: "scripts/convert.mjs"
---


# `createRoomStoryV2`

## Description

Creates a new message or story in an existing room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`RoomStory!`](../types/RoomStory.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`RoomStoryCreateInputV2!`](../inputs/RoomStoryCreateInputV2.md) | Story creation parameters |

## Examples

### Detailed structure

#### Query

```graphql
mutation createRoomStoryV2($input: RoomStoryCreateInputV2!) {
  createRoomStoryV2(input: $input) {
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
{"input": RoomStoryCreateInputV2}
```

#### Response

```json
{
  "data": {
    "createRoomStoryV2": {
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
  }
}
```

### Real-life example

#### Query

```graphql
mutation SendRoomMessage($roomId: ID!, $message: String!) {
  createRoomStoryV2(input: { roomId: $roomId, message: $message }) {
    id
    message
  }
}
```

#### Variables

```json
{
  "roomId": "room_d4ad627e8343569efaa2ee76260170a3",
  "message": "Thanks for the update — API validation test message."
}
```

#### Response

```json
{
  "data": {
    "createRoomStoryV2": {
      "id": "story_5c70df12f0ae7ed948810d3d62a8f36e",
      "message": "API validation ping 2026-05-19T22:44:06.510Z"
    }
  }
}
```
