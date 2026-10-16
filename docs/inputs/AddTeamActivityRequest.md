---
title: "AddTeamActivityRequest"
kind: "input_object"
domain: "Users and teams"
gql_name: "AddTeamActivityRequest"
html_id: "definition-AddTeamActivityRequest"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AddTeamActivityRequest"
generated_by: "scripts/convert.mjs"
---


# `AddTeamActivityRequest` (input object)

## Description

Defines activity object that is going to be created

## Fields

| Field | Type | Description |
|---|---|---|
| `code` | [`String!`](../scalars/String.md) | An activity tracking code (this defines the activity tracking code) |
| `description` | [`String!`](../scalars/String.md) | The description of the code being added |
| `contractIds` | [`[ID!]`](../scalars/ID.md) | List of associated contracts |
| `budget` | [`Float`](../scalars/Float.md) | The budget for the activity |
| `batchAssignment` | [`BatchAssignmentOptions`](../enums/BatchAssignmentOptions.md) | The level of the activity |

## Examples

### Example

```json
{
  "code": "abc123",
  "description": "xyz789",
  "contractIds": [4],
  "budget": 123.45,
  "batchAssignment": "selectedContracts"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-AddTeamActivityRequest" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [ActivityFilterInput](ActivityFilterInput.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [CreateEmploymentRecordInput](CreateEmploymentRecordInput.md) ➡️
