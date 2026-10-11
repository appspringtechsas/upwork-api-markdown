---
title: "OfferAcceptResponse"
kind: "object"
domain: "Offers and Contracts"
gql_name: "OfferAcceptResponse"
html_id: "definition-OfferAcceptResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferAcceptResponse"
generated_by: "scripts/convert.mjs"
---


# `OfferAcceptResponse` (object)

## Description

Response from accepting an offer

## Fields

| Field | Type | Description |
|---|---|---|
| `contract` | [`Contract`](Contract.md) | Legacy contract information |
| `contractDetails` | [`ContractDetails`](ContractDetails.md) | ContractDetails of the associated Offer |

## Examples

### Example

```json
{
  "contract": Contract,
  "contractDetails": ContractDetails
}
```
