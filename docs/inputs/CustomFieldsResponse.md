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
  "customFieldId": "4",
  "value": "xyz789",
  "displayValue": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldsResponse" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CustomFieldDropDown](CustomFieldDropDown.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostBillRate](JobPostBillRate.md) ➡️
