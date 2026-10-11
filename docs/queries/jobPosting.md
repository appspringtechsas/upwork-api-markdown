---
title: "jobPosting"
kind: "query"
gql_name: "jobPosting"
returns: "JobPosting!"
html_id: "query-jobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-jobPosting"
generated_by: "scripts/convert.mjs"
---


# `jobPosting`

## Description

Get job posting by its ID

## Required Permissions

"Job Postings - Read-Only Access"

## Response

Returns a [`JobPosting!`](../types/JobPosting.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `jobPostingId` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `loadAnnotation` | [`Boolean`](../scalars/Boolean.md) | Include annotations |

## Examples

### Detailed structure

#### Query

```graphql
query jobPosting(
  $jobPostingId: ID!,
  $loadAnnotation: Boolean
) {
  jobPosting(
    jobPostingId: $jobPostingId,
    loadAnnotation: $loadAnnotation
  ) {
    id
    version
    info {
      ...JobPostingInfoFragment
    }
    visibility
    ownership {
      ...JobPostingOwnershipFragment
    }
    content {
      ...JobPostingContentFragment
    }
    attachment {
      ...JobPostingAttachmentFragment
    }
    classification {
      ...JobPostingClassificationFragment
    }
    segmentationData {
      ...JobPostingSegmentationDataFragment
    }
    contractTerms {
      ...JobPostingContractTermsFragment
    }
    contractorSelection {
      ...JobPostingContractorSelectionFragment
    }
    additionalInfo {
      ...JobPostingAdditionalInfoFragment
    }
    ptcInfo {
      ...JobPostingPtcInfoFragment
    }
    proposalsStatistics {
      ...ProposalsStatisticsFragment
    }
    customFields {
      ...JobPostingCustomFieldsFragment
    }
  }
}
```

#### Variables

```json
{
  "jobPostingId": "4",
  "loadAnnotation": false
}
```

#### Response

```json
{
  "data": {
    "jobPosting": {
      "id": "4",
      "version": 987,
      "info": JobPostingInfo,
      "visibility": "PUBLIC_INDEX",
      "ownership": JobPostingOwnership,
      "content": JobPostingContent,
      "attachment": [JobPostingAttachment],
      "classification": JobPostingClassification,
      "segmentationData": JobPostingSegmentationData,
      "contractTerms": JobPostingContractTerms,
      "contractorSelection": JobPostingContractorSelection,
      "additionalInfo": JobPostingAdditionalInfo,
      "ptcInfo": JobPostingPtcInfo,
      "proposalsStatistics": ProposalsStatistics,
      "customFields": [JobPostingCustomFields]
    }
  }
}
```

### Real-life example

#### Query

```graphql
query ClientJobPostingDetails($jobPostingId: ID!) {
  jobPosting(jobPostingId: $jobPostingId) {
    id
    version
    content { title description }
    info {
      status
      publishDateTime
      hidden
      premium
    }
    contractTerms { contractType }
    visibility
    ownership {
      user { id }
      clientCompany { id name }
    }
    classification {
      category { name }
    }
  }
}
```

#### Variables

```json
{"jobPostingId": "2056509179207027383"}
```

#### Response

```json
{"data":{"jobPosting":{"id":"2056509179207027383","version":0,"content":{"title":"API test job 2026-05-18 15:56:10","description":"Test job created via GraphQL public API validation script."},"info":{"status":"DRAFT","publishDateTime":null,"hidden":false,"premium":false},"contractTerms":{"contractType":"HOURLY"},"visibility":"ACCESS_PUBLIC","ownership":{"user":{"id":"2056499345994300717"},"clientCompany":null},"classification":{"category":null}}}}
```
