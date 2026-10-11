---
title: "MarketplacePostingActivityStat"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingActivityStat"
html_id: "definition-MarketplacePostingActivityStat"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingActivityStat"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingActivityStat` (object)

## Description

Activity statistics for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `applicationsBidStats` | [`ApplicationsBidStats`](ApplicationsBidStats.md) | Bid statistics |
| `jobActivity` | [`JobActivity`](JobActivity.md) | Activity metrics |

## Examples

### Example

```json
{
  "applicationsBidStats": ApplicationsBidStats,
  "jobActivity": JobActivity
}
```
