---
title: "FreelancerProfilesSearchRecordsConnection"
kind: "object"
domain: "Search"
gql_name: "FreelancerProfilesSearchRecordsConnection"
html_id: "definition-FreelancerProfilesSearchRecordsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchRecordsConnection"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfilesSearchRecordsConnection` (object)

## Description

The connection type for SearchResult.

## Fields

| Field | Type | Description |
|---|---|---|
| `edges` | [`[FreelancerProfilesSearchResultEdge!]`](FreelancerProfilesSearchResultEdge.md) | List of edges |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Information that aids in pagination. |
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of matching records |

## Examples

### Example

```json
{
  "edges": [FreelancerProfilesSearchResultEdge],
  "pageInfo": PageInfo,
  "totalCount": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfilesSearchRecordsConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [FreelancerProfilesSearchRecord](FreelancerProfilesSearchRecord.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfilesSearchResultEdge](FreelancerProfilesSearchResultEdge.md) ➡️
