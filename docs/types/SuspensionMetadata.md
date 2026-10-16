---
title: "SuspensionMetadata"
kind: "object"
domain: "Users and teams"
gql_name: "SuspensionMetadata"
html_id: "definition-SuspensionMetadata"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SuspensionMetadata"
generated_by: "scripts/convert.mjs"
---


# `SuspensionMetadata` (object)

## Description

Suspension metadata attached to permission denial

## Fields

| Field | Type | Description |
|---|---|---|
| `resumptionSessionId` | [`String`](../scalars/String.md) | Resumption session Id |
| `subjectTypes` | [`[RestictionSubjectType!]!`](../enums/RestictionSubjectType.md) | Subject types |

## Examples

### Example

```json
{
  "resumptionSessionId": "abc123",
  "subjectTypes": ["SOLE_PROPRIETOR"]
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-SuspensionMetadata" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [StaffUser](StaffUser.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UpdateRoomStoryResponse](UpdateRoomStoryResponse.md) ➡️
