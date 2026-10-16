---
title: "JobPostingLocation"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingLocation"
html_id: "definition-JobPostingLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingLocation"
generated_by: "scripts/convert.mjs"
---


# `JobPostingLocation` (object)

## Description

Location constraints for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `countries` | [`[String!]`](../scalars/String.md) | Allowed countries |
| `regions` | [`[Int!]`](../scalars/Int.md) | Allowed regions (legacy) |
| `states` | [`[String!]`](../scalars/String.md) | Allowed states |
| `timezones` | [`[String!]`](../scalars/String.md) | Allowed timezones |
| `localCheckRequired` | [`Boolean`](../scalars/Boolean.md) | Whether local check is required |
| `localMarket` | [`Boolean`](../scalars/Boolean.md) | Whether local market only |
| `areas` | [`[Area!]`](Area.md) | Specific geographic areas |
| `notSureLocationPreference` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about location preference |
| `localDescription` | [`String`](../scalars/String.md) | Description of local requirement |
| `localFlexibilityDescription` | [`String`](../scalars/String.md) | Description of location flexibility |
| `address` | [`String`](../scalars/String.md) | Physical address |

## Examples

### Example

```json
{
  "countries": ["xyz789"],
  "regions": [987],
  "states": ["abc123"],
  "timezones": ["xyz789"],
  "localCheckRequired": true,
  "localMarket": true,
  "areas": [Area],
  "notSureLocationPreference": false,
  "localDescription": "xyz789",
  "localFlexibilityDescription": "xyz789",
  "address": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingLocation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingInfo](JobPostingInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingOwnership](JobPostingOwnership.md) ➡️
