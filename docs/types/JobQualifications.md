---
title: "JobQualifications"
kind: "object"
domain: "Other"
gql_name: "JobQualifications"
html_id: "definition-JobQualifications"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobQualifications"
generated_by: "scripts/convert.mjs"
---


# `JobQualifications` (object)

## Description

Job qualifications

## Fields

| Field | Type | Description |
|---|---|---|
| `countries` | [`[String]`](../scalars/String.md) | List of countries where the freelancer must be located |
| `group` | [`JobQualificationGroup`](JobQualificationGroup.md) | Required freelancer group/certification |
| `languages` | [`[String]`](../scalars/String.md) | List of languages required for the job |
| `localDescription` | [`String`](../scalars/String.md) | Local market-specific job description |
| `localFlexibilityDescription` | [`String`](../scalars/String.md) | Description of flexibility requirements for local/on-site work |
| `localMarket` | [`Boolean`](../scalars/Boolean.md) | Whether this is a local market job |
| `location` | [`GeoLocation`](GeoLocation.md) | Preferred location details |
| `locations` | [`[PrefLocation]`](PrefLocation.md) | List of specific preferred locations |
| `minHoursWeek` | [`Float`](../scalars/Float.md) | Minimum hours per week required |
| `minJobSuccessScore` | [`Int`](../scalars/Int.md) | Minimum job success score required (0-100) |
| `minOdeskHours` | [`Int`](../scalars/Int.md) | Minimum hours the freelancer must have worked on Upwork |
| `onSiteType` | [`JobPreferredLocationType`](../enums/JobPreferredLocationType.md) | On-site work type requirement (REMOTE or PERMANENT) |
| `prefEnglishSkill` | [`JobPrefEnglishSkill`](../enums/JobPrefEnglishSkill.md) | Minimum English language proficiency required |
| `regions` | [`[String]`](../scalars/String.md) | List of US states where the freelancer must be located |
| `risingTalent` | [`Boolean`](../scalars/Boolean.md) | Whether rising talent freelancers are preferred |
| `shouldHavePortfolio` | [`Boolean`](../scalars/Boolean.md) | Whether freelancer must have a portfolio |
| `states` | [`[String]`](../scalars/String.md) | List of US states where the freelancer must be located |
| `tests` | [`[String]`](../scalars/String.md) | List of required certification or skill tests |
| `timezones` | [`[String]`](../scalars/String.md) | List of preferred time zones |
| `type` | [`JobContractorType`](../enums/JobContractorType.md) | Type of contractor required (ANY, INDEPENDENT, AGENCY) |

## Examples

### Example

```json
{
  "countries": ["xyz789"],
  "group": JobQualificationGroup,
  "languages": ["abc123"],
  "localDescription": "xyz789",
  "localFlexibilityDescription": "abc123",
  "localMarket": false,
  "location": GeoLocation,
  "locations": [PrefLocation],
  "minHoursWeek": 123.45,
  "minJobSuccessScore": 123,
  "minOdeskHours": 987,
  "onSiteType": "REMOTE",
  "prefEnglishSkill": "ANY",
  "regions": ["abc123"],
  "risingTalent": true,
  "shouldHavePortfolio": false,
  "states": ["abc123"],
  "tests": ["xyz789"],
  "timezones": ["xyz789"],
  "type": "ANY"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobQualifications" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobQualificationGroup](JobQualificationGroup.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobSegmentation](JobSegmentation.md) ➡️
