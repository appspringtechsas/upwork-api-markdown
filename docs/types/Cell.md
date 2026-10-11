---
title: "Cell"
kind: "object"
domain: "Reporting"
gql_name: "Cell"
html_id: "definition-Cell"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Cell"
generated_by: "scripts/convert.mjs"
---


# `Cell` (object)

## Description

Individual time tracking cell representing a 10-minute work segment

## Fields

| Field | Type | Description |
|---|---|---|
| `timestamp` | [`Int!`](../scalars/Int.md) | Unix timestamp of the cell |
| `date` | [`String!`](../scalars/String.md) | Date of the cell |
| `manual` | [`Boolean!`](../scalars/Boolean.md) | Whether time was manually logged |
| `overtime` | [`Boolean!`](../scalars/Boolean.md) | Whether this is overtime work |
| `memo` | [`String`](../scalars/String.md) | Optional memo or note for this time entry |

## Examples

### Example

```json
{
  "timestamp": 123,
  "date": "abc123",
  "manual": true,
  "overtime": true,
  "memo": "abc123"
}
```
