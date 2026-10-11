---
title: "FixedPriceContractTerm"
kind: "object"
domain: "Offers and Contracts"
gql_name: "FixedPriceContractTerm"
html_id: "definition-FixedPriceContractTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FixedPriceContractTerm"
generated_by: "scripts/convert.mjs"
---


# `FixedPriceContractTerm` (object)

## Description

Fixed price contract term including amounts and milestones

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Term identifier (UID) |
| `fpCharge` | [`Money`](Money.md) | Fixed price charge amount |
| `fixedAmount` | [`Money`](Money.md) | Fixed amount agreed for the term |
| `createDate` | [`String`](../scalars/String.md) | Creation date of the term |
| `modifyDate` | [`String`](../scalars/String.md) | Last modification date of the term |
| `changeDate` | [`String`](../scalars/String.md) | Effective change date |
| `createdBy` | [`ContractUser`](ContractUser.md) | User who created the term |
| `creatorUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the creator |
| `changedBy` | [`ContractUser`](ContractUser.md) | User who last changed the term |
| `startDate` | [`String`](../scalars/String.md) | Start date of the term |
| `changingUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the last change |
| `isFP2` | [`Boolean`](../scalars/Boolean.md) | Indicates usage of FP2 |
| `endDate` | [`String`](../scalars/String.md) | End date of the term |
| `jobType` | [`JobType`](../enums/JobType.md) | Engagement payment type for the term |
| `ptcData` | [`PtcData`](PtcData.md) | Protected time calculation period |
| `milestones` | [`[Milestone]`](Milestone.md) | Milestones under this fixed-price term |

## Field arguments

### `milestones`

| Argument | Type | Description |
|---|---|---|
| `includeAttachments` | [`Boolean`](../scalars/Boolean.md) | Flag to indicate whether attachment details will be included in the response. |

## Examples

### Example

```json
{
  "id": "4",
  "fpCharge": Money,
  "fixedAmount": Money,
  "createDate": "abc123",
  "modifyDate": "abc123",
  "changeDate": "abc123",
  "createdBy": ContractUser,
  "creatorUserType": "CLIENT",
  "changedBy": ContractUser,
  "startDate": "xyz789",
  "changingUserType": "CLIENT",
  "isFP2": true,
  "endDate": "abc123",
  "jobType": "FIXED",
  "ptcData": PtcData,
  "milestones": [Milestone]
}
```
