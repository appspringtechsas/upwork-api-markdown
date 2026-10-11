---
title: "TransactionHistory"
kind: "object"
domain: "Reporting"
gql_name: "TransactionHistory"
html_id: "definition-TransactionHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TransactionHistory"
generated_by: "scripts/convert.mjs"
---


# `TransactionHistory` (object)

## Description

Transaction history containing transaction details and metadata

## Fields

| Field | Type | Description |
|---|---|---|
| `transactionDetail` | [`TransactionHistoryDetail`](TransactionHistoryDetail.md) | Group of non-pending transactions with totals |

## Examples

### Example

```json
{"transactionDetail": TransactionHistoryDetail}
```
