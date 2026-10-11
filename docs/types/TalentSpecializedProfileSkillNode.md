---
title: "TalentSpecializedProfileSkillNode"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentSpecializedProfileSkillNode"
html_id: "definition-TalentSpecializedProfileSkillNode"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentSpecializedProfileSkillNode"
generated_by: "scripts/convert.mjs"
---


# `TalentSpecializedProfileSkillNode` (object)

## Description

Skill node with ontology mapping for specialized profiles

## Fields

| Field | Type | Description |
|---|---|---|
| `ontologySkill` | [`TalentSkillNodeEdge`](TalentSkillNodeEdge.md) | Ontology skill reference |
| `parentOntologySkill` | [`TalentSkillNodeEdge`](TalentSkillNodeEdge.md) | Parent ontology skill if applicable |

## Examples

### Example

```json
{
  "ontologySkill": TalentSkillNodeEdge,
  "parentOntologySkill": TalentSkillNodeEdge
}
```
