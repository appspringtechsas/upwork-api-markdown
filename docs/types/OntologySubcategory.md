---
title: "OntologySubcategory"
kind: "object"
domain: "Ontology"
gql_name: "OntologySubcategory"
html_id: "definition-OntologySubcategory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologySubcategory"
generated_by: "scripts/convert.mjs"
---


# `OntologySubcategory` (object)

## Description

A simplified representation of Marketplace ontology's 'subcategory' (level 2 of hierarchy)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | UID of an entity |
| `preferredLabel` | [`String`](../scalars/String.md) | A label of an entity that is displayed across Upwork. It must be a unique value. |
| `altLabel` | [`[String]`](../scalars/String.md) | Defines alternative labels for an entity. |
| `slug` | [`String`](../scalars/String.md) | A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) |
| `ontologyId` | [`String`](../scalars/String.md) | A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware |
| `services` | [`[OntologyService!]!`](OntologyService.md) | A list of simplified 'service' entities which are children of the given subcategory |

## Examples

### Example

```json
{
  "id": 4,
  "preferredLabel": "abc123",
  "altLabel": ["xyz789"],
  "slug": "abc123",
  "ontologyId": "xyz789",
  "services": [OntologyService]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologySubcategory" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [OntologyService](OntologyService.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [Skill](Skill.md) ➡️
