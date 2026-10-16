---
title: "contractDetails"
kind: "query"
gql_name: "contractDetails"
returns: "ContractDetails!"
html_id: "query-contractDetails"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractDetails"
generated_by: "scripts/convert.mjs"
---


# `contractDetails`

## Description

Get contract data by contract id.

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns a [`ContractDetails!`](../types/ContractDetails.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Contract ID, legacy virtual rollup ID |
| `date` | [`String`](../scalars/String.md) | Returns only active terms on the given date. Date in ISO format yyyy-MM-ddThh:mm+HHmm or yyyy-MM-dd |

## Examples

### Detailed structure

#### Query

```graphql
query contractDetails(
  $id: ID!,
  $date: String
) {
  contractDetails(
    id: $id,
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
  "id": "4",
  "date": "xyz789"
}
```

#### Response

```json
{
  "data": {
    "contractDetails": {
      "id": "4",
      "title": "abc123",
      "status": "ACTIVE",
      "closingReason": ClosingReason,
      "deliveryModel": "TALENT_MARKETPLACE",
      "kind": "WEEKLY_RETAINER",
      "isPtc": true,
      "createDate": "xyz789",
      "modifyDate": "abc123",
      "startDate": "abc123",
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

### Real-life example

#### Query

```graphql
query ContractDetails($contractId: ID!) {
  contractDetails(id: $contractId) {
    id
    title
    status
    kind
    startDate
    endDate
    offer {
      id
      title
    }
    terms {
      fixedPriceTerms {
        fpCharge {
          displayValue
        }
        milestones {
          id
          description
          state
        }
      }
      hourlyTerms {
        hourlyRate {
          displayValue
        }
      }
    }
  }
}
```

#### Variables

```json
{"contractId": "32325107"}
```

#### Response

```json
{
  "data": {
    "contractDetails": {
      "id": "32325107",
      "title": "Title: the offer made by client c6051822169yg8f0 to contractor f6052013195hkijl on Wed May 20 20:27:19 GMT 2026 as part of release testing by Upwork QA",
      "status": "ACTIVE",
      "kind": null,
      "startDate": "2026-05-20T20:27:36.409Z",
      "endDate": null,
      "offer": {
        "id": "114187589",
        "title": "Title: the offer made by client c6051822169yg8f0 to contractor f6052013195hkijl on Wed May 20 20:27:19 GMT 2026 as part of release testing by Upwork QA"
      },
      "terms": {
        "fixedPriceTerms": [
          {
            "milestones": [
              {
                "id": "16356263",
                "description": "First milestone created as part of release testing by Upwork QA on Wed May 20 20:27:19 GMT 2026",
                "state": "Active",
                "dueDateTime": "2026-07-19T00:00:00.000Z",
                "depositAmount": {
                  "displayValue": "7578.62"
                },
                "fundedAmount": {
                  "displayValue": "7578.62"
                }
              },
              {
                "id": "16356292",
                "description": "API validation contract milestone",
                "state": "NotFunded",
                "dueDateTime": "2026-11-01T00:00:00.000Z",
                "depositAmount": {
                  "displayValue": "200.00"
                },
                "fundedAmount": {
                  "displayValue": "200.00"
                }
              },
              {
                "id": "16356296",
                "description": "API validation contract milestone",
                "state": "NotFunded",
                "dueDateTime": "2026-11-01T00:00:00.000Z",
                "depositAmount": {
                  "displayValue": "200.00"
                },
                "fundedAmount": {
                  "displayValue": "200.00"
                }
              }
            ]
          }
        ],
        "hourlyTerms": []
      }
    }
  }
}
```

## Used in sample flows

- Step **2** (View contract details) in [Working with Contracts Sample Flow](../operations/examples/offers-and-contracts.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-contractDetails" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [contractByTerm](contractByTerm.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [contractList](contractList.md) ➡️
