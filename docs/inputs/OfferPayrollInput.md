---
title: "OfferPayrollInput"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferPayrollInput"
html_id: "definition-OfferPayrollInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferPayrollInput"
generated_by: "scripts/convert.mjs"
---


# `OfferPayrollInput` (input object)

## Description

Payroll information for offer

## Fields

| Field | Type | Description |
|---|---|---|
| `talentCloudId` | [`ID`](../scalars/ID.md) | Talent cloud identifier |
| `purchaseOrderId` | [`ID`](../scalars/ID.md) | Purchase order identifier |
| `assets` | [`[String!]`](../scalars/String.md) | Asset identifiers |

## Examples

### Example

```json
{
  "talentCloudId": "4",
  "purchaseOrderId": 4,
  "assets": ["abc123"]
}
```
