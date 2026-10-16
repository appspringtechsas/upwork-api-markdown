---
title: "MarketplaceJobPostingSearchSkill"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchSkill"
html_id: "definition-MarketplaceJobPostingSearchSkill"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchSkill"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchSkill` (object)

## Description

Skill metadata attached to a search result

## Fields

| Field | Type | Description |
|---|---|---|
| ⚠️ `id` | [`ID`](../scalars/ID.md) | Legacy skill identifier (deprecated) **⚠️ Deprecated — No longer supported** |
| `name` | [`String!`](../scalars/String.md) | Skill canonical name |
| `prettyName` | [`String!`](../scalars/String.md) | Human-readable skill label |
| `highlighted` | [`Boolean`](../scalars/Boolean.md) | True if search highlighting matched this skill |

## Examples

### Example

```json
{
  "id": 4,
  "name": "abc123",
  "prettyName": "xyz789",
  "highlighted": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchSkill" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingSearchResult](MarketplaceJobPostingSearchResult.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketPlaceJobSearchLocation](MarketPlaceJobSearchLocation.md) ➡️
