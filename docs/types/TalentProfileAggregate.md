---
title: "TalentProfileAggregate"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileAggregate"
html_id: "definition-TalentProfileAggregate"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileAggregate"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileAggregate` (object)

## Description

Aggregated profile statistics and metrics for a freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `lastWorkedOn` | [`String`](../scalars/String.md) | Last date freelancer worked |
| `totalHourlyJobs` | [`Int`](../scalars/Int.md) | Total number of hourly jobs completed |
| `totalFixedJobs` | [`Int`](../scalars/Int.md) | Total number of fixed-price jobs completed |
| `topRatedStatus` | [`String`](../scalars/String.md) | Top Rated status |
| `totalFeedback` | [`Float`](../scalars/Float.md) | Total feedback score |
| `totalEarnings` | [`Float`](../scalars/Float.md) | Total earnings across all jobs |
| `adjustedCategoryScores` | [`[TalentAdjustedCategoryScore]`](TalentAdjustedCategoryScore.md) | Adjusted scores by category |
| `totalJobs` | [`Int`](../scalars/Int.md) | Total number of jobs completed |

## Examples

### Example

```json
{
  "lastWorkedOn": "xyz789",
  "totalHourlyJobs": 123,
  "totalFixedJobs": 123,
  "topRatedStatus": "abc123",
  "totalFeedback": 123.45,
  "totalEarnings": 123.45,
  "adjustedCategoryScores": [TalentAdjustedCategoryScore],
  "totalJobs": 123
}
```
