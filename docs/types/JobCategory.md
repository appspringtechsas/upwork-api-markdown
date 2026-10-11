---
title: "JobCategory"
kind: "object"
domain: "Other"
gql_name: "JobCategory"
html_id: "definition-JobCategory"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobCategory"
generated_by: "scripts/convert.mjs"
---


# `JobCategory` (object)

## Description

Job category ontology entity

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique identifier for the job category |
| `ontologyId` | [`String!`](../scalars/String.md) | ontologyId is a semantic identifier that unqiuely identifies an ontology element Its value doesn't depend on the environment (same for dev, staging, prod) Example: upwork:AdministrationSoftware |
| `type` | [`[OntologyEntityType]!`](../enums/OntologyEntityType.md) | Types of ontology entity this category represents |
| `entityStatus` | [`OntologyEntityStatus!`](../enums/OntologyEntityStatus.md) | Defines the status of an occupation. Active: Skill is active and available for use Deprecated: Skill has been deprecated Pending: Skill has been created recently and is not active yet |
| `preferredLabel` | [`String!`](../scalars/String.md) | Defines the label of the entity that is displayed across Upwork. It must be a unique value. |
| `definition` | [`String`](../scalars/String.md) | Definition or description of this job category |
| `createdDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of creation for the entity. |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of update for the entity. |

## Examples

### Example

```json
{
  "id": 4,
  "ontologyId": "xyz789",
  "type": ["OCCUPATION"],
  "entityStatus": "ACTIVE",
  "preferredLabel": "xyz789",
  "definition": "abc123",
  "createdDateTime": "xyz789",
  "modifiedDateTime": "xyz789"
}
```
