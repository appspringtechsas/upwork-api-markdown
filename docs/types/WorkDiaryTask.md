---
title: "WorkDiaryTask"
kind: "object"
domain: "Users and teams"
gql_name: "WorkDiaryTask"
html_id: "definition-WorkDiaryTask"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryTask"
generated_by: "scripts/convert.mjs"
---


# `WorkDiaryTask` (object)

## Description

Task associated with work diary timecell

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Identifier of the associated task (e.g., Jira task) |
| `description` | [`String`](../scalars/String.md) | Description of the task |

## Examples

### Example

```json
{
  "id": "4",
  "description": "abc123"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-WorkDiaryTask" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [WorkDiaryMetadata](WorkDiaryMetadata.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkDiaryTimeCell](WorkDiaryTimeCell.md) ➡️
