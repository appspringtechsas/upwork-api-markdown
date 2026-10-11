---
title: "JobPostingsFilter"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingsFilter"
html_id: "definition-JobPostingsFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingsFilter"
generated_by: "scripts/convert.mjs"
---


# `JobPostingsFilter` (input object)

## Description

Input filter for searching Job Posting for a given organization

## Fields

| Field | Type | Description |
|---|---|---|
| `pagination_eq` | [`Pagination`](Pagination.md) |  |
| `title_eq` | [`String`](../scalars/String.md) | Title of the Job to be searched |
| `postByTeamIds_any` | [`[ID!]`](../scalars/ID.md) | Collection of the Team's Id for which result to be filtered |
| `postByPersonIds_any` | [`[ID!]`](../scalars/ID.md) | Collection of the Person's Id for which result to be filtered |
| `statusAndAccess_any` | [`[CompanyJobPostingStatusAccess!]`](CompanyJobPostingStatusAccess.md) | Status and success pairs for filtering |
| `excludePostByPersonIds_any` | [`[ID!]`](../scalars/ID.md) | Jobs to be excluded posted by the persons |
| `categoryGroupIds_any` | [`[ID!]`](../scalars/ID.md) | Jobs to be filtered based for the groups |
| `contractType_eq` | [`ContractType`](../enums/ContractType.md) | Jobs to be filtered based on the contract type |
| `createdDateTimeFrom_eq` | [`String`](../scalars/String.md) | Jobs to be filtered based on created after date, date in ISO format yyyy-MM-ddThh:mm:ss.SSS+HHmm or yyyy-MM-dd |
| `createdDateTimeTo_eq` | [`String`](../scalars/String.md) | Jobs to be filtered based on created before date, date in ISO format yyyy-MM-ddThh:mm:ss.SSS+HHmm or yyyy-MM-dd |

## Examples

### Example

```json
{
  "pagination_eq": Pagination,
  "title_eq": "xyz789",
  "postByTeamIds_any": ["4"],
  "postByPersonIds_any": [4],
  "statusAndAccess_any": [CompanyJobPostingStatusAccess],
  "excludePostByPersonIds_any": [4],
  "categoryGroupIds_any": [4],
  "contractType_eq": "HOURLY",
  "createdDateTimeFrom_eq": "abc123",
  "createdDateTimeTo_eq": "xyz789"
}
```
