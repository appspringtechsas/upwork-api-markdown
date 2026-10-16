---
title: "workDays"
kind: "query"
gql_name: "workDays"
returns: "WorkdayResult"
html_id: "query-workDays"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workDays"
generated_by: "scripts/convert.mjs"
---


# `workDays`

## Description

list of working days for a contractId and a given time range

## Required Permissions

"TimeSheet - Read-Only Access"

## Response

Returns a [`WorkdayResult`](../types/WorkdayResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `workdaysInput` | [`WorkdaysInput!`](../inputs/WorkdaysInput.md) | Contract list and date range |

## Examples

### Detailed structure

#### Query

```graphql
query workDays($workdaysInput: WorkdaysInput!) {
  workDays(workdaysInput: $workdaysInput) {
    workDays
  }
}
```

#### Variables

```json
{"workdaysInput": WorkdaysInput}
```

#### Response

```json
{
  "data": {
    "workDays": {"workDays": ["xyz789"]}
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workDays" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [user](user.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [workDiaryContract](workDiaryContract.md) ➡️
