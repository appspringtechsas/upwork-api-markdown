---
title: "TalentSpecializedProfile"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentSpecializedProfile"
html_id: "definition-TalentSpecializedProfile"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentSpecializedProfile"
generated_by: "scripts/convert.mjs"
---


# `TalentSpecializedProfile` (object)

## Description

Specialized profile for a specific service or occupation

## Fields

| Field | Type | Description |
|---|---|---|
| `personId` | [`String`](../scalars/String.md) | Person identifier |
| `profileId` | [`String`](../scalars/String.md) | Profile identifier |
| `occupationId` | [`String`](../scalars/String.md) | Occupation identifier |
| `status` | [`TalentProfileStatus`](../enums/TalentProfileStatus.md) | Profile status (draft or published) |
| `rank` | [`Int`](../scalars/Int.md) | Display rank |
| `occupations` | [`[String]`](../scalars/String.md) | List of occupations |
| `primary` | [`Boolean`](../scalars/Boolean.md) | Whether this is the primary profile |
| `title` | [`String`](../scalars/String.md) | Profile title |
| `description` | [`String`](../scalars/String.md) | Profile description |
| `hourlyRate` | [`Money`](Money.md) | Hourly rate for this profile |
| `weblink` | [`String`](../scalars/String.md) | Web link to profile |

## Examples

### Example

```json
{
  "personId": "xyz789",
  "profileId": "abc123",
  "occupationId": "abc123",
  "status": "DRAFT",
  "rank": 987,
  "occupations": ["xyz789"],
  "primary": false,
  "title": "xyz789",
  "description": "xyz789",
  "hourlyRate": Money,
  "weblink": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentSpecializedProfile" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [TalentSkillNodeEdge](TalentSkillNodeEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [TalentSpecializedProfileSkill](TalentSpecializedProfileSkill.md) ➡️
