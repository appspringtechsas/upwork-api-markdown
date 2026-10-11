---
title: "ContractPagingInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "ContractPagingInput"
html_id: "definition-ContractPagingInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractPagingInput"
generated_by: "scripts/convert.mjs"
---


# `ContractPagingInput` (input object)

## Description

Offset/limit pagination options for contract lists

## Fields

| Field | Type | Description |
|---|---|---|
| `limit` | [`Int`](../scalars/Int.md) | Number of results, optional, default 10 |
| `offset` | [`Int`](../scalars/Int.md) | Number of records to skip, optional, default 0 |
| `includeTotalCount` | [`Boolean`](../scalars/Boolean.md) | Flag to include total count in response, optional, default false |

## Examples

### Example

```json
{"limit": 987, "offset": 987, "includeTotalCount": false}
```
