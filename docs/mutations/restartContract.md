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
  "message": "xyz789"
}
```

#### Response

```json
{"data": {"restartContract": {"success": false}}}
```
