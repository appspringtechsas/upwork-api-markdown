---
title: "contractByTerm"
kind: "query"
gql_name: "contractByTerm"
returns: "ContractDetails!"
html_id: "query-contractByTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractByTerm"
generated_by: "scripts/convert.mjs"
---


# `contractByTerm`

## Description

Get contract data by term id

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractDetails!`](../types/ContractDetails.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `termId` | [`ID!`](../scalars/ID.md) | Contract term ID, legacy contract assignment RID |
| `date` | [`String`](../scalars/String.md) | Date in ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd |

## Examples

### Detailed structure

#### Query

```graphql
query contractByTerm(
  $termId: ID!,
  $date: String
) {
  contractByTerm(
    termId: $termId,
    date: $date
  ) {
    id
    title
    status
    closingReason {
      ...ClosingReasonFragment
    }
    deliveryModel
    kind
    isPtc
    createDate
    modifyDate
    startDate
    endDate
    offer {
      ...OfferFragment
    }
    offerId
    job {
      ...JobPostingFragment
    }
    freelancer {
      ...ContractUserFragment
    }
    vendorOrganization {
      ...GenericOrganizationFragment
    }
    vendorTeam {
      ...GenericOrganizationFragment
    }
    clientOrganization {
      ...GenericOrganizationFragment
    }
    clientTeam {
      ...GenericOrganizationFragment
    }
    hiringManager {
      ...ContractUserFragment
    }
    agencyManager {
      ...ContractUserFragment
    }
    supervisor {
      ...ContractUserFragment
    }
    changingUserType
    changedBy {
      ...ContractUserFragment
    }
    endedBy {
      ...ContractUserFragment
    }
    metadata {
      ...ContractMetadataFragment
    }
    hourlyLimits {
      ...HourlyLimitFragment
    }
    terms {
      ...ContractTermsFragment
    }
    projectId
  }
}
```

#### Variables

```json
{
  "termId": "4",
  "date": "abc123"
}
```

#### Response

```json
{
  "data": {
    "contractByTerm": {
      "id": "4",
      "title": "abc123",
      "status": "ACTIVE",
      "closingReason": ClosingReason,
      "deliveryModel": "TALENT_MARKETPLACE",
      "kind": "WEEKLY_RETAINER",
      "isPtc": true,
      "createDate": "xyz789",
      "modifyDate": "abc123",
      "startDate": "xyz789",
      "endDate": "abc123",
      "offer": Offer,
      "offerId": 4,
      "job": JobPosting,
      "freelancer": ContractUser,
      "vendorOrganization": GenericOrganization,
      "vendorTeam": GenericOrganization,
      "clientOrganization": GenericOrganization,
      "clientTeam": GenericOrganization,
      "hiringManager": ContractUser,
      "agencyManager": ContractUser,
      "supervisor": ContractUser,
      "changingUserType": "CLIENT",
      "changedBy": ContractUser,
      "endedBy": ContractUser,
      "metadata": ContractMetadata,
      "hourlyLimits": [HourlyLimit],
      "terms": ContractTerms,
      "projectId": 4
    }
  }
}
```
