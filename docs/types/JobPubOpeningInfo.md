---
title: "JobPubOpeningInfo"
kind: "object"
domain: "Other"
gql_name: "JobPubOpeningInfo"
html_id: "definition-JobPubOpeningInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPubOpeningInfo"
generated_by: "scripts/convert.mjs"
---


# `JobPubOpeningInfo` (object)

## Description

Opening info

## Fields

| Field | Type | Description |
|---|---|---|
| `annotations` | [`VJDAnnotations`](VJDAnnotations.md) | Custom annotations and tags associated with the job |
| `attachments` | [`[JobAttachmentInfo]`](JobAttachmentInfo.md) | File attachments provided with the job posting |
| `budget` | [`JobDetailsMoney`](JobDetailsMoney.md) | Estimated budget amount for the job |
| `category` | [`CategoryInfo`](CategoryInfo.md) | Primary skill category for the job |
| `categoryGroup` | [`CategoryInfo`](CategoryInfo.md) | Broader skill category group containing the primary category |
| `clientActivity` | [`ClientActivity`](ClientActivity.md) | Buyer activity metrics on this opening (invitations, applicants, hired) |
| `deliveryDate` | [`String`](../scalars/String.md) | Expected delivery date for project completion |
| `description` | [`String`](../scalars/String.md) | Full job description and requirements |
| `extendedBudgetInfo` | [`JobExtendedBudgetInfo`](JobExtendedBudgetInfo.md) | Extended hourly budget information for hourly jobs |
| `info` | [`Job`](Job.md) | Basic job metadata including title, type, and access level |
| `maxBudget` | [`JobDetailsMoney`](JobDetailsMoney.md) | Maximum budget amount for the job |
| `publishTime` | [`String`](../scalars/String.md) | Timestamp when the job was published to the marketplace |
| `sandsData` | [`SandsData`](SandsData.md) | SANDS (skills taxonomy) data including occupations and skills |
| `segmentationData` | [`[JobSegmentation]`](JobSegmentation.md) | Market segmentation data for targeting and analytics |
| `startDate` | [`String`](../scalars/String.md) | Preferred start date for the project |
| `status` | [`JobOpeningStatus`](../enums/JobOpeningStatus.md) | Current status of the job opening (ACTIVE, FILLED, CLOSED) |
| `workload` | [`String`](../scalars/String.md) | Expected workload description (e.g., part-time, full-time) |
| `durationType` | [`JobPostDurationType`](../enums/JobPostDurationType.md) | Duration type of the job (external type from job service) |
| `deadline` | [`String`](../scalars/String.md) | Deadline for applications or project completion |
| `hiringNow` | [`Boolean`](../scalars/Boolean.md) | UE-1050: PM Hiring Now marker (client actively hiring in Proposal Manager). Source: TJobPubOpeningInfo.hiringNow from VJD. Distinct from legacy Upwork Now qualifications.readyToStartToday / upwork-now tag path. |

## Examples

### Example

```json
{
  "annotations": VJDAnnotations,
  "attachments": [JobAttachmentInfo],
  "budget": JobDetailsMoney,
  "category": CategoryInfo,
  "categoryGroup": CategoryInfo,
  "clientActivity": ClientActivity,
  "deliveryDate": "xyz789",
  "description": "abc123",
  "extendedBudgetInfo": JobExtendedBudgetInfo,
  "info": Job,
  "maxBudget": JobDetailsMoney,
  "publishTime": "xyz789",
  "sandsData": SandsData,
  "segmentationData": [JobSegmentation],
  "startDate": "abc123",
  "status": "ACTIVE",
  "workload": "abc123",
  "durationType": "ONE_TIME_PROJECT",
  "deadline": "abc123",
  "hiringNow": true
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPubOpeningInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPubDetails](JobPubDetails.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobQualificationGroup](JobQualificationGroup.md) ➡️
