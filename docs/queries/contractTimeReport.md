---
title: "contractTimeReport"
kind: "query"
gql_name: "contractTimeReport"
returns: "TimeReportConnection!"
html_id: "query-contractTimeReport"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractTimeReport"
generated_by: "scripts/convert.mjs"
---


# `contractTimeReport`

## Required Permissions

"TimeSheet - Read-Only Access"

## Response

Returns a [`TimeReportConnection!`](../types/TimeReportConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`TimeReportFilter`](../inputs/TimeReportFilter.md) | Filter by organization, time range and optional contracts |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query contractTimeReport(
  $filter: TimeReportFilter,
  $pagination: Pagination
) {
  contractTimeReport(
    filter: $filter,
    pagination: $pagination
  ) {
    totalCount
    edges {
      ...TimeReportEdgeFragment
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
  "filter": TimeReportFilter,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "contractTimeReport": {
      "totalCount": 987,
      "edges": [TimeReportEdge],
      "pageInfo": PageInfo
    }
  }
}
```
