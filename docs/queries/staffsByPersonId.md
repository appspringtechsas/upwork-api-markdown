---
title: "staffsByPersonId"
kind: "query"
gql_name: "staffsByPersonId"
returns: "StaffsConnection!"
html_id: "query-staffsByPersonId"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-staffsByPersonId"
generated_by: "scripts/convert.mjs"
---


# `staffsByPersonId`

## Description

Returns staff memberships for a given person identifier

## Required Permissions

"Common Entities - Read-Only Access"

## Response

Returns a [`StaffsConnection!`](../types/StaffsConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | Target person identifier |
| `status` | [`Int`](../scalars/Int.md) | Filter by staff status |
| `staffType` | [`String`](../scalars/String.md) | Filter by staff type |
| `affiliateContractor` | [`Boolean`](../scalars/Boolean.md) | Affiliate contractor flag |
| `hierarchy` | [`Boolean`](../scalars/Boolean.md) | Include organization hierarchy |
| `orgLegacyType` | [`OrgLegacyType`](../enums/OrgLegacyType.md) | Legacy organization type |
| `orgType` | [`OrgType`](../enums/OrgType.md) | Organization type |
| `hiddenOrg` | [`Boolean`](../scalars/Boolean.md) | Hidden organization flag |
| `activeOrg` | [`Boolean`](../scalars/Boolean.md) | Active organization flag |
| `eac` | [`Boolean`](../scalars/Boolean.md) | Enterprise account company flag |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query staffsByPersonId(
  $personId: ID!,
  $status: Int,
  $staffType: String,
  $affiliateContractor: Boolean,
  $hierarchy: Boolean,
  $orgLegacyType: OrgLegacyType,
  $orgType: OrgType,
  $hiddenOrg: Boolean,
  $activeOrg: Boolean,
  $eac: Boolean,
  $pagination: Pagination
) {
  staffsByPersonId(
    personId: $personId,
    status: $status,
    staffType: $staffType,
    affiliateContractor: $affiliateContractor,
    hierarchy: $hierarchy,
    orgLegacyType: $orgLegacyType,
    orgType: $orgType,
    hiddenOrg: $hiddenOrg,
    activeOrg: $activeOrg,
    eac: $eac,
    pagination: $pagination
  ) {
    edges {
      ...StaffsConnectionEdgeFragment
    }
    totalCount
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{
  "personId": 4,
  "status": 987,
  "staffType": "xyz789",
  "affiliateContractor": false,
  "hierarchy": true,
  "orgLegacyType": "Client",
  "orgType": "Business",
  "hiddenOrg": false,
  "activeOrg": true,
  "eac": false,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "staffsByPersonId": {
      "edges": [StaffsConnectionEdge],
      "totalCount": 123,
      "pageInfo": PageInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-staffsByPersonId" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [accountAuditRecord](accountAuditRecord.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [teamActivities](teamActivities.md) ➡️
