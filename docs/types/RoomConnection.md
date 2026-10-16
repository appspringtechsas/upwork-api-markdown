---
title: "RoomConnection"
kind: "object"
domain: "Users and teams"
gql_name: "RoomConnection"
html_id: "definition-RoomConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomConnection"
generated_by: "scripts/convert.mjs"
---


# `RoomConnection` (object)

## Description

Connection type for paginated room results

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of rooms matching the query |
| `edges` | [`[RoomEdge]`](RoomEdge.md) | List of room edges with pagination cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information for navigating results |

## Examples

### Example

```json
{
  "totalCount": 123,
  "edges": [RoomEdge],
  "pageInfo": PageInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-RoomConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Room](Room.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RoomEdge](RoomEdge.md) ➡️
