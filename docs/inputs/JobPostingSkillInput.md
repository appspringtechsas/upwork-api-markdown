---
title: "JobPostingSkillInput"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingSkillInput"
html_id: "definition-JobPostingSkillInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingSkillInput"
generated_by: "scripts/convert.mjs"
---


# `JobPostingSkillInput` (input object)

## Description

Skill input for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `parentSkillId` | [`String!`](../scalars/String.md) | Parent ontology skill identifier |
| `skillId` | [`String`](../scalars/String.md) | Specific skill identifier |
| `freetext` | [`String`](../scalars/String.md) | Free-text skill name |
| `boolAnswer` | [`Boolean`](../scalars/Boolean.md) | Boolean answer for skill question |
| `legacyConvertedSkill` | [`Boolean`](../scalars/Boolean.md) | Whether skill was converted from legacy format |
| `relevance` | [`JobPostSkillRelevance`](../enums/JobPostSkillRelevance.md) | Skill relevance (mandatory or nice-to-have) |

## Examples

### Example

```json
{
  "parentSkillId": "abc123",
  "skillId": "xyz789",
  "freetext": "xyz789",
  "boolAnswer": true,
  "legacyConvertedSkill": true,
  "relevance": "MANDATORY"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingSkillInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [JobPostingsFilter](JobPostingsFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [JobPostingUpdateRequest](JobPostingUpdateRequest.md) ➡️
