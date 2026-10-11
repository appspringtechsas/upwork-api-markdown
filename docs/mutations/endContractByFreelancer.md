---
title: "endContractByFreelancer"
kind: "mutation"
gql_name: "endContractByFreelancer"
returns: "ContractActionResponse"
html_id: "mutation-endContractByFreelancer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-endContractByFreelancer"
generated_by: "scripts/convert.mjs"
---


# `endContractByFreelancer`

## Description

End a contract by a freelancer

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`ContractActionResponse`](../types/ContractActionResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `input` | [`EndContractInput!`](../inputs/EndContractInput.md) | Contract end payload |

## Examples

### Detailed structure

#### Query

```graphql
mutation endContractByFreelancer(
  $contractId: ID!,
  $input: EndContractInput!
) {
  endContractByFreelancer(
    contractId: $contractId,
    input: $input
  ) {
    success
  }
}
```

#### Variables

```json
{"contractId": 4, "input": EndContractInput}
```

#### Response

```json
{"data": {"endContractByFreelancer": {"success": false}}}
```
