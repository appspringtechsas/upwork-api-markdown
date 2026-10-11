---
title: "PublicMarketplaceJobPostingsSearchFilter"
kind: "input_object"
domain: "Search"
gql_name: "PublicMarketplaceJobPostingsSearchFilter"
html_id: "definition-PublicMarketplaceJobPostingsSearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-PublicMarketplaceJobPostingsSearchFilter"
generated_by: "scripts/convert.mjs"
---


# `PublicMarketplaceJobPostingsSearchFilter` (input object)

## Description

Filters for public job posting search in the marketplace

## Fields

| Field | Type | Description |
|---|---|---|
| `searchExpression_eq` | [`String`](../scalars/String.md) | Generic search filter supports partial Lucene syntax |
| `clientHiresRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the number of past hires to meet the specified range or value |
| `contractorTier_eq` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Return only jobs with the specified contractor tier |
| `daysPosted_eq` | [`Int`](../scalars/Int.md) | Number of days. Constrains the search to jobs posted within last N days |
| `duration_any` | [`[JobDuration!]`](../enums/JobDuration.md) | Duration of the hourly jobs. Fixed price jobs will be returned regardless of duration |
| `freelancersNeeded_eq` | [`Int`](../scalars/Int.md) | Constrains the search to jobs with the number of freelancers needed |
| `enterpriseOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to return only jobs posted by enterprise clients |
| `workload_eq` | [`EngagementType`](../enums/EngagementType.md) | Workload of the hourly jobs. Fixed price jobs will be returned regardless of workload |
| `proposalRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs with proposals in the specified range |
| `verifiedPaymentOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs of clients with verified payment method |
| `occupationIds_any` | [`[ID!]`](../scalars/ID.md) | The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR |
| `clientFeedBackRange_eq` | [`FloatRange`](FloatRange.md) | Constrains the search to jobs from clients with the minimum feedback rating |
| `budgetRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the minimum budget |
| `jobType_eq` | [`ContractType`](../enums/ContractType.md) | Constrains the search to jobs of the provided job type |
| `locations_any` | [`[String!]`](../scalars/String.md) | Country or city of the client that posted a job |
| `area_eq` | [`AreaFilter`](AreaFilter.md) | Constrains the search to jobs in particular area |
| `pagination` | [`PageFilterInput`](PageFilterInput.md) | Pagination options |

## Examples

### Example

```json
{
  "searchExpression_eq": "abc123",
  "clientHiresRange_eq": IntRange,
  "contractorTier_eq": "ENTRY_LEVEL",
  "daysPosted_eq": 123,
  "duration_any": ["WEEK"],
  "freelancersNeeded_eq": 987,
  "enterpriseOnly_eq": false,
  "workload_eq": "FULL_TIME",
  "proposalRange_eq": IntRange,
  "verifiedPaymentOnly_eq": false,
  "occupationIds_any": ["4"],
  "clientFeedBackRange_eq": FloatRange,
  "budgetRange_eq": IntRange,
  "jobType_eq": "HOURLY",
  "locations_any": ["abc123"],
  "area_eq": AreaFilter,
  "pagination": PageFilterInput
}
```
