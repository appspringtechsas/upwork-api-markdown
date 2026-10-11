---
title: "TransactionHistoryFilter"
kind: "input_object"
domain: "Reporting"
gql_name: "TransactionHistoryFilter"
html_id: "definition-TransactionHistoryFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TransactionHistoryFilter"
generated_by: "scripts/convert.mjs"
---


# `TransactionHistoryFilter` (input object)

## Description

Filter for transaction history queries

## Fields

| Field | Type | Description |
|---|---|---|
| `bpaPrivateData` | [`BPAPrivateDataFilter`](BPAPrivateDataFilter.md) | BPA private data filter |
| `aceIds_any` | [`[ID!]!`](../scalars/ID.md) | List of accounting entity identifiers whose transactions have to be collected |
| `transactionDateTime_bt` | [`DateTimeRange!`](DateTimeRange.md) | Minimal and maximum date of selected transactions (date should be in yyyy-mm-dd format) |
| `agencyCompanyIds_any` | [`[ID!]`](../scalars/ID.md) |  |
| `agencyCompanyUids_any` | [`[ID!]`](../scalars/ID.md) | Filter transactions related to one of these agencies (using UID) |
| `developerIds_any` | [`[ID!]`](../scalars/ID.md) | Filter transactions related to one of these developers |
| `trxSubtypes_any` | [`[String!]`](../scalars/String.md) | Filter transactions related to one of listed subtypes |

## Examples

### Example

```json
{
  "bpaPrivateData": BPAPrivateDataFilter,
  "aceIds_any": [4],
  "transactionDateTime_bt": DateTimeRange,
  "agencyCompanyIds_any": ["4"],
  "agencyCompanyUids_any": [4],
  "developerIds_any": ["4"],
  "trxSubtypes_any": ["xyz789"]
}
```
