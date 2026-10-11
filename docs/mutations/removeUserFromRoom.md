---
title: "removeUserFromRoom"
kind: "mutation"
gql_name: "removeUserFromRoom"
returns: "Boolean!"
html_id: "mutation-removeUserFromRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeUserFromRoom"
generated_by: "scripts/convert.mjs"
---


# `removeUserFromRoom`

## Description

Removes a user from a room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |
| `userId` | [`ID!`](../scalars/ID.md) | User identifier |
| `orgId` | [`ID!`](../scalars/ID.md) | Organization identifier |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeUserFromRoom(
  $roomId: ID!,
  $userId: ID!,
  $orgId: ID!
) {
  removeUserFromRoom(
    roomId: $roomId,
    userId: $userId,
    orgId: $orgId
  )
}
```

#### Variables

```json
{
  "roomId": "4",
  "userId": 4,
  "orgId": "4"
}
```

#### Response

```json
{"data": {"removeUserFromRoom": false}}
```
