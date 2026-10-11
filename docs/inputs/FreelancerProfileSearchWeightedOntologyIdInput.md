---
title: "FreelancerProfileSearchWeightedOntologyIdInput"
kind: "input_object"
domain: "Search"
gql_name: "FreelancerProfileSearchWeightedOntologyIdInput"
html_id: "definition-FreelancerProfileSearchWeightedOntologyIdInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-FreelancerProfileSearchWeightedOntologyIdInput"
generated_by: "scripts/convert.mjs"
---


# `FreelancerProfileSearchWeightedOntologyIdInput` (input object)

## Fields

| Field | Type | Description |
|---|---|---|
| `ontologyId` | [`String!`](../scalars/String.md) | Ontology identifier (e.g., upwork:Skill) |
| `weight` | [`Float!`](../scalars/Float.md) | Boost weight to apply for the ontology element |

## Examples

### Example

```json
{"ontologyId": "xyz789", "weight": 123.45}
```
