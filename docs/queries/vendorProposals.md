---
title: "vendorProposals"
kind: "query"
gql_name: "vendorProposals"
returns: "VendorProposalsConnection!"
html_id: "query-vendorProposals"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-vendorProposals"
generated_by: "scripts/convert.mjs"
---


# `vendorProposals`

## Description

List of vendor proposals based on filters like job posting ids, vendor id, etc. This query is intended for vendors (freelancers and agencies) only, not for clients. "after" field in pagination only supports null or cursor based pagination returned in VendorProposalsConnection.pageInfo.endCursor. The target organization agency is controlled through the context organization provided in the X-Upwork-API-TenantId header. If the X-Upwork-API-TenantId header is not provided, the default organization will be used.

## Required Permissions

"Client Proposals - Read And Write Access"

## Response

Returns a [`VendorProposalsConnection!`](../types/VendorProposalsConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`VendorProposalFilter!`](../inputs/VendorProposalFilter.md) | Filter for vendor proposals |
| `sortAttribute` | [`VendorProposalSortAttribute!`](../inputs/VendorProposalSortAttribute.md) | Sort attribute |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query vendorProposals(
  $filter: VendorProposalFilter!,
  $sortAttribute: VendorProposalSortAttribute!,
  $pagination: Pagination!
) {
  vendorProposals(
    filter: $filter,
    sortAttribute: $sortAttribute,
    pagination: $pagination
  ) {
    totalCount
    edges {
      ...VendorProposalsEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{
  "filter": VendorProposalFilter,
  "sortAttribute": VendorProposalSortAttribute,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "vendorProposals": {
      "totalCount": 987,
      "edges": [VendorProposalsEdge],
      "pageInfo": PageInfo
    }
  }
}
```

### Real-life example

#### Query

```graphql
query FreelancerVendorProposals(
  $filter: VendorProposalFilter!
  $sortAttribute: VendorProposalSortAttribute!
  $pagination: Pagination!
) {
  vendorProposals(
    filter: $filter
    sortAttribute: $sortAttribute
    pagination: $pagination
  ) {
    totalCount
    edges {
      node {
        id
        status {
          status
        }
        marketplaceJobPosting {
          id
          content {
            title
          }
        }
        terms {
          chargeRate {
            displayValue
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
  "filter": {"status_eq": "Accepted"},
  "sortAttribute": {"field": "CREATEDDATETIME", "sortOrder": "DESC"},
  "pagination": {"after": null, "first": 20}
}
```

#### Response

```json
{
  "data": {
    "vendorProposals": {
      "totalCount": 1,
      "edges": [
        {
          "node": {
            "id": "2056872958851149825",
            "status": {
              "status": "Accepted"
            },
            "marketplaceJobPosting": {
              "id": "2056454882525048640",
              "content": {
                "title": "2026-05-18 19:20:25 Shopify Page Creation with Password Protection and Contact Form"
              }
            },
            "terms": {
              "chargeRate": {
                "displayValue": "USD 118.0"
              }
            }
          }
        }
      ]
    }
  }
}
```
