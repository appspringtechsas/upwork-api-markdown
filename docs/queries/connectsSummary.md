---
title: "connectsSummary"
kind: "query"
gql_name: "connectsSummary"
returns: "ConnectsSummaryResult"
html_id: "query-connectsSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-connectsSummary"
generated_by: "scripts/convert.mjs"
---


# `connectsSummary`

## Description

Fetch connects summary

## Required Permissions

"Ad Credits and Connects Information - Read-Only Access"

## Response

Returns a [`ConnectsSummaryResult`](../types/ConnectsSummaryResult.md)

## Examples

### Detailed structure

#### Query

```graphql
query connectsSummary {
  connectsSummary {
    organizationId
    connectsBalance
    rolloverBalance
    connectsBalanceFree
    connectsBalancePaid
  }
}
```

#### Response

```json
{
  "data": {
    "connectsSummary": {
      "organizationId": 4,
      "connectsBalance": 987,
      "rolloverBalance": 987,
      "connectsBalanceFree": 123,
      "connectsBalancePaid": 123
    }
  }
}
```
