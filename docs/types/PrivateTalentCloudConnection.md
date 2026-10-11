---
title: "PrivateTalentCloudConnection"
kind: "object"
domain: "Talent Clouds"
gql_name: "PrivateTalentCloudConnection"
html_id: "definition-PrivateTalentCloudConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PrivateTalentCloudConnection"
generated_by: "scripts/convert.mjs"
---


# `PrivateTalentCloudConnection` (object)

## Description

Connection type for paginated private talent cloud results

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of talent clouds matching the query |
| `edges` | [`[PrivateTalentCloudEdge]`](PrivateTalentCloudEdge.md) | List of talent cloud edges with cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information for navigating results |

## Examples

### Example

```json
{
  "totalCount": 123,
  "edges": [PrivateTalentCloudEdge],
  "pageInfo": PageInfo
}
```
