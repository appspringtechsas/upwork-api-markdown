---
title: "MarketplaceJobPostingSearchConnection"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchConnection"
html_id: "definition-MarketplaceJobPostingSearchConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchConnection"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchConnection` (object)

## Description

Connection for marketplace job posting search

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of results matching the query |
| `edges` | [`[MarketplaceJobpostingSearchEdge]`](MarketplaceJobpostingSearchEdge.md) | Connection edges containing nodes and cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [MarketplaceJobpostingSearchEdge],
  "pageInfo": PageInfo
}
```
