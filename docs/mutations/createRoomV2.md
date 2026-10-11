---
title: "createRoomV2"
kind: "mutation"
gql_name: "createRoomV2"
returns: "Room!"
html_id: "mutation-createRoomV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createRoomV2"
generated_by: "scripts/convert.mjs"
---


# `createRoomV2`

## Description

Creates a new room and returns its information

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`RoomCreateInputV2!`](../inputs/RoomCreateInputV2.md) | Room creation parameters |

## Examples

### Detailed structure

#### Query

```graphql
mutation createRoomV2($input: RoomCreateInputV2!) {
  createRoomV2(input: $input) {
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
{"input": RoomCreateInputV2}
```

#### Response

```json
{
  "data": {
    "createRoomV2": {
      "id": 4,
      "roomName": "abc123",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "xyz789",
      "public": true,
      "topic": "abc123",
      "owner": RoomUser,
      "numUnread": 123,
      "roomFavoriteDateTime": "xyz789",
      "favorite": false,
      "numUnreadMentions": 123,
      "roomUsers": [RoomUser],
      "numUsers": 123,
      "joinDateTime": "xyz789",
      "lastVisitedDateTime": "abc123",
      "lastReadDateTime": "xyz789",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "xyz789",
      "readOnly": true,
      "blockDateTime": "xyz789",
      "blockedBy": RoomUser,
      "hidden": false,
      "muted": false,
      "contractId": 4,
      "contract": Contract,
      "contractDetails": ContractDetails,
      "vendorProposal": VendorProposal,
      "roomNote": "xyz789",
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
