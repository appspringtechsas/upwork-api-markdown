---
title: "OtherExperienceInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "OtherExperienceInput"
html_id: "definition-OtherExperienceInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OtherExperienceInput"
generated_by: "scripts/convert.mjs"
---


# `OtherExperienceInput` (input object)

## Description

Other experience input

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`ID`](../scalars/ID.md) | User identifier |
| `subject` | [`String!`](../scalars/String.md) | Subject of the experience |
| `description` | [`String!`](../scalars/String.md) | Description of the experience |
| `active` | [`Boolean`](../scalars/Boolean.md) | Whether the experience is active |

## Examples

### Example

```json
{
  "userId": "4",
  "subject": "xyz789",
  "description": "xyz789",
  "active": false
}
```
