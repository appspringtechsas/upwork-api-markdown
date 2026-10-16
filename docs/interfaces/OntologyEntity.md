---
title: "OntologyEntity"
kind: "interface"
domain: "Ontology"
gql_name: "OntologyEntity"
html_id: "definition-OntologyEntity"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntity"
generated_by: "scripts/convert.mjs"
---


# `OntologyEntity` (interface)

## Description

An ontology is a set of concepts and categories in a domain that shows their properties and the relations between them.

Conceptually, the ontology is a "knowledge graph".

Currently the ontology model describes Occupations, Skills, Deliverables and Descriptors.

However, ONLY Occupations and Skills are supported. Deliverables and Deliverable Descriptors are currently supported as Skills, forming what we refer to as Attributes.

Occupations describe what we know, in the Upwork universe, as Categories, Subcategories and Services or L1s, L2s and L3s.

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) |  |
| `ontologyId` | [`String!`](../scalars/String.md) | ontologyId is a semantic identifier that unqiuely identifies an ontology element Its value doesn't depend on the environment (same for dev, staging, prod) Example: upwork:AdministrationSoftware |
| `type` | [`[OntologyEntityType]!`](../enums/OntologyEntityType.md) |  |
| `entityStatus` | [`OntologyEntityStatus!`](../enums/OntologyEntityStatus.md) | Defines the status of an occupation. Active: Skill is active and available for use Deprecated: Skill has been deprecated Pending: Skill has been created recently and is not active yet |
| `preferredLabel` | [`String!`](../scalars/String.md) | Defines the label of the entity that is displayed across Upwork. It must be a unique value. |
| `definition` | [`String`](../scalars/String.md) |  |
| `createdDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of creation for the entity. |
| `modifiedDateTime` | [`String`](../scalars/String.md) | Defines (when available) the date (timestamp) of update for the entity. |

## Possible Types

| Possible Types |
|---|
| [`JobCategory`](../types/JobCategory.md) |
| [`Occupation`](../types/Occupation.md) |
| [`Skill`](../types/Skill.md) |

## Examples

### Example

```json
{
  "id": 4,
  "ontologyId": "abc123",
  "type": ["OCCUPATION"],
  "entityStatus": "ACTIVE",
  "preferredLabel": "abc123",
  "definition": "xyz789",
  "createdDateTime": "abc123",
  "modifiedDateTime": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OntologyEntity" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [interfaces index](README.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [FreelancerProfilesSearchRecordInterface](FreelancerProfilesSearchRecordInterface.md) ➡️
