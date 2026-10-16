---
title: "publicRooms"
kind: "query"
gql_name: "publicRooms"
returns: "RoomConnection!"
html_id: "query-publicRooms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-publicRooms"
generated_by: "scripts/convert.mjs"
---


# `publicRooms`

## Description

Get public rooms inside an organization

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`RoomConnection!`](../types/RoomConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query publicRooms($pagination: Pagination) {
  publicRooms(pagination: $pagination) {
    totalCount
    edges {
      ...RoomEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{"pagination": Pagination}
```

#### Response

```json
{
  "data": {
    "publicRooms": {
      "totalCount": 987,
      "edges": [RoomEdge],
      "pageInfo": PageInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-publicRooms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [proposalRoom](proposalRoom.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [room](room.md) ➡️
