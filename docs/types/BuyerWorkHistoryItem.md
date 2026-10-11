---
title: "BuyerWorkHistoryItem"
kind: "object"
domain: "Other"
gql_name: "BuyerWorkHistoryItem"
html_id: "definition-BuyerWorkHistoryItem"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-BuyerWorkHistoryItem"
generated_by: "scripts/convert.mjs"
---


# `BuyerWorkHistoryItem` (object)

## Description

Client's work history

## Fields

| Field | Type | Description |
|---|---|---|
| `contractorInfo` | [`ContractorInfo`](ContractorInfo.md) | Contractor information |
| `endDate` | [`String`](../scalars/String.md) | End date |
| `feedback` | [`BuyerWorkHistoryFeedback`](BuyerWorkHistoryFeedback.md) | Client's feedback to freelancer |
| `feedbackToClient` | [`BuyerWorkHistoryFeedback`](BuyerWorkHistoryFeedback.md) | Freelancer's feedback to client |
| `jobInfo` | [`BuyerWorkHistoryJobInfo`](BuyerWorkHistoryJobInfo.md) | Job information |
| `rate` | [`JobDetailsMoney`](JobDetailsMoney.md) | Rate |
| `startDate` | [`String`](../scalars/String.md) | Start date |
| `status` | [`JobOpeningStatus`](../enums/JobOpeningStatus.md) | Job opening Status |
| `totalCharge` | [`Float`](../scalars/Float.md) | Total charge |
| `totalHours` | [`Float`](../scalars/Float.md) | Total hours |

## Examples

### Example

```json
{
  "contractorInfo": ContractorInfo,
  "endDate": "xyz789",
  "feedback": BuyerWorkHistoryFeedback,
  "feedbackToClient": BuyerWorkHistoryFeedback,
  "jobInfo": BuyerWorkHistoryJobInfo,
  "rate": JobDetailsMoney,
  "startDate": "xyz789",
  "status": "ACTIVE",
  "totalCharge": 987.65,
  "totalHours": 987.65
}
```
