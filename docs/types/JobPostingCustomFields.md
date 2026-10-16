---
title: "JobPostingCustomFields"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingCustomFields"
html_id: "definition-JobPostingCustomFields"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCustomFields"
generated_by: "scripts/convert.mjs"
---


# `JobPostingCustomFields` (object)

## Description

Job posting custom fields

## Fields

| Field | Type | Description |
|---|---|---|
| `responseId` | [`ID`](../scalars/ID.md) | Unique identification for the response |
| `id` | [`ID`](../scalars/ID.md) | Unique identification for the custom field |
| `displayValue` | [`String`](../scalars/String.md) | Display value |
| `value` | [`String`](../scalars/String.md) | Response |

## Examples

### Example

```json
{
  "responseId": 4,
  "id": "4",
  "displayValue": "abc123",
  "value": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCustomFields" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingCreateResponse](JobPostingCreateResponse.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingEdge](JobPostingEdge.md) ➡️
