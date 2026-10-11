---
title: "CustomFieldsConnection"
kind: "object"
domain: "Offers and Contracts"
gql_name: "CustomFieldsConnection"
html_id: "definition-CustomFieldsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsConnection"
generated_by: "scripts/convert.mjs"
---


# `CustomFieldsConnection` (object)

## Description

Custom field connection

## Fields

| Field | Type | Description |
|---|---|---|
| `edges` | [`[CustomFieldsEdge]`](CustomFieldsEdge.md) | Connection edges for paginated results |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "edges": [CustomFieldsEdge],
  "pageInfo": PageInfo
}
```
