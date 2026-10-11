---
title: "OntologyService"
kind: "object"
domain: "Ontology"
gql_name: "OntologyService"
html_id: "definition-OntologyService"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyService"
generated_by: "scripts/convert.mjs"
---


# `OntologyService` (object)

## Description

A simplified representation of Marketplace ontology's 'service' (level 3 of hierarchy)

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | UID of an entity |
| `preferredLabel` | [`String`](../scalars/String.md) | A label of an entity that is displayed across Upwork. It must be a unique value. |
| `altLabel` | [`[String]`](../scalars/String.md) | Defines alternative labels for an entity. |
| `slug` | [`String`](../scalars/String.md) | A human-understandable string that is used as the last of URLs built to refer the given entity. Example: 'accounting-consulting' (for 'Accounting & Consulting' category) |
| `ontologyId` | [`String`](../scalars/String.md) | A semantic identifier that uniquely identifies an ontology element. Its value doesn't depend on the environment, unlike a UID identifier. Example: upwork:AdministrationSoftware |

## Examples

### Example

```json
{
  "id": "4",
  "preferredLabel": "abc123",
  "altLabel": ["xyz789"],
  "slug": "abc123",
  "ontologyId": "abc123"
}
```
