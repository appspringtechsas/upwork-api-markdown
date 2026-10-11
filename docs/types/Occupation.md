---
title: "Occupation"
kind: "object"
domain: "Ontology"
gql_name: "Occupation"
html_id: "definition-Occupation"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-Occupation"
generated_by: "scripts/convert.mjs"
---


# `Occupation` (object)

## Description

Ontology entity Occupation entity from the ontology

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique identifier for the occupation |
| `ontologyId` | [`String!`](../scalars/String.md) | ontologyId is a semantic identifier that uniquely identifies an ontology element Its value doesn't depend on the environment (same for dev, staging, prod) Example: upwork:AdministrationSoftware |
| `type` | [`[OntologyEntityType]!`](../enums/OntologyEntityType.md) | Ontology entity type |
| `entityStatus` | [`OntologyEntityStatus!`](../enums/OntologyEntityStatus.md) | Defines the status of an occupation. Active: Skill is active and available for use Deprecated: Skill has been deprecated Pending: Skill has been created recently and is not active yet |
| `preferredLabel` | [`String!`](../scalars/String.md) | Defines the label of the entity that is displayed across Upwork. It must be a unique value. |
| `definition` | [`String`](../scalars/String.md) | Definition or description of this occupation |
| `createdDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of creation for the entity. |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of update for the entity. |
| `skills` | [`[Skill]`](Skill.md) | Skills associated with this occupation |

## Examples

### Example

```json
{
  "id": 4,
  "ontologyId": "xyz789",
  "type": ["OCCUPATION"],
  "entityStatus": "ACTIVE",
  "preferredLabel": "abc123",
  "definition": "abc123",
  "createdDateTime": "abc123",
  "modifiedDateTime": "abc123",
  "skills": [Skill]
}
```
