---
title: "profileActivityMetrics"
kind: "query"
gql_name: "profileActivityMetrics"
returns: "ProfileActivityMetrics"
html_id: "query-profileActivityMetrics"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-profileActivityMetrics"
generated_by: "scripts/convert.mjs"
---


# `profileActivityMetrics`

## Description

Returns profile activity metrics for the authenticated freelancer, including profile views, invitations, and proposal activity over time.

## Response

Returns a [`ProfileActivityMetrics`](../types/ProfileActivityMetrics.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`ProfileActivityMetricsFilter!`](../inputs/ProfileActivityMetricsFilter.md) | Filters for profile activity metrics |

## Examples

### Detailed structure

#### Query

```graphql
query profileActivityMetrics($filter: ProfileActivityMetricsFilter!) {
  profileActivityMetrics(filter: $filter) {
    metrics {
      ...ProfileActivityMetricFragment
    }
  }
}
```

#### Variables

```json
{"filter": ProfileActivityMetricsFilter}
```

#### Response

```json
{
  "data": {
    "profileActivityMetrics": {
      "metrics": [ProfileActivityMetric]
    }
  }
}
```
