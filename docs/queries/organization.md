---
title: "organization"
kind: "query"
gql_name: "organization"
returns: "CurrentOrganization"
html_id: "query-organization"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-organization"
generated_by: "scripts/convert.mjs"
---


# `organization`

## Description

Current organization

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Common Functionality - Read And Write Access"

## Response

Returns a [`CurrentOrganization`](../types/CurrentOrganization.md)

## Examples

### Detailed structure

#### Query

```graphql
query organization {
  organization {
    id
    rid
    legacyId
    name
    type
    legacyType
    flag {
      ...OrganizationFlagFragment
    }
    parentOrganization {
      ...CurrentOrganizationFragment
    }
    active
    hidden
    childOrganizations {
      ...CurrentOrganizationFragment
    }
    childOrganization {
      ...CurrentOrganizationFragment
    }
    company {
      ...PrivateCompanyInfoFragment
    }
    photoUrl
    creationDate
    staffs {
      ...StaffsConnectionFragment
    }
    userPermissions {
      ...UserPermissionsFragment
    }
    agencyOffers {
      ...ContractOfferConnectionFragment
    }
    clientOffers {
      ...ContractOfferConnectionFragment
    }
    clientTimeReport {
      ...TimeReportFragment
    }
    clientContractTimeReport {
      ...TimeReportConnectionFragment
    }
    agencyTimeReport {
      ...TimeReportFragment
    }
    agencyContractTimeReport {
      ...TimeReportConnectionFragment
    }
    vendorInvitation {
      ...VendorInvitationFragment
    }
    vendorInvitations {
      ...VendorInvitationConnectionFragment
    }
    privateTalentClouds {
      ...PrivateTalentCloudFragment
    }
    jobPosting {
      ...JobPostingConnectionFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "organization": {
      "id": "4",
      "rid": "4",
      "legacyId": "4",
      "name": "xyz789",
      "type": "BUSINESS",
      "legacyType": "CLIENT",
      "flag": OrganizationFlag,
      "parentOrganization": CurrentOrganization,
      "active": true,
      "hidden": true,
      "childOrganizations": [CurrentOrganization],
      "childOrganization": CurrentOrganization,
      "company": PrivateCompanyInfo,
      "photoUrl": "abc123",
      "creationDate": "abc123",
      "staffs": StaffsConnection,
      "userPermissions": UserPermissions,
      "agencyOffers": ContractOfferConnection,
      "clientOffers": ContractOfferConnection,
      "clientTimeReport": [TimeReport],
      "clientContractTimeReport": TimeReportConnection,
      "agencyTimeReport": [TimeReport],
      "agencyContractTimeReport": TimeReportConnection,
      "vendorInvitation": VendorInvitation,
      "vendorInvitations": VendorInvitationConnection,
      "privateTalentClouds": [PrivateTalentCloud],
      "jobPosting": JobPostingConnection
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ListClientOffers($pagination: Pagination!) {
  organization {
    id
    clientOffers(pagination: $pagination) {
      totalCount
      edges {
        node {
          id
          title
          type
          state
          startDateTime
          offerCreatedDateTime
          freelancer { id }
          offer { id title state type }
        }
      }
    }
  }
}
```

#### Variables

```json
{"pagination": {"after": null, "first": 50}}
```

#### Response

```json
{
  "data": {
    "organization": {
      "id": "2056499345994300718",
      "clientOffers": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "id": "2056583447133315072",
              "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
              "type": "Hourly",
              "state": "Pending",
              "freelancer": {
                "id": "2056380672542427571"
              },
              "offer": {
                "id": "114157984",
                "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
                "state": "APPROVED",
                "type": "MARKET_PLACE_HOURLY"
              }
            }
          },
          {
            "node": {
              "id": "2056863543666266112",
              "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
              "type": "FixedPrice",
              "state": "Pending",
              "freelancer": {
                "id": "1990632329681295528"
              },
              "offer": {
                "id": "114170339",
                "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
                "state": "APPROVED",
                "type": "MARKET_PLACE_FIXED_PRICE"
              }
            }
          },
          {
            "node": {
              "id": "2056565733991903232",
              "title": "API validation offer from proposal",
              "type": "Hourly",
              "state": "Pending",
              "freelancer": {
                "id": "2056388534005908022"
              },
              "offer": {
                "id": "114157506",
                "title": "API validation offer from proposal",
                "state": "APPROVED",
                "type": "MARKET_PLACE_HOURLY"
              }
            }
          }
        ]
      }
    }
  }
}
```

### Sample query variants

_Additional example variants (by usage context) stored with the page:_

#### Variant: `jobPostings`

```graphql
query ListOrgJobPostings($filter: JobPostingsFilter!) {
  organization {
    id
    jobPosting(jobPostingFilter: $filter) {
      totalCount
      edges {
        node {
          id
          content { title description }
          info {
            status
            publishDateTime
            auditTime { createdDateTime }
          }
          contractTerms { contractType }
          visibility
        }
      }
    }
  }
}
```

```json
{
  "filter": {
    "pagination_eq": {
      "after": "0",
      "first": 10
    }
  }
}
```

