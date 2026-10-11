---
title: "RoomCreateInputV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "RoomCreateInputV2"
html_id: "definition-RoomCreateInputV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomCreateInputV2"
generated_by: "scripts/convert.mjs"
---


# `RoomCreateInputV2` (input object)

## Description

Input required to create a new room

## Fields

| Field | Type | Description |
|---|---|---|
| `roomName` | [`String`](../scalars/String.md) | Name of the new room, applied for group rooms |
| `topic` | [`String`](../scalars/String.md) | Topic of the new room |
| `users` | [`[RoomUserInput]`](RoomUserInput.md) | Users to be added in the room |
| `roomType` | [`RoomTypeV2!`](../enums/RoomTypeV2.md) | Type of the room |

## Examples

### Example

```json
{
  "roomName": "xyz789",
  "topic": "xyz789",
  "users": [RoomUserInput],
  "roomType": "ONE_ON_ONE"
}
```
