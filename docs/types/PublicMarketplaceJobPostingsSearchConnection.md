---
title: "PublicMarketplaceJobPostingsSearchConnection"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingsSearchConnection"
html_id: "definition-PublicMarketplaceJobPostingsSearchConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingsSearchConnection"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingsSearchConnection` (object)

## Description

Response of public job posting search in marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `jobs` | [`[PublicMarketplaceJobPostingsSearch]`](PublicMarketplaceJobPostingsSearch.md) | Jobs page result |
| `paging` | [`PageInfo`](PageInfo.md) | Pagination info |
| `facets` | [`PublicMarketplaceJobPostingSearchFacets`](PublicMarketplaceJobPostingSearchFacets.md) | Search facets |

## Examples

### Example

```json
{
  "jobs": [PublicMarketplaceJobPostingsSearch],
  "paging": PageInfo,
  "facets": PublicMarketplaceJobPostingSearchFacets
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingsSearchConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PublicMarketplaceJobPostingsSearch](PublicMarketplaceJobPostingsSearch.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PublicMarketplaceJobPostingsSearchEngagementDuration](PublicMarketplaceJobPostingsSearchEngagementDuration.md) ➡️
