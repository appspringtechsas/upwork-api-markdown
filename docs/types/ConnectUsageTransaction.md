---
title: "ConnectUsageTransaction"
kind: "object"
domain: "Other"
gql_name: "ConnectUsageTransaction"
html_id: "definition-ConnectUsageTransaction"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ConnectUsageTransaction"
generated_by: "scripts/convert.mjs"
---


# `ConnectUsageTransaction` (object)

## Description

Connect Usage Details

## Fields

| Field | Type | Description |
|---|---|---|
| `amount` | [`Money!`](Money.md) | Transaction amount |
| `createdDateTime` | [`String!`](../scalars/String.md) | Transaction date |
| `transactionType` | [`ConnectsPaymentsTransactionTypeEnum!`](../enums/ConnectsPaymentsTransactionTypeEnum.md) | Type of transaction |
| `reason` | [`String`](../scalars/String.md) | Reason the connects moved, as a ConnectsReasonType code (e.g. JOB_BID, REFUND_JOB_CLOSE_NO_HIRE, PAID_INVITATION_BADGE), mapped from the transaction's reason id. |
| `jobPost` | [`TransactionJobPost`](TransactionJobPost.md) | Job associated with the transaction |

## Examples

### Example

```json
{
  "amount": Money,
  "createdDateTime": "xyz789",
  "transactionType": "CREDIT",
  "reason": "abc123",
  "jobPost": TransactionJobPost
}
```
