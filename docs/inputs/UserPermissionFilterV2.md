---
title: "UserPermissionFilterV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "UserPermissionFilterV2"
html_id: "definition-UserPermissionFilterV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissionFilterV2"
generated_by: "scripts/convert.mjs"
---


# `UserPermissionFilterV2` (input object)

## Description

Filter to load specific user's permissions

## Fields

| Field | Type | Description |
|---|---|---|
| `resourceType_eq` | [`ResourceType!`](../enums/ResourceType.md) | Type of the resource: CONTRACT, OFFER, etc. |
| `limit` | [`Int`](../scalars/Int.md) | The maximum number of results to return. The actual number of results returned may be less than the limit for intermediate pages. |
| `offset` | [`String`](../scalars/String.md) | First request must have this as null. Subsequent requests must use the offset returned by the previous request. |
| `performExternalChecks_eq` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `teamOrgIds_any` | [`[ID!]`](../scalars/ID.md) | the teamOrgIds in which the permissions for the resourceType and action are needed |
| `returnAllTeams` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `returnFirstGrantedResult_eq` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "resourceType_eq": "OPENING",
  "limit": 987,
  "offset": "xyz789",
  "performExternalChecks_eq": false,
  "teamOrgIds_any": ["4"],
  "returnAllTeams": true,
  "returnFirstGrantedResult_eq": false
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissionFilterV2" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UserPermissionFilter](UserPermissionFilter.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [WorkdaysInput](WorkdaysInput.md) ➡️
