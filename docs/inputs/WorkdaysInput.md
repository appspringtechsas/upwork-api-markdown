---
title: "WorkdaysInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "WorkdaysInput"
html_id: "definition-WorkdaysInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkdaysInput"
generated_by: "scripts/convert.mjs"
---


# `WorkdaysInput` (input object)

## Description

Input for querying workdays across multiple contracts

## Fields

| Field | Type | Description |
|---|---|---|
| `contractIds` | [`[ID!]!`](../scalars/ID.md) | List of contract identifiers |
| `timeRange` | [`DateTimeRange!`](DateTimeRange.md) | Date/time range to query |
| `offsetInSeconds` | [`Int`](../scalars/Int.md) | Timezone offset in seconds |

## Examples

### Example

```json
{
  "contractIds": ["4"],
  "timeRange": DateTimeRange,
  "offsetInSeconds": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkdaysInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UserPermissionFilterV2](UserPermissionFilterV2.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiaryCompanyInput](WorkDiaryCompanyInput.md) ➡️
