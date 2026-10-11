---
title: "VendorInvitationAcceptanceDetails"
kind: "object"
domain: "Proposals"
gql_name: "VendorInvitationAcceptanceDetails"
html_id: "definition-VendorInvitationAcceptanceDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-VendorInvitationAcceptanceDetails"
generated_by: "scripts/convert.mjs"
---


# `VendorInvitationAcceptanceDetails` (object)

## Description

Details related to acceptance of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `bidAmount` | [`Money`](Money.md) | Amount and currency details of the bid |
| `duration` | [`String`](../scalars/String.md) | Duration of the contract |
| `upfrontPaymentPercent` | [`Float`](../scalars/Float.md) | Upfront payment to be paid to freelancer/agency |
| `attachments` | [`[String!]`](../scalars/String.md) | List of attachments |
| `coverLetter` | [`String`](../scalars/String.md) | Cover letter sent by freelancer/agency |
| `jobProposal` | [`ClientProposal`](ClientProposal.md) | Proposal associated with the invitation |
| `questionsAnswers` | [`[ProposalQuestionAnswer]`](ProposalQuestionAnswer.md) | Questions and Answers responded by the freelancer |
| `occupation` | [`Occupation`](Occupation.md) | Occupation under which the vendor has accepted the invitation |
| `acceptanceContext` | [`VendorInvitationAcceptanceContext`](VendorInvitationAcceptanceContext.md) | Organization associated with the context |
| `portfolios` | [`[InvitationPortfolio!]`](InvitationPortfolio.md) | List of portfolios selected by freelancer while applying |

## Examples

### Example

```json
{
  "bidAmount": Money,
  "duration": "abc123",
  "upfrontPaymentPercent": 123.45,
  "attachments": ["abc123"],
  "coverLetter": "abc123",
  "jobProposal": ClientProposal,
  "questionsAnswers": [ProposalQuestionAnswer],
  "occupation": Occupation,
  "acceptanceContext": VendorInvitationAcceptanceContext,
  "portfolios": [InvitationPortfolio]
}
```
