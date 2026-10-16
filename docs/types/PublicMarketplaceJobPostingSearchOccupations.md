---
title: "PublicMarketplaceJobPostingSearchOccupations"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingSearchOccupations"
html_id: "definition-PublicMarketplaceJobPostingSearchOccupations"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingSearchOccupations"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingSearchOccupations` (object)

## Description

Occupations

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`PublicMarketplaceJobPostingSearchOccupation`](PublicMarketplaceJobPostingSearchOccupation.md) | Primary job category |
| `subCategories` | [`[PublicMarketplaceJobPostingSearchOccupation]`](PublicMarketplaceJobPostingSearchOccupation.md) | Subcategories of the job |
| `occupationService` | [`PublicMarketplaceJobPostingSearchOccupation`](PublicMarketplaceJobPostingSearchOccupation.md) | Specific service label the job relates to (e.g., Mobile App Development) |

## Examples

### Example

```json
{
  "category": PublicMarketplaceJobPostingSearchOccupation,
  "subCategories": [
    PublicMarketplaceJobPostingSearchOccupation
  ],
  "occupationService": PublicMarketplaceJobPostingSearchOccupation
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingSearchOccupations" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [PublicMarketplaceJobPostingSearchOccupation](PublicMarketplaceJobPostingSearchOccupation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [PublicMarketplaceJobPostingSearchOntologySkill](PublicMarketplaceJobPostingSearchOntologySkill.md) ➡️
