---
title: "createDirectUploadLinkForRoomMessage"
kind: "mutation"
gql_name: "createDirectUploadLinkForRoomMessage"
returns: "Map!"
html_id: "mutation-createDirectUploadLinkForRoomMessage"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createDirectUploadLinkForRoomMessage"
generated_by: "scripts/convert.mjs"
---


# `createDirectUploadLinkForRoomMessage`

## Description

Returns file upload details for a single room message attachment

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns a [`Map!`](../scalars/Map.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`DirectUploadingFileForRoomMessage!`](../inputs/DirectUploadingFileForRoomMessage.md) | File metadata for the attachment to upload |
| `roomId` | [`String!`](../scalars/String.md) | ID of the target room |

## Examples

### Detailed structure

#### Query

```graphql
mutation createDirectUploadLinkForRoomMessage(
  $input: DirectUploadingFileForRoomMessage!,
  $roomId: String!
) {
  createDirectUploadLinkForRoomMessage(
    input: $input,
    roomId: $roomId
  )
}
```

#### Variables

```json
{
  "input": DirectUploadingFileForRoomMessage,
  "roomId": "abc123"
}
```

#### Response

```json
{"data": {"createDirectUploadLinkForRoomMessage": Map}}
```
