---
title: "UpdateTeamActivityRequest"
kind: "input_object"
domain: "Users and teams"
gql_name: "UpdateTeamActivityRequest"
html_id: "definition-UpdateTeamActivityRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateTeamActivityRequest"
generated_by: "scripts/convert.mjs"
---


# `UpdateTeamActivityRequest` (input object)

## Description

Defines activity object that is going to be updated

## Fields

| Field | Type | Description |
|---|---|---|
| `code` | [`String!`](../scalars/String.md) | An activity tracking code (this defines the activity tracking code) |
| `description` | [`String`](../scalars/String.md) | The description of the code being added |
| `url` | [`String`](../scalars/String.md) | The location where more info on the code can be found (the URL can be used to direct the user to more info about the code being entered) |
| `contractIds` | [`[ID!]`](../scalars/ID.md) | List of associated contracts |
| `budget` | [`Float`](../scalars/Float.md) | Budget for the activity |
| `batchAssignment` | [`BatchAssignmentOptions`](../enums/BatchAssignmentOptions.md) | The assignment level of the activity |
| `status` | [`String`](../scalars/String.md) | Activity status (active or archived) |

## Examples

### Example

```json
{
  "code": "abc123",
  "description": "abc123",
  "url": "abc123",
  "contractIds": [4],
  "budget": 123.45,
  "batchAssignment": "selectedContracts",
  "status": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UpdateTeamActivityRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UpdateOtherExperienceInput](UpdateOtherExperienceInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserPermissionFilter](UserPermissionFilter.md) ➡️
