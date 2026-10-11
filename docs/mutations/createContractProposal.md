---
title: "createContractProposal"
kind: "mutation"
gql_name: "createContractProposal"
returns: "ContractProposalCreateResponse!"
html_id: "mutation-createContractProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createContractProposal"
generated_by: "scripts/convert.mjs"
---


# `createContractProposal`

## Description

Create (submit) a contract proposal. Vendor (freelancer or agency manager) operation.

## Required Permissions

"Submit Proposal"

## Response

Returns a [`ContractProposalCreateResponse!`](../types/ContractProposalCreateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`ContractProposalCreateRequest!`](../inputs/ContractProposalCreateRequest.md) |  |

## Examples

### Detailed structure

#### Query

```graphql
mutation createContractProposal($input: ContractProposalCreateRequest!) {
  createContractProposal(input: $input) {
    id
  }
}
```

#### Variables

```json
{"input": ContractProposalCreateRequest}
```

#### Response

```json
{"data": {"createContractProposal": {"id": 4}}}
```
