---
title: "OntologyConnection"
kind: "object"
domain: "Ontology"
gql_name: "OntologyConnection"
html_id: "definition-OntologyConnection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyConnection"
generated_by: "scripts/convert.mjs"
---


# `OntologyConnection` (object)

## Description

Ontology connection

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of entities matching the query |
| `edges` | [`[OntologyEntityEdge!]`](OntologyEntityEdge.md) | List of entity edges with pagination cursors |
| `pageInfo` | [`PageInfo`](PageInfo.md) | Pagination information for navigating results |

## Examples

### Example

```json
{
  "totalCount": 987,
  "edges": [OntologyEntityEdge],
  "pageInfo": PageInfo
}
```
