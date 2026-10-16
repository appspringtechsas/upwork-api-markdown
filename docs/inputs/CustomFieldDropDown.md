---
title: "CustomFieldDropDown"
kind: "input_object"
domain: "Job Posts"
gql_name: "CustomFieldDropDown"
html_id: "definition-CustomFieldDropDown"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldDropDown"
generated_by: "scripts/convert.mjs"
---


# `CustomFieldDropDown` (input object)

## Description

Custom field dropdown option

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Dropdown option identifier |
| `customFieldId` | [`ID`](../scalars/ID.md) | Custom field identifier |
| `value` | [`String`](../scalars/String.md) | Option value |
| `displayValue` | [`String`](../scalars/String.md) | Display value |
| `orderIndex` | [`Int`](../scalars/Int.md) | Sort order index |
| `description` | [`String`](../scalars/String.md) | Option description |
| `inUse` | [`Boolean`](../scalars/Boolean.md) | Whether option is in use |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether option is active |
| `aclType` | [`DropdownAclType`](../enums/DropdownAclType.md) | Access control type |
| `teamRids` | [`[String]`](../scalars/String.md) | Team record identifiers with access |

## Examples

### Example

```json
{
  "id": "4",
  "customFieldId": 4,
  "value": "abc123",
  "displayValue": "xyz789",
  "orderIndex": 123,
  "description": "xyz789",
  "inUse": false,
  "active": false,
  "aclType": "COMPANY",
  "teamRids": ["abc123"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-CustomFieldDropDown" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [CompanyJobPostingStatusAccess](CompanyJobPostingStatusAccess.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CustomFieldsResponse](CustomFieldsResponse.md) ➡️
