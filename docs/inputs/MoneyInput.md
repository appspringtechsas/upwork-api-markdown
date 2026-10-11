---
title: "MoneyInput"
kind: "input_object"
domain: "Proposals"
gql_name: "MoneyInput"
html_id: "definition-MoneyInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MoneyInput"
generated_by: "scripts/convert.mjs"
---


# `MoneyInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`String!`](../scalars/String.md) | float point as a string, for example "1.23" |
| `currency` | [`String!`](../scalars/String.md) | [https://en.wikipedia.org/wiki/ISO_4217](https://en.wikipedia.org/wiki/ISO_4217) |

## Examples

### Example

```json
{
  "amount": "xyz789",
  "currency": "abc123"
}
```
