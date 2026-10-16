---
title: "MarketplaceJobPostingSearchRelevance"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchRelevance"
html_id: "definition-MarketplaceJobPostingSearchRelevance"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchRelevance"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchRelevance` (object)

## Description

Relevance metrics for a marketplace job posting search result

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Search result identifier |
| `effectiveCandidates` | [`Int!`](../scalars/Int.md) | Number of candidates matching effectively |
| `recommendedEffectiveCandidates` | [`Int!`](../scalars/Int.md) | Recommended effective candidates |
| `uniqueImpressions` | [`Int!`](../scalars/Int.md) | Unique impressions count |
| `publishTime` | [`String`](../scalars/String.md) | Publish time of the job posting |
| `hoursInactive` | [`Int!`](../scalars/Int.md) | Hours since the posting was last active |

## Examples

### Example

```json
{
  "id": "4",
  "effectiveCandidates": 987,
  "recommendedEffectiveCandidates": 987,
  "uniqueImpressions": 123,
  "publishTime": "xyz789",
  "hoursInactive": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchRelevance" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingSearchOccupations](MarketplaceJobPostingSearchOccupations.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchResult](MarketplaceJobPostingSearchResult.md) ➡️
