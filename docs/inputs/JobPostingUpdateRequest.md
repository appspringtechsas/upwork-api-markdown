---
title: "JobPostingUpdateRequest"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingUpdateRequest"
html_id: "definition-JobPostingUpdateRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingUpdateRequest"
generated_by: "scripts/convert.mjs"
---


# `JobPostingUpdateRequest` (input object)

## Description

Input for updating an existing job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `organizationId` | [`ID!`](../scalars/ID.md) | Organization identifier that owns the job posting |
| `jobPostingInfo` | [`JobPostingRequestInfo`](JobPostingRequestInfo.md) | Basic job posting information |
| `qualifications` | [`JobPostingQualificationRequest`](JobPostingQualificationRequest.md) | Qualification requirements for applicants |
| `questions` | [`[JobPostingQuestionRequest!]`](JobPostingQuestionRequest.md) | Screening questions for applicants |
| `segmentationData` | [`[JobPostingSegmentationRequest!]`](JobPostingSegmentationRequest.md) | Segmentation data for targeting |
| `attachmentIds` | [`[ID!]`](../scalars/ID.md) | File attachment identifiers |
| `ptcInfo` | [`JobPostingPtcInfoRequest`](JobPostingPtcInfoRequest.md) | Private talent cloud information |
| `savePtcInfo` | [`Boolean`](../scalars/Boolean.md) | Whether to save PTC information |
| `invitePost` | [`Boolean`](../scalars/Boolean.md) | Whether this is an invite-only post |
| `jobPostingAdditionalRequest` | [`JobPostingAdditionalRequest`](JobPostingAdditionalRequest.md) | Additional job posting request data |
| `sandsJobPost` | [`SandsJobPostRequest`](SandsJobPostRequest.md) | SANDS job post data |
| `customFields` | [`JobPostingCustomFieldsRequest`](JobPostingCustomFieldsRequest.md) | Custom fields for the job posting |
| `annotations` | [`JobPostingAnnotations`](JobPostingAnnotations.md) | Annotations for the job posting |
| `enterpriseCustomFields` | [`[JobPostEnterpriseCustomFields!]`](JobPostEnterpriseCustomFields.md) | Enterprise-specific custom fields |
| `billRate` | [`JobPostBillRate`](JobPostBillRate.md) | Bill rate configuration |
| `policyValidation` | [`JobPostingPolicyValidationInput`](JobPostingPolicyValidationInput.md) | Optional context forwarded to tns-policy-orchestrator for user-authored content validation. |

## Examples

### Example

```json
{
  "organizationId": 4,
  "jobPostingInfo": JobPostingRequestInfo,
  "qualifications": JobPostingQualificationRequest,
  "questions": [JobPostingQuestionRequest],
  "segmentationData": [JobPostingSegmentationRequest],
  "attachmentIds": ["4"],
  "ptcInfo": JobPostingPtcInfoRequest,
  "savePtcInfo": false,
  "invitePost": false,
  "jobPostingAdditionalRequest": JobPostingAdditionalRequest,
  "sandsJobPost": SandsJobPostRequest,
  "customFields": JobPostingCustomFieldsRequest,
  "annotations": JobPostingAnnotations,
  "enterpriseCustomFields": [
    JobPostEnterpriseCustomFields
  ],
  "billRate": JobPostBillRate,
  "policyValidation": JobPostingPolicyValidationInput
}
```
