---
title: "contract"
kind: "query"
gql_name: "contract"
returns: "Contract"
deprecated: "Will be removed in future release. Use contractByTerm with modernised ContractDetails schema"
html_id: "query-contract"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contract"
generated_by: "scripts/convert.mjs"
---


# `contract`

> ⚠️ **Deprecated:** Will be removed in future release. Use contractByTerm with modernised ContractDetails schema

## Description

Fetch contract information by ID. Note: The provided 'id' corresponds to the id of the contract term in the ContractDetails schema.

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`Contract`](../types/Contract.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract identifier |

## Examples

### Detailed structure

#### Query

```graphql
query contract($id: ID!) {
  contract(id: $id) {
    id
    termId
    title
    contractType
    job {
      ...MarketplaceJobPostingFragment
    }
    hasAgency
    offer {
      ...OfferFragment
    }
    clientProposal {
      ...ClientProposalFragment
    }
    vendorProposal {
      ...VendorProposalFragment
    }
    weeklyChargeAmount {
      ...MoneyFragment
    }
    weeklyHoursLimit
    hourlyChargeRate {
      ...MoneyFragment
    }
    createdDateTime
    firstContractStartDateTime
    modifiedDateTime
    startDateTime
    endDateTime
    manualTimeAllowed
    hideScreenshots
    last
    weeklyStipendHours
    estimatedDuration {
      ...ProposalEngagementDurationFragment
    }
    status
    suspended
    freelancer {
      ...FreelancerProfileFragment
    }
    paused
    clientCompany {
      ...PublicCompanyInfoFragment
    }
    milestones {
      ...MilestoneFragment
    }
    contractId
    workDays {
      ...WorkDayFragment
    }
    workDiaryTimeCells {
      ...WorkDiaryTimeCellFragment
    }
    feedback {
      ...FeedbackFragment
    }
  }
}
```

#### Variables

```json
{"id": "4"}
```

#### Response

```json
{
  "data": {
    "contract": {
      "id": "4",
      "termId": 4,
      "title": "abc123",
      "contractType": "HOURLY",
      "job": MarketplaceJobPosting,
      "hasAgency": true,
      "offer": Offer,
      "clientProposal": ClientProposal,
      "vendorProposal": VendorProposal,
      "weeklyChargeAmount": Money,
      "weeklyHoursLimit": 123.45,
      "hourlyChargeRate": Money,
      "createdDateTime": "xyz789",
      "firstContractStartDateTime": "xyz789",
      "modifiedDateTime": "xyz789",
      "startDateTime": "abc123",
      "endDateTime": "xyz789",
      "manualTimeAllowed": false,
      "hideScreenshots": true,
      "last": true,
      "weeklyStipendHours": 123.45,
      "estimatedDuration": ProposalEngagementDuration,
      "status": "ACTIVE",
      "suspended": true,
      "freelancer": FreelancerProfile,
      "paused": true,
      "clientCompany": PublicCompanyInfo,
      "milestones": [Milestone],
      "contractId": 4,
      "workDays": [WorkDay],
      "workDiaryTimeCells": [WorkDiaryTimeCell],
      "feedback": Feedback
    }
  }
}
```
