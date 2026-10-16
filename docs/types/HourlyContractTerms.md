---
title: "HourlyContractTerms"
kind: "object"
domain: "Job Posts"
gql_name: "HourlyContractTerms"
html_id: "definition-HourlyContractTerms"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyContractTerms"
generated_by: "scripts/convert.mjs"
---


# `HourlyContractTerms` (object)

## Description

Hourly contract terms

## Fields

| Field | Type | Description |
|---|---|---|
| `engagementDuration` | [`EngagementDuration`](EngagementDuration.md) | Expected engagement duration |
| `engagementType` | [`EngagementType!`](../enums/EngagementType.md) | Type of engagement (full-time, part-time, etc.) |
| `notSureProjectDuration` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about project duration |
| `hourlyBudgetType` | [`JobPostingHourlyBudgetType`](../enums/JobPostingHourlyBudgetType.md) | Hourly budget type |
| `hourlyBudgetMin` | [`Float`](../scalars/Float.md) | Minimum hourly rate |
| `hourlyBudgetMax` | [`Float`](../scalars/Float.md) | Maximum hourly rate |

## Examples

### Example

```json
{
  "engagementDuration": EngagementDuration,
  "engagementType": "FULL_TIME",
  "notSureProjectDuration": false,
  "hourlyBudgetType": "DEFAULT",
  "hourlyBudgetMin": 123.45,
  "hourlyBudgetMax": 987.65
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-HourlyContractTerms" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerClientRelation](FreelancerClientRelation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobActivity](JobActivity.md) ➡️
