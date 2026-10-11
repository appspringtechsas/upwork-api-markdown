---
title: "Room"
kind: "object"
domain: "Users and teams"
gql_name: "Room"
html_id: "definition-Room"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Room"
generated_by: "scripts/convert.mjs"
---


# `Room` (object)

## Description

Room details

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the room |
| `roomName` | [`String`](../scalars/String.md) | Name of the dash room |
| `organization` | [`CurrentOrganization`](CurrentOrganization.md) | The organization that the room belongs to |
| `creator` | [`RoomUser`](RoomUser.md) | Room creator |
| `createdAtDateTime` | [`String`](../scalars/String.md) | Creation time of the room |
| `public` | [`Boolean`](../scalars/Boolean.md) | If true, then anyone can see and join the room If false, only invited users can join it |
| `topic` | [`String`](../scalars/String.md) | Room topic (a.k.a. subtitle) |
| `owner` | [`RoomUser`](RoomUser.md) | User that owns the room, can be different from creator |
| `numUnread` | [`Int`](../scalars/Int.md) | Count of unread messages |
| `roomFavoriteDateTime` | [`String`](../scalars/String.md) | Time when the room was marked as favorite |
| `favorite` | [`Boolean`](../scalars/Boolean.md) | Flag indicating whether the room was marked as favorite |
| `numUnreadMentions` | [`Int`](../scalars/Int.md) | Count of unread mentions |
| `roomUsers` | [`[RoomUser!]`](RoomUser.md) | List of users in this room |
| `numUsers` | [`Int`](../scalars/Int.md) | Count of users in the room |
| `joinDateTime` | [`String`](../scalars/String.md) | Date time when user joined this room |
| `lastVisitedDateTime` | [`String`](../scalars/String.md) | Date time when user last visited this room The last time when a story was posted in the room or the room was modified |
| `lastReadDateTime` | [`String`](../scalars/String.md) | The last time the room was visited |
| `roomType` | [`RoomType`](../enums/RoomType.md) | Type of room, can be: GROUP, INTERVIEW, ONE_ON_ONE |
| `readOnlyDateTime` | [`String`](../scalars/String.md) | Time when the room was marked as read-only |
| `readOnly` | [`Boolean`](../scalars/Boolean.md) | Flag indicating wheter the room is marked as read-only |
| `blockDateTime` | [`String`](../scalars/String.md) | Time when the room was blocked |
| `blockedBy` | [`RoomUser`](RoomUser.md) | User who blocked the room |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Flag indicating wheter the room is marked as hidden This makes the room invisible but can be unhidden unlike deleted rooms |
| `muted` | [`Boolean!`](../scalars/Boolean.md) | Flag to indicate whether this room is muted for the current user |
| `contractId` | [`ID`](../scalars/ID.md) | Contract identifier associated with the room, if any |
| `contract` | [`Contract`](Contract.md) | Contract associated with the room |
| `contractDetails` | [`ContractDetails`](ContractDetails.md) | ContractDetails of the associated Room |
| `vendorProposal` | [`VendorProposal`](VendorProposal.md) | Vendor Proposal associated with the room |
| `roomNote` | [`String`](../scalars/String.md) | Note associated with the room |
| `roomNotePresent` | [`Boolean!`](../scalars/Boolean.md) | Flag to indicate whether any note is associated with the room |
| `offerIds` | [`[ID!]`](../scalars/ID.md) | Offer Ids associated with the room |
| `recruiters` | [`[GenericUser!]`](GenericUser.md) | Contains information of all involved recruiters, if it's a recruiter room (a.k.a. PSM, a.k.a. Talent Sourcers) |
| `latestStory` | [`RoomStory`](RoomStory.md) | Latest story in the room |
| `story` | [`RoomStory`](RoomStory.md) | Get a particular story of this room |
| `stories` | [`RoomStoryConnection`](RoomStoryConnection.md) | List of stories posted in the room |
| `latestStoryPreRendered` | [`RoomStory`](RoomStory.md) | List of stories in the room |

## Field arguments

### `story`

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |

### `stories`

| Argument | Type | Description |
|---|---|---|
| `filter` | [`StoryFilter`](../inputs/StoryFilter.md) |  |

## Examples

### Example

```json
{
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
  "joinDateTime": "xyz789",
  "lastVisitedDateTime": "xyz789",
  "lastReadDateTime": "abc123",
  "roomType": "ONE_ON_ONE",
  "readOnlyDateTime": "xyz789",
  "readOnly": true,
  "blockDateTime": "abc123",
  "blockedBy": RoomUser,
  "hidden": true,
  "muted": true,
  "contractId": 4,
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
```
