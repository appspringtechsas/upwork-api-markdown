---
title: "JobPostSkillSearchResult"
kind: "object"
domain: "Other"
gql_name: "JobPostSkillSearchResult"
html_id: "definition-JobPostSkillSearchResult"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-JobPostSkillSearchResult"
generated_by: "scripts/convert.mjs"
---


# `JobPostSkillSearchResult` (object)

## Description

Skill search matches for job post flows (same entities as ontology prefLabel search)

## Fields

| Field | Type | Description |
|---|---|---|
| `results` | [`[OntologyEntity!]!`](../interfaces/OntologyEntity.md) | Matching ontology entities for the search filter |

## Examples

### Example

```json
{"results": [OntologyEntity]}
```
