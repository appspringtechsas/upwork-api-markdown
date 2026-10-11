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
  "profileId": "xyz789",
  "occupationId": "abc123",
  "status": "DRAFT",
  "rank": 123,
  "occupations": ["xyz789"],
  "primary": false,
  "title": "abc123",
  "description": "abc123",
  "hourlyRate": Money,
  "weblink": "xyz789"
}
```
