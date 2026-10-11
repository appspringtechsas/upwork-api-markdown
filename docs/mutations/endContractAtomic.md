---
title: "endContractAtomic"
kind: "mutation"
gql_name: "endContractAtomic"
returns: "ContractActionResponse"
html_id: "mutation-endContractAtomic"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-endContractAtomic"
generated_by: "scripts/convert.mjs"
---


# `endContractAtomic`

## Description

End a contract using the atomic flow

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`ContractActionResponse`](../types/ContractActionResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `input` | [`EndContractAtomicInput!`](../inputs/EndContractAtomicInput.md) | Contract end payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation endContractAtomic(
  $contractId: ID!,
  $input: EndContractAtomicInput!
) {
  endContractAtomic(
    contractId: $contractId,
    input: $input
  ) {
    success
  }
}
```

#### Variables

```json
{"contractId": 4, "input": EndContractAtomicInput}
```

#### Response

```json
{"data": {"endContractAtomic": {"success": true}}}
```
