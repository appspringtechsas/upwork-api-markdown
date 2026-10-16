---
title: "OntologyEntityFilter"
kind: "input_object"
domain: "Ontology"
gql_name: "OntologyEntityFilter"
html_id: "definition-OntologyEntityFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntityFilter"
generated_by: "scripts/convert.mjs"
---


# `OntologyEntityFilter` (input object)

## Description

Filter for searching ontology entities by label and type

## Fields

| Field | Type | Description |
|---|---|---|
| `preferredLabel_any` | [`String!`](../scalars/String.md) | Search string for preferred label field (up to 100 characters) |
| `type` | [`OntologyEntityType`](../enums/OntologyEntityType.md) | Entity type to filter by |
| `taxonomyLevel` | [`OntologyEntityTaxonomyLevel`](../enums/OntologyEntityTaxonomyLevel.md) | Taxonomy level to filter by |
| `entityStatus_eq` | [`OntologyEntityStatus`](../enums/OntologyEntityStatus.md) | `ACTIVE` |
| `sortOrder` | [`OntologyResultSortOrder`](../enums/OntologyResultSortOrder.md) | `RANDOM` |
| `limit` | [`Int`](../scalars/Int.md) | Maximum number of results to return |

## Examples

### Example

```json
{
  "preferredLabel_any": "abc123",
  "type": "OCCUPATION",
  "taxonomyLevel": "CATEGORY",
  "entityStatus_eq": "ACTIVE",
  "sortOrder": "RANDOM",
  "limit": 123
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntityFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OntologyElementsSearchByPrefLabelFilter](OntologyElementsSearchByPrefLabelFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OntologyEntitySearchFilter](OntologyEntitySearchFilter.md) ➡️
