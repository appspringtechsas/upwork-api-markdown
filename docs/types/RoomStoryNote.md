---
title: "RoomStoryNote"
kind: "object"
domain: "Users and teams"
gql_name: "RoomStoryNote"
html_id: "definition-RoomStoryNote"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryNote"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryNote` (object)

## Description

Notes/Flags attached to the story by the user

## Fields

| Field | Type | Description |
|---|---|---|
| `favorite` | [`Boolean!`](../scalars/Boolean.md) | Whether the story is marked as favorite |
| `abuseType` | [`RoomStoryAbuseType`](../enums/RoomStoryAbuseType.md) | Type of abuse reported for this story |
| `whitelisted` | [`Boolean!`](../scalars/Boolean.md) | Whether the story is whitelisted despite abuse reports |
| `abuseDetails` | [`String`](../scalars/String.md) | Additional details about the abuse report |

## Examples

### Example

```json
{
  "favorite": false,
  "abuseType": "NONE",
  "whitelisted": true,
  "abuseDetails": "abc123"
}
```
