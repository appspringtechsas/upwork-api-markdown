---
title: "JobPostingQualification"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingQualification"
html_id: "definition-JobPostingQualification"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQualification"
generated_by: "scripts/convert.mjs"
---


# `JobPostingQualification` (object)

## Description

Qualification requirements for a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `contractorType` | [`ContractorType`](../enums/ContractorType.md) | Type of contractor (individual, agency, etc.) |
| `englishProficiency` | [`EnglishProficiency`](../enums/EnglishProficiency.md) | Required English proficiency level |
| `hasPortfolio` | [`Boolean`](../scalars/Boolean.md) | Whether portfolio is required |
| `risingTalent` | [`Boolean`](../scalars/Boolean.md) | Whether rising talent is preferred |
| `jobSuccessScore` | [`Int`](../scalars/Int.md) | Minimum job success score |
| `earnings` | [`Earning`](../enums/Earning.md) | Minimum earnings requirement |
| `preferredGroups` | [`[PreferredGroup!]`](PreferredGroup.md) | Preferred freelancer groups |
| `preferredTests` | [`[PreferredTest]`](PreferredTest.md) | Preferred tests or certifications |

## Examples

### Example

```json
{
  "contractorType": "ALL",
  "englishProficiency": "ANY",
  "hasPortfolio": false,
  "risingTalent": true,
  "jobSuccessScore": 123,
  "earnings": "ANY",
  "preferredGroups": [PreferredGroup],
  "preferredTests": [PreferredTest]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingQualification" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingPtcInfo](JobPostingPtcInfo.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingQuestion](JobPostingQuestion.md) ➡️
