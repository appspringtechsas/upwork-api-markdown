---
title: "connectUsageHistory"
kind: "query"
gql_name: "connectUsageHistory"
returns: "ConnectUsageHistory"
html_id: "query-connectUsageHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-connectUsageHistory"
generated_by: "scripts/convert.mjs"
---


# `connectUsageHistory`

## Description

Returns the connects usage hostory for the current user

## Required Permissions

"Ad Credits and Connects Information - Read-Only Access"

## Response

Returns a [`ConnectUsageHistory`](../types/ConnectUsageHistory.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`ConnectUsageFilter!`](../inputs/ConnectUsageFilter.md) | Filters for searching usage history |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) | Pagination parameters |

## Examples

### Detailed structure

#### Query

```graphql
query connectUsageHistory(
  $filter: ConnectUsageFilter!,
  $pagination: Pagination!
) {
  connectUsageHistory(
    filter: $filter,
    pagination: $pagination
  ) {
    transactions {
      ...ConnectUsageTransactionFragment
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
  "filter": ConnectUsageFilter,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "connectUsageHistory": {
      "transactions": [ConnectUsageTransaction],
      "pageInfo": PageInfo
    }
  }
}
```
