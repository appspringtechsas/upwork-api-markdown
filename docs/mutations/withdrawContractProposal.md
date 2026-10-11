---
title: "withdrawContractProposal"
kind: "mutation"
gql_name: "withdrawContractProposal"
returns: "Boolean!"
html_id: "mutation-withdrawContractProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-withdrawContractProposal"
generated_by: "scripts/convert.mjs"
---


# `withdrawContractProposal`

## Description

Withdraw a contract proposal. Vendor (freelancer or agency manager) operation.

## Required Permissions

"Submit Proposal"

## Response

Returns a [`Boolean!`](../scalars/Boolean.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |
| `input` | [`ContractProposalWithdrawRequest`](../inputs/ContractProposalWithdrawRequest.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
mutation withdrawContractProposal(
  $id: ID!,
  $input: ContractProposalWithdrawRequest
) {
  withdrawContractProposal(
    id: $id,
    input: $input
  )
}
```

#### Variables

```json
{
  "id": "4",
  "input": ContractProposalWithdrawRequest
}
```

#### Response

```json
{"data": {"withdrawContractProposal": true}}
```
