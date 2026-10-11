---
title: "OfferSearchCommonFilter"
kind: "input_object"
domain: "Offers and Contracts"
gql_name: "OfferSearchCommonFilter"
html_id: "definition-OfferSearchCommonFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OfferSearchCommonFilter"
generated_by: "scripts/convert.mjs"
---


# `OfferSearchCommonFilter` (input object)

## Description

Common filter fields for offer search

## Fields

| Field | Type | Description |
|---|---|---|
| `text_eq` | [`String`](../scalars/String.md) | Text search filter |
| `states_any` | [`[ContractOfferState!]`](../enums/ContractOfferState.md) | Filter by offer states |
| `startDatePeriod_bt` | [`[String!]`](../scalars/String.md) | Filter by start date period |
| `endDatePeriod_bt` | [`[String!]`](../scalars/String.md) | Filter by end date period |
| `catalogProject` | [`Boolean`](../scalars/Boolean.md) | Filter by catalog project flag |

## Examples

### Example

```json
{
  "text_eq": "xyz789",
  "states_any": ["Pending"],
  "startDatePeriod_bt": ["xyz789"],
  "endDatePeriod_bt": ["xyz789"],
  "catalogProject": true
}
```
