---
title: "accountAuditRecord"
kind: "query"
gql_name: "accountAuditRecord"
returns: "AccountAuditRecord"
html_id: "query-accountAuditRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-accountAuditRecord"
generated_by: "scripts/convert.mjs"
---


# `accountAuditRecord`

## Description

Audit information of the account management action

## Required Permissions

"Organization - Read and Write access"

## Response

Returns an [`AccountAuditRecord`](../types/AccountAuditRecord.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `processInstanceId` | [`ID!`](../scalars/ID.md) | Account management process identifier |

## Examples

### Detailed structure

#### Query

```graphql
query accountAuditRecord($processInstanceId: ID!) {
  accountAuditRecord(processInstanceId: $processInstanceId) {
    processInstanceId
    status
    metadata {
      ...StringMapElementFragment
    }
  }
}
```

#### Variables

```json
{"processInstanceId": 4}
```

#### Response

```json
{
  "data": {
    "accountAuditRecord": {
      "processInstanceId": "4",
      "status": "abc123",
      "metadata": [StringMapElement]
    }
  }
}
```
