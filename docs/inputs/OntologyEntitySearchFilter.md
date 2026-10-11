---
title: "OntologyEntitySearchFilter"
kind: "input_object"
domain: "Ontology"
gql_name: "OntologyEntitySearchFilter"
html_id: "definition-OntologyEntitySearchFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntitySearchFilter"
generated_by: "scripts/convert.mjs"
---


# `OntologyEntitySearchFilter` (input object)

## Description

Filter for searching ontology entities by their ontology IDs

## Fields

| Field | Type | Description |
|---|---|---|
| `ontologyIds_any` | [`[ID!]!`](../scalars/ID.md) | List of ontology IDs to search for |

## Examples

### Example

```json
{"ontologyIds_any": ["4"]}
```
