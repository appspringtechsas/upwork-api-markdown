---
title: "talentCloudTasks"
kind: "query"
gql_name: "talentCloudTasks"
returns: "[TalentCloudTask]"
deprecated: "This query is deprecated and should no longer be used."
html_id: "query-talentCloudTasks"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-talentCloudTasks"
generated_by: "scripts/convert.mjs"
---


# `talentCloudTasks`

> ⚠️ **Deprecated:** This query is deprecated and should no longer be used.

## Description

List of task overviews for specified talent clouds

## Required Permissions

"Job Postings - Read-Only Access"

## Response

Returns [`[TalentCloudTask]`](../types/TalentCloudTask.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`TalentCloudTasksInputFilter!`](../inputs/TalentCloudTasksInputFilter.md) | Filter for talent cloud tasks |

## Examples

### Detailed structure

#### Query

```graphql
query talentCloudTasks($filter: TalentCloudTasksInputFilter!) {
  talentCloudTasks(filter: $filter) {
    talentCloud {
      ...PrivateTalentCloudFragment
    }
    taskSections {
      ...TalentCloudTaskSectionFragment
    }
  }
}
```

#### Variables

```json
{"filter": TalentCloudTasksInputFilter}
```

#### Response

```json
{
  "data": {
    "talentCloudTasks": [
      {
        "talentCloud": PrivateTalentCloud,
        "taskSections": [TalentCloudTaskSection]
      }
    ]
  }
}
```
