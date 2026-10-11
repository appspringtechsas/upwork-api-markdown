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
  "cursor": "xyz789",
  "node": MarketplaceJobPostingSearchResult
}
```
