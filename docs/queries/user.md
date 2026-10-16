---
title: "user"
kind: "query"
gql_name: "user"
returns: "CurrentUser"
html_id: "query-user"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-user"
generated_by: "scripts/convert.mjs"
---


# `user`

## Description

Current user

## Required Permissions

One of: "Common Entities - Read-Only Access" OR "Common Functionality - Read And Write Access"

## Response

Returns a [`CurrentUser`](../types/CurrentUser.md)

## Examples

### Detailed structure

#### Query

```graphql
query user {
  user {
    id
    nid
    rid
    email
    name
    permissions {
      ...UserPermissionsFragment
    }
    userPermissions {
      ...UserPermissionsFragment
    }
    photoUrl
    offer {
      ...ContractOfferConnectionFragment
    }
    timeReport {
      ...TimeReportFragment
    }
    contractTimeReport {
      ...TimeReportConnectionFragment
    }
    vendorInvitation {
      ...VendorInvitationFragment
    }
    vendorInvitations {
      ...VendorInvitationConnectionFragment
    }
    freelancerProfile {
      ...FreelancerProfileFragment
    }
    ciphertext
    i18NSettings {
      ...I18nSettingsFragment
    }
    talentProfile {
      ...TalentProfileFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "user": {
      "id": 4,
      "nid": 4,
      "rid": "4",
      "email": "abc123",
      "name": "xyz789",
      "permissions": UserPermissions,
      "userPermissions": UserPermissions,
      "photoUrl": "xyz789",
      "offer": ContractOfferConnection,
      "timeReport": [TimeReport],
      "contractTimeReport": TimeReportConnection,
      "vendorInvitation": VendorInvitation,
      "vendorInvitations": VendorInvitationConnection,
      "freelancerProfile": FreelancerProfile,
      "ciphertext": "xyz789",
      "i18NSettings": I18nSettings,
      "talentProfile": TalentProfile
    }
  }
}
```

### Real-life example

#### Query

```graphql
query FreelancerEarningsReport(
  $range: DateTimeRange!
  $pagination: Pagination
) {
  user {
    id
    contractTimeReport(timeReportDate_bt: $range, pagination: $pagination) {
      edges {
        node {
          dateWorkedOn
          totalCharges
          totalHoursWorked
          contract {
            id
            title
          }
        }
      }
    }
  }
}
```

#### Variables

```json
{
  "range": {"rangeStart": "2026-01-01", "rangeEnd": "2026-05-20"},
  "pagination": {"after": null, "first": 30}
}
```

#### Response

```json
{
    "data": {
        "user": {
            "contractTimeReport": {
                "edges": []
            }
        }
    }
}
```

### Sample query variants

_Additional example variants (by usage context) stored with the page:_

#### Variant: `offer`

```graphql
query FreelancerOffers($pagination: Pagination!) {
  user {
    offer(pagination: $pagination) {
      totalCount
      edges {
        node {
          id
          title
          type
          state
          offer {
            id
            title
            state
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
    "user": {
      "offer": {
        "totalCount": 2,
        "edges": [
          {
            "node": {
              "id": "2056863543666266112",
              "title": "2026-05-18 22:17:11 Sports Documentary Editor Youtube",
              "state": "Pending",
              "type": "FixedPrice",
              "offer": {
                "id": "114170339"
              }
            }
          },
          {
            "node": {
              "id": "1990632443288059904",
              "title": "Title: the offer made by client c511180404r7lu4o to contractor f51118040htcl04p on Tue Nov 18 04:05:31 UTC 2025 as part of release testing by Upwork QA",
              "state": "Active",
              "type": "Hourly",
              "offer": {
                "id": "110302641"
              }
            }
          }
        ]
      }
    }
  }
}
```

#### Variant: `contractTimeReport`

```graphql
query FreelancerEarningsReport(
  $range: DateTimeRange!
  $pagination: Pagination
) {
  user {
    id
    contractTimeReport(timeReportDate_bt: $range, pagination: $pagination) {
      edges {
        node {
          dateWorkedOn
          totalCharges
          totalHoursWorked
          contract {
            id
            title
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
        "user": {
            "contractTimeReport": {
                "edges": []
            }
        }
    }
}
```

## Used in sample flows

- Step **1** (List user's offers) in [Working with Offers and Contracts Sample Flow](../operations/examples/offers-and-contracts.md)

- Step **2** (View earnings report) in [Reports Sample Flow](../operations/examples/reports.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-user" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [snapshotsByContractId](snapshotsByContractId.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [workDays](workDays.md) ➡️
