---
title: "Region"
kind: "object"
domain: "Metadata"
gql_name: "Region"
html_id: "definition-Region"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Region"
generated_by: "scripts/convert.mjs"
---


# `Region` (object)

## Description

Geographic region information

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Region identifier |
| `name` | [`String!`](../scalars/String.md) | Region name |
| `parentRegion` | [`Region`](Region.md) | Parent region if nested |

## Examples

### Example

```json
{
  "id": 4,
  "name": "abc123",
  "parentRegion": Region
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Region" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ReasonsMetadata](ReasonsMetadata.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [RequestMetadata](RequestMetadata.md) ➡️
