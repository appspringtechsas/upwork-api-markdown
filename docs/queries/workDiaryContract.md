---
title: "workDiaryContract"
kind: "query"
gql_name: "workDiaryContract"
returns: "WorkDiaryContract"
html_id: "query-workDiaryContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workDiaryContract"
generated_by: "scripts/convert.mjs"
---


# `workDiaryContract`

## Description

WorkDiary information with screenshot urls for a particular contract and a particular date

## Required Permissions

One of: "Contract - Read and Write Access" OR "Offer - Read-Only Access"

## Response

Returns a [`WorkDiaryContract`](../types/WorkDiaryContract.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `workDiaryContractInput` | [`WorkDiaryContractInput!`](../inputs/WorkDiaryContractInput.md) | Contract and date parameters |

## Examples

### Detailed structure

#### Query

```graphql
query workDiaryContract($workDiaryContractInput: WorkDiaryContractInput!) {
  workDiaryContract(workDiaryContractInput: $workDiaryContractInput) {
    workDiaryMetadata {
      ...WorkDiaryMetadataFragment
    }
    workDiaryTimeCells {
      ...WorkDiaryTimeCellFragment
    }
  }
}
```

#### Variables

```json
{"workDiaryContractInput": WorkDiaryContractInput}
```

#### Response

```json
{
  "data": {
    "workDiaryContract": {
      "workDiaryMetadata": WorkDiaryMetadata,
      "workDiaryTimeCells": [WorkDiaryTimeCell]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-workDiaryContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [workDays](workDays.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [accountAuditRecord](accountAuditRecord.md) ➡️
