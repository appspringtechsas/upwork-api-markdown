---
title: "JobPostingClassification"
kind: "object"
domain: "Job Posts"
gql_name: "JobPostingClassification"
html_id: "definition-JobPostingClassification"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingClassification"
generated_by: "scripts/convert.mjs"
---


# `JobPostingClassification` (object)

## Description

Classification info attached with the job posting (management side)

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`JobPostingCategory`](JobPostingCategory.md) | Primary category of the posting |
| `subCategory` | [`JobSubPostingCategory`](JobSubPostingCategory.md) | Subcategory of the posting |
| `skills` | [`[Skill!]`](Skill.md) | Core skills associated with the posting |
| `customSkills` | [`[CustomJobPostSkill!]`](CustomJobPostSkill.md) | Custom skills provided by the client |
| `additionalSkills` | [`[Skill!]`](Skill.md) | Additional skills associated with the posting |
| `occupationId` | [`ID`](../scalars/ID.md) | Ontology occupation identifier |
| `customAdditionalSkills` | [`[String!]`](../scalars/String.md) | Additional free-text skills |

## Examples

### Example

```json
{
  "category": JobPostingCategory,
  "subCategory": JobSubPostingCategory,
  "skills": [Skill],
  "customSkills": [CustomJobPostSkill],
  "additionalSkills": [Skill],
  "occupationId": "4",
  "customAdditionalSkills": ["xyz789"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingClassification" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingCategory](JobPostingCategory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingConnection](JobPostingConnection.md) ➡️
