---
title: "UserIdsByEmailRecordNode"
kind: "object"
domain: "Users and teams"
gql_name: "UserIdsByEmailRecordNode"
html_id: "definition-UserIdsByEmailRecordNode"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserIdsByEmailRecordNode"
generated_by: "scripts/convert.mjs"
---


# `UserIdsByEmailRecordNode` (object)

## Description

Node with user identifiers by email

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID`](../scalars/ID.md) | User identifier |
| `email` | [`String`](../scalars/String.md) | User email |
| `visibilityLevel` | [`FreelancerProfileVisibility`](../enums/FreelancerProfileVisibility.md) | Visibility level of the profile |
| `title` | [`String`](../scalars/String.md) | Profile title |
| `user` | [`GenericUser`](GenericUser.md) | Linked user |

## Examples

### Example

```json
{
  "id": 4,
  "email": "abc123",
  "visibilityLevel": "PUBLIC",
  "title": "abc123",
  "user": GenericUser
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserIdsByEmailRecordNode" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UserIdsByEmailRecordEdge](UserIdsByEmailRecordEdge.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserIdsByEmailResponse](UserIdsByEmailResponse.md) ➡️
