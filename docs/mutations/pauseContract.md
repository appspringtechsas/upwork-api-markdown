---
title: "pauseContract"
kind: "mutation"
gql_name: "pauseContract"
returns: "ContractActionResponse"
html_id: "mutation-pauseContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-pauseContract"
generated_by: "scripts/convert.mjs"
---


# `pauseContract`

## Description

Pause a contract by a client

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
mutation pauseContract(
  $contractId: ID!,
  $message: String
) {
  pauseContract(
    contractId: $contractId,
    message: $message
  ) {
    success
  }
}
```

#### Variables

```json
{"contractId": 4, "message": "xyz789"}
```

#### Response

```json
{"data": {"pauseContract": {"success": true}}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-pauseContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [endContractByClient](endContractByClient.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [rejectSubmittedMilestone](rejectSubmittedMilestone.md) ➡️
