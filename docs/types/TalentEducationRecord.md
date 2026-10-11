---
title: "TalentEducationRecord"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentEducationRecord"
html_id: "definition-TalentEducationRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentEducationRecord"
generated_by: "scripts/convert.mjs"
---


# `TalentEducationRecord` (object)

## Description

Education record (deprecated, use TalentProfileEducationRecord)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`String`](../scalars/String.md) | Education record identifier |
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `institutionName` | [`String`](../scalars/String.md) | Name of educational institution |
| `standardizedInstitutionId` | [`String`](../scalars/String.md) | Standardized institution identifier |
| `areaOfStudy` | [`String`](../scalars/String.md) | Field of study |
| `standardizedAreaOfStudyId` | [`String`](../scalars/String.md) | Standardized area of study identifier |
| `degree` | [`String`](../scalars/String.md) | Degree obtained |
| `standardizedDegreeId` | [`String`](../scalars/String.md) | Standardized degree identifier |
| `startDateTime` | [`String`](../scalars/String.md) | When education started |
| `endDateTime` | [`String`](../scalars/String.md) | When education ended |
| `comment` | [`String`](../scalars/String.md) | Additional comments |

## Examples

### Example

```json
{
  "id": "abc123",
  "personId": "xyz789",
  "institutionName": "abc123",
  "standardizedInstitutionId": "abc123",
  "areaOfStudy": "xyz789",
  "standardizedAreaOfStudyId": "abc123",
  "degree": "xyz789",
  "standardizedDegreeId": "xyz789",
  "startDateTime": "abc123",
  "endDateTime": "xyz789",
  "comment": "xyz789"
}
```
