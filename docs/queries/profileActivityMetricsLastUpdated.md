---
title: "profileActivityMetricsLastUpdated"
kind: "query"
gql_name: "profileActivityMetricsLastUpdated"
returns: "ProfileActivityMetricsLastUpdated"
html_id: "query-profileActivityMetricsLastUpdated"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-profileActivityMetricsLastUpdated"
generated_by: "scripts/convert.mjs"
---


# `profileActivityMetricsLastUpdated`

## Description

Returns the last updated timestamp for the requested profile activity metrics.

## Response

Returns a [`ProfileActivityMetricsLastUpdated`](../types/ProfileActivityMetricsLastUpdated.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `metrics` | [`[ProfileActivityMetricType!]!`](../enums/ProfileActivityMetricType.md) | Profile activity metric types to check |
| `freelancerId` | [`ID`](../scalars/ID.md) | Optional freelancer identifier for agency context. Defaults to the authenticated user when omitted. |

## Examples

### Detailed structure

#### Query

```graphql
query profileActivityMetricsLastUpdated(
  $metrics: [ProfileActivityMetricType!]!,
  $freelancerId: ID
) {
  profileActivityMetricsLastUpdated(
    metrics: $metrics,
    freelancerId: $freelancerId
  ) {
    lastUpdated
    metric
  }
}
```

#### Variables

```json
{"metrics": ["PROFILE_VIEWS"], "freelancerId": 4}
```

#### Response

```json
{
  "data": {
    "profileActivityMetricsLastUpdated": {
      "lastUpdated": "xyz789",
      "metric": "PROFILE_VIEWS"
    }
  }
}
```
