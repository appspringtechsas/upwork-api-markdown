---
title: "TalentProfileProjectTag"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfileProjectTag"
html_id: "definition-TalentProfileProjectTag"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfileProjectTag"
generated_by: "scripts/convert.mjs"
---


# `TalentProfileProjectTag` (object)

## Description

Skill or tag associated with a portfolio project

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Tag identifier |
| `skill` | [`Skill`](Skill.md) | Skill associated with the tag |
| `parentSkill` | [`Skill`](Skill.md) | Parent skill if applicable |

## Examples

### Example

```json
{
  "id": "4",
  "skill": Skill,
  "parentSkill": Skill
}
```
