---
title: "FreelancerProfileJobCategory"
kind: "object"
domain: "Users and teams"
gql_name: "FreelancerProfileJobCategory"
html_id: "definition-FreelancerProfileJobCategory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileJobCategory"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileJobCategory` (object)

## Description

Selected job categories

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`JobCategory`](JobCategory.md) | Top-level job category |
| `selectedSubCategories` | [`[JobCategory!]!`](JobCategory.md) | Selected subcategories for this category |

## Examples

### Example

```json
{
  "category": JobCategory,
  "selectedSubCategories": [JobCategory]
}
```
