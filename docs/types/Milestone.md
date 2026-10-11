---
title: "Milestone"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Milestone"
html_id: "definition-Milestone"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Milestone"
generated_by: "scripts/convert.mjs"
---


# `Milestone` (object)

## Description

Milestone information for fixed-price contracts

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | ID of the milestone |
| `createdBy` | [`GenericUser`](GenericUser.md) | User information who created the milestone |
| `dueDateTime` | [`String`](../scalars/String.md) | Due date time of the milestone |
| `state` | [`OfferMilestoneState`](../enums/OfferMilestoneState.md) | Current state of the offer |
| `description` | [`String`](../scalars/String.md) | Description available with the milestone |
| `currentEscrowAmount` | [`Money`](Money.md) | Current escrow amount |
| `depositAmount` | [`Money`](Money.md) | Deposit amount |
| `fundedAmount` | [`Money`](Money.md) | Funded amount |
| `paid` | [`Money`](Money.md) | Amount paid |
| `overpayment` | [`Money`](Money.md) | Overpayment amount |
| `bonus` | [`Money`](Money.md) | Bonus amount |
| `previousMilestoneUnusedDeposit` | [`Money`](Money.md) | Unused deposit from previous milestone |
| `submissionCount` | [`Int`](../scalars/Int.md) | Number of submissions |
| `sequenceId` | [`Int`](../scalars/Int.md) | The sequence in which the milestone is to be executed |
| `payComments` | [`String`](../scalars/String.md) | Payment comments |
| `lastSubmissionCreatedTime` | [`String`](../scalars/String.md) | Last submission creation time |
| `createdDateTime` | [`String`](../scalars/String.md) | Creation date for the milestone |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Update date for the milestone |
| `instructions` | [`String`](../scalars/String.md) | Milestone instructions |
| `submissionEvents` | [`[SubmissionEvent!]!`](SubmissionEvent.md) | Submission events |
| `submissions` | [`[MilestoneSubmissions!]`](MilestoneSubmissions.md) | Submission details for the milestone |

## Examples

### Example

```json
{
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
  "sequenceId": 123,
  "payComments": "abc123",
  "lastSubmissionCreatedTime": "abc123",
  "createdDateTime": "xyz789",
  "modifiedDateTime": "xyz789",
  "instructions": "xyz789",
  "submissionEvents": [SubmissionEvent],
  "submissions": [MilestoneSubmissions]
}
```
