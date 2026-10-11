---
title: "PublicMarketplaceJobPostingsSearch"
kind: "object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingsSearch"
html_id: "definition-PublicMarketplaceJobPostingsSearch"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingsSearch"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingsSearch` (object)

## Description

Public job posting in marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `title` | [`String`](../scalars/String.md) | The title of the job posting |
| `createdDateTime` | [`String`](../scalars/String.md) | The creation date of the job posting |
| `type` | [`ContractType`](../enums/ContractType.md) | The contract type of the job posting |
| `ciphertext` | [`String`](../scalars/String.md) | The ciphertext of the job posting |
| `description` | [`String`](../scalars/String.md) | The description of the job posting |
| `skills` | [`[PublicMarketplaceJobPostingSearchSkill]`](PublicMarketplaceJobPostingSearchSkill.md) | The skill names of the job posting |
| `engagement` | [`String`](../scalars/String.md) | The engagement type |
| `amount` | [`Money`](Money.md) | The job budget |
| `recno` | [`Int`](../scalars/Int.md) | The recno of the job posting |
| `contractorTier` | [`ContractorTier`](../enums/ContractorTier.md) | The freelancer experience level |
| `jobStatus` | [`JobStatus`](../enums/JobStatus.md) | Job posting status |
| `client` | [`PublicMarketplaceJobPostingsSearchClient`](PublicMarketplaceJobPostingsSearchClient.md) | Visible client information in the market |
| `category` | [`String`](../scalars/String.md) | The category of the job posting |
| `subcategory` | [`String`](../scalars/String.md) | The subcategory of the job posting |
| `freelancersToHire` | [`Int`](../scalars/Int.md) | The number of freelancers needed for the job |
| `enterpriseJob` | [`Boolean`](../scalars/Boolean.md) | Indicates if this is an enterprise job |
| `jobTs` | [`String`](../scalars/String.md) | Job creation timestamp |
| `totalApplicants` | [`Int`](../scalars/Int.md) | Total applicants |
| `id` | [`ID!`](../scalars/ID.md) | Job posting identifier |
| `prefFreelancerLocationMandatory` | [`Boolean`](../scalars/Boolean.md) | Indicates whether the freelancer's location is mandatory to apply for the job |
| `publishedDateTime` | [`String`](../scalars/String.md) | Timestamp when the job was published |
| `local` | [`Boolean`](../scalars/Boolean.md) | Flag for locality of the job |
| `locations` | [`[FeedJobLocation]`](FeedJobLocation.md) | List of job location preferences |
| `durationLabel` | [`String`](../scalars/String.md) | The readable label of the job duration |
| `applied` | [`Boolean`](../scalars/Boolean.md) | Indicates if the freelancer has applied to the job |
| `ontologySkills` | [`[PublicMarketplaceJobPostingSearchOntologySkill]`](PublicMarketplaceJobPostingSearchOntologySkill.md) | Structured list of required skills with metadata like label and highlight flag |
| `duration` | [`String`](../scalars/String.md) | The job duration |
| `hourlyBudgetType` | [`String`](../scalars/String.md) | Specifies the type of hourly budget |
| `hourlyBudgetMin` | [`Float`](../scalars/Float.md) | Minimum hourly rate |
| `hourlyBudgetMax` | [`Float`](../scalars/Float.md) | Maximum hourly rate |
| `occupations` | [`PublicMarketplaceJobPostingSearchOccupations`](PublicMarketplaceJobPostingSearchOccupations.md) | Contains job’s category, subcategories, and service specialization. |
| `weeklyBudget` | [`Money`](Money.md) | The job budget |
| `engagementDuration` | [`PublicMarketplaceJobPostingsSearchEngagementDuration`](PublicMarketplaceJobPostingsSearchEngagementDuration.md) | Duration of the job |

## Examples

### Example

```json
{
  "title": "abc123",
  "createdDateTime": "abc123",
  "type": "HOURLY",
  "ciphertext": "abc123",
  "description": "xyz789",
  "skills": [PublicMarketplaceJobPostingSearchSkill],
  "engagement": "xyz789",
  "amount": Money,
  "recno": 123,
  "contractorTier": "ENTRY_LEVEL",
  "jobStatus": "Open",
  "client": PublicMarketplaceJobPostingsSearchClient,
  "category": "abc123",
  "subcategory": "abc123",
  "freelancersToHire": 987,
  "enterpriseJob": false,
  "jobTs": "abc123",
  "totalApplicants": 987,
  "id": 4,
  "prefFreelancerLocationMandatory": true,
  "publishedDateTime": "abc123",
  "local": true,
  "locations": [FeedJobLocation],
  "durationLabel": "abc123",
  "applied": true,
  "ontologySkills": [
    PublicMarketplaceJobPostingSearchOntologySkill
  ],
  "duration": "abc123",
  "hourlyBudgetType": "abc123",
  "hourlyBudgetMin": 123.45,
  "hourlyBudgetMax": 987.65,
  "occupations": PublicMarketplaceJobPostingSearchOccupations,
  "weeklyBudget": Money,
  "engagementDuration": PublicMarketplaceJobPostingsSearchEngagementDuration
}
```
