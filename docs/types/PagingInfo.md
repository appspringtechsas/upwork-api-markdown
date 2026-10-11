---
title: "PagingInfo"
kind: "object"
domain: "Search"
gql_name: "PagingInfo"
html_id: "definition-PagingInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PagingInfo"
generated_by: "scripts/convert.mjs"
---


# `PagingInfo` (object)

## Description

Paging information

## Fields

| Field | Type | Description |
|---|---|---|
| `total` | [`Int`](../scalars/Int.md) | Total number of results available |
| `offset` | [`Int`](../scalars/Int.md) | Offset of the first result in this page |
| `count` | [`Int`](../scalars/Int.md) | Number of results in this page |

## Examples

### Example

```json
{"total": 987, "offset": 123, "count": 987}
```
