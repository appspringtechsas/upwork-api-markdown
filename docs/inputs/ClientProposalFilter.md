---
title: "ClientProposalFilter"
kind: "input_object"
domain: "Proposals"
gql_name: "ClientProposalFilter"
html_id: "definition-ClientProposalFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalFilter"
generated_by: "scripts/convert.mjs"
---


# `ClientProposalFilter` (input object)

## Description

Filter criteria for searching client proposals

## Fields

| Field | Type | Description |
|---|---|---|
| `status_eq` | [`ClientProposalStatusName`](../enums/ClientProposalStatusName.md) | Filter by proposal status |
| `annotations_eq` | [`ClientProposalAnnotation`](../enums/ClientProposalAnnotation.md) | Filter by annotation |
| `freelancerId_eq` | [`ID`](../scalars/ID.md) | Filter by freelancer identifier |
| `chargeRate_eq` | [`ClientProposalHourlyRate`](../enums/ClientProposalHourlyRate.md) | Filter by hourly rate range |
| `activityDays_eq` | [`ClientProposalLastActivity`](../enums/ClientProposalLastActivity.md) | Filter by last activity period |
| `category_eq` | [`String`](../scalars/String.md) | Filter by category name |
| `jobSuccessScore_eq` | [`ClientProposalJobSuccessSocre`](../enums/ClientProposalJobSuccessSocre.md) | Filter by job success score range |
| `earnings_eq` | [`ClientProposalEarnedAmount`](../enums/ClientProposalEarnedAmount.md) | Filter by earnings amount range |
| `billedHours_eq` | [`ClientProposalHoursBilled`](../enums/ClientProposalHoursBilled.md) | Filter by hours billed range |
| `applierType_eq` | [`ClientProposalTalentType`](../enums/ClientProposalTalentType.md) | Filter by talent type |
| `topRated_eq` | [`ClientProposalRatedType`](../enums/ClientProposalRatedType.md) | Filter by top rated status |
| `englishLevel_eq` | [`ClientProposalEnglishProficiency`](../enums/ClientProposalEnglishProficiency.md) | Filter by English proficiency level |
| `title_eq` | [`String`](../scalars/String.md) | Filter by freelancer title |
| `textQuery_eq` | [`String`](../scalars/String.md) | Full text search query |
| `country_any` | [`[String!]`](../scalars/String.md) | Filter by countries |
| `region_any` | [`[String!]`](../scalars/String.md) | Filter by regions |
| `languages_any` | [`[String!]`](../scalars/String.md) | Filter by languages |
| `occupationId` | [`ID`](../scalars/ID.md) | Filter by ontology occupation identifier |

## Examples

### Example

```json
{
  "status_eq": "Created",
  "annotations_eq": "Recommended",
  "freelancerId_eq": 4,
  "chargeRate_eq": "ANY_HOURLY_RATE",
  "activityDays_eq": "ANY_TIME",
  "category_eq": "xyz789",
  "jobSuccessScore_eq": "ANY_JOB_SUCCESS",
  "earnings_eq": "ANY_AMOUNT_EARNED",
  "billedHours_eq": "ANY_HOURS",
  "applierType_eq": "FREELANCER",
  "topRated_eq": "TOP_RATED",
  "englishLevel_eq": "ANY_LEVEL",
  "title_eq": "xyz789",
  "textQuery_eq": "abc123",
  "country_any": ["xyz789"],
  "region_any": ["abc123"],
  "languages_any": ["abc123"],
  "occupationId": "4"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-ClientProposalFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ClientProposalDeclineRequest](ClientProposalDeclineRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientProposalHideRequest](ClientProposalHideRequest.md) ➡️
