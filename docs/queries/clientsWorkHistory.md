---
title: "clientsWorkHistory"
kind: "query"
gql_name: "clientsWorkHistory"
returns: "[BuyerWorkHistoryItem]"
html_id: "query-clientsWorkHistory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-clientsWorkHistory"
generated_by: "scripts/convert.mjs"
---


# `clientsWorkHistory`

## Description

Fetch client's work history

## Required Permissions

"Job Details Entities - Read-Only Access"

## Response

Returns [`[BuyerWorkHistoryItem]`](../types/BuyerWorkHistoryItem.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobId` | [`ID!`](../scalars/ID.md) | job ID |

## Examples

### Detailed structure

#### Query

```graphql
query clientsWorkHistory($jobId: ID!) {
  clientsWorkHistory(jobId: $jobId) {
    contractorInfo {
      ...ContractorInfoFragment
    }
    endDate
    feedback {
      ...BuyerWorkHistoryFeedbackFragment
    }
    feedbackToClient {
      ...BuyerWorkHistoryFeedbackFragment
    }
    jobInfo {
      ...BuyerWorkHistoryJobInfoFragment
    }
    rate {
      ...JobDetailsMoneyFragment
    }
    startDate
    status
    totalCharge
    totalHours
  }
}
```

#### Variables

```json
{"jobId": 4}
```

#### Response

```json
{
  "data": {
    "clientsWorkHistory": [
      {
        "contractorInfo": ContractorInfo,
        "endDate": "xyz789",
        "feedback": BuyerWorkHistoryFeedback,
        "feedbackToClient": BuyerWorkHistoryFeedback,
        "jobInfo": BuyerWorkHistoryJobInfo,
        "rate": JobDetailsMoney,
        "startDate": "xyz789",
        "status": "ACTIVE",
        "totalCharge": 123.45,
        "totalHours": 123.45
      }
    ]
  }
}
```
