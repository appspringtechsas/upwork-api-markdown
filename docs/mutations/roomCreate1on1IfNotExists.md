---
title: "roomCreate1on1IfNotExists"
kind: "mutation"
gql_name: "roomCreate1on1IfNotExists"
returns: "Room!"
html_id: "mutation-roomCreate1on1IfNotExists"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-roomCreate1on1IfNotExists"
generated_by: "scripts/convert.mjs"
---


# `roomCreate1on1IfNotExists`

## Description

Creates a one-on-one room if it does not exist and returns the room information

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `userId` | [`ID!`](../scalars/ID.md) | Target user identifier |
| `orgId` | [`ID!`](../scalars/ID.md) | Organization identifier |

## Examples

### Detailed structure

#### Query

```graphql
mutation roomCreate1on1IfNotExists(
  $userId: ID!,
  $orgId: ID!
) {
  roomCreate1on1IfNotExists(
    userId: $userId,
    orgId: $orgId
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
  "orgId": "4"
}
```

#### Response

```json
{
  "data": {
    "roomCreate1on1IfNotExists": {
      "id": "4",
      "roomName": "xyz789",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "xyz789",
      "public": true,
      "topic": "abc123",
      "owner": RoomUser,
      "numUnread": 987,
      "roomFavoriteDateTime": "abc123",
      "favorite": true,
      "numUnreadMentions": 987,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "abc123",
      "lastVisitedDateTime": "xyz789",
      "lastReadDateTime": "abc123",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "abc123",
      "readOnly": true,
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

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-roomCreate1on1IfNotExists" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [removeUserFromRoom](removeUserFromRoom.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [unarchiveTeamActivity](unarchiveTeamActivity.md) ➡️
