---
title: "MarketplaceJobPostingSearchResult"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplaceJobPostingSearchResult"
html_id: "definition-MarketplaceJobPostingSearchResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingSearchResult"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingSearchResult` (object)

## Description

Search result entry for a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Search result identifier |
| `job` | [`MarketplaceJobPosting`](MarketplaceJobPosting.md) | Linked job posting entity |
| `title` | [`String!`](../scalars/String.md) | Job title |
| `description` | [`String!`](../scalars/String.md) | Job description |
| `ciphertext` | [`String!`](../scalars/String.md) | Encrypted identifier of the job |
| `duration` | [`JobDuration`](../enums/JobDuration.md) | Expected duration category |
| `durationLabel` | [`String`](../scalars/String.md) | Human-readable duration label |
| `engagement` | [`String`](../scalars/String.md) | Engagement string |
| `amount` | [`Money`](Money.md) | Budget amount (optional; null for hourly jobs or when the client did not specify a fixed amount) |
| `recordNumber` | [`String!`](../scalars/String.md) | Job record number |
| `experienceLevel` | [`FreelancerProfileExperienceLevel`](../enums/FreelancerProfileExperienceLevel.md) | Experience level (optional; null when the client did not specify one) |
| `category` | [`String`](../scalars/String.md) | contractorTier Category name |
| `subcategory` | [`String`](../scalars/String.md) | Subcategory name |
| `freelancersToHire` | [`Int!`](../scalars/Int.md) | Number of freelancers to hire |
| `relevance` | [`MarketplaceJobPostingSearchRelevance!`](MarketplaceJobPostingSearchRelevance.md) | Relevance metrics |
| `enterprise` | [`Boolean!`](../scalars/Boolean.md) | True if enterprise job |
| `relevanceEncoded` | [`String!`](../scalars/String.md) | Encoded relevance payload |
| `totalApplicants` | [`Int!`](../scalars/Int.md) | Count of total applicants |
| `preferredFreelancerLocation` | [`[String]`](../scalars/String.md) | Preferred freelancer location list |
| `preferredFreelancerLocationMandatory` | [`Boolean`](../scalars/Boolean.md) | Whether location preference is mandatory |
| `premium` | [`Boolean!`](../scalars/Boolean.md) | True if posting is premium |
| `clientNotSureFields` | [`[String]`](../scalars/String.md) | Client 'not sure' flags |
| `clientPrivateFields` | [`[String]`](../scalars/String.md) | Client private flags |
| `applied` | [`Boolean!`](../scalars/Boolean.md) | True if current user applied |
| `createdDateTime` | [`String!`](../scalars/String.md) | Creation timestamp |
| `publishedDateTime` | [`String!`](../scalars/String.md) | Publish timestamp |
| `renewedDateTime` | [`String`](../scalars/String.md) | Last renewal timestamp |
| `client` | [`MarketplaceJobPostingSearchClientInfo!`](MarketplaceJobPostingSearchClientInfo.md) | Client information |
| `skills` | [`[MarketplaceJobPostingSearchSkill]!`](MarketplaceJobPostingSearchSkill.md) | Associated skills |
| `occupations` | [`MarketplaceJobPostingSearchOccupations`](MarketplaceJobPostingSearchOccupations.md) | Associated occupations |
| `hourlyBudgetType` | [`JobPostingHourlyBudgetType`](../enums/JobPostingHourlyBudgetType.md) | Hourly budget type |
| `hourlyBudgetMin` | [`Money`](Money.md) | Hourly budget minimum |
| `hourlyBudgetMax` | [`Money`](Money.md) | Hourly budget maximum |
| `localJobUserDistance` | [`String`](../scalars/String.md) | Distance for local jobs |
| `weeklyBudget` | [`Money`](Money.md) | Weekly budget amount |
| `engagementDuration` | [`EngagementDuration`](EngagementDuration.md) | The value of weeks inside of engagementDuration is deprecated , you can get the right value by using either job->contractTerms->fixedPriceContractTerms->engagementDuration or job->contractTerms->hourlyContractTerms->engagementDuration based on contract type. |
| `totalFreelancersToHire` | [`Int`](../scalars/Int.md) | Total number of freelancers to hire |
| `teamId` | [`ID`](../scalars/ID.md) | Team ID |
| `freelancerClientRelation` | [`FreelancerClientRelation`](FreelancerClientRelation.md) | Freelancer client relation |

## Examples

### Example

```json
{
  "id": "4",
  "job": MarketplaceJobPosting,
  "title": "abc123",
  "description": "xyz789",
  "ciphertext": "xyz789",
  "duration": "WEEK",
  "durationLabel": "abc123",
  "engagement": "xyz789",
  "amount": Money,
  "recordNumber": "abc123",
  "experienceLevel": "NONE",
  "category": "abc123",
  "subcategory": "xyz789",
  "freelancersToHire": 987,
  "relevance": MarketplaceJobPostingSearchRelevance,
  "enterprise": true,
  "relevanceEncoded": "abc123",
  "totalApplicants": 987,
  "preferredFreelancerLocation": ["abc123"],
  "preferredFreelancerLocationMandatory": false,
  "premium": false,
  "clientNotSureFields": ["xyz789"],
  "clientPrivateFields": ["xyz789"],
  "applied": true,
  "createdDateTime": "abc123",
  "publishedDateTime": "abc123",
  "renewedDateTime": "xyz789",
  "client": MarketplaceJobPostingSearchClientInfo,
  "skills": [MarketplaceJobPostingSearchSkill],
  "occupations": MarketplaceJobPostingSearchOccupations,
  "hourlyBudgetType": "DEFAULT",
  "hourlyBudgetMin": Money,
  "hourlyBudgetMax": Money,
  "localJobUserDistance": "xyz789",
  "weeklyBudget": Money,
  "engagementDuration": EngagementDuration,
  "totalFreelancersToHire": 987,
  "teamId": 4,
  "freelancerClientRelation": FreelancerClientRelation
}
```
