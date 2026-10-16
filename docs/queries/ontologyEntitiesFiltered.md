---
title: "ontologyEntitiesFiltered"
kind: "query"
gql_name: "ontologyEntitiesFiltered"
returns: "OntologyConnection"
html_id: "query-ontologyEntitiesFiltered"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntitiesFiltered"
generated_by: "scripts/convert.mjs"
---


# `ontologyEntitiesFiltered`

## Description

Lookup entities by pref label and status, currently this field supports only taxonomyLevel=SERVICE E.g supported filtering : ontologyEntityFilter:{preferredLabel_any:"javascript", taxonomyLevel: SERVICE, limit: 5}

## Required Permissions

One of: "Common Functionality - Read And Write Access" OR "Ontology - Read-Only Access"

## Response

Returns an [`OntologyConnection`](../types/OntologyConnection.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `ontologyEntityFilter` | [`OntologyEntityFilter`](../inputs/OntologyEntityFilter.md) | Ontology entity filter criteria |
| `pagination` | [`Pagination`](../inputs/Pagination.md) | Pagination options |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyEntitiesFiltered(
  $ontologyEntityFilter: OntologyEntityFilter,
  $pagination: Pagination
) {
  ontologyEntitiesFiltered(
    ontologyEntityFilter: $ontologyEntityFilter,
    pagination: $pagination
  ) {
    totalCount
    edges {
      ...OntologyEntityEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}
```

#### Variables

```json
{
  "ontologyEntityFilter": OntologyEntityFilter,
  "pagination": Pagination
}
```

#### Response

```json
{
  "data": {
    "ontologyEntitiesFiltered": {
      "totalCount": 123,
      "edges": [OntologyEntityEdge],
      "pageInfo": PageInfo
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntitiesFiltered" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ontologyEntities](ontologyEntities.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ontologyEntity](ontologyEntity.md) ➡️
