---
title: "User"
kind: "interface"
domain: "Users and teams"
gql_name: "User"
html_id: "definition-User"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-User"
generated_by: "scripts/convert.mjs"
---


# `User` (interface)

## Description

Base user interface

## Fields

| Field | Type | Description |
|---|---|---|
| `id` | [`ID!`](../scalars/ID.md) | Unique user identifier Example: 1181921839933591552 |
| `nid` | [`ID!`](../scalars/ID.md) | Nickname ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: foofreelancer |
| `rid` | [`ID!`](../scalars/ID.md) | Record ID of a user. Please, only use if really needed. Unique ID should be used when possible. Example: 2366358 |

## Possible Types

| Possible Types |
|---|
| [`CurrentUser`](../types/CurrentUser.md) |
| [`GenericUser`](../types/GenericUser.md) |
| [`PiiUser`](../types/PiiUser.md) |
| [`StaffUser`](../types/StaffUser.md) |

## Examples

### Example

```json
{"id": 4, "nid": 4, "rid": 4}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-User" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [Organization](Organization.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [unions index](../unions/README.md) ➡️
