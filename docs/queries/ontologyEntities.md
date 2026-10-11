---
title: "ontologyEntities"
kind: "query"
gql_name: "ontologyEntities"
returns: "[OntologyEntityResult!]!"
html_id: "query-ontologyEntities"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#query-ontologyEntities"
generated_by: "scripts/convert.mjs"
---


# `ontologyEntities`

## Description

Lookup entities by IDs

## Required Permissions

One of: "Common Functionality - Read And Write Access" OR "Ontology - Read-Only Access"

## Response

Returns [`[OntologyEntityResult!]!`](../unions/OntologyEntityResult.md)

## Arguments

| Argument | Type | Description |
|---|---|---|
| `ids` | [`[String!]!`](../scalars/String.md) | List of ontology entity identifiers |

## Examples

### Detailed structure

#### Query

```graphql
query ontologyEntities($ids: [String!]!) {
  ontologyEntities(ids: $ids) {
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
{"ids": ["abc123"]}
```

#### Response

```json
{"data": {"ontologyEntities": [Skill]}}
```
