---
title: "freelancerProfileSearchRecords"
kind: "query"
gql_name: "freelancerProfileSearchRecords"
returns: "FreelancerProfilesSearchRecordsConnection"
html_id: "query-freelancerProfileSearchRecords"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-freelancerProfileSearchRecords"
generated_by: "scripts/convert.mjs"
---


# `freelancerProfileSearchRecords`

## Description

Search freelancer profiles based on various filters

## Required Permissions

"Freelancer Profile - Read And Write Access"

## Response

Returns a [`FreelancerProfilesSearchRecordsConnection`](../types/FreelancerProfilesSearchRecordsConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `searchFilter` | [`FreelancerProfileSearchFilter!`](../inputs/FreelancerProfileSearchFilter.md) | Search filters for freelancer profiles |
| `pagination` | [`Pagination!`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query freelancerProfileSearchRecords(
  $searchFilter: FreelancerProfileSearchFilter!,
  $pagination: Pagination!
) {
  freelancerProfileSearchRecords(
    searchFilter: $searchFilter,
    pagination: $pagination
  ) {
    edges {
      ...FreelancerProfilesSearchResultEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
    totalCount
  }
}
```

#### Variables

```json
{
  "searchFilter": FreelancerProfileSearchFilter,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "freelancerProfileSearchRecords": {
      "edges": [FreelancerProfilesSearchResultEdge],
      "pageInfo": PageInfo,
      "totalCount": 123
    }
  }
}
```
