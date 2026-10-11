---
title: "TalentProfileCompletenessSummary"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileCompletenessSummary"
html_id: "definition-TalentProfileCompletenessSummary"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileCompletenessSummary"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileCompletenessSummary` (object)

## Description

Profile completeness summary with PCI score and section counts

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `pciActual` | [`Int`](../scalars/Int.md) | Actual profile completeness index score |
| `pciDisplay` | [`Int`](../scalars/Int.md) | Display-friendly PCI score |
| `pciAction` | [`String`](../scalars/String.md) | Suggested action to improve completeness |
| `pciActionCredit` | [`Int`](../scalars/Int.md) | Points awarded for completing the action |
| `pciDateTime` | [`String`](../scalars/String.md) | When PCI was last calculated |
| `actionForEmptySection` | [`String`](../scalars/String.md) | Action to take for empty profile sections |
| `skillsCount` | [`Int`](../scalars/Int.md) | Number of skills on profile |
| `employmentRecordCount` | [`Int`](../scalars/Int.md) | Number of employment records |
| `portraitExists` | [`Boolean`](../scalars/Boolean.md) | Whether profile has a portrait photo |
| `overviewExists` | [`Boolean`](../scalars/Boolean.md) | Whether profile has an overview/description |
| `passedTestsCount` | [`Int`](../scalars/Int.md) | Number of passed tests |
| `educationRecordCount` | [`Int`](../scalars/Int.md) | Number of education records |
| `certificatesCount` | [`Int`](../scalars/Int.md) | Number of certificates |
| `otherExperiencesCount` | [`Int`](../scalars/Int.md) | Number of other experiences |
| `portfolioCount` | [`Int`](../scalars/Int.md) | Number of portfolio items |
| `esnCount` | [`Int`](../scalars/Int.md) | Employment Security Number count |
| `updatedDateTime` | [`String`](../scalars/String.md) | Last update timestamp |

## Examples

### Example

```json
{
  "personId": "abc123",
  "pciActual": 987,
  "pciDisplay": 987,
  "pciAction": "abc123",
  "pciActionCredit": 987,
  "pciDateTime": "xyz789",
  "actionForEmptySection": "abc123",
  "skillsCount": 987,
  "employmentRecordCount": 123,
  "portraitExists": false,
  "overviewExists": false,
  "passedTestsCount": 987,
  "educationRecordCount": 987,
  "certificatesCount": 987,
  "otherExperiencesCount": 987,
  "portfolioCount": 123,
  "esnCount": 987,
  "updatedDateTime": "xyz789"
}
```
