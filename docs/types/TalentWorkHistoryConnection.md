---
title: "TalentWorkHistoryConnection"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentWorkHistoryConnection"
html_id: "definition-TalentWorkHistoryConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkHistoryConnection"
generated_by: "scripts/convert.mjs"
---


# `TalentWorkHistoryConnection` (object)

## Description

Connection type for paginated work history results

## Fields

| Field | Type | Description |
|---|---|---|
| `workHistoryList` | [`[TalentWorkHistory]`](TalentWorkHistory.md) | List of work history items |
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of work history items |

## Examples

### Example

```json
{
  "workHistoryList": [TalentWorkHistory],
  "totalCount": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentWorkHistoryConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentWorkHistory](TalentWorkHistory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [AccountAuditRecord](AccountAuditRecord.md) ➡️
