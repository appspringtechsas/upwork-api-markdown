---
title: "JobPostingInfo"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingInfo"
html_id: "definition-JobPostingInfo"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingInfo"
generated_by: "scripts/convert.mjs"
---


# `JobPostingInfo` (object)

## Description

High-level job posting details

## Fields

| Field | Type | Description |
|---|---|---|
| `status` | [`JobPostingStatus`](../enums/JobPostingStatus.md) | Job posting status |
| `company` | [`CurrentOrganization`](CurrentOrganization.md) | Company associated with the job posting |
| `auditTime` | [`AuditTime`](AuditTime.md) | Audit timestamps for the job posting |
| `hidden` | [`Boolean`](../scalars/Boolean.md) | Whether the job posting is hidden |
| `siteSource` | [`String`](../scalars/String.md) | Source system where the posting was created |
| `keepOpenOnHire` | [`Boolean`](../scalars/Boolean.md) | Keep the posting open after a hire is made |
| `draftJobPostingId` | [`ID`](../scalars/ID.md) | Reference to the draft job posting ID |
| `publishDateTime` | [`String`](../scalars/String.md) | Publish date time of the posting formatted according to ISO-8601 |
| `filledDateTime` | [`String`](../scalars/String.md) | Filled date and time if the job was filled |
| `sourcingUpdateForbidden` | [`Boolean`](../scalars/Boolean.md) | Whether sourcing updates are forbidden |
| `sourcingUpdateCount` | [`Int`](../scalars/Int.md) | Count of sourcing updates |
| `premium` | [`Boolean`](../scalars/Boolean.md) | Premium posting indicator |
| `legacyCiphertext` | [`String`](../scalars/String.md) | Legacy ciphertext for compatibility |
| `hideBudget` | [`Boolean`](../scalars/Boolean.md) | Whether budget is hidden from public view |
| `categoryId` | [`ID`](../scalars/ID.md) | Category identifier of the posting |
| `groupId` | [`ID`](../scalars/ID.md) | Group identifier of the posting |
| `notSureFreelancersToHire` | [`Boolean`](../scalars/Boolean.md) | Poster is unsure about number of freelancers to hire |
| `notSureExperienceLevel` | [`Boolean`](../scalars/Boolean.md) | Poster is unsure about experience level required |
| `hourlyBudgetType` | [`JobPostingHourlyBudgetType`](../enums/JobPostingHourlyBudgetType.md) | Hourly budget type selected |
| `hourlyBudgetMin` | [`Money`](Money.md) | Minimum hourly budget |
| `hourlyBudgetMax` | [`Money`](Money.md) | Maximum hourly budget |
| `changedByUser` | [`GenericUser`](GenericUser.md) | User who last changed the posting |
| `reasonId` | [`ID`](../scalars/ID.md) | Reason identifier associated with status |
| `reasonName` | [`String`](../scalars/String.md) | Human-readable reason name |

## Examples

### Example

```json
{
  "status": "REQUESTED",
  "company": CurrentOrganization,
  "auditTime": AuditTime,
  "hidden": true,
  "siteSource": "abc123",
  "keepOpenOnHire": true,
  "draftJobPostingId": 4,
  "publishDateTime": "abc123",
  "filledDateTime": "xyz789",
  "sourcingUpdateForbidden": false,
  "sourcingUpdateCount": 987,
  "premium": false,
  "legacyCiphertext": "abc123",
  "hideBudget": true,
  "categoryId": "4",
  "groupId": 4,
  "notSureFreelancersToHire": true,
  "notSureExperienceLevel": false,
  "hourlyBudgetType": "DEFAULT",
  "hourlyBudgetMin": Money,
  "hourlyBudgetMax": Money,
  "changedByUser": GenericUser,
  "reasonId": "4",
  "reasonName": "abc123"
}
```
