---
title: "SortAttribute"
kind: "input_object"
domain: "Other"
gql_name: "SortAttribute"
html_id: "definition-SortAttribute"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SortAttribute"
generated_by: "scripts/convert.mjs"
---


# `SortAttribute` (input object)

## Description

Sorting attribute and order

## Fields

| Field | Type | Description |
|---|---|---|
| `field` | [`String!`](../scalars/String.md) | Field name to sort by |
| `sortOrder` | [`SortOrder!`](../enums/SortOrder.md) | Sort direction |

## Examples

### Example

```json
{"field": "abc123", "sortOrder": "ASC"}
```
