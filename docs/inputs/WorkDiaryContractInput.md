---
title: "WorkDiaryContractInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "WorkDiaryContractInput"
html_id: "definition-WorkDiaryContractInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryContractInput"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryContractInput` (input object)

## Description

Input for querying work diary by contract

## Fields

| Field | Type | Description |
|---|---|---|
| `contractId` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `date` | [`String!`](../scalars/String.md) | Date to query (format: yyyymmdd) |
| `offsetInSeconds` | [`Int`](../scalars/Int.md) | Timezone offset in seconds |
| `useLegacy` | [`Boolean`](../scalars/Boolean.md) | Use legacy flag for additional user field support. It determines the data source for this query. When set to true, the query will be fulfilled using a legacy endpoint additionally the "user" field becomes available. If "useLegacyEndpoint" is false, the "user" field is not accessible in the query. |

## Examples

### Example

```json
{
  "contractId": 4,
  "date": "abc123",
  "offsetInSeconds": 123,
  "useLegacy": true
}
```
