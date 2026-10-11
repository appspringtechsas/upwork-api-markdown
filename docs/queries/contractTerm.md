---
title: "contractTerm"
kind: "query"
gql_name: "contractTerm"
returns: "ContractDetails!"
html_id: "query-contractTerm"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractTerm"
generated_by: "scripts/convert.mjs"
---


# `contractTerm`

## Description

Get contract and single term data

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractDetails!`](../types/ContractDetails.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `termId` | [`ID!`](../scalars/ID.md) | Contract term ID, legacy contract assignment RID |

## Examples

### Detailed structure

#### Query

```graphql
query contractTerm($termId: ID!) {
  contractTerm(termId: $termId) {
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
{"termId": 4}
```

#### Response

```json
{
  "data": {
    "contractTerm": {
      "id": "4",
      "title": "abc123",
      "status": "ACTIVE",
      "closingReason": ClosingReason,
      "deliveryModel": "TALENT_MARKETPLACE",
      "kind": "WEEKLY_RETAINER",
      "isPtc": false,
      "createDate": "abc123",
      "modifyDate": "xyz789",
      "startDate": "abc123",
      "endDate": "xyz789",
      "offer": Offer,
      "offerId": "4",
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
