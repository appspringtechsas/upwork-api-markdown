---
title: "WorkDiaryCompany"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryCompany"
html_id: "definition-WorkDiaryCompany"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompany"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryCompany` (object)

## Description

Work diary data for a company including snapshots and metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `total` | [`Int`](../scalars/Int.md) | Total number of snapshots |
| `snapshots` | [`[WorkDiaryCompanySnapshot]`](WorkDiaryCompanySnapshot.md) | List of work diary snapshots |

## Examples

### Example

```json
{"total": 987, "snapshots": [WorkDiaryCompanySnapshot]}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryCompany" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkdayResult](WorkdayResult.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiaryCompanyContract](WorkDiaryCompanyContract.md) ➡️
