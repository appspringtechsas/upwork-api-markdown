---
title: "jobPostSkillSearch"
kind: "query"
gql_name: "jobPostSkillSearch"
returns: "JobPostSkillSearchResult!"
html_id: "query-jobPostSkillSearch"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-jobPostSkillSearch"
generated_by: "scripts/convert.mjs"
---


# `jobPostSkillSearch`

## Description

Search skills for job post flows by prefLabel, optionally boosting matches that are required by the given occupation. When occupationUid is omitted, behavior matches ontologyElementsSearchByPrefLabel for the same filter values.

## Response

Returns a [`JobPostSkillSearchResult!`](../types/JobPostSkillSearchResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`JobPostSkillSearchFilter`](../inputs/JobPostSkillSearchFilter.md) | Search filter for job post skills |

## Examples

### Detailed structure

#### Query

```graphql
query jobPostSkillSearch($filter: JobPostSkillSearchFilter) {
  jobPostSkillSearch(filter: $filter) {
    results {
      ...OntologyEntityFragment
    }
  }
}
```

#### Variables

```json
{"filter": JobPostSkillSearchFilter}
```

#### Response

```json
{
  "data": {
    "jobPostSkillSearch": {"results": [OntologyEntity]}
  }
}
```
