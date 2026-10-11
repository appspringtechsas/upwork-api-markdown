---
title: "ContractOfferLastEvent"
kind: "object"
domain: "Offers and Contracts"
gql_name: "ContractOfferLastEvent"
html_id: "definition-ContractOfferLastEvent"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ContractOfferLastEvent"
generated_by: "scripts/convert.mjs"
---


# `ContractOfferLastEvent` (object)

## Description

Last event on contract offer

## Fields

| Field | Type | Description |
|---|---|---|
| `reasonId` | [`ID`](../scalars/ID.md) | Reason identifier |
| `message` | [`String`](../scalars/String.md) | Event message |
| `lastEventTime` | [`String`](../scalars/String.md) | Last event timestamp |

## Examples

### Example

```json
{
  "reasonId": 4,
  "message": "xyz789",
  "lastEventTime": "xyz789"
}
```
