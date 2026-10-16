---
title: "restartContract"
kind: "mutation"
gql_name: "restartContract"
returns: "ContractActionResponse"
html_id: "mutation-restartContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-restartContract"
generated_by: "scripts/convert.mjs"
---


# `restartContract`

## Description

Restart a contract by a client

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`ContractActionResponse`](../types/ContractActionResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `message` | [`String`](../scalars/String.md) | Optional message to the counterparty |

## Examples

### Detailed structure

#### Query

```graphql
mutation restartContract(
  $contractId: ID!,
  $message: String
) {
  restartContract(
    contractId: $contractId,
    message: $message
  ) {
    success
  }
}
```

#### Variables

```json
{
  "contractId": "4",
  "message": "abc123"
}
```

#### Response

```json
{"data": {"restartContract": {"success": true}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-restartContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [rejectSubmittedMilestone](rejectSubmittedMilestone.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [updateContractHourlyLimit](updateContractHourlyLimit.md) ➡️
