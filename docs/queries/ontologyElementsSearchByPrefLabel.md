---
title: "ontologyElementsSearchByPrefLabel"
kind: "query"
gql_name: "ontologyElementsSearchByPrefLabel"
returns: "[OntologyEntity!]!"
html_id: "query-ontologyElementsSearchByPrefLabel"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyElementsSearchByPrefLabel"
generated_by: "scripts/convert.mjs"
---


# `ontologyElementsSearchByPrefLabel`

## Description

Allows search of elements by prefLabel and return the elements that have provided string in prefLabel, at start, end or in the middle; case insensitive

## Required Permissions

"Common Entities - Read-Only Access"

## Response

Returns [`[OntologyEntity!]!`](../interfaces/OntologyEntity.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`OntologyElementsSearchByPrefLabelFilter`](../inputs/OntologyElementsSearchByPrefLabelFilter.md) | Search filter for prefLabel |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyElementsSearchByPrefLabel($filter: OntologyElementsSearchByPrefLabelFilter) {
  ontologyElementsSearchByPrefLabel(filter: $filter) {
    id
    ontologyId
    type
    entityStatus
    preferredLabel
    definition
    createdDateTime
    modifiedDateTime
  }
}
```

#### Variables

```json
{"filter": OntologyElementsSearchByPrefLabelFilter}
```

#### Response

```json
{
  "data": {
    "ontologyElementsSearchByPrefLabel": [
      {
        "id": "4",
        "ontologyId": "xyz789",
        "type": ["OCCUPATION"],
        "entityStatus": "ACTIVE",
        "preferredLabel": "abc123",
        "definition": "abc123",
        "createdDateTime": "abc123",
        "modifiedDateTime": "xyz789"
      }
    ]
  }
}
```
