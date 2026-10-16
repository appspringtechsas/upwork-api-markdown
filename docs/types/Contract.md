---
title: "Contract"
kind: "object"
domain: "Offers and Contracts"
gql_name: "Contract"
html_id: "definition-Contract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Contract"
generated_by: "scripts/convert.mjs"
---


# `Contract` (object)

## Description

This schema represents contract data. Note: This is the legacy contract schema implementation, which has been modernized with the ContractDetails schema.

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Primary key of the contract. Equivalent to the ID of the contract term in ContractDetails. Represents the ID of the latest term associated with the contract. This value updates whenever a new term is created. It will match the contractId as long as there is only a single term. |
| `termId` | [`ID!`](../scalars/ID.md) | Term ID |
| `title` | [`String`](../scalars/String.md) | Contract title |
| `contractType` | [`ContractType`](../enums/ContractType.md) | Type of contract (hourly, fixed, etc.) |
| `job` | [`MarketplaceJobPosting`](MarketplaceJobPosting.md) | Job rid |
| `hasAgency` | [`Boolean`](../scalars/Boolean.md) | Provider has agency |
| `offer` | [`Offer!`](Offer.md) | Associated offer |
| `clientProposal` | [`ClientProposal`](ClientProposal.md) | Client proposal associated with the contract |
| `vendorProposal` | [`VendorProposal`](VendorProposal.md) | Job Application associated with the contract |
| `weeklyChargeAmount` | [`Money`](Money.md) | Weekly charge amount |
| `weeklyHoursLimit` | [`Float`](../scalars/Float.md) | Weekly hours limit |
| `hourlyChargeRate` | [`Money`](Money.md) | Hourly charge rate |
| `createdDateTime` | [`String`](../scalars/String.md) | Contract creation timestamp |
| `firstContractStartDateTime` | [`String`](../scalars/String.md) | First contract start timestamp |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Last modification timestamp |
| `startDateTime` | [`String`](../scalars/String.md) | Contract start timestamp |
| `endDateTime` | [`String`](../scalars/String.md) | Contract end timestamp |
| `manualTimeAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether manual time logging is allowed |
| ⚠️ `hideScreenshots` | [`Boolean`](../scalars/Boolean.md) | Whether screenshots are hidden **⚠️ Deprecated — Will be removed in future release** |
| `last` | [`Boolean`](../scalars/Boolean.md) | Whether this is the last contract term |
| `weeklyStipendHours` | [`Float`](../scalars/Float.md) | Weekly stipend hours |
| ⚠️ `estimatedDuration` | [`ProposalEngagementDuration`](ProposalEngagementDuration.md) | Estimated engagement duration **⚠️ Deprecated — Will be removed in future release** |
| `status` | [`ContractState`](../enums/ContractState.md) | Current contract status |
| ⚠️ `suspended` | [`Boolean`](../scalars/Boolean.md) | Whether the contract is suspended **⚠️ Deprecated — Will be removed in future release, use developerSuspended/companySuspended in place** |
| `freelancer` | [`FreelancerProfile`](FreelancerProfile.md) | Freelancer profile |
| `paused` | [`Boolean`](../scalars/Boolean.md) | Whether the contract is paused |
| `clientCompany` | [`PublicCompanyInfo`](PublicCompanyInfo.md) | Public company information |
| `milestones` | [`[Milestone]`](Milestone.md) | Milestones associated with the offer |
| `contractId` | [`ID`](../scalars/ID.md) | Contract identifier. Represents the original contract ID and remains constant, regardless of how many terms are associated with the contract. |
| `workDays` | [`[WorkDay!]!`](WorkDay.md) |  |
| `workDiaryTimeCells` | [`[WorkDiaryTimeCell!]`](WorkDiaryTimeCell.md) | work diary of the current contract |
| `feedback` | [`Feedback`](Feedback.md) | Contract feedback summary |

## Field arguments

### `workDays`

| Argument | Type | Description |
|---|---|---|
| `timeRange` | [`DateTimeRange!`](../inputs/DateTimeRange.md) |  |
| `offset` | [`Int`](../scalars/Int.md) |  |

### `workDiaryTimeCells`

| Argument | Type | Description |
|---|---|---|
| `date` | [`String!`](../scalars/String.md) |  |
| `offsetInSeconds` | [`Int`](../scalars/Int.md) |  |

## Examples

### Example

```json
{
  "id": 4,
  "termId": 4,
  "title": "xyz789",
  "contractType": "HOURLY",
  "job": MarketplaceJobPosting,
  "hasAgency": false,
  "offer": Offer,
  "clientProposal": ClientProposal,
  "vendorProposal": VendorProposal,
  "weeklyChargeAmount": Money,
  "weeklyHoursLimit": 987.65,
  "hourlyChargeRate": Money,
  "createdDateTime": "abc123",
  "firstContractStartDateTime": "abc123",
  "modifiedDateTime": "abc123",
  "startDateTime": "abc123",
  "endDateTime": "abc123",
  "manualTimeAllowed": true,
  "hideScreenshots": false,
  "last": false,
  "weeklyStipendHours": 987.65,
  "estimatedDuration": ProposalEngagementDuration,
  "status": "ACTIVE",
  "suspended": true,
  "freelancer": FreelancerProfile,
  "paused": true,
  "clientCompany": PublicCompanyInfo,
  "milestones": [Milestone],
  "contractId": "4",
  "workDays": [WorkDay],
  "workDiaryTimeCells": [WorkDiaryTimeCell],
  "feedback": Feedback
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Contract" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClosingReason](ClosingReason.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ContractActionResponse](ContractActionResponse.md) ➡️
