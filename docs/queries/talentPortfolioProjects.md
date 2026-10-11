---
title: "talentPortfolioProjects"
kind: "query"
gql_name: "talentPortfolioProjects"
returns: "TalentPortfolioProjectsConnection!"
html_id: "query-talentPortfolioProjects"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentPortfolioProjects"
generated_by: "scripts/convert.mjs"
---


# `talentPortfolioProjects`

## Description

Loads profile projects by filter parameters

## Response

Returns a [`TalentPortfolioProjectsConnection!`](../types/TalentPortfolioProjectsConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`TalentProjectFilterInput!`](../inputs/TalentProjectFilterInput.md) | Project filtering and pagination |

## Examples

### Detailed structure

#### Query

```graphql
query talentPortfolioProjects($filter: TalentProjectFilterInput!) {
  talentPortfolioProjects(filter: $filter) {
    projects {
      ...FreelancerProfileProjectFragment
    }
    totalProjects
    pageNumber
    pageSize
    totalPages
  }
}
```

#### Variables

```json
{"filter": TalentProjectFilterInput}
```

#### Response

```json
{
  "data": {
    "talentPortfolioProjects": {
      "projects": [FreelancerProfileProject],
      "totalProjects": 123,
      "pageNumber": 123,
      "pageSize": 123,
      "totalPages": 123
    }
  }
}
```
