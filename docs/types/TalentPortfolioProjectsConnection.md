---
title: "TalentPortfolioProjectsConnection"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentPortfolioProjectsConnection"
html_id: "definition-TalentPortfolioProjectsConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentPortfolioProjectsConnection"
generated_by: "scripts/convert.mjs"
---


# `TalentPortfolioProjectsConnection` (object)

## Description

Connection type for paginated portfolio projects

## Fields

| Field | Type | Description |
|---|---|---|
| `projects` | [`[FreelancerProfileProject]`](FreelancerProfileProject.md) | List of portfolio projects |
| `totalProjects` | [`Int`](../scalars/Int.md) | Total number of projects |
| `pageNumber` | [`Int`](../scalars/Int.md) | Current page number |
| `pageSize` | [`Int`](../scalars/Int.md) | Page size |
| `totalPages` | [`Int`](../scalars/Int.md) | Total number of pages |

## Examples

### Example

```json
{
  "projects": [FreelancerProfileProject],
  "totalProjects": 123,
  "pageNumber": 987,
  "pageSize": 987,
  "totalPages": 987
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentPortfolioProjectsConnection" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentPersonAvailability](TalentPersonAvailability.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfile](TalentProfile.md) ➡️
