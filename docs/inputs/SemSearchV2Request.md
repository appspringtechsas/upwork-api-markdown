---
title: "SemSearchV2Request"
kind: "input_object"
domain: "Search"
gql_name: "SemSearchV2Request"
html_id: "definition-SemSearchV2Request"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SemSearchV2Request"
generated_by: "scripts/convert.mjs"
---


# `SemSearchV2Request` (input object)

## Description

SEM search request

## Fields

| Field | Type | Description |
|---|---|---|
| `paging` | [`Paging`](Paging.md) | Pagination options |
| `userQuery` | [`String`](../scalars/String.md) | Free text query |
| `occupationUid` | [`String`](../scalars/String.md) | Occupation UID filter |
| `title` | [`String`](../scalars/String.md) | Title filter |
| `countries` | [`[String!]`](../scalars/String.md) | Country filters |
| `states` | [`[String!]`](../scalars/String.md) | State/region filters |
| `cities` | [`[String!]`](../scalars/String.md) | City filters |
| `hourlyRate` | [`SemSearchV2DoubleRange`](SemSearchV2DoubleRange.md) | Hourly rate range |
| `jobSuccessScore` | [`SemSearchV2DoubleRange`](SemSearchV2DoubleRange.md) | Job Success Score range |
| `totalJobs` | [`SemSearchV2IntRange`](SemSearchV2IntRange.md) | Total jobs range |
| `topRated` | [`Boolean`](../scalars/Boolean.md) | Filter by Top Rated status |
| `risingTalent` | [`Boolean`](../scalars/Boolean.md) | Filter by Rising Talent status |
| `hasPortrait100` | [`Boolean`](../scalars/Boolean.md) | Require portrait image (100px) |
| `skillsNames` | [`[String!]`](../scalars/String.md) | Skill name filters |
| `skillsUids` | [`[String!]`](../scalars/String.md) | Skill UID filters |
| `vemSkills` | [`[VemSkill!]`](VemSkill.md) | VEM skills to boost |
| `type` | [`FreelancerType`](../enums/FreelancerType.md) | Freelancer type filter |
| `addAgencyPreview` | [`Boolean`](../scalars/Boolean.md) | Include agency preview data |
| `agencySearch` | [`Boolean`](../scalars/Boolean.md) | Restrict to agency search |
| `publicVisibilityOnly` | [`Boolean`](../scalars/Boolean.md) | Only include publicly visible profiles |

## Examples

### Example

```json
{
  "paging": Paging,
  "userQuery": "abc123",
  "occupationUid": "abc123",
  "title": "abc123",
  "countries": ["xyz789"],
  "states": ["xyz789"],
  "cities": ["abc123"],
  "hourlyRate": SemSearchV2DoubleRange,
  "jobSuccessScore": SemSearchV2DoubleRange,
  "totalJobs": SemSearchV2IntRange,
  "topRated": false,
  "risingTalent": true,
  "hasPortrait100": false,
  "skillsNames": ["xyz789"],
  "skillsUids": ["xyz789"],
  "vemSkills": [VemSkill],
  "type": "Agency",
  "addAgencyPreview": false,
  "agencySearch": false,
  "publicVisibilityOnly": false
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SemSearchV2Request" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [SemSearchV2IntRange](SemSearchV2IntRange.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [VemSkill](VemSkill.md) ➡️
