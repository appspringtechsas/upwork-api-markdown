---
title: "JobPosting"
kind: "object"
domain: "Job Posts"
gql_name: "JobPosting"
html_id: "definition-JobPosting"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPosting"
generated_by: "scripts/convert.mjs"
---


# `JobPosting` (object)

## Description

Management side JobPosting information

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `version` | [`Int`](../scalars/Int.md) | Optimistic locking version |
| `info` | [`JobPostingInfo`](JobPostingInfo.md) | Core posting information block |
| `visibility` | [`AccessType`](../enums/AccessType.md) | Visibility/access level |
| `ownership` | [`JobPostingOwnership`](JobPostingOwnership.md) | Ownership details |
| `content` | [`JobPostingContent`](JobPostingContent.md) | Title and description |
| `attachment` | [`[JobPostingAttachment!]`](JobPostingAttachment.md) | Attached files |
| `classification` | [`JobPostingClassification`](JobPostingClassification.md) | Classification attributes |
| `segmentationData` | [`JobPostingSegmentationData`](JobPostingSegmentationData.md) | Segmentation metadata |
| `contractTerms` | [`JobPostingContractTerms`](JobPostingContractTerms.md) | Contract information of the Posting |
| `contractorSelection` | [`JobPostingContractorSelection`](JobPostingContractorSelection.md) | Contractor selection criteria |
| `additionalInfo` | [`JobPostingAdditionalInfo`](JobPostingAdditionalInfo.md) | Additional information |
| `ptcInfo` | [`JobPostingPtcInfo`](JobPostingPtcInfo.md) | Private Talent Cloud info |
| `proposalsStatistics` | [`ProposalsStatistics`](ProposalsStatistics.md) | Proposal statistics |
| `customFields` | [`[JobPostingCustomFields]`](JobPostingCustomFields.md) | Custom field responses |

## Examples

### Example

```json
{
  "id": 4,
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
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPosting" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobActivity](JobActivity.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingAdditionalInfo](JobPostingAdditionalInfo.md) ➡️
