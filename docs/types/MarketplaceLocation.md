---
title: "MarketplaceLocation"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceLocation"
html_id: "definition-MarketplaceLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceLocation"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceLocation` (object)

## Description

Location constraints for marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `countries` | [`[String!]`](../scalars/String.md) | Allowed countries |
| `states` | [`[String!]`](../scalars/String.md) | Allowed states |
| `timezones` | [`[String!]`](../scalars/String.md) | Allowed timezones |
| `localCheckRequired` | [`Boolean`](../scalars/Boolean.md) | Whether local check is required |
| `localMarket` | [`Boolean`](../scalars/Boolean.md) | Whether local market only |
| `areas` | [`[Area!]`](Area.md) | Specific geographic areas |
| `notSureLocationPreference` | [`Boolean`](../scalars/Boolean.md) | Client unsure about location preference |
| `localDescription` | [`String`](../scalars/String.md) | Description of local requirement |
| `localFlexibilityDescription` | [`String`](../scalars/String.md) | Description of location flexibility |

## Examples

### Example

```json
{
  "countries": ["abc123"],
  "states": ["abc123"],
  "timezones": ["xyz789"],
  "localCheckRequired": true,
  "localMarket": true,
  "areas": [Area],
  "notSureLocationPreference": false,
  "localDescription": "xyz789",
  "localFlexibilityDescription": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceLocation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [MarketPlaceJobSearchLocation](MarketPlaceJobSearchLocation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplacePostingActivityStat](MarketplacePostingActivityStat.md) ➡️
