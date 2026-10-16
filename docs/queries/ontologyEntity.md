---
title: "ontologyEntity"
kind: "query"
gql_name: "ontologyEntity"
returns: "OntologyEntityResult"
html_id: "query-ontologyEntity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntity"
generated_by: "scripts/convert.mjs"
---


# `ontologyEntity`

## Description

Fetch entity by ID

## Required Permissions

"Ontology - Read-Only Access"

## Response

Returns an [`OntologyEntityResult`](../unions/OntologyEntityResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Ontology entity identifier |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyEntity($id: ID!) {
  ontologyEntity(id: $id) {
    ... on Skill {
      ...SkillFragment
    }
    ... on Occupation {
      ...OccupationFragment
    }
  }
}
```

#### Variables

```json
{"id": 4}
```

#### Response

```json
{"data": {"ontologyEntity": Skill}}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ontologyEntitiesFiltered](ontologyEntitiesFiltered.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ontologyEntitySearchRecords](ontologyEntitySearchRecords.md) ➡️
