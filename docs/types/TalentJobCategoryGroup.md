---
title: "TalentJobCategoryGroup"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentJobCategoryGroup"
html_id: "definition-TalentJobCategoryGroup"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentJobCategoryGroup"
generated_by: "scripts/convert.mjs"
---


# `TalentJobCategoryGroup` (object)

## Description

Job category group with selected categories

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`String`](../scalars/String.md) | Category group identifier |
| `name` | [`String`](../scalars/String.md) | Category group name |
| `selectedCategories` | [`[TalentJobCategory]`](TalentJobCategory.md) | List of selected categories in this group |

## Examples

### Example

```json
{
  "id": "xyz789",
  "name": "abc123",
  "selectedCategories": [TalentJobCategory]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentJobCategoryGroup" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentJobCategory](TalentJobCategory.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentOpening](TalentOpening.md) ➡️
