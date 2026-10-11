---
title: "removeRoom"
kind: "mutation"
gql_name: "removeRoom"
returns: "String!"
html_id: "mutation-removeRoom"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-removeRoom"
generated_by: "scripts/convert.mjs"
---


# `removeRoom`

## Description

Removes a room permanently

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`String!`](../scalars/String.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `roomId` | [`ID!`](../scalars/ID.md) | Room identifier |

## Examples

### Detailed structure

#### Query

```graphql
mutation removeRoom($roomId: ID!) {
  removeRoom(roomId: $roomId)
}
```

#### Variables

```json
{"roomId": 4}
```

#### Response

```json
{"data": {"removeRoom": "abc123"}}
```
