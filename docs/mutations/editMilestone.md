---
title: "editMilestone"
kind: "mutation"
gql_name: "editMilestone"
returns: "Milestone!"
html_id: "mutation-editMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-editMilestone"
generated_by: "scripts/convert.mjs"
---


# `editMilestone`

## Description

Client edits an existing milestone

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Milestone!`](../types/Milestone.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`EditMilestoneInput`](../inputs/EditMilestoneInput.md) | Milestone update details |

## Examples

### Detailed structure

#### Query

```graphql
mutation editMilestone($input: EditMilestoneInput) {
  editMilestone(input: $input) {
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
{"input": EditMilestoneInput}
```

#### Response

```json
{
  "data": {
    "editMilestone": {
      "id": "4",
      "createdBy": GenericUser,
      "dueDateTime": "xyz789",
      "state": "NotFunded",
      "description": "xyz789",
      "currentEscrowAmount": Money,
      "depositAmount": Money,
      "fundedAmount": Money,
      "paid": Money,
      "overpayment": Money,
      "bonus": Money,
      "previousMilestoneUnusedDeposit": Money,
      "submissionCount": 987,
      "sequenceId": 123,
      "payComments": "abc123",
      "lastSubmissionCreatedTime": "abc123",
      "createdDateTime": "xyz789",
      "modifiedDateTime": "abc123",
      "instructions": "xyz789",
      "submissionEvents": [SubmissionEvent],
      "submissions": [MilestoneSubmissions]
    }
  }
}
```
