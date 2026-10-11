---
title: "CustomFieldsResponse"
kind: "input_object"
domain: "Job Posts"
gql_name: "CustomFieldsResponse"
html_id: "definition-CustomFieldsResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsResponse"
generated_by: "scripts/convert.mjs"
---


# `CustomFieldsResponse` (input object)

## Description

Custom field response value

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Response identifier |
| `customFieldId` | [`ID`](../scalars/ID.md) | Custom field identifier |
| `value` | [`String`](../scalars/String.md) | Response value |
| `displayValue` | [`String`](../scalars/String.md) | Display value |

## Examples

### Example

```json
{
  "id": 4,
  "customFieldId": 4,
  "value": "abc123",
  "displayValue": "xyz789"
}
```
