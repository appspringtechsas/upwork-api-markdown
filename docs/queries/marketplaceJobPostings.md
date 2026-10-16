---
title: "marketplaceJobPostings"
kind: "query"
gql_name: "marketplaceJobPostings"
returns: "MarketplaceJobPostingSearchConnection"
deprecated: "Will be removed in future release. Please Use marketplaceJobPostingsSearch instead"
html_id: "query-marketplaceJobPostings"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostings"
generated_by: "scripts/convert.mjs"
---


# `marketplaceJobPostings`

> ⚠️ **Deprecated:** Will be removed in future release. Please Use marketplaceJobPostingsSearch instead

## Required Permissions

"Read marketplace Job Postings"

## Response

Returns a [`MarketplaceJobPostingSearchConnection`](../types/MarketplaceJobPostingSearchConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `marketPlaceJobFilter` | [`MarketplaceJobFilter`](../inputs/MarketplaceJobFilter.md) | Filter to search job postings |
| `searchType` | [`MarketplaceJobPostingSearchType`](../enums/MarketplaceJobPostingSearchType.md) | Search type context |
| `sortAttributes` | [`[MarketplaceJobPostingSearchSortAttribute]`](../inputs/MarketplaceJobPostingSearchSortAttribute.md) | Sort attributes |

## Examples

### Detailed structure

#### Query

```graphql
query marketplaceJobPostings(
  $marketPlaceJobFilter: MarketplaceJobFilter,
  $searchType: MarketplaceJobPostingSearchType,
  $sortAttributes: [MarketplaceJobPostingSearchSortAttribute]
) {
  marketplaceJobPostings(
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
  "marketPlaceJobFilter": MarketplaceJobFilter,
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
    "marketplaceJobPostings": {
      "totalCount": 987,
      "edges": [MarketplaceJobpostingSearchEdge],
      "pageInfo": PageInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-marketplaceJobPostings" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [marketplaceJobPosting](marketplaceJobPosting.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [marketplaceJobPostingsContents](marketplaceJobPostingsContents.md) ➡️
