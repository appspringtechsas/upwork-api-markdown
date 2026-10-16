---
title: "FreelancerLocation"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerLocation"
html_id: "definition-FreelancerLocation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerLocation"
generated_by: "scripts/convert.mjs"
---


# `FreelancerLocation` (object)

## Description

Location of the freelancer

## Fields

| Field | Type | Description |
|---|---|---|
| `countryName` | [`String`](../scalars/String.md) | Country name |
| `cityName` | [`String`](../scalars/String.md) | City name |
| `zip` | [`String`](../scalars/String.md) | Postal or ZIP code |
| `timezone` | [`String!`](../scalars/String.md) | IANA timezone identifier (e.g., America/Los_Angeles) |
| `street` | [`String`](../scalars/String.md) | Street address |

## Examples

### Example

```json
{
  "countryName": "abc123",
  "cityName": "xyz789",
  "zip": "xyz789",
  "timezone": "xyz789",
  "street": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerLocation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FailedInvitation](FailedInvitation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfile](FreelancerProfile.md) ➡️
