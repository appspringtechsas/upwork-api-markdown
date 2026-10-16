---
title: "proposalRoom"
kind: "query"
gql_name: "proposalRoom"
returns: "Room!"
html_id: "query-proposalRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-proposalRoom"
generated_by: "scripts/convert.mjs"
---


# `proposalRoom`

## Description

Returns room associated with a vendor proposal

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`Room!`](../types/Room.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `vendorProposalId` | [`ID!`](../scalars/ID.md) | Vendor proposal identifier |

## Examples

### Detailed structure

#### Query

```graphql
query proposalRoom($vendorProposalId: ID!) {
  proposalRoom(vendorProposalId: $vendorProposalId) {
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
{"vendorProposalId": "4"}
```

#### Response

```json
{
  "data": {
    "proposalRoom": {
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
      "favorite": false,
      "numUnreadMentions": 123,
      "roomUsers": [RoomUser],
      "numUsers": 987,
      "joinDateTime": "abc123",
      "lastVisitedDateTime": "xyz789",
      "lastReadDateTime": "xyz789",
      "roomType": "ONE_ON_ONE",
      "readOnlyDateTime": "abc123",
      "readOnly": false,
      "blockDateTime": "abc123",
      "blockedBy": RoomUser,
      "hidden": true,
      "muted": true,
      "contractId": "4",
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

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-proposalRoom" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [profileActivityMetricsLastUpdated](profileActivityMetricsLastUpdated.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [publicRooms](publicRooms.md) ➡️
