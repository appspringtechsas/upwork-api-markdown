---
title: "updateRoomStoryV2"
kind: "mutation"
gql_name: "updateRoomStoryV2"
returns: "UpdateRoomStoryResponse!"
html_id: "mutation-updateRoomStoryV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateRoomStoryV2"
generated_by: "scripts/convert.mjs"
---


# `updateRoomStoryV2`

## Description

Updates an existing message or story in a room

## Required Permissions

"Messaging - Read and Write Access"

## Response

Returns an [`UpdateRoomStoryResponse!`](../types/UpdateRoomStoryResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`RoomStoryUpdateInputV2!`](../inputs/RoomStoryUpdateInputV2.md) | Story update parameters |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateRoomStoryV2($input: RoomStoryUpdateInputV2!) {
  updateRoomStoryV2(input: $input) {
    status
  }
}
```

#### Variables

```json
{"input": RoomStoryUpdateInputV2}
```

#### Response

```json
{
  "data": {
    "updateRoomStoryV2": {
      "status": "abc123"
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateRoomStoryV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [updateOrganization](updateOrganization.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [updateRoomV2](updateRoomV2.md) ➡️
