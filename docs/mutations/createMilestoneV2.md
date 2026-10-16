---
title: "createMilestoneV2"
kind: "mutation"
gql_name: "createMilestoneV2"
returns: "Milestone"
html_id: "mutation-createMilestoneV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createMilestoneV2"
generated_by: "scripts/convert.mjs"
---


# `createMilestoneV2`

## Description

Client creates a new milestone (V2)

## Required Permissions

"Offer - Read And Write Access"

## Response

Returns a [`Milestone`](../types/Milestone.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `input` | [`CreateMilestoneInput!`](../inputs/CreateMilestoneInput.md) | Milestone creation details |

## Examples

### Detailed structure

#### Query

```graphql
mutation createMilestoneV2($input: CreateMilestoneInput!) {
  createMilestoneV2(input: $input) {
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
{"input": CreateMilestoneInput}
```

#### Response

```json
{
  "data": {
    "createMilestoneV2": {
      "id": "4",
      "createdBy": GenericUser,
      "dueDateTime": "abc123",
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
      "sequenceId": 987,
      "payComments": "xyz789",
      "lastSubmissionCreatedTime": "xyz789",
      "createdDateTime": "xyz789",
      "modifiedDateTime": "abc123",
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
mutation CreateOfferMilestone($input: CreateMilestoneInput!) {
  createMilestoneV2(input: $input) {
    id
    description
    state
    dueDateTime
    depositAmount {
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
    "offerId": "114170339",
    "description": "API validation milestone from checklist",
    "depositAmount": "7500",
    "dueDate": "2026-09-01"
  }
}
```

#### Response

```json
{
  "data": {
    "createMilestoneV2": {
      "id": "16349042",
      "description": "API validation milestone phase 2",
      "state": "NotFunded",
      "dueDateTime": "2026-08-01T00:00:00.000Z",
      "depositAmount": {
        "displayValue": "50.00"
      }
    }
  }
}
```

## Used in sample flows

- Step **1** (Create milestone) in [Working with Milestones Sample Flow](../operations/examples/milestones.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createMilestoneV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [approveMilestone](approveMilestone.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [createOffer](createOffer.md) ➡️
