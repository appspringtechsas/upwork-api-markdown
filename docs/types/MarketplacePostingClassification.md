---
title: "MarketplacePostingClassification"
kind: "object"
domain: "Job Posts"
gql_name: "MarketplacePostingClassification"
html_id: "definition-MarketplacePostingClassification"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-MarketplacePostingClassification"
generated_by: "scripts/convert.mjs"
---


# `MarketplacePostingClassification` (object)

## Description

Classification details of a marketplace job posting

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`JobCategory`](JobCategory.md) | Primary job category |
| `subCategory` | [`JobCategory`](JobCategory.md) | Job subcategory |
| `occupation` | [`Occupation`](Occupation.md) | Occupation classification |
| `skills` | [`[Skill!]`](Skill.md) | Core skills required |
| `additionalSkills` | [`[Skill!]`](Skill.md) | Additional skills |

## Examples

### Example

```json
{
  "category": JobCategory,
  "subCategory": JobCategory,
  "occupation": Occupation,
  "skills": [Skill],
  "additionalSkills": [Skill]
}
```
