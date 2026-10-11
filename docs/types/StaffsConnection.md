---
title: "StaffsConnection"
kind: "object"
domain: "Users and teams"
gql_name: "StaffsConnection"
html_id: "definition-StaffsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StaffsConnection"
generated_by: "scripts/convert.mjs"
---


# `StaffsConnection` (object)

## Description

Connection of staff records

## Fields

| Field | Type | Description |
|---|---|---|
| `edges` | [`[StaffsConnectionEdge]!`](StaffsConnectionEdge.md) | Staffs data |
| `totalCount` | [`Int`](../scalars/Int.md) | Total count of records |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Page info |

## Examples

### Example

```json
{
  "edges": [StaffsConnectionEdge],
  "totalCount": 123,
  "pageInfo": PageInfo
}
```
