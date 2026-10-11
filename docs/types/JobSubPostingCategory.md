---
title: "JobSubPostingCategory"
kind: "object"
domain: "Job Posts"
gql_name: "JobSubPostingCategory"
html_id: "definition-JobSubPostingCategory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobSubPostingCategory"
generated_by: "scripts/convert.mjs"
---


# `JobSubPostingCategory` (object)

## Description

Job posting subcategory

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Subcategory identifier |
| `name` | [`String!`](../scalars/String.md) | Subcategory display name |
| `slug` | [`String`](../scalars/String.md) | URL-friendly subcategory slug |

## Examples

### Example

```json
{
  "id": 4,
  "name": "abc123",
  "slug": "xyz789"
}
```
