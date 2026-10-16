---
title: "updateJobPosting"
kind: "mutation"
gql_name: "updateJobPosting"
returns: "JobPostingUpdateResponse"
html_id: "mutation-updateJobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateJobPosting"
generated_by: "scripts/convert.mjs"
---


# `updateJobPosting`

## Description

Update an existing Job post by its ID

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns a [`JobPostingUpdateResponse`](../types/JobPostingUpdateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `jobPostingRequest` | [`JobPostingUpdateRequest!`](../inputs/JobPostingUpdateRequest.md) | Job posting update request |

## Examples

### Detailed structure

#### Query

```graphql
mutation updateJobPosting(
  $id: ID!,
  $jobPostingRequest: JobPostingUpdateRequest!
) {
  updateJobPosting(
    id: $id,
    jobPostingRequest: $jobPostingRequest
  ) {
    id
    qualificationsSaved
    skillsSaved
    questionsSaved
    segmentationDataSaved
    attachmentsSaved
    ptcInfoSaved
    sandsJobPostSaved
    version
  }
}
```

#### Variables

```json
{"id": 4, "jobPostingRequest": JobPostingUpdateRequest}
```

#### Response

```json
{
  "data": {
    "updateJobPosting": {
      "id": 4,
      "qualificationsSaved": true,
      "skillsSaved": false,
      "questionsSaved": false,
      "segmentationDataSaved": false,
      "attachmentsSaved": true,
      "ptcInfoSaved": true,
      "sandsJobPostSaved": false,
      "version": 123
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-updateJobPosting" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [removeJobPostingTag](removeJobPostingTag.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [acceptOffer](acceptOffer.md) ➡️
