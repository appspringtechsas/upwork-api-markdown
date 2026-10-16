---
title: "OntologyCategory"
kind: "object"
domain: "Ontology"
gql_name: "OntologyCategory"
html_id: "definition-OntologyCategory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyCategory"
generated_by: "scripts/convert.mjs"
---


# `OntologyCategory` (object)

## Description

A simplified representation of Marketplace ontology's 'category' (level 1 of hierarchy)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | UID of an entity |
| `preferredLabel` | [`String`](../scalars/String.md) | A label of an entity that is displayed across Upwork. It must be a unique value. |
| `altLabel` | [`[String]`](../scalars/String.md) | Defines alternative labels for an entity. |
| `slug` | [`String`](../scalars/String.md) | A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) |
| `ontologyId` | [`String`](../scalars/String.md) | A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware |
| `subcategories` | [`[OntologySubcategory!]!`](OntologySubcategory.md) | A list of simplified 'subcategory' entities which ara children of the given category |
| `services` | [`[OntologyService!]!`](OntologyService.md) | A list of simplified 'service' entities which descendants (indirect children) of the given category - or, put another way, a list of all 'services' whose top parent is the current 'category' |

## Examples

### Example

```json
{
  "id": "4",
  "preferredLabel": "abc123",
  "altLabel": ["xyz789"],
  "slug": "abc123",
  "ontologyId": "abc123",
  "subcategories": [OntologySubcategory],
  "services": [OntologyService]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyCategory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Occupation](Occupation.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [OntologyConnection](OntologyConnection.md) ➡️
