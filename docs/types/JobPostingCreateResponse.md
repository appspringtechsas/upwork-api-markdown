---
title: "JobPostingCreateResponse"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingCreateResponse"
html_id: "definition-JobPostingCreateResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCreateResponse"
generated_by: "scripts/convert.mjs"
---


# `JobPostingCreateResponse` (object)

## Description

Response for creating a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Created job posting identifier |
| `qualificationsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether qualifications section was saved |
| `skillsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether skills section was saved |
| `questionsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether screening questions were saved |
| `segmentationDataSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether segmentation data was saved |
| `attachmentsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether attachments were saved |
| `ptcInfoSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether PTC info was saved |
| `jobPostingAdditional` | [`Boolean!`](../scalars/Boolean.md) | Whether additional posting info was saved |
| `sandsJobPostSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether Sands job post data was saved |
| `customFieldsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether custom fields were saved |
| `version` | [`Int`](../scalars/Int.md) | Optimistic locking version |

## Examples

### Example

```json
{
  "id": 4,
  "qualificationsSaved": true,
  "skillsSaved": false,
  "questionsSaved": false,
  "segmentationDataSaved": true,
  "attachmentsSaved": false,
  "ptcInfoSaved": false,
  "jobPostingAdditional": false,
  "sandsJobPostSaved": true,
  "customFieldsSaved": false,
  "version": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingCreateResponse" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingContractTerms](JobPostingContractTerms.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingCustomFields](JobPostingCustomFields.md) ➡️
