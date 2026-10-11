---
title: "ProfileActivityMetricsLastUpdated"
kind: "object"
domain: "Users and teams"
gql_name: "ProfileActivityMetricsLastUpdated"
html_id: "definition-ProfileActivityMetricsLastUpdated"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetricsLastUpdated"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetricsLastUpdated` (object)

## Description

Last updated timestamp for profile activity metrics

## Fields

| Field | Type | Description |
|---|---|---|
| `lastUpdated` | [`String`](../scalars/String.md) | Last updated timestamp in ISO-8601 format |
| `metric` | [`ProfileActivityMetricType`](../enums/ProfileActivityMetricType.md) | Metric type |

## Examples

### Example

```json
{
  "lastUpdated": "xyz789",
  "metric": "PROFILE_VIEWS"
}
```
