---
title: "WorkDay"
kind: "object"
domain: "Reporting"
gql_name: "WorkDay"
html_id: "definition-WorkDay"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDay"
generated_by: "scripts/convert.mjs"
---


# `WorkDay` (object)

## Description

Represents a single work day with associated work diary data

## Fields

| Field | Type | Description |
|---|---|---|
| `workDiary` | [`WorkDiary`](WorkDiary.md) | Work diary entries for this day |
| `date` | [`String!`](../scalars/String.md) | Date of the work day |

## Examples

### Example

```json
{
  "workDiary": WorkDiary,
  "date": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDay" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TransactionHistoryRow](TransactionHistoryRow.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiary](WorkDiary.md) ➡️
