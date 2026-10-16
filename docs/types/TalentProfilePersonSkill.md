---
title: "TalentProfilePersonSkill"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentProfilePersonSkill"
html_id: "definition-TalentProfilePersonSkill"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfilePersonSkill"
generated_by: "scripts/convert.mjs"
---


# `TalentProfilePersonSkill` (object)

## Description

Skill listed on a freelancer profile with ontology mapping

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | Skill identifier |
| `skill` | [`String`](../scalars/String.md) | Skill name |
| `prettyName` | [`String`](../scalars/String.md) | Display-friendly skill name |
| `status` | [`String`](../scalars/String.md) | Skill status |
| `description` | [`String`](../scalars/String.md) | Skill description |
| `externalLink` | [`String`](../scalars/String.md) | External reference link |
| `wikipediaPageId` | [`String`](../scalars/String.md) | Wikipedia page identifier |
| `freebaseMachineId` | [`String`](../scalars/String.md) | Freebase machine identifier |
| `migrateTo` | [`String`](../scalars/String.md) | Migration target skill identifier |
| `ctime` | [`String`](../scalars/String.md) | Creation timestamp |
| `mtime` | [`String`](../scalars/String.md) | Modification timestamp |
| `rank` | [`String`](../scalars/String.md) | Display rank |
| `ontologySkill` | [`Skill`](Skill.md) | Ontology skill mapping |
| `parentOntologySkill` | [`Skill`](Skill.md) | Parent ontology skill if applicable |

## Examples

### Example

```json
{
  "id": 4,
  "skill": "abc123",
  "prettyName": "abc123",
  "status": "abc123",
  "description": "abc123",
  "externalLink": "xyz789",
  "wikipediaPageId": "xyz789",
  "freebaseMachineId": "abc123",
  "migrateTo": "abc123",
  "ctime": "abc123",
  "mtime": "xyz789",
  "rank": "abc123",
  "ontologySkill": Skill,
  "parentOntologySkill": Skill
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentProfilePersonSkill" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentProfilePersonalData](TalentProfilePersonalData.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentProfileProject](TalentProfileProject.md) ➡️
