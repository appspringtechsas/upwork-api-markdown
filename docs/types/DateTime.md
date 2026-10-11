---
title: "DateTime"
kind: "object"
domain: "Other"
gql_name: "DateTime"
html_id: "definition-DateTime"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-DateTime"
generated_by: "scripts/convert.mjs"
---


# `DateTime` (object)

## Description

Time of day with raw seconds and display value

## Fields

| Field | Type | Description |
|---|---|---|
| `rawValue` | [`String!`](../scalars/String.md) | Number of seconds since beginning of the day (since 00:00:00 same day) |
| `displayValue` | [`String!`](../scalars/String.md) | Time in format HH:MM |

## Examples

### Example

```json
{
  "rawValue": "xyz789",
  "displayValue": "xyz789"
}
```
