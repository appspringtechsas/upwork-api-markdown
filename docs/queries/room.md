---
title: "room"
kind: "query"
gql_name: "room"
returns: "Room!"
html_id: "query-room"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-room"
generated_by: "scripts/convert.mjs"
---


# `room`

## Description

Details of a room

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Room identifier |

## Examples

### Detailed structure

#### Query

```graphql
query room($id: ID!) {
  room(id: $id) {
    id
    roomName
    organization {
      ...CurrentOrganizationFragment
    }
    creator {
      ...RoomUserFragment
    }
    createdAtDateTime
    public
    topic
    owner {
      ...RoomUserFragment
    }
    numUnread
    roomFavoriteDateTime
    favorite
    numUnreadMentions
    roomUsers {
      ...RoomUserFragment
    }
    numUsers
    joinDateTime
    lastVisitedDateTime
    lastReadDateTime
    roomType
    readOnlyDateTime
    readOnly
    blockDateTime
    blockedBy {
      ...RoomUserFragment
    }
    hidden
    muted
    contractId
    contract {
      ...ContractFragment
    }
    contractDetails {
      ...ContractDetailsFragment
    }
    vendorProposal {
      ...VendorProposalFragment
    }
    roomNote
    roomNotePresent
    offerIds
    recruiters {
      ...GenericUserFragment
    }
    latestStory {
      ...RoomStoryFragment
    }
    story {
      ...RoomStoryFragment
    }
    stories {
      ...RoomStoryConnectionFragment
    }
    latestStoryPreRendered {
      ...RoomStoryFragment
    }
  }
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{
  "data": {
    "room": {
      "id": "4",
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "xyz789",
      "public": false,
      "topic": "xyz789",
      "owner": RoomUser,
      "numUnread": 987,
      "roomFavoriteDateTime": "xyz789",
      "favorite": true,
      "numUnreadMentions": 987,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "xyz789",
      "lastVisitedDateTime": "abc123",
      "lastReadDateTime": "abc123",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "abc123",
      "readOnly": false,
      "blockDateTime": "abc123",
      "blockedBy": RoomUser,
      "hidden": false,
      "muted": false,
      "contractId": 4,
      "contract": Contract,
      "contractDetails": ContractDetails,
      "vendorProposal": VendorProposal,
      "roomNote": "abc123",
      "roomNotePresent": true,
      "offerIds": [4],
      "recruiters": [GenericUser],
      "latestStory": RoomStory,
      "story": RoomStory,
      "stories": RoomStoryConnection,
      "latestStoryPreRendered": RoomStory
    }
  }
}
```

### Real-life example

#### Query

```graphql
query RoomDetails($roomId: ID!) {
  room(id: $roomId) {
    id
    roomName
    topic
    public
    createdAtDateTime
    numUnread
  }
}
```

#### Variables

```json
{"roomId": "room_d4ad627e8343569efaa2ee76260170a3"}
```

#### Response

```json
{
  "data": {
    "room": {
      "id": "room_d4ad627e8343569efaa2ee76260170a3",
      "roomName": "Dudley Lindgen",
      "topic": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
      "public": false,
      "createdAtDateTime": "2026-05-19T22:24:18+0000",
      "numUnread": 0
    }
  }
}
```

## Used in sample flows

- Step **2** (Open Room) in [Sample Messaging Flow](../operations/examples/messaging.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-room" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [publicRooms](publicRooms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [roomList](roomList.md) ➡️
