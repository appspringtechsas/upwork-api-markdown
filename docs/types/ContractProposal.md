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
  "state": "abc123",
  "updatedDateTime": "xyz789",
  "createdDateTime": "xyz789",
  "canClientOfferBeAccepted": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposal" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ContractPaging](ContractPaging.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractSearchResults](ContractSearchResults.md) ➡️
