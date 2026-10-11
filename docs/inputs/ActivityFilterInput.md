---
title: "ActivityFilterInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "ActivityFilterInput"
html_id: "definition-ActivityFilterInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ActivityFilterInput"
generated_by: "scripts/convert.mjs"
---


# `ActivityFilterInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID`](../scalars/ID.md) | Filter activities assigned to a specific contract |
| `search` | [`String`](../scalars/String.md) | Search term to filter tasks by code and description |
| `status` | [`String`](../scalars/String.md) | Filter activities by status |
| `detailsLimit` | [`Int`](../scalars/Int.md) | Amount of contracts to return |

## Examples

### Example

```json
{
  "contractId": "4",
  "search": "abc123",
  "status": "abc123",
  "detailsLimit": 987
}
```
