---
title: "ProfileActivityMetricsAvailability"
kind: "object"
domain: "Users and teams"
gql_name: "ProfileActivityMetricsAvailability"
html_id: "definition-ProfileActivityMetricsAvailability"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetricsAvailability"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetricsAvailability` (object)

## Description

Response for available profile activity metrics

## Fields

| Field | Type | Description |
|---|---|---|
| `metrics` | [`[ProfileActivityMetricAvailability!]`](ProfileActivityMetricAvailability.md) | Available date ranges per metric type |

## Examples

### Example

```json
{"metrics": [ProfileActivityMetricAvailability]}
```
