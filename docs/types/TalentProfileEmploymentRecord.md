---
title: "TalentProfileEmploymentRecord"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileEmploymentRecord"
html_id: "definition-TalentProfileEmploymentRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileEmploymentRecord"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileEmploymentRecord` (object)

## Description

Employment history record (deprecated, use TalentProfileEmploymentHistoryRecord)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`String`](../scalars/String.md) | Employment record identifier |
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `companyName` | [`String`](../scalars/String.md) | Company name |
| `jobTitle` | [`String`](../scalars/String.md) | Job title |
| `standardizedCompanyId` | [`String`](../scalars/String.md) | Standardized company identifier |
| `standardizedJobTitleId` | [`String`](../scalars/String.md) | Standardized job title identifier |
| `role` | [`String`](../scalars/String.md) | Role description |
| `startDateTime` | [`String`](../scalars/String.md) | Employment start timestamp |
| `endDateTime` | [`String`](../scalars/String.md) | Employment end timestamp |
| `description` | [`String`](../scalars/String.md) | Job description |
| `city` | [`String`](../scalars/String.md) | City of employment |
| `country` | [`String`](../scalars/String.md) | Country of employment |

## Examples

### Example

```json
{
  "id": "abc123",
  "personId": "xyz789",
  "companyName": "xyz789",
  "jobTitle": "xyz789",
  "standardizedCompanyId": "abc123",
  "standardizedJobTitleId": "xyz789",
  "role": "abc123",
  "startDateTime": "xyz789",
  "endDateTime": "xyz789",
  "description": "xyz789",
  "city": "xyz789",
  "country": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileEmploymentRecord" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfileCompletenessSummary](TalentProfileCompletenessSummary.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileIdentity](TalentProfileIdentity.md) ➡️
