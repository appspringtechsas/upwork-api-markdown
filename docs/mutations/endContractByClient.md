---
title: "endContractByClient"
kind: "mutation"
gql_name: "endContractByClient"
returns: "ContractActionResponse"
html_id: "mutation-endContractByClient"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-endContractByClient"
generated_by: "scripts/convert.mjs"
---


# `endContractByClient`

## Description

End a contract by a client

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
mutation endContractByClient(
  $contractId: ID!,
  $input: EndContractInput!
) {
  endContractByClient(
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
{"data": {"endContractByClient": {"success": true}}}
```

### Real-life example

#### Query

```graphql
mutation EndContractByClient($contractId: ID!, $input: EndContractInput!) {
  endContractByClient(contractId: $contractId, input: $input) {
    success
  }
}
```

#### Variables

```json
{
  "contractId": "32325107",
  "input": {
    "reasonRef": "104",
    "feedbackInfo": {
      "comment": "Project completed successfully — API validation",
      "communicationScore": 5,
      "cooperationScore": 5,
      "qualityScore": 5
    }
  }
}
```

#### Response

```json
{
  "data": {
    "endContractByClient": {
      "success": true
    }
  }
}
```

## Used in sample flows

- Step **4** (Close contract) in [Working with Contracts Sample Flow](../operations/examples/offers-and-contracts.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-endContractByClient" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [endContractAtomic](endContractAtomic.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [pauseContract](pauseContract.md) ➡️
