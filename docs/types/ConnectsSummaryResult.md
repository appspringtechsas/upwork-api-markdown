---
title: "ConnectsSummaryResult"
kind: "object"
domain: "Other"
gql_name: "ConnectsSummaryResult"
html_id: "definition-ConnectsSummaryResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ConnectsSummaryResult"
generated_by: "scripts/convert.mjs"
---


# `ConnectsSummaryResult` (object)

## Description

Summary of the available connects for the user

## Fields

| Field | Type | Description |
|---|---|---|
| `organizationId` | [`ID!`](../scalars/ID.md) | ID of the user organization |
| `connectsBalance` | [`Int`](../scalars/Int.md) | Remaining connects balance |
| `rolloverBalance` | [`Int`](../scalars/Int.md) | Rollover balance for the user |
| `connectsBalanceFree` | [`Int`](../scalars/Int.md) | Fee for the connects balance |
| `connectsBalancePaid` | [`Int`](../scalars/Int.md) | Paid connect balance |

## Examples

### Example

```json
{
  "organizationId": 4,
  "connectsBalance": 123,
  "rolloverBalance": 987,
  "connectsBalanceFree": 987,
  "connectsBalancePaid": 987
}
```
