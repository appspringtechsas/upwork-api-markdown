---
title: "ontologyCategories"
kind: "query"
gql_name: "ontologyCategories"
returns: "[OntologyCategory!]!"
html_id: "query-ontologyCategories"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyCategories"
generated_by: "scripts/convert.mjs"
---


# `ontologyCategories`

## Description

Fetch all enabled categories/subcategories/services

## Required Permissions

One of: "Common Functionality - Read And Write Access" OR "Ontology - Read-Only Access"

## Response

Returns [`[OntologyCategory!]!`](../types/OntologyCategory.md)

## Examples

### Detailed structure

#### Query

```graphql
query ontologyCategories {
  ontologyCategories {
    id
    preferredLabel
    altLabel
    slug
    ontologyId
    subcategories {
      ...OntologySubcategoryFragment
    }
    services {
      ...OntologyServiceFragment
    }
  }
}
```

#### Response

```json
{
  "data": {
    "ontologyCategories": [
      {
        "id": 4,
        "preferredLabel": "xyz789",
        "altLabel": ["abc123"],
        "slug": "abc123",
        "ontologyId": "abc123",
        "subcategories": [OntologySubcategory],
        "services": [OntologyService]
      }
    ]
  }
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyCategories" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [vendorContracts](vendorContracts.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [ontologyElementsSearchByPrefLabel](ontologyElementsSearchByPrefLabel.md) ➡️
