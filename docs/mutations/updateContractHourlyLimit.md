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
  "contractId": "4",
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

## Used in sample flows

- Step **3** (Update contract hourly limit) in [Working with Contracts Sample Flow](../operations/examples/offers-and-contracts.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateContractHourlyLimit" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [restartContract](restartContract.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [sendCustomPayment](sendCustomPayment.md) ➡️
