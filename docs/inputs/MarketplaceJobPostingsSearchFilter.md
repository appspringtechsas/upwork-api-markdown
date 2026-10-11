---
title: "MarketplaceJobPostingsSearchFilter"
kind: "input_object"
domain: "Search"
gql_name: "MarketplaceJobPostingsSearchFilter"
html_id: "definition-MarketplaceJobPostingsSearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobPostingsSearchFilter"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobPostingsSearchFilter` (input object)

## Description

Filter criteria for searching marketplace job postings

## Fields

| Field | Type | Description |
|---|---|---|
| `searchExpression_eq` | [`String`](../scalars/String.md) | Generic search filter supports partial Lucene syntax |
| `skillExpression_eq` | [`String`](../scalars/String.md) | Supports multiple skills separated by commas (,). When specifying multiple skills, a Boolean OR is applied between them. Ex: skillExpression_eq:"crm-software,proofreading" |
| `titleExpression_eq` | [`String`](../scalars/String.md) | Searches for any words within the job title field. Ex: titleExpression_eq:"Data" |
| `searchTerm_eq` | [`SearchTerm`](SearchTerm.md) | Provides additional search terms to check, ignored if searchExpression_eq used. Ex: searchTerm_eq:{ exactTerms_any:["penatibus"] excludeTerms_any:["elit","Donec","Pellentesque"] orTerms_any:["sociis"] andTerms_all:["penatibus"] } |
| `categoryIds_any` | [`[ID!]`](../scalars/ID.md) | The id of category of the returned jobs. Parameter works with OR behavior |
| `subcategoryIds_any` | [`[ID!]`](../scalars/ID.md) | The id of subcategory of the returned jobs. Parameter works with OR behavior |
| `occupationIds_any` | [`[ID!]`](../scalars/ID.md) | The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR |
| `ontologySkillIds_all` | [`[ID!]`](../scalars/ID.md) | The ontology skill element uid of the jobs to return. UIDs should be taken from Ontology and values will be handled with AND |
| `jobType_eq` | [`ContractType`](../enums/ContractType.md) | Constrains the search to jobs of the provided job type |
| `duration_any` | [`[JobDuration!]`](../enums/JobDuration.md) | Duration of the hourly jobs. Fixed price jobs will be returned regardless of duration |
| `workload_eq` | [`EngagementType`](../enums/EngagementType.md) | Workload of the hourly jobs. Fixed price jobs will be returned regardless of workload |
| `clientHiresRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the number of past hires to fit the specified range or value |
| `budgetRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the budget. Hourly jobs will be returned regardless of budget |
| `hourlyRate_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the hourly rate. Fixed price jobs will be returned regardless of hourly rate |
| `verifiedPaymentOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs of clients with verified payment method |
| `previousClients_eq` | [`Boolean`](../scalars/Boolean.md) | Return jobs of the clients user worked with (applies to freelancer/agency user site jobs search/jobs feed only) |
| `experienceLevel_eq` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Return only jobs with the specified contractor tier |
| `locations_any` | [`[String!]`](../scalars/String.md) | Country or city of the client that posted a job |
| `timezone_eq` | [`String`](../scalars/String.md) | Returns jobs posted by clients in the specified timezone. Note that other Global Location Jobs Filters are also applied |
| `daysPosted_eq` | [`Int`](../scalars/Int.md) | Number of days. Constrains the search to jobs posted within last N days |
| `ptcIds_any` | [`[ID!]`](../scalars/ID.md) | List of Talent Clouds UIDs freelancer is allowed to see jobs in |
| `ptcOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs posted by Talent Clouds |
| `enterpriseOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs posted by enterprise clients |
| `proposalRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs with proposals in the specified range |
| `pagination_eq` | [`Pagination`](Pagination.md) | Pagination options |
| `area_eq` | [`AreaFilter`](AreaFilter.md) | Constrains the search to jobs in particular area |
| `preserveFacet_eq` | [`String`](../scalars/String.md) | Whether to preserve facets |
| `userLocationMatch_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to return only jobs posted by user's location |
| `visitorCountry_eq` | [`String`](../scalars/String.md) | Constrains the search to jobs posted in user's country |

## Examples

### Example

```json
{
  "searchExpression_eq": "abc123",
  "skillExpression_eq": "xyz789",
  "titleExpression_eq": "xyz789",
  "searchTerm_eq": SearchTerm,
  "categoryIds_any": ["4"],
  "subcategoryIds_any": [4],
  "occupationIds_any": [4],
  "ontologySkillIds_all": ["4"],
  "jobType_eq": "HOURLY",
  "duration_any": ["WEEK"],
  "workload_eq": "FULL_TIME",
  "clientHiresRange_eq": IntRange,
  "budgetRange_eq": IntRange,
  "hourlyRate_eq": IntRange,
  "verifiedPaymentOnly_eq": false,
  "previousClients_eq": true,
  "experienceLevel_eq": "ENTRY_LEVEL",
  "locations_any": ["xyz789"],
  "timezone_eq": "abc123",
  "daysPosted_eq": 987,
  "ptcIds_any": ["4"],
  "ptcOnly_eq": false,
  "enterpriseOnly_eq": false,
  "proposalRange_eq": IntRange,
  "pagination_eq": Pagination,
  "area_eq": AreaFilter,
  "preserveFacet_eq": "abc123",
  "userLocationMatch_eq": true,
  "visitorCountry_eq": "abc123"
}
```
