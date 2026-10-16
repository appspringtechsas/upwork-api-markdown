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
  "totalCount": 123,
  "edges": [FreelancerProfileOtherExperienceEdge],
  "pageInfo": PageInfo
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileOtherExperiencesConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfileOtherExperienceEdge](FreelancerProfileOtherExperienceEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfilePersonalData](FreelancerProfilePersonalData.md) ➡️
