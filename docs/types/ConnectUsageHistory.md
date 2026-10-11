---
title: "ConnectUsageHistory"
kind: "object"
domain: "Other"
gql_name: "ConnectUsageHistory"
html_id: "definition-ConnectUsageHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ConnectUsageHistory"
generated_by: "scripts/convert.mjs"
---


# `ConnectUsageHistory` (object)

## Description

Response for the Connect Usage query

## Fields

| Field | Type | Description |
|---|---|---|
| `transactions` | [`[ConnectUsageTransaction!]`](ConnectUsageTransaction.md) | A list of Connects usage records |
| `pageInfo` | [`PageInfo!`](PageInfo.md) | Pagination information for the connection. |

## Examples

### Example

```json
{
  "transactions": [ConnectUsageTransaction],
  "pageInfo": PageInfo
}
```
