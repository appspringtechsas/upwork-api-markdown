---
title: "updateRoomV2"
kind: "mutation"
gql_name: "updateRoomV2"
returns: "Room!"
html_id: "mutation-updateRoomV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateRoomV2"
generated_by: "scripts/convert.mjs"
---


# `updateRoomV2`

## Description

Updates an existing room and returns the updated room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`RoomUpdateInputV2`](../inputs/RoomUpdateInputV2.md) | Room update parameters |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateRoomV2($input: RoomUpdateInputV2) {
  updateRoomV2(input: $input) {
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
{"input": RoomUpdateInputV2}
```

#### Response

```json
{
  "data": {
    "updateRoomV2": {
      "id": 4,
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "xyz789",
      "public": true,
      "topic": "xyz789",
      "owner": RoomUser,
      "numUnread": 123,
      "roomFavoriteDateTime": "abc123",
      "favorite": true,
      "numUnreadMentions": 123,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "xyz789",
      "lastVisitedDateTime": "xyz789",
      "lastReadDateTime": "xyz789",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "xyz789",
      "readOnly": false,
      "blockDateTime": "xyz789",
      "blockedBy": RoomUser,
      "hidden": false,
      "muted": false,
      "contractId": 4,
      "contract": Contract,
      "contractDetails": ContractDetails,
      "vendorProposal": VendorProposal,
      "roomNote": "abc123",
      "roomNotePresent": false,
      "offerIds": ["4"],
      "recruiters": [GenericUser],
      "latestStory": RoomStory,
      "story": RoomStory,
      "stories": RoomStoryConnection,
      "latestStoryPreRendered": RoomStory
    }
  }
}
```
