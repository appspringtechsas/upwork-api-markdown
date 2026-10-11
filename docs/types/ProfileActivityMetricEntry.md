---
title: "ProfileActivityMetricEntry"
kind: "object"
domain: "Users and teams"
gql_name: "ProfileActivityMetricEntry"
html_id: "definition-ProfileActivityMetricEntry"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ProfileActivityMetricEntry"
generated_by: "scripts/convert.mjs"
---


# `ProfileActivityMetricEntry` (object)

## Description

A single data point for a profile activity metric

## Fields

| Field | Type | Description |
|---|---|---|
| `timestamp` | [`String!`](../scalars/String.md) | Timestamp of the data point in ISO-8601 format |
| `count` | [`Int!`](../scalars/Int.md) | Number of events recorded in the time bucket for this metric |

## Examples

### Example

```json
{"timestamp": "abc123", "count": 987}
```
