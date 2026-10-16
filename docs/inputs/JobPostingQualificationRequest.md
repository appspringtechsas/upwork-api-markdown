---
title: "JobPostingQualificationRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingQualificationRequest"
html_id: "definition-JobPostingQualificationRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQualificationRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingQualificationRequest` (input object)

## Description

Qualification requirements for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `oDeskHours` | [`Int`](../scalars/Int.md) | Minimum hours worked on the platform |
| `testId` | [`ID`](../scalars/ID.md) | Test identifier for skill assessment |
| `locationRegionId` | [`ID`](../scalars/ID.md) | Location region identifier |
| `hasPortfolio` | [`Boolean`](../scalars/Boolean.md) | Whether freelancer must have a portfolio |
| `contractorType` | [`ContractorType`](../enums/ContractorType.md) | Type of contractor (individual, agency, etc.) |
| `jobSuccessScore` | [`Int`](../scalars/Int.md) | Minimum job success score required |
| `englishProficiency` | [`EnglishProficiency`](../enums/EnglishProficiency.md) | Required English proficiency level |
| `risingTalent` | [`Boolean`](../scalars/Boolean.md) | Whether rising talent badge is required |
| `countries` | [`[String!]`](../scalars/String.md) | List of required countries |
| `regions` | [`[String!]`](../scalars/String.md) | List of required regions |
| `locationCheckRequired` | [`Boolean`](../scalars/Boolean.md) | Whether location verification is required |
| `states` | [`[String!]`](../scalars/String.md) | List of required states |
| `timezones` | [`[String!]`](../scalars/String.md) | List of required timezones |
| `earnings` | [`Earning`](../enums/Earning.md) | Minimum earnings requirement |
| `localMarket` | [`Boolean`](../scalars/Boolean.md) | Whether local market preference applies |
| `onSiteType` | [`OnSiteType`](../enums/OnSiteType.md) | On-site work type requirement |
| `locations` | [`[JobPostingLocationRequest!]`](JobPostingLocationRequest.md) | Preferred locations for the job |
| `localDescription` | [`String`](../scalars/String.md) | Description for local market preferences |
| `localFlexibilityDescription` | [`String`](../scalars/String.md) | Description for location flexibility |
| `ctime` | [`String`](../scalars/String.md) | Creation timestamp |
| `englishSkill` | [`EnglishSkill`](../enums/EnglishSkill.md) | Required English skill level |
| `groupRid` | [`ID`](../scalars/ID.md) | Group record identifier |
| `languages` | [`[String]`](../scalars/String.md) | List of required languages |
| `mtime` | [`String`](../scalars/String.md) | Modification timestamp |
| `openingId` | [`String`](../scalars/String.md) | Opening identifier |

## Examples

### Example

```json
{
  "oDeskHours": 987,
  "testId": "4",
  "locationRegionId": 4,
  "hasPortfolio": true,
  "contractorType": "ALL",
  "jobSuccessScore": 987,
  "englishProficiency": "ANY",
  "risingTalent": false,
  "countries": ["abc123"],
  "regions": ["xyz789"],
  "locationCheckRequired": false,
  "states": ["abc123"],
  "timezones": ["xyz789"],
  "earnings": "ANY",
  "localMarket": false,
  "onSiteType": "REMOTE",
  "locations": [JobPostingLocationRequest],
  "localDescription": "abc123",
  "localFlexibilityDescription": "abc123",
  "ctime": "xyz789",
  "englishSkill": "ANY_LEVEL",
  "groupRid": 4,
  "languages": ["xyz789"],
  "mtime": "abc123",
  "openingId": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQualificationRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingPtcInfoRequest](JobPostingPtcInfoRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingQuestionRequest](JobPostingQuestionRequest.md) ➡️
