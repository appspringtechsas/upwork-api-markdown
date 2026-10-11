---
title: "RoomStoryConnection"
kind: "object"
domain: "Users and teams"
gql_name: "RoomStoryConnection"
html_id: "definition-RoomStoryConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomStoryConnection"
generated_by: "scripts/convert.mjs"
---


# `RoomStoryConnection` (object)

## Description

Connection type for paginated room story results

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of stories matching the query |
| `edges` | [`[RoomStoryEdge]`](RoomStoryEdge.md) | List of story edges with pagination cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information for navigating results |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [RoomStoryEdge],
  "pageInfo": PageInfo
}
```
