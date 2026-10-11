---
title: "publicMarketplaceJobPostingsSearch"
kind: "query"
gql_name: "publicMarketplaceJobPostingsSearch"
returns: "PublicMarketplaceJobPostingsSearchConnection"
html_id: "query-publicMarketplaceJobPostingsSearch"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-publicMarketplaceJobPostingsSearch"
generated_by: "scripts/convert.mjs"
---


# `publicMarketplaceJobPostingsSearch`

## Description

Public job postings in the marketplace

## Required Permissions

"Read public marketplace Job Postings"

## Response

Returns a [`PublicMarketplaceJobPostingsSearchConnection`](../types/PublicMarketplaceJobPostingsSearchConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `marketPlaceJobFilter` | [`PublicMarketplaceJobPostingsSearchFilter!`](../inputs/PublicMarketplaceJobPostingsSearchFilter.md) | Filters to be applied to the search |

## Examples

### Detailed structure

#### Query

```graphql
query publicMarketplaceJobPostingsSearch($marketPlaceJobFilter: PublicMarketplaceJobPostingsSearchFilter!) {
  publicMarketplaceJobPostingsSearch(marketPlaceJobFilter: $marketPlaceJobFilter) {
    jobs {
      ...PublicMarketplaceJobPostingsSearchFragment
    }
    paging {
      ...PageInfoFragment
    }
    facets {
      ...PublicMarketplaceJobPostingSearchFacetsFragment
    }
  }
}
```

#### Variables

```json
{
  "marketPlaceJobFilter": PublicMarketplaceJobPostingsSearchFilter
}
```

#### Response

```json
{
  "data": {
    "publicMarketplaceJobPostingsSearch": {
      "jobs": [PublicMarketplaceJobPostingsSearch],
      "paging": PageInfo,
      "facets": PublicMarketplaceJobPostingSearchFacets
    }
  }
}
```
