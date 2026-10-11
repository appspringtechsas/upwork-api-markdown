---
title: "ProfileActivityMetric"
kind: "object"
domain: "Users and teams"
gql_name: "ProfileActivityMetric"
html_id: "definition-ProfileActivityMetric"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetric"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetric` (object)

## Description

A single profile activity metric with time series data

## Fields

| Field | Type | Description |
|---|---|---|
| `metric` | [`ProfileActivityMetricType!`](../enums/ProfileActivityMetricType.md) | Metric type |
| `data` | [`[ProfileActivityMetricEntry!]`](ProfileActivityMetricEntry.md) | Time series data points for the metric |

## Examples

### Example

```json
{
  "metric": "PROFILE_VIEWS",
  "data": [ProfileActivityMetricEntry]
}
```
