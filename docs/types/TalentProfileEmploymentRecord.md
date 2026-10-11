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
  "id": "xyz789",
  "personId": "xyz789",
  "companyName": "xyz789",
  "jobTitle": "abc123",
  "standardizedCompanyId": "xyz789",
  "standardizedJobTitleId": "abc123",
  "role": "abc123",
  "startDateTime": "abc123",
  "endDateTime": "abc123",
  "description": "abc123",
  "city": "xyz789",
  "country": "abc123"
}
```
