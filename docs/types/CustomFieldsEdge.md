---
title: "CustomFieldsEdge"
kind: "object"
domain: "Offers and Contracts"
gql_name: "CustomFieldsEdge"
html_id: "definition-CustomFieldsEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsEdge"
generated_by: "scripts/convert.mjs"
---


# `CustomFieldsEdge` (object)

## Description

Custom field connection edge

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Cursor for the edge |
| `node` | [`CustomFields`](CustomFields.md) | Node containing a custom field snapshot |

## Examples

### Example

```json
{
  "cursor": "xyz789",
  "node": CustomFields
}
```
