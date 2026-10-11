---
title: "TimeReport"
kind: "object"
domain: "Reporting"
gql_name: "TimeReport"
html_id: "definition-TimeReport"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TimeReport"
generated_by: "scripts/convert.mjs"
---


# `TimeReport` (object)

## Description

Detailed time report for work performed on a contract

## Fields

| Field | Type | Description |
|---|---|---|
| `dateWorkedOn` | [`String!`](../scalars/String.md) | Date of the time report |
| `weekWorkedOn` | [`String!`](../scalars/String.md) | Week of the time report |
| `monthWorkedOn` | [`String!`](../scalars/String.md) | Month of the time report |
| `yearWorkedOn` | [`String!`](../scalars/String.md) | Year of the time report |
| `freelancer` | [`GenericUser`](GenericUser.md) | User associated with the time report |
| `team` | [`GenericOrganization`](GenericOrganization.md) | Team associated with the time report |
| ⚠️ `contractOffer` | [`ContractOfferResult`](ContractOfferResult.md) | Contract-Offer associated with the time report **⚠️ Deprecated — Use contract** |
| `contract` | [`ContractDetails`](ContractDetails.md) |  |
| `termId` | [`ID`](../scalars/ID.md) | The active termId of the contract |
| `task` | [`String`](../scalars/String.md) | Task associated with the time report |
| `taskDescription` | [`String`](../scalars/String.md) | Task description associated with the time report |
| `memo` | [`String`](../scalars/String.md) | Memo associated with the time report |
| `totalHoursWorked` | [`Float`](../scalars/Float.md) | Total hours worked for the time report |
| `totalCharges` | [`Float`](../scalars/Float.md) | Total charges made for the time report |
| `totalOnlineHoursWorked` | [`Float`](../scalars/Float.md) | Total online hours worked for the time report |
| `totalOnlineCharge` | [`Float`](../scalars/Float.md) | Total charges made for online work for the time report |
| `totalOfflineHoursWorked` | [`Float`](../scalars/Float.md) | Total offline hours worked for the time report |
| `totalOfflineCharge` | [`Float`](../scalars/Float.md) | Total charges made for offline work for the time report |
| `billRate` | [`BillRate`](BillRate.md) | Bill rate associated with the time report |

## Examples

### Example

```json
{
  "dateWorkedOn": "xyz789",
  "weekWorkedOn": "abc123",
  "monthWorkedOn": "xyz789",
  "yearWorkedOn": "xyz789",
  "freelancer": GenericUser,
  "team": GenericOrganization,
  "contractOffer": ContractOfferResult,
  "contract": ContractDetails,
  "termId": "4",
  "task": "xyz789",
  "taskDescription": "abc123",
  "memo": "abc123",
  "totalHoursWorked": 123.45,
  "totalCharges": 123.45,
  "totalOnlineHoursWorked": 987.65,
  "totalOnlineCharge": 123.45,
  "totalOfflineHoursWorked": 123.45,
  "totalOfflineCharge": 123.45,
  "billRate": BillRate
}
```
