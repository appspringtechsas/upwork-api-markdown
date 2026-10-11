---
title: "HourlyContractTerm"
kind: "object"
domain: "Offers and Contracts"
gql_name: "HourlyContractTerm"
html_id: "definition-HourlyContractTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyContractTerm"
generated_by: "scripts/convert.mjs"
---


# `HourlyContractTerm` (object)

## Description

Hourly contract term including rate and dates

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Term identifier (UID) |
| `hourlyRate` | [`Money`](Money.md) | Hourly rate applied during the term |
| `createDate` | [`String`](../scalars/String.md) | Creation date of the term |
| `modifyDate` | [`String`](../scalars/String.md) | Last modification date of the term |
| `changeDate` | [`String`](../scalars/String.md) | Effective change date |
| `createdBy` | [`ContractUser`](ContractUser.md) | User who created the term |
| `creatorUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the creator |
| `changedBy` | [`ContractUser`](ContractUser.md) | User who last changed the term |
| `startDate` | [`String`](../scalars/String.md) | Start date of the term |
| `changingUserType` | [`CreatorType`](../enums/CreatorType.md) | Actor type for the last change |
| `manualTimeAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether manual time is allowed during the term |
| `endDate` | [`String`](../scalars/String.md) | End date of the term |
| `jobType` | [`JobType`](../enums/JobType.md) | Engagement payment type for the term |
| `ptcData` | [`PtcData`](PtcData.md) | Protected time calculation period |

## Examples

### Example

```json
{
  "id": 4,
  "hourlyRate": Money,
  "createDate": "xyz789",
  "modifyDate": "abc123",
  "changeDate": "abc123",
  "createdBy": ContractUser,
  "creatorUserType": "CLIENT",
  "changedBy": ContractUser,
  "startDate": "abc123",
  "changingUserType": "CLIENT",
  "manualTimeAllowed": false,
  "endDate": "abc123",
  "jobType": "FIXED",
  "ptcData": PtcData
}
```
