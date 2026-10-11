---
title: "ContractProposal"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractProposal"
html_id: "definition-ContractProposal"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposal"
generated_by: "scripts/convert.mjs"
---


# `ContractProposal` (object)

## Description

Freelancers can propose a contract to a client

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract proposal identifier |
| `state` | [`String!`](../scalars/String.md) | Proposal state |
| `updatedDateTime` | [`String!`](../scalars/String.md) | Last updated timestamp |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `canClientOfferBeAccepted` | [`Boolean!`](../scalars/Boolean.md) | Whether there is something that would prevent client offer from being accepted |

## Examples

### Example

```json
{
  "id": 4,
  "state": "xyz789",
  "updatedDateTime": "abc123",
  "createdDateTime": "abc123",
  "canClientOfferBeAccepted": false
}
```
