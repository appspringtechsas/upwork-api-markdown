---
title: "offer"
kind: "query"
gql_name: "offer"
returns: "Offer"
html_id: "query-offer"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-offer"
generated_by: "scripts/convert.mjs"
---


# `offer`

## Description

Returns offer for the given id

## Required Permissions

"Offer - Read-Only Access"

## Response

Returns an [`Offer`](../types/Offer.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Offer identifier |

## Examples

### Detailed structure

#### Query

```graphql
query offer($id: ID!) {
  offer(id: $id) {
    id
    title
    description
    type
    job {
      ...MarketplaceJobPostingFragment
    }
    vendorProposal {
      ...VendorProposalFragment
    }
    closeJobPostingOnAccept
    client {
      ...GenericOrganizationFragment
    }
    offerTerms {
      ...OfferTermsFragment
    }
    messageToContractor
    state
    offerFeatures {
      ...OfferFeaturesFragment
    }
    clientCompany {
      ...PublicCompanyInfoFragment
    }
    milestones {
      ...MilestoneFragment
    }
    createdUsingBYOFlow
    freelancer {
      ...FreelancerProfileFragment
    }
    payrollOffer
    deliveryModel
    customFields {
      ...CustomFieldsConnectionFragment
    }
  }
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{
  "data": {
    "offer": {
      "id": "4",
      "title": "xyz789",
      "description": "abc123",
      "type": "MARKET_PLACE_HOURLY",
      "job": MarketplaceJobPosting,
      "vendorProposal": VendorProposal,
      "closeJobPostingOnAccept": false,
      "client": GenericOrganization,
      "offerTerms": OfferTerms,
      "messageToContractor": "xyz789",
      "state": "DRAFT",
      "offerFeatures": OfferFeatures,
      "clientCompany": PublicCompanyInfo,
      "milestones": [Milestone],
      "createdUsingBYOFlow": true,
      "freelancer": FreelancerProfile,
      "payrollOffer": false,
      "deliveryModel": "TalentMarketplace",
      "customFields": CustomFieldsConnection
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ClientOfferDetails($offerId: ID!) {
  offer(id: $offerId) {
    id
    title
    description
    type
    state
    offerTerms {
      expectedStartDate
      hourlyTerms {
        rate { displayValue currency }
        weeklyHoursLimit
        manualTimeAllowed
      }
      fixedPriceTerm {
        budget { displayValue currency }
      }
    }
    client { id name }
    freelancer {
      personalData { title }
    }
    milestones {
      id
      description
      state
    }
  }
}
```

#### Variables

```json
{"offerId": "114157506"}
```

#### Response

```json
{
    "data": {
        "offer": {
            "id": "114157506",
            "title": "API validation offer from proposal",
            "description": "Offer created during public API validation.",
            "type": "MARKET_PLACE_HOURLY",
            "state": "APPROVED",
            "offerTerms": {
                "expectedStartDate": "2026-05-19T00:00:00+0000",
                "hourlyTerms": {
                    "rate": {
                        "displayValue": "65.00",
                        "currency": "USD"
                    },
                    "weeklyHoursLimit": 40,
                    "manualTimeAllowed": false
                },
                "fixedPriceTerm": null
            },
            "client": {
                "id": "2056499345994300718",
                "name": "Carrolls-Farrella and Sons"
            },
            "freelancer": {
                "personalData": {
                    "title": "Telemarketer/Virtual Assistant/Intake Specialist/Case Manager"
                }
            },
            "milestones": []
        }
    }
}
```
