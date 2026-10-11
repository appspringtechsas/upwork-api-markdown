---
title: "PublicMarketplaceJobPostingSearchFacets"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingSearchFacets"
html_id: "definition-PublicMarketplaceJobPostingSearchFacets"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingSearchFacets"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingSearchFacets` (object)

## Description

Public job posting facets in marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `jobType` | [`Map`](../scalars/Map.md) | Search facets of jobType |
| `workload` | [`Map`](../scalars/Map.md) | Search facets of workload |
| `clientHires` | [`Map`](../scalars/Map.md) | Search facets of clientHires |
| `budget` | [`Map`](../scalars/Map.md) | Search facets of budget |
| `clientFeedback` | [`Map`](../scalars/Map.md) | Search facets of clientFeedback |
| `daysPosted` | [`Map`](../scalars/Map.md) | Search facets of daysPosted |
| `contractorTier` | [`Map`](../scalars/Map.md) | Search facets of contractorTier |
| `categories` | [`[Map]`](../scalars/Map.md) | Search facets of categories |
| `payment` | [`Map`](../scalars/Map.md) | Search facets of payment |
| `proposals` | [`Map`](../scalars/Map.md) | Search facets of proposals |
| `duration` | [`Map`](../scalars/Map.md) | Search facets of duration |
| `occupations` | [`[Map]`](../scalars/Map.md) | Search facets of occupations |
| `freelancersNeeded` | [`Map`](../scalars/Map.md) | Search facets of freelancersNeeded |

## Examples

### Example

```json
{
  "jobType": Map,
  "workload": Map,
  "clientHires": Map,
  "budget": Map,
  "clientFeedback": Map,
  "daysPosted": Map,
  "contractorTier": Map,
  "categories": [Map],
  "payment": Map,
  "proposals": Map,
  "duration": Map,
  "occupations": [Map],
  "freelancersNeeded": Map
}
```
