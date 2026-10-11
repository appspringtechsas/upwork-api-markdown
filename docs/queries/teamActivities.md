---
title: "teamActivities"
kind: "query"
gql_name: "teamActivities"
returns: "ActivitiesConnection!"
html_id: "query-teamActivities"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-teamActivities"
generated_by: "scripts/convert.mjs"
---


# `teamActivities`

## Description

Get a flat list (with no company/user description) of all activities under the specified team. A user needs to have hiring manager privileges within the team in order to create an activity at team level

## Required Permissions

One of: "Activity Entities - Read-Only Access" OR "Activity Entities - Read and Write Access"

## Response

Returns an [`ActivitiesConnection!`](../types/ActivitiesConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `orgId` | [`ID!`](../scalars/ID.md) | The org id where the team belongs to |
| `teamId` | [`ID`](../scalars/ID.md) | The team id where activities are being requested |
| `page` | [`PageFilterInput`](../inputs/PageFilterInput.md) | Pagination information |
| `filter` | [`ActivityFilterInput`](../inputs/ActivityFilterInput.md) | Filters to apply to the activity list |

## Examples

### Detailed structure

#### Query

```graphql
query teamActivities(
  $orgId: ID!,
  $teamId: ID,
  $page: PageFilterInput,
  $filter: ActivityFilterInput
) {
  teamActivities(
    orgId: $orgId,
    teamId: $teamId,
    page: $page,
    filter: $filter
  ) {
    totalCount
    edges {
      ...ActivityEdgeFragment
    }
    page {
      ...PageFragment
    }
  }
}
```

#### Variables

```json
{
  "orgId": "4",
  "teamId": 4,
  "page": PageFilterInput,
  "filter": ActivityFilterInput
}
```

#### Response

```json
{
  "data": {
    "teamActivities": {
      "totalCount": 123,
      "edges": [ActivityEdge],
      "page": Page
    }
  }
}
```
