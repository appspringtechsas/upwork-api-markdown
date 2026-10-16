---
title: "talentWorkHistory"
kind: "query"
gql_name: "talentWorkHistory"
returns: "TalentWorkHistoryConnection"
html_id: "query-talentWorkHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentWorkHistory"
generated_by: "scripts/convert.mjs"
---


# `talentWorkHistory`

## Description

Returns the work history for a talent including contracts and feedback

## Required Permissions

"Talent Workhistory - Read Only Access"

## Response

Returns a [`TalentWorkHistoryConnection`](../types/TalentWorkHistoryConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`TalentWorkHistoryFilterInput`](../inputs/TalentWorkHistoryFilterInput.md) | Work history filter criteria |

## Examples

### Detailed structure

#### Query

```graphql
query talentWorkHistory($filter: TalentWorkHistoryFilterInput) {
  talentWorkHistory(filter: $filter) {
    workHistoryList {
      ...TalentWorkHistoryFragment
    }
    totalCount
  }
}
```

#### Variables

```json
{"filter": TalentWorkHistoryFilterInput}
```

#### Response

```json
{
  "data": {
    "talentWorkHistory": {
      "workHistoryList": [TalentWorkHistory],
      "totalCount": 123
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentWorkHistory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [talentSpecializedProfiles](talentSpecializedProfiles.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [company](company.md) ➡️
