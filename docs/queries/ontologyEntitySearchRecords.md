---
title: "ontologyEntitySearchRecords"
kind: "query"
gql_name: "ontologyEntitySearchRecords"
returns: "[OntologyEntitySearchRecord!]"
html_id: "query-ontologyEntitySearchRecords"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntitySearchRecords"
generated_by: "scripts/convert.mjs"
---


# `ontologyEntitySearchRecords`

## Description

Search ontology entities by ontoloyIds ontologyId is consistent accross all environments as opposed to UID which is unique per environment example: upwork:AndroidGameDevelopmentEngines

## Required Permissions

"Ontology - Read-Only Access"

## Response

Returns [`[OntologyEntitySearchRecord!]`](../types/OntologyEntitySearchRecord.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `filter` | [`OntologyEntitySearchFilter!`](../inputs/OntologyEntitySearchFilter.md) | Ontology entity search filter |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyEntitySearchRecords($filter: OntologyEntitySearchFilter!) {
  ontologyEntitySearchRecords(filter: $filter) {
    ontologyEntity {
      ...OntologyEntityFragment
    }
  }
}
```

#### Variables

```json
{"filter": OntologyEntitySearchFilter}
```

#### Response

```json
{
  "data": {
    "ontologyEntitySearchRecords": [
      {"ontologyEntity": OntologyEntity}
    ]
  }
}
```
