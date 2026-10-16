---
title: "MarketplaceJobpostingSearchEdge"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobpostingSearchEdge"
html_id: "definition-MarketplaceJobpostingSearchEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobpostingSearchEdge"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobpostingSearchEdge` (object)

## Description

Edge for marketplace job posting search results

## Fields

| Field | Type | Description |
|---|---|---|
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |
| `node` | [`MarketplaceJobPostingSearchResult!`](MarketplaceJobPostingSearchResult.md) | Search result node |

## Examples

### Example

```json
{
  "cursor": "abc123",
  "node": MarketplaceJobPostingSearchResult
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobpostingSearchEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingSearchConnection](MarketplaceJobPostingSearchConnection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchOccupation](MarketplaceJobPostingSearchOccupation.md) ➡️
