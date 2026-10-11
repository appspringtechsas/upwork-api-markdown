---
title: "JobPostingAdditionalSkillInput"
kind: "input_object"
domain: "Job Posts"
gql_name: "JobPostingAdditionalSkillInput"
html_id: "definition-JobPostingAdditionalSkillInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostingAdditionalSkillInput"
generated_by: "scripts/convert.mjs"
---


# `JobPostingAdditionalSkillInput` (input object)

## Description

Additional skill input for job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `skillId` | [`String`](../scalars/String.md) | Skill identifier |
| `freetext` | [`String`](../scalars/String.md) | Free-text skill name |
| `legacyConvertedSkill` | [`Boolean`](../scalars/Boolean.md) | Whether skill was converted from legacy format |
| `relevance` | [`JobPostSkillRelevance`](../enums/JobPostSkillRelevance.md) | Skill relevance (mandatory or nice-to-have) |

## Examples

### Example

```json
{
  "skillId": "abc123",
  "freetext": "xyz789",
  "legacyConvertedSkill": false,
  "relevance": "MANDATORY"
}
```
