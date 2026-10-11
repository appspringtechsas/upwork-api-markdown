---
title: "workDiaryCompany"
kind: "query"
gql_name: "workDiaryCompany"
returns: "WorkDiaryCompany"
html_id: "query-workDiaryCompany"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workDiaryCompany"
generated_by: "scripts/convert.mjs"
---


# `workDiaryCompany`

## Description

WorkDiary information with screenshot urls for a particular company and a particular date

## Required Permissions

"Read Work diary company for public user"

## Response

Returns a [`WorkDiaryCompany`](../types/WorkDiaryCompany.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `workDiaryCompanyInput` | [`WorkDiaryCompanyInput!`](../inputs/WorkDiaryCompanyInput.md) | Company and date parameters |

## Examples

### Detailed structure

#### Query

```graphql
query workDiaryCompany($workDiaryCompanyInput: WorkDiaryCompanyInput!) {
  workDiaryCompany(workDiaryCompanyInput: $workDiaryCompanyInput) {
    total
    snapshots {
      ...WorkDiaryCompanySnapshotFragment
    }
  }
}
```

#### Variables

```json
{"workDiaryCompanyInput": WorkDiaryCompanyInput}
```

#### Response

```json
{
  "data": {
    "workDiaryCompany": {
      "total": 987,
      "snapshots": [WorkDiaryCompanySnapshot]
    }
  }
}
```
