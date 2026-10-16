---
title: "MarketPlaceJobSearchLocation"
kind: "object"
domain: "Job Posts"
gql_name: "MarketPlaceJobSearchLocation"
html_id: "definition-MarketPlaceJobSearchLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketPlaceJobSearchLocation"
generated_by: "scripts/convert.mjs"
---


# `MarketPlaceJobSearchLocation` (object)

## Description

Client location details shown in search results

## Fields

| Field | Type | Description |
|---|---|---|
| `city` | [`String`](../scalars/String.md) | City name |
| `country` | [`String`](../scalars/String.md) | Country name |
| `timezone` | [`String`](../scalars/String.md) | Timezone identifier |
| `state` | [`String`](../scalars/String.md) | State or region |
| `offsetToUTC` | [`String`](../scalars/String.md) | Offset from UTC |

## Examples

### Example

```json
{
  "city": "xyz789",
  "country": "abc123",
  "timezone": "xyz789",
  "state": "abc123",
  "offsetToUTC": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketPlaceJobSearchLocation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketplaceJobPostingSearchSkill](MarketplaceJobPostingSearchSkill.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceLocation](MarketplaceLocation.md) ➡️
