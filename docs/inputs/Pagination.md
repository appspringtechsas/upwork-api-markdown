---
title: "Pagination"
kind: "input_object"
domain: "Other"
gql_name: "Pagination"
html_id: "definition-Pagination"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Pagination"
generated_by: "scripts/convert.mjs"
---


# `Pagination` (input object)

## Description

Pagination

## Fields

| Field | Type | Description |
|---|---|---|
| `after` | [`String`](../scalars/String.md) | Identifies the start place of the pagination, e.g. after: "0" will indicate "from the very first element" |
| `first` | [`Int!`](../scalars/Int.md) | Identifies how many records must be returns in a single response, e.g. first: 30 will return 30 elements |

## Examples

### Example

```json
{"after": "xyz789", "first": 123}
```
