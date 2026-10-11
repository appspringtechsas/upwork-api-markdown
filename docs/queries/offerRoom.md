---
title: "offerRoom"
kind: "query"
gql_name: "offerRoom"
returns: "Room"
html_id: "query-offerRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-offerRoom"
generated_by: "scripts/convert.mjs"
---


# `offerRoom`

## Description

Returns room associated with the given offerId

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`Room`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `offerId` | [`ID!`](../scalars/ID.md) | Offer identifier |

## Examples

### Detailed structure

#### Query

```graphql
query offerRoom($offerId: ID!) {
  offerRoom(offerId: $offerId) {
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
{"offerId": "4"}
```

#### Response

```json
{
  "data": {
    "offerRoom": {
      "id": "4",
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "abc123",
      "public": false,
      "topic": "xyz789",
      "owner": RoomUser,
      "numUnread": 987,
      "roomFavoriteDateTime": "abc123",
      "favorite": true,
      "numUnreadMentions": 123,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "abc123",
      "lastVisitedDateTime": "xyz789",
      "lastReadDateTime": "xyz789",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "xyz789",
      "readOnly": false,
      "blockDateTime": "abc123",
      "blockedBy": RoomUser,
      "hidden": false,
      "muted": false,
      "contractId": "4",
      "contract": Contract,
      "contractDetails": ContractDetails,
      "vendorProposal": VendorProposal,
      "roomNote": "xyz789",
      "roomNotePresent": true,
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
