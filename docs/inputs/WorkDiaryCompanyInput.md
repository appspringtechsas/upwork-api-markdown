---
title: "WorkDiaryCompanyInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "WorkDiaryCompanyInput"
html_id: "definition-WorkDiaryCompanyInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanyInput"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompanyInput` (input object)

## Description

Input for querying work diary by company

## Fields

| Field | Type | Description |
|---|---|---|
| `companyId` | [`ID!`](../scalars/ID.md) | Company identifier |
| `date` | [`String!`](../scalars/String.md) | Date to query (format: yyyymmdd) |
| `paging` | [`String`](../scalars/String.md) | Paging token |
| `sortBy` | [`String`](../scalars/String.md) | Sort field |
| `activity` | [`String`](../scalars/String.md) | Activity filter |
| `freelancer` | [`String`](../scalars/String.md) | Freelancer filter |

## Examples

### Example

```json
{
  "companyId": "4",
  "date": "abc123",
  "paging": "abc123",
  "sortBy": "abc123",
  "activity": "abc123",
  "freelancer": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompanyInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkdaysInput](WorkdaysInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiaryContractInput](WorkDiaryContractInput.md) ➡️
