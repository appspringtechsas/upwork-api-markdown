---
title: "StringMapOccupation"
kind: "object"
domain: "Ontology"
gql_name: "StringMapOccupation"
html_id: "definition-StringMapOccupation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StringMapOccupation"
generated_by: "scripts/convert.mjs"
---


# `StringMapOccupation` (object)

## Fields

| Field | Type | Description |
|---|---|---|
| `category` | [`String!`](../scalars/String.md) | Category identifier |
| `services` | [`[Occupation!]!`](Occupation.md) | List of services for this category |

## Examples

### Example

```json
{
  "category": "abc123",
  "services": [Occupation]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-StringMapOccupation" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Skill](Skill.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ClientInvitation](ClientInvitation.md) ➡️
