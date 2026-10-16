---
title: "OfferLocationInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferLocationInput"
html_id: "definition-OfferLocationInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferLocationInput"
generated_by: "scripts/convert.mjs"
---


# `OfferLocationInput` (input object)

## Description

Location information for offer

## Fields

| Field | Type | Description |
|---|---|---|
| `workType` | [`OfferWorkType`](../enums/OfferWorkType.md) | Work type (remote or on-site) |
| `country` | [`String`](../scalars/String.md) | Can be retrieved by Query countries: [Country!]! |
| `state` | [`String`](../scalars/String.md) | Can be retrieved by Query location{state} |
| `description` | [`String`](../scalars/String.md) | Location description |
| `flexible` | [`Boolean`](../scalars/Boolean.md) | Whether location is flexible |
| `flexibilityDescription` | [`String`](../scalars/String.md) | Flexibility description |
| `city` | [`String`](../scalars/String.md) | Can be retrieved by Query location{state} |
| `address` | [`OfferAddressInput`](OfferAddressInput.md) | Address details |

## Examples

### Example

```json
{
  "workType": "REMOTE",
  "country": "xyz789",
  "state": "xyz789",
  "description": "xyz789",
  "flexible": true,
  "flexibilityDescription": "abc123",
  "city": "xyz789",
  "address": OfferAddressInput
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferLocationInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferHourlyRateTerms](OfferHourlyRateTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OfferMetadataInput](OfferMetadataInput.md) ➡️
