---
title: "ContractProposalsPaging"
kind: "object"
domain: "Other"
gql_name: "ContractProposalsPaging"
html_id: "definition-ContractProposalsPaging"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractProposalsPaging"
generated_by: "scripts/convert.mjs"
---


# `ContractProposalsPaging` (object)

## Description

Paging info of contract proposals list queries

## Fields

| Field | Type | Description |
|---|---|---|
| `count` | [`Int`](../scalars/Int.md) | Count |
| `itemsPerPage` | [`Int`](../scalars/Int.md) | Items per Page |
| `loaded` | [`Int`](../scalars/Int.md) | Loaded |
| `offset` | [`Int`](../scalars/Int.md) | Offset |
| `page` | [`Int`](../scalars/Int.md) | Page |
| `total` | [`Int`](../scalars/Int.md) | Total |

## Examples

### Example

```json
{
  "count": 123,
  "itemsPerPage": 123,
  "loaded": 123,
  "offset": 987,
  "page": 123,
  "total": 987
}
```
