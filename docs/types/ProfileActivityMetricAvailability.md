---
title: "ProfileActivityMetricAvailability"
kind: "object"
domain: "Users and teams"
gql_name: "ProfileActivityMetricAvailability"
html_id: "definition-ProfileActivityMetricAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetricAvailability"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetricAvailability` (object)

## Description

Availability window for a profile activity metric type

## Fields

| Field | Type | Description |
|---|---|---|
| `metric` | [`ProfileActivityMetricType!`](../enums/ProfileActivityMetricType.md) | Metric type |
| `availableFrom` | [`String!`](../scalars/String.md) | Start date from which the metric is available |
| `availableTo` | [`String!`](../scalars/String.md) | End date to which the metric is available |

## Examples

### Example

```json
{
  "metric": "PROFILE_VIEWS",
  "availableFrom": "abc123",
  "availableTo": "abc123"
}
```
