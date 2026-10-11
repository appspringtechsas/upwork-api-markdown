---
title: "FreelancerProfileOtherExperiencesConnection"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileOtherExperiencesConnection"
html_id: "definition-FreelancerProfileOtherExperiencesConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileOtherExperiencesConnection"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileOtherExperiencesConnection` (object)

## Description

Connection to the Other Experiences list

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of other experiences |
| `edges` | [`[FreelancerProfileOtherExperienceEdge!]`](FreelancerProfileOtherExperienceEdge.md) | Edges in the connection |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [FreelancerProfileOtherExperienceEdge],
  "pageInfo": PageInfo
}
```
