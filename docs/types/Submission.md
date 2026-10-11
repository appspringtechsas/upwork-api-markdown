---
title: "Submission"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Submission"
html_id: "definition-Submission"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Submission"
generated_by: "scripts/convert.mjs"
---


# `Submission` (object)

## Description

Milestone submission record

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Submission identifier |
| `createdDateTime` | [`String`](../scalars/String.md) | Creation timestamp |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Modification timestamp |
| `amount` | [`Money`](Money.md) | Submission amount |
| `sequenceId` | [`Int`](../scalars/Int.md) | Sequence identifier |

## Examples

### Example

```json
{
  "id": 4,
  "createdDateTime": "abc123",
  "modifiedDateTime": "xyz789",
  "amount": Money,
  "sequenceId": 987
}
```
