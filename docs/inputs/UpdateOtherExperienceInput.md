---
title: "UpdateOtherExperienceInput"
kind: "input_object"
domain: "Users and teams"
gql_name: "UpdateOtherExperienceInput"
html_id: "definition-UpdateOtherExperienceInput"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateOtherExperienceInput"
generated_by: "scripts/convert.mjs"
---


# `UpdateOtherExperienceInput` (input object)

## Description

Update other experience input

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Experience identifier |
| `userId` | [`ID`](../scalars/ID.md) | User identifier |
| `subject` | [`String`](../scalars/String.md) | Updated subject |
| `description` | [`String`](../scalars/String.md) | Updated description |
| `active` | [`Boolean`](../scalars/Boolean.md) | Updated active flag |

## Examples

### Example

```json
{
  "id": 4,
  "userId": "4",
  "subject": "xyz789",
  "description": "abc123",
  "active": false
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateOtherExperienceInput" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UpdateOrganizationInput](UpdateOrganizationInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UpdateTeamActivityRequest](UpdateTeamActivityRequest.md) ➡️
