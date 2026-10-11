---
title: "profileActivityMetricsAvailability"
kind: "query"
gql_name: "profileActivityMetricsAvailability"
returns: "ProfileActivityMetricsAvailability"
html_id: "query-profileActivityMetricsAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-profileActivityMetricsAvailability"
generated_by: "scripts/convert.mjs"
---


# `profileActivityMetricsAvailability`

## Description

Returns the available date ranges for each profile activity metric type for the authenticated freelancer.

## Response

Returns a [`ProfileActivityMetricsAvailability`](../types/ProfileActivityMetricsAvailability.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `freelancerId` | [`ID`](../scalars/ID.md) | Optional freelancer identifier for agency context. Defaults to the authenticated user when omitted. |

## Examples

### Detailed structure

#### Query

```graphql
query profileActivityMetricsAvailability($freelancerId: ID) {
  profileActivityMetricsAvailability(freelancerId: $freelancerId) {
    metrics {
      ...ProfileActivityMetricAvailabilityFragment
    }
  }
}
```

#### Variables

```json
{"freelancerId": "4"}
```

#### Response

```json
{
  "data": {
    "profileActivityMetricsAvailability": {
      "metrics": [ProfileActivityMetricAvailability]
    }
  }
}
```
