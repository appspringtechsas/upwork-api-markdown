---
title: "StipendContractTerm"
kind: "object"
domain: "Offers and Contracts"
gql_name: "StipendContractTerm"
html_id: "definition-StipendContractTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StipendContractTerm"
generated_by: "scripts/convert.mjs"
---


# `StipendContractTerm` (object)

## Description

Stipend-based contract term including minimum hours and amount

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Term identifier (string UID) |
| `createDate` | [`String`](../scalars/String.md) | Creation date of the term |
| `modifyDate` | [`String`](../scalars/String.md) | Last modification date of the term |
| `changeDate` | [`String`](../scalars/String.md) | Effective change date |
| `createdBy` | [`ContractUser`](ContractUser.md) | User who created the term |
| `creatorUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the creator |
| `changedBy` | [`ContractUser`](ContractUser.md) | User who last changed the term |
| `minGuaranteedHours` | [`String`](../scalars/String.md) | Minimum guaranteed hours |
| `stipendAmount` | [`Money`](Money.md) | Stipend amount |
| `startDate` | [`String`](../scalars/String.md) | Start date of the term |
| `changingUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the last change |
| `endDate` | [`String`](../scalars/String.md) | End date of the term |
| `jobType` | [`JobType`](../enums/JobType.md) | Engagement payment type for the term |
| `ptcData` | [`PtcData`](PtcData.md) | Protected time calculation period |

## Examples

### Example

```json
{
  "id": "4",
  "createDate": "abc123",
  "modifyDate": "abc123",
  "changeDate": "xyz789",
  "createdBy": ContractUser,
  "creatorUserType": "CLIENT",
  "changedBy": ContractUser,
  "minGuaranteedHours": "abc123",
  "stipendAmount": Money,
  "startDate": "xyz789",
  "changingUserType": "CLIENT",
  "endDate": "abc123",
  "jobType": "FIXED",
  "ptcData": PtcData
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StipendContractTerm" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PurchaseOrder](PurchaseOrder.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [StipendTerms](StipendTerms.md) ➡️
