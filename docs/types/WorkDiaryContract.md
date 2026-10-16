---
title: "WorkDiaryContract"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryContract"
html_id: "definition-WorkDiaryContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryContract"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryContract` (object)

## Description

Work diary data for a specific contract and date

## Fields

| Field | Type | Description |
|---|---|---|
| `workDiaryMetadata` | [`WorkDiaryMetadata`](WorkDiaryMetadata.md) | Metadata about the work diary |
| `workDiaryTimeCells` | [`[WorkDiaryTimeCell!]`](WorkDiaryTimeCell.md) | List of timecells with tracking data |

## Examples

### Example

```json
{
  "workDiaryMetadata": WorkDiaryMetadata,
  "workDiaryTimeCells": [WorkDiaryTimeCell]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkDiaryCompanyUser](WorkDiaryCompanyUser.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiaryMetadata](WorkDiaryMetadata.md) ➡️