```json
{"data":{"organization":{"id":"2056499345994300718","jobPosting":{"totalCount":4,"edges":[{"node":{"id":"2056509696906751808","content":{"title":"API validation test job (draft) 2026-05-18T22:58:14.380Z","description":"Test job created via GraphQL public API validation."},"info":{"status":"DRAFT","publishDateTime":null,"auditTime":{"createdDateTime":"2026-05-18T22:58:14.634Z"}},"contractTerms":{"contractType":"HOURLY"},"visibility":"ACCESS_PUBLIC"}},{"node":{"id":"2056509624626310976","content":{"title":"API validation test job (draft)","description":"Test job created via GraphQL public API validation."},"info":{"status":"DRAFT","publishDateTime":null,"auditTime":{"createdDateTime":"2026-05-18T22:57:57.479Z"}},"contractTerms":{"contractType":"HOURLY"},"visibility":"ACCESS_PUBLIC"}},{"node":{"id":"2056509179207027383","content":{"title":"API test job 2026-05-18 15:56:10","description":"Test job created via GraphQL public API validation script."},"info":{"status":"DRAFT","publishDateTime":null,"auditTime":{"createdDateTime":"2026-05-18T22:56:11.183Z"}},"contractTerms":{"contractType":"HOURLY"},"visibility":"ACCESS_PUBLIC"}},{"node":{"id":"2056499367840778935","content":{"title":"2026-05-18 22:17:11 Sports Documentary Editor Youtube","description":"2026-05-18 22:17:11 Hello!\n\nIΓÇÖm building a new YouTube channel that dives into high performance sports (cycling). That means it requires a great sense of visual storytelling.\n\nWho Am I Searching For?\n\n- You have experience editing Youtube Docs.\n- You are passionate about editing.\n- You are willing to comit to our channel long term.\n\n\nWhat You'll Be Creating!\n\n- At least 4+ videos a month (2500 to 3500 words)\n\nPayment\n10$-20$ per finished minute\n\nExample\nhttps://www.youtube.com/watch?si=8VPofF1kltrWBBox&v=8zOe2DSNzpE&feature=youtu.be\nHow to Apply?\n\n- Deliver a link leading to a documentary on Youtube you created in full.\n- Explain why you want to join the greatest Youtube team in short.\n- Note your experience in psychology\n- Let me know what you charge per finished minute of the video\n\nNO AGENCY's\n\nIf you can Edit like the example video you are hired, must show example."},"info":{"status":"REQUESTED","publishDateTime":"2026-05-18T22:17:12.280Z","auditTime":{"createdDateTime":"2026-05-18T22:17:12.211Z"}},"contractTerms":{"contractType":"HOURLY"},"visibility":"PUBLIC_INDEX"}}]}}}}
```

#### Variant: `listClientContracts`

```graphql
query ListClientContracts($pagination: Pagination!) {
  organization {
    clientOffers(
      offerByClientFilter: { commonFilter: { states_any: [Active] } }
      pagination: $pagination
    ) {
      totalCount
      edges {
        node {
          id
          title
          state
          type
          offer {
            id
          }
          contractDetails {
            id
          }
        }
      }
    }
  }
}
```

```json
{
  "pagination": {
    "after": null,
    "first": 50
  }
}
```

```json
{
  "data": {
    "organization": {
      "clientOffers": {
        "totalCount": 1,
        "edges": [
          {
            "node": {
              "id": "2057196529968549888",
              "title": "Title: the offer made by client c6051822169yg8f0 to contractor f6052013195hkijl on Wed May 20 20:27:19 GMT 2026 as part of release testing by Upwork QA",
              "state": "Active",
              "type": "FixedPrice",
              "offer": {
                "id": "114187589"
              },
              "contract": {
                "id": "32325107"
              }
            }
          }
        ]
      }
    }
  }
}
```

#### Variant: `listClientOffers`

```graphql
query ListClientOffers($pagination: Pagination!) {
  organization {
    id
    clientOffers(pagination: $pagination) {
      totalCount
      edges {
        node {
          id
          title
          type
          state
          startDateTime
          offerCreatedDateTime
          freelancer { id }
          offer { id title state type }
        }
      }
    }
  }
}
```

```json
{
  "pagination": {
    "after": null,
    "first": 50
  }
}
```

```json
{
  "data": {
    "organization": {
      "id": "2056499345994300718",
      "clientOffers": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "id": "2056583447133315072",
              "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
              "type": "Hourly",
              "state": "Pending",
              "freelancer": {
                "id": "2056380672542427571"
              },
              "offer": {
                "id": "114157984",
                "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
                "state": "APPROVED",
                "type": "MARKET_PLACE_HOURLY"
              }
            }
          },
          {
            "node": {
              "id": "2056863543666266112",
              "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
              "type": "FixedPrice",
              "state": "Pending",
              "freelancer": {
                "id": "1990632329681295528"
              },
              "offer": {
                "id": "114170339",
                "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
                "state": "APPROVED",
                "type": "MARKET_PLACE_FIXED_PRICE"
              }
            }
          },
          {
            "node": {
              "id": "2056565733991903232",
              "title": "API validation offer from proposal",
              "type": "Hourly",
              "state": "Pending",
              "freelancer": {
                "id": "2056388534005908022"
              },
              "offer": {
                "id": "114157506",
                "title": "API validation offer from proposal",
                "state": "APPROVED",
                "type": "MARKET_PLACE_HOURLY"
              }
            }
          }
        ]
      }
    }
  }
}
```

#### Variant: `clientContractTimeReport`

```graphql
query ClientSpendingTimeReport($range: DateTimeRange!, $pagination: Pagination) {
  organization {
    id
    clientContractTimeReport(timeReportDate_bt: $range, pagination: $pagination) {
      totalCount
      edges {
        node {
          dateWorkedOn
          totalCharges
          totalHoursWorked
          contract {
            id
            title
          }
          freelancer {
            id
          }
        }
      }
    }
  }
}
```

```json
{
  "range": {
    "rangeStart": "2026-01-01",
    "rangeEnd": "2026-05-20"
  },
  "pagination": {
    "after": null,
    "first": 30
  }
}
```

```json
{
    "data": {
        "organization": {
            "id": "2056499345994300718",
            "clientContractTimeReport": {
                "totalCount": 0,
                "edges": []
            }
        }
    }
}
```
