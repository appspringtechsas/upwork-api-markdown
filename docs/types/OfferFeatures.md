---
title: "OfferFeatures"
kind: "object"
domain: "Offers and Contracts"
gql_name: "OfferFeatures"
html_id: "definition-OfferFeatures"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferFeatures"
generated_by: "scripts/convert.mjs"
---


# `OfferFeatures` (object)

## Description

Features associated with the enterprise related offer

## Fields

| Field | Type | Description |
|---|---|---|
| `purchaseOrder` | [`PurchaseOrder`](PurchaseOrder.md) | Purchase order information |
| `privateTalentCloud` | [`PrivateTalentCloud`](PrivateTalentCloud.md) | Private talent cloud information |
| `onSiteType` | [`OfferWorkType`](../enums/OfferWorkType.md) | On-site work type requirement |
| `country` | [`Country`](Country.md) | Country requirement |
| `state` | [`String`](../scalars/String.md) | State requirement |
| `localDescription` | [`String`](../scalars/String.md) | Local work description |
| `localFlexibilityDescription` | [`String`](../scalars/String.md) | Local flexibility description |
| `eor` | [`Boolean`](../scalars/Boolean.md) | "Employer of Record" referred to as the W-2 Employer of Record because they are responsible for issuing W-2s (Wage and Tax Statement) to the employee shoulders the responsibility for all the traditional employment tasks and liabilities. When the invited freelancer accepts this invitation, the freelancer is added to the specific Upwork agency entity as a contractor |

## Examples

### Example

```json
{
  "purchaseOrder": PurchaseOrder,
  "privateTalentCloud": PrivateTalentCloud,
  "onSiteType": "REMOTE",
  "country": Country,
  "state": "abc123",
  "localDescription": "abc123",
  "localFlexibilityDescription": "abc123",
  "eor": false
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferFeatures" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OfferCreationResponse](OfferCreationResponse.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OfferLastEvent](OfferLastEvent.md) ➡️
