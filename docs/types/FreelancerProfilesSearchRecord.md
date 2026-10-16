---
title: "FreelancerProfilesSearchRecord"
kind: "object"
domain: "Search"
gql_name: "FreelancerProfilesSearchRecord"
html_id: "definition-FreelancerProfilesSearchRecord"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchRecord"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfilesSearchRecord` (object)

## Description

Freelancer profile search result record

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Record identifier |
| `title` | [`String`](../scalars/String.md) | Title of the freelancer profile |
| `description` | [`String`](../scalars/String.md) | Description of the freelancer's profile |
| `shortName` | [`String`](../scalars/String.md) | Short name of the freelancer |
| `ciphertext` | [`String`](../scalars/String.md) | Freelancer's ciphertext |
| `portrait` | [`String`](../scalars/String.md) | Portrait URL of the freelancer |
| `lastActiveDateTime` | [`String`](../scalars/String.md) | Date and time when the freelancer was last active on the platform |
| `totalHourlyJobs` | [`Int`](../scalars/Int.md) | Total count of hourly jobs |
| `totalFixedPriceJobs` | [`Int`](../scalars/Int.md) | Total count of fixed price jobs |
| `skills` | [`[Skill]`](Skill.md) | Skills of the freelancer |
| `hourlyRate` | [`Money`](Money.md) | Hourly rate of the freelancer |
| `topRatedStatus` | [`String`](../scalars/String.md) | Top rated status |
| `avgFeedbackScore` | [`Float`](../scalars/Float.md) | Average feedback score across all contracts |
| `totalFeedbackCount` | [`Float`](../scalars/Float.md) | Total count of contracts with feedback |
| `hideEarnings` | [`Boolean`](../scalars/Boolean.md) | Boolean indicating if the earnings are hidden from the profile |
| `freelancer` | [`CurrentUser`](CurrentUser.md) | User details of the freelancer |
| `location` | [`FreelancerSearchResultLocation`](FreelancerSearchResultLocation.md) | Freelancer's location |
| `contracts` | [`[FreelancerSearchResultContractSummary]`](FreelancerSearchResultContractSummary.md) | Contracts executed by the freelancer |

## Examples

### Example

```json
{
  "id": 4,
  "title": "xyz789",
  "description": "xyz789",
  "shortName": "xyz789",
  "ciphertext": "xyz789",
  "portrait": "xyz789",
  "lastActiveDateTime": "xyz789",
  "totalHourlyJobs": 123,
  "totalFixedPriceJobs": 123,
  "skills": [Skill],
  "hourlyRate": Money,
  "topRatedStatus": "xyz789",
  "avgFeedbackScore": 987.65,
  "totalFeedbackCount": 123.45,
  "hideEarnings": false,
  "freelancer": CurrentUser,
  "location": FreelancerSearchResultLocation,
  "contracts": [FreelancerSearchResultContractSummary]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchRecord" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkDiary](WorkDiary.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfilesSearchRecordsConnection](FreelancerProfilesSearchRecordsConnection.md) ➡️
