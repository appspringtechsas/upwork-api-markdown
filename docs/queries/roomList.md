---
title: "roomList"
kind: "query"
gql_name: "roomList"
returns: "RoomConnection!"
html_id: "query-roomList"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-roomList"
generated_by: "scripts/convert.mjs"
---


# `roomList`

## Description

List of rooms based on the given filter condition

## Required Permissions

One of: "Messaging - Read-Only Access" OR "Messaging - Read and Write Access"

## Response

Returns a [`RoomConnection!`](../types/RoomConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`RoomFilter`](../inputs/RoomFilter.md) | Filter criteria |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |
| `sortOrder` | [`SortOrder`](../enums/SortOrder.md) | Sorting order |

## Examples

### Detailed structure

#### Query

```graphql
query roomList(
  $filter: RoomFilter,
  $pagination: Pagination,
  $sortOrder: SortOrder
) {
  roomList(
    filter: $filter,
    pagination: $pagination,
    sortOrder: $sortOrder
  ) {
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
{
  "filter": RoomFilter,
  "pagination": Pagination,
  "sortOrder": "ASC"
}
```

#### Response

```json
{
  "data": {
    "roomList": {
      "totalCount": 987,
      "edges": [RoomEdge],
      "pageInfo": PageInfo
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ListRooms($filter: RoomFilter, $pagination: Pagination) {
  roomList(filter: $filter, pagination: $pagination, sortOrder: DESC) {
    totalCount
    edges {
      node {
        id
        roomName
        topic
        numUnread
      }
    }
  }
}
```

#### Variables

```json
{"filter": {"subscribed_eq": true}, "pagination": {"after": "", "first": 10}}
```

#### Response

```json
{
  "data": {
    "roomList": {
      "totalCount": 4,
      "edges": [
        {
          "node": {
            "id": "room_d4ad627e8343569efaa2ee76260170a3",
            "roomName": "Dudley Lindgen",
            "topic": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
            "numUnread": 0
          }
        },
        {
          "node": {
            "id": "room_e55cca4867ed9dc346c7bb6dbaba8817",
            "roomName": "Audrey Carrolls",
            "topic": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
            "numUnread": 0
          }
        },
        {
          "node": {
            "id": "room_a48df862a63217a25b83eb49ec457b71",
            "roomName": "Sebastian Torphys",
            "topic": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
            "numUnread": 0
          }
        },
        {
          "node": {
            "id": "room_7658f2da75cfba4790a3402b6b0c7097",
            "roomName": "Dustin Langosher",
            "topic": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
            "numUnread": 0
          }
        }
      ]
    }
  }
}
```

## Used in sample flows

- Step **1** (List Rooms) in [Sample Messaging Flow](../operations/examples/messaging.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-roomList" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [room](room.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [roomStories](roomStories.md) ➡️
