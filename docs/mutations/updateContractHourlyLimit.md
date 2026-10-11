---
title: "updateContractHourlyLimit"
kind: "mutation"
gql_name: "updateContractHourlyLimit"
returns: "ContractActionResponse"
html_id: "mutation-updateContractHourlyLimit"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateContractHourlyLimit"
generated_by: "scripts/convert.mjs"
---


# `updateContractHourlyLimit`

## Description

Update hourly limit

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`ContractActionResponse`](../types/ContractActionResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract Id |
| `updateHourlyLimitRequest` | [`UpdateHourlyLimitRequestInput`](../inputs/UpdateHourlyLimitRequestInput.md) | Update hourly limit request |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateContractHourlyLimit(
  $contractId: ID!,
  $updateHourlyLimitRequest: UpdateHourlyLimitRequestInput
) {
  updateContractHourlyLimit(
    contractId: $contractId,
    updateHourlyLimitRequest: $updateHourlyLimitRequest
  ) {
    success
  }
}
```

#### Variables

```json
{
  "contractId": 4,
  "updateHourlyLimitRequest": UpdateHourlyLimitRequestInput
}
```

#### Response

```json
{"data": {"updateContractHourlyLimit": {"success": false}}}
```

### Real-life example

#### Query

```graphql
mutation UpdateContractHourlyLimit(
  $contractId: ID!
  $request: UpdateHourlyLimitRequestInput
) {
  updateContractHourlyLimit(
    contractId: $contractId
    updateHourlyLimitRequest: $request
  ) {
    success
  }
}
```

#### Variables

```json
{"contractId": "32325107", "request": {"weeklyLimit": "35"}}
```

#### Response

```json
{
    "data": {
        "updateContractHourlyLimit": {
            "success": true
        }
    }
}
```
