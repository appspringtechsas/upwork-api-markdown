---
title: "UserIdsByEmailResponse"
kind: "object"
domain: "Users and teams"
gql_name: "UserIdsByEmailResponse"
html_id: "definition-UserIdsByEmailResponse"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserIdsByEmailResponse"
generated_by: "scripts/convert.mjs"
---


# `UserIdsByEmailResponse` (object)

## Description

Result of user lookup by email

## Fields

| Field | Type | Description |
|---|---|---|
| `totalCount` | [`Int`](../scalars/Int.md) | Total number of records |
| `edges` | [`[UserIdsByEmailRecordEdge!]`](UserIdsByEmailRecordEdge.md) | Connection edges |

## Examples

### Example

```json
{"totalCount": 987, "edges": [UserIdsByEmailRecordEdge]}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserIdsByEmailResponse" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UserIdsByEmailRecordNode](UserIdsByEmailRecordNode.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserLocation](UserLocation.md) ➡️
