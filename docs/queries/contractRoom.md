---
title: "contractRoom"
kind: "query"
gql_name: "contractRoom"
returns: "Room"
html_id: "query-contractRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractRoom"
generated_by: "scripts/convert.mjs"
---


# `contractRoom`

## Description

Returns the interview room associated with the given contractId

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`Room`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |

## Examples

### Detailed structure

#### Query

```graphql
query contractRoom($contractId: ID!) {
  contractRoom(contractId: $contractId) {
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
{"contractId": 4}
```

#### Response

```json
{
  "data": {
    "contractRoom": {
      "id": 4,
      "roomName": "abc123",
      "organization": CurrentOrganization,
      "creator": RoomUser,
      "createdAtDateTime": "abc123",
      "public": false,
      "topic": "xyz789",
      "owner": RoomUser,
      "numUnread": 987,
      "roomFavoriteDateTime": "xyz789",
      "favorite": false,
      "numUnreadMentions": 123,
      "roomUsers": [RoomUser],
      "numUsers": 123,
      "joinDateTime": "abc123",
      "lastVisitedDateTime": "abc123",
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
      "roomNote": "xyz789",
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

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractRoom" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [companySelector](companySelector.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [freelancerProfileByProfileKey](freelancerProfileByProfileKey.md) ➡️
