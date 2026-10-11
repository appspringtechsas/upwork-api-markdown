---
title: "Bid"
kind: "object"
domain: "Other"
gql_name: "Bid"
html_id: "definition-Bid"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Bid"
generated_by: "scripts/convert.mjs"
---


# `Bid` (object)

## Description

Encapsulates all Bid properties

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | bid id unique identifier |
| `amount` | [`Int`](../scalars/Int.md) | Bid amount |
| `createdTime` | [`String`](../scalars/String.md) | created time stamp |

## Examples

### Example

```json
{
  "id": "4",
  "amount": 123,
  "createdTime": "abc123"
}
```
