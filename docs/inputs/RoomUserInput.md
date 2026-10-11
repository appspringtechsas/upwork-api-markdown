---
title: "RoomUserInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomUserInput"
html_id: "definition-RoomUserInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomUserInput"
generated_by: "scripts/convert.mjs"
---


# `RoomUserInput` (input object)

## Description

Details of the user to be added in the Room

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID!`](../scalars/ID.md) | ID of the user |
| `organizationId` | [`ID!`](../scalars/ID.md) | ID of the organization user belongs to |
| `role` | [`String`](../scalars/String.md) | Role of the user in the room. Valid values are owner, admin, and participant. Only Current owner can change the room to contain a new owner. Admins can change the room name and topic, and invite new users. |
| `inviteEmail` | [`String`](../scalars/String.md) | Invite someone who's not yet an Upwork member by email |

## Examples

### Example

```json
{
  "userId": "4",
  "organizationId": 4,
  "role": "xyz789",
  "inviteEmail": "xyz789"
}
```
