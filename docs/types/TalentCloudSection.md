---
title: "TalentCloudSection"
kind: "object"
domain: "Talent Clouds"
gql_name: "TalentCloudSection"
html_id: "definition-TalentCloudSection"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-TalentCloudSection"
generated_by: "scripts/convert.mjs"
---


# `TalentCloudSection` (object)

## Description

Talent cloud section details

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Section identifier |
| `talentCloud` | [`PrivateTalentCloud`](PrivateTalentCloud.md) | The talent cloud this section belongs to |
| `name` | [`String`](../scalars/String.md) | Section name |
| `description` | [`String`](../scalars/String.md) | Section description |
| `type` | [`TalentCloudTaskSectionType`](../enums/TalentCloudTaskSectionType.md) | Type of section (ONBOARDING, OFFBOARDING, etc.) |
| `attachmentIds` | [`[ID]`](../scalars/ID.md) | List of attachment IDs for this section |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether this section is active |
| `orderIndex` | [`Int`](../scalars/Int.md) | Display order index |

## Examples

### Example

```json
{
  "id": "4",
  "talentCloud": PrivateTalentCloud,
  "name": "abc123",
  "description": "xyz789",
  "type": "ONBOARDING",
  "attachmentIds": ["4"],
  "active": false,
  "orderIndex": 987
}
```
