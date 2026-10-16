---
title: "FreelancerProfileContract"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileContract"
html_id: "definition-FreelancerProfileContract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileContract"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileContract` (object)

## Description

Freelancer's Contracts

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract identifier |
| `description` | [`String`](../scalars/String.md) | Contract description |
| `title` | [`String!`](../scalars/String.md) | Contract title |
| `clientOrganization` | [`GenericOrganization!`](GenericOrganization.md) | The client organization involved in this contract |
| `type` | [`FreelancerProfileContractType!`](../enums/FreelancerProfileContractType.md) | Fixed or hourly contract |
| `accessType` | [`FreelancerProfileContractAccessType!`](../enums/FreelancerProfileContractAccessType.md) | Public or private |
| `private` | [`Boolean!`](../scalars/Boolean.md) | Whether the contract is private |
| `job` | [`JobPosting!`](JobPosting.md) | The job opening/posting that is associated with the contract |
| `startDateTime` | [`String!`](../scalars/String.md) | When did the contract start |
| `endDateTime` | [`String`](../scalars/String.md) | When will the contract end |
| `totalCharges` | [`Money`](Money.md) | Total money that was invoiced in this contract |
| `totalHours` | [`Float`](../scalars/Float.md) | Number of total hours spent on this contract |
| `hourlyRate` | [`Money`](Money.md) | Hourly rate used by the freelancer for this contract |
| `initialAmount` | [`Money`](Money.md) | Initial amount agreed for the contract |
| `feedbackToTheClient` | [`FreelancerProfileContractFeedback`](FreelancerProfileContractFeedback.md) | Feedback provided by the freelancer when the contract ended |
| `feedbackToTheFreelancer` | [`FreelancerProfileContractFeedback`](FreelancerProfileContractFeedback.md) | Feedback provided by the client to the freelancer when the contract ended |
| `isFromElance` | [`Boolean`](../scalars/Boolean.md) | This flag determines where this contract is from (either Elance or ODesk) |

## Examples

### Example

```json
{
  "id": 4,
  "description": "xyz789",
  "title": "xyz789",
  "clientOrganization": GenericOrganization,
  "type": "Fixed",
  "accessType": "PublicAccess",
  "private": false,
  "job": JobPosting,
  "startDateTime": "xyz789",
  "endDateTime": "xyz789",
  "totalCharges": Money,
  "totalHours": 987.65,
  "hourlyRate": Money,
  "initialAmount": Money,
  "feedbackToTheClient": FreelancerProfileContractFeedback,
  "feedbackToTheFreelancer": FreelancerProfileContractFeedback,
  "isFromElance": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileContract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileCompletenessSummary](FreelancerProfileCompletenessSummary.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfileContractFeedback](FreelancerProfileContractFeedback.md) ➡️
