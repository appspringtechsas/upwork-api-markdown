---
title: "MarketplaceJobFilter"
kind: "input_object"
domain: "Job Posts"
gql_name: "MarketplaceJobFilter"
html_id: "definition-MarketplaceJobFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobFilter"
generated_by: "scripts/convert.mjs"
---


# `MarketplaceJobFilter` (input object)

## Description

Filter criteria for searching marketplace jobs

## Fields

| Field | Type | Description |
|---|---|---|
| `searchExpression_eq` | [`String`](../scalars/String.md) | Generic search filter supports partial Lucene syntax |
| `skillExpression_eq` | [`String`](../scalars/String.md) | Generic skills filter supports partial Lucene syntax |
| `titleExpression_eq` | [`String`](../scalars/String.md) | Generic title filter supports partial Lucene syntax |
| `searchTerm_eq` | [`SearchTerm`](SearchTerm.md) | Provides additional search terms to check, ignored if searchExpression_eq used |
| `categoryIds_any` | [`[ID!]`](../scalars/ID.md) | The id of category of the returned jobs. Parameter works with OR behavior |
| `subcategoryIds_any` | [`[ID!]`](../scalars/ID.md) | The id of subcategory of the returned jobs. Parameter works with OR behavior |
| `occupationIds_any` | [`[ID!]`](../scalars/ID.md) | The occupationUID of the jobs to return. UIDs should be taken from Ontology and values will be handled with OR |
| `ontologySkillIds_all` | [`[ID!]`](../scalars/ID.md) | The ontology skill element uid of the jobs to return. UIDs should be taken from Ontology and values will be handled with AND |
| `sinceId_eq` | [`String`](../scalars/String.md) | Multiple values of skills to filter on. It makes text match on skills rather than exact match skillsFilter_any: [String!] Deprecated! Use ontology_skill_uid instead! Constrains the search to jobs with id (posting id) higher than sinceId |
| `maxId_eq` | [`String`](../scalars/String.md) | Constrains the search to jobs with id (posting id) less than maxId |
| `jobType_eq` | [`ContractType`](../enums/ContractType.md) | Constrains the search to jobs of the provided job type |
| `duration_any` | [`[JobDuration!]`](../enums/JobDuration.md) | Duration of the hourly jobs. Fixed price jobs will be returned no matter they do not have duration |
| `workload_eq` | [`EngagementType`](../enums/EngagementType.md) | Workload of the hourly jobs. Fixed price jobs will be returned no matter they do not have workload |
| `clientHiresRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the number of past hires to feet the specified range or value |
| `clientFeedBackRange_eq` | [`FloatRange`](FloatRange.md) | Constrains the search to jobs from clients with the rating to feet the specified range or value |
| `budgetRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs from clients with the budget. Hourly jobs will be returned no matter they do not have budget |
| `verifiedPaymentOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs of clients with verified payment method |
| `previousClients_eq` | [`Boolean`](../scalars/Boolean.md) | Return jobs of the clients user worked with (applies to freelancer/agency user site jobs search/jobs feed only) |
| `experienceLevel_eq` | [`ExperienceLevel`](../enums/ExperienceLevel.md) | Return only jobs with the specified contractor tier |
| `locations_any` | [`[String!]`](../scalars/String.md) | Country or city of the client that posted a job |
| `cityId_any` | [`[String!]`](../scalars/String.md) | Returns jobs located within 100 miles radius around the city with the uid specified in search parameter. Note that other Global Location Jobs Filters are also applied |
| `zipCodeId_any` | [`[String!]`](../scalars/String.md) | Returns jobs located within 100 miles radius around zipcode with the uid specified in search parameter. Note that other Global Location Jobs Filters are also applied |
| `radius_eq` | [`Int`](../scalars/Int.md) | Is used in pair with city_id or zipcode_id to use another search radius than default (100 miles) |
| `areaId_any` | [`[String!]`](../scalars/String.md) | Returns jobs within specified area or subarea. Note that other Global Location Jobs Filters are also applied |
| `timezone_eq` | [`String`](../scalars/String.md) | Returns jobs posted by client to the specified timezone. Note that other Global Location Jobs Filters are also applied |
| `usState_eq` | [`String`](../scalars/String.md) | Returns jobs posted by client to the specified USA state. Note that other Global Location Jobs Filters are also applied |
| `daysPosted_eq` | [`Int`](../scalars/Int.md) | Constrains the search to jobs posted to the specified group. The source of the value is ODR op_pref_group_id field groupId_eq: String deprecated Number of days. Constrains the search to jobs posted within last N days |
| `jobPostingAccess` | [`JobPostingAccess`](../enums/JobPostingAccess.md) | Constrains the search to jobs in particular access realm |
| `ptcIds_any` | [`[ID!]`](../scalars/ID.md) | List of Talent Clouds UIDs freelancer is allowed to see jobs in |
| `ptcOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs posted by Talent Clouds |
| `enterpriseOnly_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to only return jobs posted by enterprise clients |
| `proposalRange_eq` | [`IntRange`](IntRange.md) | Constrains the search to jobs with proposals in the specified range |
| `pagination_eq` | [`Pagination`](Pagination.md) | Pagination, e.g. { after: "0", first: 30 } will return first 30 records, starting from the very first element |
| `area_eq` | [`AreaFilter`](AreaFilter.md) | Constrains the search to jobs in particular area |
| `preserveFacet_eq` | [`String`](../scalars/String.md) | Whether to preserve facets |
| `userLocationMatch_eq` | [`Boolean`](../scalars/Boolean.md) | Whether to return only jobs posted by user's location |
| `visitorCountry_eq` | [`String`](../scalars/String.md) | Constrains the search to jobs posted by user's country |

## Examples

### Example

```json
{
  "searchExpression_eq": "abc123",
  "skillExpression_eq": "abc123",
  "titleExpression_eq": "abc123",
  "searchTerm_eq": SearchTerm,
  "categoryIds_any": [4],
  "subcategoryIds_any": [4],
  "occupationIds_any": [4],
  "ontologySkillIds_all": [4],
  "sinceId_eq": "xyz789",
  "maxId_eq": "xyz789",
  "jobType_eq": "HOURLY",
  "duration_any": ["WEEK"],
  "workload_eq": "FULL_TIME",
  "clientHiresRange_eq": IntRange,
  "clientFeedBackRange_eq": FloatRange,
  "budgetRange_eq": IntRange,
  "verifiedPaymentOnly_eq": true,
  "previousClients_eq": false,
  "experienceLevel_eq": "ENTRY_LEVEL",
  "locations_any": ["xyz789"],
  "cityId_any": ["xyz789"],
  "zipCodeId_any": ["abc123"],
  "radius_eq": 123,
  "areaId_any": ["xyz789"],
  "timezone_eq": "xyz789",
  "usState_eq": "abc123",
  "daysPosted_eq": 987,
  "jobPostingAccess": "PUBLIC_INDEX",
  "ptcIds_any": ["4"],
  "ptcOnly_eq": false,
  "enterpriseOnly_eq": false,
  "proposalRange_eq": IntRange,
  "pagination_eq": Pagination,
  "area_eq": AreaFilter,
  "preserveFacet_eq": "abc123",
  "userLocationMatch_eq": false,
  "visitorCountry_eq": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplaceJobFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostToolInput](JobPostToolInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [MarketplaceJobPostingSearchSortAttribute](MarketplaceJobPostingSearchSortAttribute.md) ➡️
