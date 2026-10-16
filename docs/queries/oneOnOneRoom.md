---
title: "oneOnOneRoom"
kind: "query"
gql_name: "oneOnOneRoom"
returns: "Room"
html_id: "query-oneOnOneRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-oneOnOneRoom"
generated_by: "scripts/convert.mjs"
---


# `oneOnOneRoom`

## Description

Returns one-on-one room between the current user and specified user within an organization

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`Room`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `userId` | [`ID!`](../scalars/ID.md) | Target user identifier |
| `organizationId` | [`ID!`](../scalars/ID.md) | Organization identifier |

## Examples

### Detailed structure

#### Query

```graphql
query oneOnOneRoom(
  $userId: ID!,
  $organizationId: ID!
) {
  oneOnOneRoom(
    userId: $userId,
    organizationId: $organizationId
  ) {
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
{
  "userId": "4",
  "organizationId": "4"
}
```

#### Response

```json
{
  "data": {
    "oneOnOneRoom": {
      "id": "4",
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "abc123",
      "public": false,
      "topic": "xyz789",
      "owner": RoomUser,
      "numUnread": 123,
      "roomFavoriteDateTime": "abc123",
      "favorite": false,
      "numUnreadMentions": 987,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "xyz789",
      "lastVisitedDateTime": "abc123",
      "lastReadDateTime": "abc123",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "abc123",
      "readOnly": true,
      "blockDateTime": "abc123",
      "blockedBy": RoomUser,
      "hidden": false,
      "muted": false,
      "contractId": "4",
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

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-oneOnOneRoom" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [offerRoom](offerRoom.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [organization](organization.md) ➡️
