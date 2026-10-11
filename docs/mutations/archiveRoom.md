---
title: "archiveRoom"
kind: "mutation"
gql_name: "archiveRoom"
returns: "Room!"
html_id: "mutation-archiveRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-archiveRoom"
generated_by: "scripts/convert.mjs"
---


# `archiveRoom`

## Description

Archives an existing room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |

## Examples

### Detailed structure

#### Query

```graphql
mutation archiveRoom($roomId: ID!) {
  archiveRoom(roomId: $roomId) {
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
{"roomId": 4}
```

#### Response

```json
{
  "data": {
    "archiveRoom": {
      "id": "4",
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "xyz789",
      "public": true,
      "topic": "abc123",
      "owner": RoomUser,
      "numUnread": 123,
      "roomFavoriteDateTime": "xyz789",
      "favorite": false,
      "numUnreadMentions": 987,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "xyz789",
      "lastVisitedDateTime": "abc123",
      "lastReadDateTime": "xyz789",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "abc123",
      "readOnly": true,
      "blockDateTime": "abc123",
      "blockedBy": RoomUser,
      "hidden": true,
      "muted": false,
      "contractId": 4,
      "contract": Contract,
      "contractDetails": ContractDetails,
      "vendorProposal": VendorProposal,
      "roomNote": "abc123",
      "roomNotePresent": false,
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
