---
title: "TransactionHistoryRow"
kind: "object"
domain: "Reporting"
gql_name: "TransactionHistoryRow"
html_id: "definition-TransactionHistoryRow"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TransactionHistoryRow"
generated_by: "scripts/convert.mjs"
---


# `TransactionHistoryRow` (object)

## Description

Individual transaction row with details

## Fields

| Field | Type | Description |
|---|---|---|
| `rowNumber` | [`Int`](../scalars/Int.md) | Row number in the transaction list |
| `runningChargeableBalance` | [`Money`](Money.md) | Running chargeable balance after this transaction |
| `recordId` | [`ID`](../scalars/ID.md) | Transaction record identifier |
| `remainder` | [`String`](../scalars/String.md) | Remaining amount to be paid |
| `amountCreditedToUser` | [`Money`](Money.md) | Amount credited to the user |
| `transactionReviewDueDate` | [`String`](../scalars/String.md) | Date when transaction review is due |
| `transactionCreationDate` | [`String`](../scalars/String.md) | Date when transaction was created |
| `relatedUserPaymentMethod` | [`Int`](../scalars/Int.md) | Related payment method identifier |
| `accountingSubtype` | [`String`](../scalars/String.md) | Accounting subtype of the transaction |
| `descriptionUI` | [`String`](../scalars/String.md) | UI-friendly description of the transaction |
| `relatedAssignment` | [`Int`](../scalars/Int.md) | Related assignment identifier |
| `amountSentInOrigCurrency` | [`Money`](Money.md) | Amount sent in original currency |
| `paymentGuaranteed` | [`Boolean`](../scalars/Boolean.md) | Whether payment is guaranteed |
| `fixedPriceEARMark` | [`Int`](../scalars/Int.md) | Fixed price EAR mark identifier |
| `relatedTransactionId` | [`ID`](../scalars/ID.md) | Related transaction identifier |
| `relatedInvoiceId` | [`ID`](../scalars/ID.md) | Related invoice identifier |
| `fullyPaidDate` | [`String`](../scalars/String.md) | Date when transaction was fully paid |
| `type` | [`String`](../scalars/String.md) | Transaction type |
| `transactionAmount` | [`Money`](Money.md) | Transaction amount |
| `relatedAccountingEntity` | [`Int`](../scalars/Int.md) | Related accounting entity identifier |
| `description` | [`String`](../scalars/String.md) | Transaction description |
| `purchaseOrderNumber` | [`String`](../scalars/String.md) | Purchase order number |
| `assignmentAgencyName` | [`String`](../scalars/String.md) | Agency name for the assignment |
| `assignmentCompanyName` | [`String`](../scalars/String.md) | Company name for the assignment |
| `assignmentDeveloperName` | [`String`](../scalars/String.md) | Developer name for the assignment |
| `assignmentTeamCompanyId` | [`ID`](../scalars/ID.md) | Assignment team company identifier |
| `assignmentTeamCompanyReference` | [`Int`](../scalars/Int.md) | Assignment team company reference number |
| `assignmentTeamId` | [`ID`](../scalars/ID.md) | Assignment team identifier |
| `assignmentTeamReference` | [`Int`](../scalars/Int.md) | Assignment team reference number |
| `assignmentTeamUserId` | [`ID`](../scalars/ID.md) | Assignment team user identifier |
| `assignmentTeamUserReference` | [`Int`](../scalars/Int.md) | Assignment team user reference number |
| `payment` | [`Money`](Money.md) | Payment amount |
| `paymentStatus` | [`String`](../scalars/String.md) | Payment status |
| `prefix` | [`String`](../scalars/String.md) | Transaction prefix |

## Examples

### Example

```json
{
  "rowNumber": 123,
  "runningChargeableBalance": Money,
  "recordId": 4,
  "remainder": "abc123",
  "amountCreditedToUser": Money,
  "transactionReviewDueDate": "abc123",
  "transactionCreationDate": "abc123",
  "relatedUserPaymentMethod": 987,
  "accountingSubtype": "abc123",
  "descriptionUI": "xyz789",
  "relatedAssignment": 123,
  "amountSentInOrigCurrency": Money,
  "paymentGuaranteed": false,
  "fixedPriceEARMark": 123,
  "relatedTransactionId": 4,
  "relatedInvoiceId": 4,
  "fullyPaidDate": "xyz789",
  "type": "xyz789",
  "transactionAmount": Money,
  "relatedAccountingEntity": 123,
  "description": "xyz789",
  "purchaseOrderNumber": "abc123",
  "assignmentAgencyName": "abc123",
  "assignmentCompanyName": "xyz789",
  "assignmentDeveloperName": "xyz789",
  "assignmentTeamCompanyId": 4,
  "assignmentTeamCompanyReference": 987,
  "assignmentTeamId": "4",
  "assignmentTeamReference": 987,
  "assignmentTeamUserId": 4,
  "assignmentTeamUserReference": 987,
  "payment": Money,
  "paymentStatus": "abc123",
  "prefix": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TransactionHistoryRow" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TransactionHistoryDetail](TransactionHistoryDetail.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDay](WorkDay.md) ➡️
