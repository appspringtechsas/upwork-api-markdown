---
title: "MarketplaceJobPostingSearchOccupations"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchOccupations"
html_id: "definition-MarketplaceJobPostingSearchOccupations"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchOccupations"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchOccupations` (object)

## Description

Group of occupations associated with a search result

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`MarketplaceJobPostingSearchOccupation!`](MarketplaceJobPostingSearchOccupation.md) | Top-level occupation category |
| `subCategories` | [`[MarketplaceJobPostingSearchOccupation]`](MarketplaceJobPostingSearchOccupation.md) | Subcategories under the category |
| `occupationService` | [`MarketplaceJobPostingSearchOccupation`](MarketplaceJobPostingSearchOccupation.md) | Specific service within the occupation |

## Examples

### Example

```json
{
  "category": MarketplaceJobPostingSearchOccupation,
  "subCategories": [
    MarketplaceJobPostingSearchOccupation
  ],
  "occupationService": MarketplaceJobPostingSearchOccupation
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchOccupations" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingSearchOccupation](MarketplaceJobPostingSearchOccupation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchRelevance](MarketplaceJobPostingSearchRelevance.md) ➡️
