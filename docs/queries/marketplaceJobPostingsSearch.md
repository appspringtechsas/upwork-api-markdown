---
title: "marketplaceJobPostingsSearch"
kind: "query"
gql_name: "marketplaceJobPostingsSearch"
returns: "MarketplaceJobPostingSearchConnection"
html_id: "query-marketplaceJobPostingsSearch"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostingsSearch"
generated_by: "scripts/convert.mjs"
---


# `marketplaceJobPostingsSearch`

## Description

Search Marketplace Jobs and get their relevant details searchType determines the context and method of the job search being executed Note : searchType value will be ignored and always set to USER_JOBS_SEARCH, utilized when performing a user-initiated job search.

## Required Permissions

"Read marketplace Job Postings"

## Response

Returns a [`MarketplaceJobPostingSearchConnection`](../types/MarketplaceJobPostingSearchConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `marketPlaceJobFilter` | [`MarketplaceJobPostingsSearchFilter`](../inputs/MarketplaceJobPostingsSearchFilter.md) | Filters to be applied to the search |
| `searchType` | [`MarketplaceJobPostingSearchType`](../enums/MarketplaceJobPostingSearchType.md) | The appropriate search type |
| `sortAttributes` | [`[MarketplaceJobPostingSearchSortAttribute]`](../inputs/MarketplaceJobPostingSearchSortAttribute.md) | Sorting options for the search results |

## Examples

### Detailed structure

#### Query

```graphql
query marketplaceJobPostingsSearch(
  $marketPlaceJobFilter: MarketplaceJobPostingsSearchFilter,
  $searchType: MarketplaceJobPostingSearchType,
  $sortAttributes: [MarketplaceJobPostingSearchSortAttribute]
) {
  marketplaceJobPostingsSearch(
    marketPlaceJobFilter: $marketPlaceJobFilter,
    searchType: $searchType,
    sortAttributes: $sortAttributes
  ) {
    totalCount
    edges {
      ...MarketplaceJobpostingSearchEdgeFragment
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
  "marketPlaceJobFilter": MarketplaceJobPostingsSearchFilter,
  "searchType": "USER_JOBS_SEARCH",
  "sortAttributes": [
    MarketplaceJobPostingSearchSortAttribute
  ]
}
```

#### Response

```json
{
  "data": {
    "marketplaceJobPostingsSearch": {
      "totalCount": 123,
      "edges": [MarketplaceJobpostingSearchEdge],
      "pageInfo": PageInfo
    }
  }
}
```

### Real-life example

#### Query

```graphql
query SearchJobs($filter: MarketplaceJobPostingsSearchFilter) {
  marketplaceJobPostingsSearch(
    marketPlaceJobFilter: $filter
    searchType: USER_JOBS_SEARCH
    sortAttributes: [{ field: RECENCY }]
  ) {
    totalCount
    edges {
      node {
        id
        title
        description
        ciphertext
        amount { displayValue currency }
        skills { name }
        client { totalFeedback }
      }
    }
  }
}
```

#### Variables

```json
{
  "filter": {
    "searchExpression_eq": "php",
    "pagination_eq": {"after": "0", "first": 5}
  }
}
```

#### Response

```json
{
    "data": {
        "marketplaceJobPostingsSearch": {
            "totalCount": 13352,
            "edges": [
                {
                    "node": {
                        "id": "2056488576136638272",
                        "title": "2026-05-18 21:34:18 Senior Laravel Backend Developer Needed for AI-Powered App with Firebase and Ope",
                        "description": "(see staging for full text)",
                        "ciphertext": "~022056488576136638272",
                        "amount": {
                            "displayValue": "0.0",
                            "currency": "USD"
                        },
                        "skills": [
                            {
                                "name": "application-security"
                            }
                        ],
                        "client": {
                            "totalFeedback": 0
                        }
                    }
                }
            ]
        }
    }
}
```

## Used in sample flows

- Step **4** (Search jobs) in [Client Job Postings Sample Flow](../operations/examples/jobs.md)

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostingsSearch" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [freelancerProfileSearchRecords](freelancerProfileSearchRecords.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [publicMarketplaceJobPostingsSearch](publicMarketplaceJobPostingsSearch.md) ➡️
