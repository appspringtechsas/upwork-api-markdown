---
title: "SearchOffersInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "SearchOffersInput"
html_id: "definition-SearchOffersInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SearchOffersInput"
generated_by: "scripts/convert.mjs"
---


# `SearchOffersInput` (input object)

## Description

Input for searching offers

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Identifier of the attribute |
| `searchAttribute` | [`OfferSearchAttribute!`](../enums/OfferSearchAttribute.md) | Attribute to search offers by |
| `states` | [`[OfferLegacyState!]`](../enums/OfferLegacyState.md) | Legacy offer states to search by |
| `limit` | [`Int`](../scalars/Int.md) | `10` |
| `page` | [`Int`](../scalars/Int.md) | `1` |
| `ascendingOrder` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `includeAttachments` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `includeMilestones` | [`Boolean`](../scalars/Boolean.md) | `true` |
| `includeScheduledRateIncrease` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "id": 4,
  "searchAttribute": "JobApplication",
  "states": ["Draft"],
  "limit": 123,
  "page": 987,
  "ascendingOrder": true,
  "includeAttachments": true,
  "includeMilestones": true,
  "includeScheduledRateIncrease": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SearchOffersInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SearchOffersByAttributesInput](SearchOffersByAttributesInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UpdateHourlyLimitRequestInput](UpdateHourlyLimitRequestInput.md) ➡️
