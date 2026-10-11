---
title: "PageInfo"
kind: "object"
domain: "Other"
gql_name: "PageInfo"
html_id: "definition-PageInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PageInfo"
generated_by: "scripts/convert.mjs"
---


# `PageInfo` (object)

## Description

Pagination metadata for list responses

## Fields

| Field | Type | Description |
|---|---|---|
| `endCursor` | [`String`](../scalars/String.md) | Cursor to be used to fetch next page in list |
| `hasNextPage` | [`Boolean`](../scalars/Boolean.md) | Boolean indicating whether there is a next page in the list |

## Examples

### Example

```json
{"endCursor": "xyz789", "hasNextPage": true}
```
