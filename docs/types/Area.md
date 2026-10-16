---
title: "Area"
kind: "object"
domain: "Job Posts"
gql_name: "Area"
html_id: "definition-Area"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Area"
generated_by: "scripts/convert.mjs"
---


# `Area` (object)

## Description

Geographic area element

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Area identifier |
| `areaType` | [`AreaType`](../enums/AreaType.md) | Type of area (city, postal code, etc.) |
| `name` | [`String`](../scalars/String.md) | Area name |

## Examples

### Example

```json
{
  "id": 4,
  "areaType": "CITY",
  "name": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Area" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ApplicationsBidStats](ApplicationsBidStats.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CustomJobPostSkill](CustomJobPostSkill.md) ➡️
