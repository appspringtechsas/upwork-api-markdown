---
title: "contractProposal"
kind: "query"
gql_name: "contractProposal"
returns: "ContractProposal"
html_id: "query-contractProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractProposal"
generated_by: "scripts/convert.mjs"
---


# `contractProposal`

## Description

Fetch contract proposal information by contract proposal ID.

## Required Permissions

"Contract - Read and Write Access"

## Response

Returns a [`ContractProposal`](../types/ContractProposal.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract proposal identifier |

## Examples

### Detailed structure

#### Query

```graphql
query contractProposal($id: ID!) {
  contractProposal(id: $id) {
    id
    state
    updatedDateTime
    createdDateTime
    canClientOfferBeAccepted
  }
}
```

#### Variables

```json
{"id": "4"}
```

#### Response

```json
{
  "data": {
    "contractProposal": {
      "id": 4,
      "state": "xyz789",
      "updatedDateTime": "abc123",
      "createdDateTime": "abc123",
      "canClientOfferBeAccepted": false
    }
  }
}
```
