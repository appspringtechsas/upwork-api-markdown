---
title: "TalentProjectFilterInput"
kind: "input_object"
domain: "Talent Clouds"
gql_name: "TalentProjectFilterInput"
html_id: "definition-TalentProjectFilterInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectFilterInput"
generated_by: "scripts/convert.mjs"
---


# `TalentProjectFilterInput` (input object)

## Description

Filter input for querying portfolio projects

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`ID!`](../scalars/ID.md) | Person identifier |
| `projectIds` | [`[ID]`](../scalars/ID.md) | Filter by specific project identifiers |
| `page` | [`Int`](../scalars/Int.md) | Page number for pagination |
| `pageSize` | [`Int`](../scalars/Int.md) | Page size for pagination (default is 20) |
| `sortDirection` | [`SortDirection`](../enums/SortDirection.md) | default page size is 20 Sort direction |
| `sortFields` | [`[String]`](../scalars/String.md) | Fields to sort by |
| `projectType` | [`FreelancerProfileProjectType`](../enums/FreelancerProfileProjectType.md) | Filter by project type |
| `published` | [`Boolean`](../scalars/Boolean.md) | Filter by published status |
| `occupationId` | [`ID`](../scalars/ID.md) | Filter by occupation identifier |
| `fullData` | [`Boolean`](../scalars/Boolean.md) | Whether to return full data |
| `fillTagDetails` | [`Boolean`](../scalars/Boolean.md) | Whether to fill tag details |
| `public` | [`Boolean`](../scalars/Boolean.md) | Filter by public visibility |
| `jobProposalId` | [`ID`](../scalars/ID.md) | Indicates highlighted Portfolio items or filter by relevance with associated opening |
| `filterByRelevance` | [`Boolean`](../scalars/Boolean.md) | indicates highlighted Portfolio items or filter Portfolio items by relevance with associated opening with jobProposalId Filters portfolios based on relevance with associated opening |
| `filterOutNotAcceptedLinks` | [`Boolean`](../scalars/Boolean.md) | filters portfolios based on relevance with associated opening with jobProposalId Filter out not accepted links |
| `freeText` | [`String`](../scalars/String.md) | Free text search query |
| `skillIds` | [`[ID!]`](../scalars/ID.md) | Filter by skill identifiers |

## Examples

### Example

```json
{
  "personId": 4,
  "projectIds": ["4"],
  "page": 987,
  "pageSize": 123,
  "sortDirection": "ASC",
  "sortFields": ["xyz789"],
  "projectType": "CLASSIC_VIEW",
  "published": true,
  "occupationId": 4,
  "fullData": true,
  "fillTagDetails": false,
  "public": false,
  "jobProposalId": "4",
  "filterByRelevance": true,
  "filterOutNotAcceptedLinks": false,
  "freeText": "xyz789",
  "skillIds": [4]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProjectFilterInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentCloudTasksInputFilter](TalentCloudTasksInputFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentWorkHistoryFilterInput](TalentWorkHistoryFilterInput.md) ➡️
