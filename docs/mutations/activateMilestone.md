---
title: "activateMilestone"
kind: "mutation"
gql_name: "activateMilestone"
returns: "Milestone!"
html_id: "mutation-activateMilestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-activateMilestone"
generated_by: "scripts/convert.mjs"
---


# `activateMilestone`

## Description

Client activates an existing milestone Note: if the client is an enterprise, the milestone will be activated immediately. If not, the unified checkout will be created, and the activation will be done asynchronously provided that the checkout is fulfilled successfully

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Milestone!`](../types/Milestone.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`ActivateMilestoneInput`](../inputs/ActivateMilestoneInput.md) | Milestone activation details |

## Examples

### Detailed structure

#### Query

```graphql
mutation activateMilestone($input: ActivateMilestoneInput) {
  activateMilestone(input: $input) {
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
{"input": ActivateMilestoneInput}
```

#### Response

```json
{
  "data": {
    "activateMilestone": {
      "id": 4,
      "createdBy": GenericUser,
      "dueDateTime": "abc123",
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
      "sequenceId": 987,
      "payComments": "abc123",
      "lastSubmissionCreatedTime": "abc123",
      "createdDateTime": "xyz789",
      "modifiedDateTime": "xyz789",
      "instructions": "xyz789",
      "submissionEvents": [SubmissionEvent],
      "submissions": [MilestoneSubmissions]
    }
  }
}
```
