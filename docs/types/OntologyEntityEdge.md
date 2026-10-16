---
title: "OntologyEntityEdge"
kind: "object"
domain: "Ontology"
gql_name: "OntologyEntityEdge"
html_id: "definition-OntologyEntityEdge"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntityEdge"
generated_by: "scripts/convert.mjs"
---


# `OntologyEntityEdge` (object)

## Description

Ontology entity

## Fields

| Field | Type | Description |
|---|---|---|
| `node` | [`OntologyEntity!`](../interfaces/OntologyEntity.md) | The ontology entity at this edge |
| `cursor` | [`String!`](../scalars/String.md) | Cursor for pagination |

## Examples

### Example

```json
{
  "node": OntologyEntity,
  "cursor": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntityEdge" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OntologyConnection](OntologyConnection.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OntologyEntitySearchRecord](OntologyEntitySearchRecord.md) ➡️
