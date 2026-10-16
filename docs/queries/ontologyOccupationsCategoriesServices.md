---
title: "ontologyOccupationsCategoriesServices"
kind: "query"
gql_name: "ontologyOccupationsCategoriesServices"
returns: "CategoryServicesResponse"
html_id: "query-ontologyOccupationsCategoriesServices"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyOccupationsCategoriesServices"
generated_by: "scripts/convert.mjs"
---


# `ontologyOccupationsCategoriesServices`

## Description

Searches occupations categories services by list of category Uids and return the list of categories and a map of every category and related services

## Required Permissions

"Ontology - Read-Only Access"

## Response

Returns a [`CategoryServicesResponse`](../types/CategoryServicesResponse.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `categoryUids` | [`[ID!]`](../scalars/ID.md) | List of category identifiers |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyOccupationsCategoriesServices($categoryUids: [ID!]) {
  ontologyOccupationsCategoriesServices(categoryUids: $categoryUids) {
    categories {
      ...OccupationFragment
    }
    categoryServices {
      ...StringMapOccupationFragment
    }
  }
}
```

#### Variables

```json
{"categoryUids": [4]}
```

#### Response

```json
{
  "data": {
    "ontologyOccupationsCategoriesServices": {
      "categories": [Occupation],
      "categoryServices": [StringMapOccupation]
    }
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyOccupationsCategoriesServices" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ontologyEntitySearchRecords](ontologyEntitySearchRecords.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ontologySkills](ontologySkills.md) ➡️
