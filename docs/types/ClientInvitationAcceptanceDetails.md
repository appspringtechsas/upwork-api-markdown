---
title: "ClientInvitationAcceptanceDetails"
kind: "object"
domain: "Proposals"
gql_name: "ClientInvitationAcceptanceDetails"
html_id: "definition-ClientInvitationAcceptanceDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationAcceptanceDetails"
generated_by: "scripts/convert.mjs"
---


# `ClientInvitationAcceptanceDetails` (object)

## Description

Details related to acceptance of the invitation

## Fields

| Field | Type | Description |
|---|---|---|
| `bidAmount` | [`Money`](Money.md) | Amount and currency details of the bid |
| `duration` | [`String`](../scalars/String.md) | Duration of the contract |
| `upfrontPaymentPercent` | [`Float`](../scalars/Float.md) | Upfront payment to be paid to freelancer/agency |
| `milestonesGroupId` | [`ID`](../scalars/ID.md) | GroupId of the milestones |
| `attachments` | [`[String!]`](../scalars/String.md) | List of attachments |
| `coverLetter` | [`String`](../scalars/String.md) | Cover letter sent by freelancer/agency |
| `room` | [`Room`](Room.md) | Room created for the proposal |
| `jobProposal` | [`VendorProposal`](VendorProposal.md) | Proposal associated with the invitation |
| `questionsAnswers` | [`[ProposalQuestionAnswer]`](ProposalQuestionAnswer.md) | Questions and Answers responded by the freelancer |
| `occupation` | [`Occupation`](Occupation.md) | Occupation under which the vendor has accepted the invitation |
| `acceptanceContext` | [`ClientInvitationAcceptanceContext`](ClientInvitationAcceptanceContext.md) | Organization associated with the context |
| `portfolios` | [`[InvitationPortfolio!]`](InvitationPortfolio.md) | List of portfolios selected by freelancer while applying |

## Examples

### Example

```json
{
  "bidAmount": Money,
  "duration": "abc123",
  "upfrontPaymentPercent": 987.65,
  "milestonesGroupId": "4",
  "attachments": ["abc123"],
  "coverLetter": "xyz789",
  "room": Room,
  "jobProposal": VendorProposal,
  "questionsAnswers": [ProposalQuestionAnswer],
  "occupation": Occupation,
  "acceptanceContext": ClientInvitationAcceptanceContext,
  "portfolios": [InvitationPortfolio]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientInvitationAcceptanceDetails" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientInvitationAcceptanceContext](ClientInvitationAcceptanceContext.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientInvitationAdditionalInfo](ClientInvitationAdditionalInfo.md) ➡️
