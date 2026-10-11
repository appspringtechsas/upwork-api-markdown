---
title: "JobExtendedBudgetInfo"
kind: "object"
domain: "Other"
gql_name: "JobExtendedBudgetInfo"
html_id: "definition-JobExtendedBudgetInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobExtendedBudgetInfo"
generated_by: "scripts/convert.mjs"
---


# `JobExtendedBudgetInfo` (object)

## Description

Job budget info

## Fields

| Field | Type | Description |
|---|---|---|
| `hourlyBudgetMax` | [`Float`](../scalars/Float.md) | Maximum hourly rate for the job |
| `hourlyBudgetMin` | [`Float`](../scalars/Float.md) | Minimum hourly rate for the job |
| `hourlyBudgetType` | [`JobHourlyBudgetType`](../enums/JobHourlyBudgetType.md) | Type of hourly budget (DEFAULT, MANUAL, NOT_PROVIDED) |

## Examples

### Example

```json
{
  "hourlyBudgetMax": 123.45,
  "hourlyBudgetMin": 123.45,
  "hourlyBudgetType": "DEFAULT"
}
```
