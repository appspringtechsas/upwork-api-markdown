---
title: "approveMilestone"
kind: "mutation"
gql_name: "approveMilestone"
returns: "Milestone!"
html_id: "mutation-approveMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-approveMilestone"
generated_by: "scripts/convert.mjs"
---


# `approveMilestone`

## Description

Approves a milestone

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Milestone!`](../types/Milestone.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`ApproveMilestoneInput!`](../inputs/ApproveMilestoneInput.md) | Milestone approval details |

## Examples

### Detailed structure

#### Query

```graphql
mutation approveMilestone($input: ApproveMilestoneInput!) {
  approveMilestone(input: $input) {
    id
    createdBy {
      ...GenericUserFragment
    }
    dueDateTime
    state
    description
    currentEscrowAmount {
      ...MoneyFragment
    }
    depositAmount {
      ...MoneyFragment
    }
    fundedAmount {
      ...MoneyFragment
    }
    paid {
      ...MoneyFragment
    }
    overpayment {
      ...MoneyFragment
    }
    bonus {
      ...MoneyFragment
    }
    previousMilestoneUnusedDeposit {
      ...MoneyFragment
    }
    submissionCount
    sequenceId
    payComments
    lastSubmissionCreatedTime
    createdDateTime
    modifiedDateTime
    instructions
    submissionEvents {
      ...SubmissionEventFragment
    }
    submissions {
      ...MilestoneSubmissionsFragment
    }
  }
}
```

#### Variables

```json
{"input": ApproveMilestoneInput}
```

#### Response

```json
{
  "data": {
    "approveMilestone": {
      "id": 4,
      "createdBy": GenericUser,
      "dueDateTime": "xyz789",
      "state": "NotFunded",
      "description": "abc123",
      "currentEscrowAmount": Money,
      "depositAmount": Money,
      "fundedAmount": Money,
      "paid": Money,
      "overpayment": Money,
      "bonus": Money,
      "previousMilestoneUnusedDeposit": Money,
      "submissionCount": 987,
      "sequenceId": 123,
      "payComments": "xyz789",
      "lastSubmissionCreatedTime": "xyz789",
      "createdDateTime": "abc123",
      "modifiedDateTime": "xyz789",
      "instructions": "abc123",
      "submissionEvents": [SubmissionEvent],
      "submissions": [MilestoneSubmissions]
    }
  }
}
```

### Real-life example

#### Query

```graphql
mutation ApproveMilestone($input: ApproveMilestoneInput!) {
  approveMilestone(input: $input) {
    id
    state
    paid {
      displayValue
      currency
    }
  }
}
```

#### Variables

```json
{
  "input": {
    "id": "16356263",
    "paidAmount": "757862",
    "noteToContractor": "Approved via API validation — thanks!"
  }
}
```

#### Response

```json
{
  "data": {
    "approveMilestone": {
      "id": "16356263",
      "state": "Paid",
      "paid": {
        "displayValue": "7578.62"
      }
    }
  }
}
```
