---
title: "JobPostingRequestInfo"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingRequestInfo"
html_id: "definition-JobPostingRequestInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingRequestInfo"
generated_by: "scripts/convert.mjs"
---


# `JobPostingRequestInfo` (input object)

## Description

Basic attributes for a job posting request

## Fields

| Field | Type | Description |
|---|---|---|
| `title` | [`String`](../scalars/String.md) | Job title |
| `description` | [`String`](../scalars/String.md) | Job description text |
| `engagementType` | [`EngagementType`](../enums/EngagementType.md) | Type of engagement (full-time, part-time, etc.) |
| `durationId` | [`ID`](../scalars/ID.md) | Consumers can use the following query for the duration ID proposalMetadata{ engagementDurationValues{ id label } } |
| `status` | [`JobPostingStatus`](../enums/JobPostingStatus.md) | Current status of the job posting |
| `type` | [`JobPostType`](../enums/JobPostType.md) | Type of job post (hourly or fixed price) |
| `amount` | [`String`](../scalars/String.md) | Amount as string containing exact value with dot symbol (".") is used to separate integer and fractional parts |
| `coverLetterRequired` | [`Boolean`](../scalars/Boolean.md) | Whether a cover letter is required from applicants |
| `access` | [`AccessType`](../enums/AccessType.md) | Access type for the job posting |
| `experienceLevel` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Required experience level for applicants |
| `freelancersToHire` | [`Int`](../scalars/Int.md) | Number of freelancers to hire for this job |
| `categoryId` | [`ID`](../scalars/ID.md) | Consumers can use the following query for category and group ID ontologyCategories { id preferredLabel subcategories { id preferredLabel } It's equal to subcategories.id (eg Web Development) |
| `groupId` | [`ID`](../scalars/ID.md) | `categoryId` |
| `endDate` | [`String`](../scalars/String.md) | End date for the Posting formatted according to ISO-8601 |
| `startDate` | [`String`](../scalars/String.md) | Start date for the Posting formatted according to ISO-8601 |
| `siteSource` | [`String`](../scalars/String.md) | Source site identifier |
| `keepOpenOnHire` | [`Boolean`](../scalars/Boolean.md) | Whether to keep the job open after hiring |
| `draftJobPostingId` | [`ID`](../scalars/ID.md) | Draft job posting identifier |
| `freelancerMilestonesAllowed` | [`Boolean`](../scalars/Boolean.md) | Whether freelancer-created milestones are allowed |
| `premium` | [`Boolean`](../scalars/Boolean.md) | Whether this is a premium job posting |
| `hideBudget` | [`Boolean`](../scalars/Boolean.md) | Whether to hide the budget from applicants |
| `notSureFreelancersToHire` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about number of freelancers to hire |
| `notSureProjectDuration` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about project duration |
| `notSureExperienceLevel` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about required experience level |
| `notSureLocationPreference` | [`Boolean`](../scalars/Boolean.md) | Client is unsure about location preference |
| `hourlyBudgetType` | [`JobPostingHourlyBudgetType`](../enums/JobPostingHourlyBudgetType.md) | Type of hourly budget (range, custom, etc.) |
| `hourlyBudgetMin` | [`String`](../scalars/String.md) | Hourly min budget as string containing exact value with dot symbol (".") is used to separate integer and fractional parts |
| `hourlyBudgetMax` | [`String`](../scalars/String.md) | Hourly max budget as string containing exact value with dot symbol (".") is used to separate integer and fractional parts |
| `autoReviewStatus` | [`AutoReviewStatus`](../enums/AutoReviewStatus.md) | Auto review status of the job posting |
| `autoReviewTs` | [`String`](../scalars/String.md) | Timestamp of auto review |
| `changedById` | [`ID`](../scalars/ID.md) | User ID who last changed the posting |
| `ciphertext` | [`String`](../scalars/String.md) | Encrypted identifier |
| `closeTime` | [`String`](../scalars/String.md) | Timestamp when job was closed |
| `companyName` | [`String`](../scalars/String.md) | Company name for the job posting |
| `companyId` | [`ID`](../scalars/ID.md) | Company identifier |
| `createdByFirstName` | [`String`](../scalars/String.md) | First name of the posting creator |
| `createdByLastName` | [`String`](../scalars/String.md) | Last name of the posting creator |
| `createdById` | [`ID`](../scalars/ID.md) | User ID of the posting creator |
| `ctime` | [`String`](../scalars/String.md) | Creation timestamp |
| `deletedReason` | [`String`](../scalars/String.md) | Reason for deletion if deleted |
| `filledDate` | [`String`](../scalars/String.md) | Date when the position was filled |
| `ghostPost` | [`Boolean`](../scalars/Boolean.md) | Whether this is a ghost post |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Whether the posting is hidden |
| `hourPackId` | [`ID`](../scalars/ID.md) | Hour pack identifier |
| `lastOboAgentActionTs` | [`String`](../scalars/String.md) | Timestamp of last OBO agent action |
| `lastOboAgentUserId` | [`ID`](../scalars/ID.md) | User ID of last OBO agent |
| `legacyCiphertext` | [`String`](../scalars/String.md) | Legacy encrypted identifier |
| `legacyRid` | [`ID`](../scalars/ID.md) | Legacy record identifier |
| `manualReviewStatus` | [`ManualReviewStatus`](../enums/ManualReviewStatus.md) | Manual review status |
| `mtime` | [`String`](../scalars/String.md) | Modification timestamp |
| `offTheNetwork` | [`Boolean`](../scalars/Boolean.md) | Whether job is off the network |
| `publishTime` | [`String`](../scalars/String.md) | Timestamp when job was published |
| `reasonRid` | [`ID`](../scalars/ID.md) | Reason record identifier |
| `sourcingTime` | [`String`](../scalars/String.md) | Timestamp for sourcing |
| `sourcingUpdateCount` | [`Int`](../scalars/Int.md) | Number of sourcing updates |
| `sourcingUpdateForbidden` | [`Boolean`](../scalars/Boolean.md) | Whether sourcing update is forbidden |
| `uid` | [`String`](../scalars/String.md) | Unique identifier string |
| `weeklyRetainerBudget` | [`Float`](../scalars/Float.md) | Weekly retainer budget amount |
| `version` | [`Int`](../scalars/Int.md) | Optimistic locking version |
| `tools` | [`[JobPostToolInput!]`](JobPostToolInput.md) | Tools required for the job |
| `deliverables` | [`String`](../scalars/String.md) | Expected deliverables |
| `durationType` | [`JobPostDurationType`](../enums/JobPostDurationType.md) | Duration type (one-time or ongoing) |
| `deadline` | [`String`](../scalars/String.md) | Project deadline |

## Examples

### Example

```json
{
  "title": "abc123",
  "description": "abc123",
  "engagementType": "FULL_TIME",
  "durationId": 4,
  "status": "REQUESTED",
  "type": "HOURLY",
  "amount": "xyz789",
  "coverLetterRequired": true,
  "access": "PUBLIC_INDEX",
  "experienceLevel": "ENTRY_LEVEL",
  "freelancersToHire": 987,
  "categoryId": "4",
  "groupId": 4,
  "endDate": "abc123",
  "startDate": "abc123",
  "siteSource": "abc123",
  "keepOpenOnHire": true,
  "draftJobPostingId": 4,
  "freelancerMilestonesAllowed": false,
  "premium": true,
  "hideBudget": true,
  "notSureFreelancersToHire": false,
  "notSureProjectDuration": true,
  "notSureExperienceLevel": false,
  "notSureLocationPreference": true,
  "hourlyBudgetType": "DEFAULT",
  "hourlyBudgetMin": "abc123",
  "hourlyBudgetMax": "xyz789",
  "autoReviewStatus": "APPROVED",
  "autoReviewTs": "xyz789",
  "changedById": "4",
  "ciphertext": "abc123",
  "closeTime": "xyz789",
  "companyName": "xyz789",
  "companyId": 4,
  "createdByFirstName": "xyz789",
  "createdByLastName": "xyz789",
  "createdById": "4",
  "ctime": "abc123",
  "deletedReason": "xyz789",
  "filledDate": "xyz789",
  "ghostPost": true,
  "hidden": true,
  "hourPackId": "4",
  "lastOboAgentActionTs": "xyz789",
  "lastOboAgentUserId": 4,
  "legacyCiphertext": "abc123",
  "legacyRid": 4,
  "manualReviewStatus": "APPROVED",
  "mtime": "xyz789",
  "offTheNetwork": true,
  "publishTime": "xyz789",
  "reasonRid": "4",
  "sourcingTime": "abc123",
  "sourcingUpdateCount": 987,
  "sourcingUpdateForbidden": true,
  "uid": "abc123",
  "weeklyRetainerBudget": 987.65,
  "version": 123,
  "tools": [JobPostToolInput],
  "deliverables": "abc123",
  "durationType": "ONE_TIME_PROJECT",
  "deadline": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingRequestInfo" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingQuestionRequest](JobPostingQuestionRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingSegmentationRequest](JobPostingSegmentationRequest.md) ➡️
