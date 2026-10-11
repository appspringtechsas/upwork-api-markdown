---
title: "createJobPosting"
kind: "mutation"
gql_name: "createJobPosting"
returns: "JobPostingCreateResponse"
html_id: "mutation-createJobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#mutation-createJobPosting"
generated_by: "scripts/convert.mjs"
---


# `createJobPosting`

## Description

Create a new Job post

## Required Permissions

"Job Postings - Read and Write Access"

## Response

Returns a [`JobPostingCreateResponse`](../types/JobPostingCreateResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingRequest` | [`JobPostingCreateRequest!`](../inputs/JobPostingCreateRequest.md) | Job posting creation request |

## Examples

### Detailed structure

#### Query

```graphql
mutation createJobPosting($jobPostingRequest: JobPostingCreateRequest!) {
  createJobPosting(jobPostingRequest: $jobPostingRequest) {
    id
    qualificationsSaved
    skillsSaved
    questionsSaved
    segmentationDataSaved
    attachmentsSaved
    ptcInfoSaved
    jobPostingAdditional
    sandsJobPostSaved
    customFieldsSaved
    version
  }
}
```

#### Variables

```json
{"jobPostingRequest": JobPostingCreateRequest}
```

#### Response

```json
{
  "data": {
    "createJobPosting": {
      "id": "4",
      "qualificationsSaved": false,
      "skillsSaved": true,
      "questionsSaved": false,
      "segmentationDataSaved": true,
      "attachmentsSaved": false,
      "ptcInfoSaved": false,
      "jobPostingAdditional": true,
      "sandsJobPostSaved": true,
      "customFieldsSaved": true,
      "version": 123
    }
  }
}
```

### Real-life example

#### Query

```graphql
mutation CreateJobPosting($request: JobPostingCreateRequest!) {
  createJobPosting(jobPostingRequest: $request) {
    id
    version
    qualificationsSaved
    skillsSaved
    questionsSaved
  }
}
```

#### Variables

```json
{
  "request": {
    "organizationId": "2056499345994300718",
    "jobPostingInfo": {
      "title": "API validation test job (draft)",
      "description": "Test job created via GraphQL public API validation.",
      "type": "HOURLY",
      "status": "DRAFT",
      "engagementType": "PART_TIME",
      "experienceLevel": "INTERMEDIATE",
      "freelancersToHire": 1,
      "access": "ACCESS_PUBLIC",
      "hourlyBudgetType": "NOT_PROVIDED"
    }
  }
}
```

#### Response

```json
{
    "data": {
        "createJobPosting": {
            "id": "2056509179207027383",
            "version": 0,
            "qualificationsSaved": false,
            "skillsSaved": false,
            "questionsSaved": true
        }
    }
}
```
