---
title: "transactionHistory"
kind: "query"
gql_name: "transactionHistory"
returns: "TransactionHistory"
html_id: "query-transactionHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-transactionHistory"
generated_by: "scripts/convert.mjs"
---


# `transactionHistory`

## Description

Returns some total data about the entire set of transactions. Result also includes groups of pending transactions, if available.

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Read only access for transaction data"

## Response

Returns a [`TransactionHistory`](../types/TransactionHistory.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `transactionHistoryFilter` | [`TransactionHistoryFilter`](../inputs/TransactionHistoryFilter.md) | Transactions history filter |

## Examples

### Detailed structure

#### Query

```graphql
query transactionHistory($transactionHistoryFilter: TransactionHistoryFilter) {
  transactionHistory(transactionHistoryFilter: $transactionHistoryFilter) {
    transactionDetail {
      ...TransactionHistoryDetailFragment
    }
  }
}
```

#### Variables

```json
{"transactionHistoryFilter": TransactionHistoryFilter}
```

#### Response

```json
{
  "data": {
    "transactionHistory": {
      "transactionDetail": TransactionHistoryDetail
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-transactionHistory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [timeReport](timeReport.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [freelancerProfileSearchRecords](freelancerProfileSearchRecords.md) ➡️
