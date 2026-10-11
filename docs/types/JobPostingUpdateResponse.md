---
title: "JobPostingUpdateResponse"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingUpdateResponse"
html_id: "definition-JobPostingUpdateResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingUpdateResponse"
generated_by: "scripts/convert.mjs"
---


# `JobPostingUpdateResponse` (object)

## Description

Response for updating a job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Updated job posting identifier |
| `qualificationsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether qualifications section was saved |
| `skillsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether skills section was saved |
| `questionsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether screening questions were saved |
| `segmentationDataSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether segmentation data was saved |
| `attachmentsSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether attachments were saved |
| `ptcInfoSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether PTC info was saved |
| `sandsJobPostSaved` | [`Boolean!`](../scalars/Boolean.md) | Whether Sands job post data was saved |
| `version` | [`Int`](../scalars/Int.md) | Optimistic locking version |

## Examples

### Example

```json
{
  "id": 4,
  "qualificationsSaved": false,
  "skillsSaved": true,
  "questionsSaved": true,
  "segmentationDataSaved": true,
  "attachmentsSaved": false,
  "ptcInfoSaved": false,
  "sandsJobPostSaved": true,
  "version": 987
}
```
