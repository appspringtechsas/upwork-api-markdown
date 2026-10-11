---
title: "OfferLastEvent"
kind: "object"
domain: "Offers and Contracts"
gql_name: "OfferLastEvent"
html_id: "definition-OfferLastEvent"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferLastEvent"
generated_by: "scripts/convert.mjs"
---


# `OfferLastEvent` (object)

## Description

Last event on offer

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
  "reasonId": "4",
  "message": "xyz789",
  "lastEventTime": "abc123"
}
```
