---
title: "ProfileActivityMetricsFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "ProfileActivityMetricsFilter"
html_id: "definition-ProfileActivityMetricsFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetricsFilter"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetricsFilter` (input object)

## Description

Filters for profile activity metrics

## Fields

| Field | Type | Description |
|---|---|---|
| `metrics` | [`[ProfileActivityMetricType!]`](../enums/ProfileActivityMetricType.md) | Profile activity metric types to retrieve |
| `dateRange` | [`DateTimeRange!`](DateTimeRange.md) | Date range for the metrics query |
| `step` | [`ProfileActivityStepType!`](../enums/ProfileActivityStepType.md) | Time series aggregation step |
| `freelancerId` | [`ID`](../scalars/ID.md) | Optional freelancer identifier for agency context. Defaults to the authenticated user when omitted. |

## Examples

### Example

```json
{
  "metrics": ["PROFILE_VIEWS"],
  "dateRange": DateTimeRange,
  "step": "DAY",
  "freelancerId": "4"
}
```
