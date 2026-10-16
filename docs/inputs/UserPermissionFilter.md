---
title: "UserPermissionFilter"
kind: "input_object"
domain: "Users and teams"
gql_name: "UserPermissionFilter"
html_id: "definition-UserPermissionFilter"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissionFilter"
generated_by: "scripts/convert.mjs"
---


# `UserPermissionFilter` (input object)

## Description

Filter to load specific user's permissions

## Fields

| Field | Type | Description |
|---|---|---|
| `resourceType_eq` | [`ResourceType!`](../enums/ResourceType.md) | Type of the resource: CONTRACT, OFFER, etc. |
| `actions_any` | [`[String]`](../scalars/String.md) | a set of actions that user wants to check. |
| `limit` | [`Int`](../scalars/Int.md) | The maximum number of results to return. The actual number of results returned may be less than the limit for intermediate pages. |
| `offset` | [`String`](../scalars/String.md) | First request must have this as null. Subsequent requests must use the offset returned by the previous request. |
| `performExternalChecks_eq` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `teamOrgIds_any` | [`[ID!]`](../scalars/ID.md) | the teamOrgIds in which the permissions for the resourceType and action are needed |
| `returnAllTeams` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `returnFirstGrantedResult_eq` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `attribute` | [`String`](../scalars/String.md) | used mainly in RolesAndPermissions approach, value example: *:ORGANIZATION_UID:{uid} |

## Examples

### Example

```json
{
  "resourceType_eq": "OPENING",
  "actions_any": ["abc123"],
  "limit": 123,
  "offset": "abc123",
  "performExternalChecks_eq": true,
  "teamOrgIds_any": [4],
  "returnAllTeams": true,
  "returnFirstGrantedResult_eq": true,
  "attribute": "xyz789"
}
```

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissionFilter" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [UpdateTeamActivityRequest](UpdateTeamActivityRequest.md)   ·   [📚 Docs index](../README.md)   ·   **Next:** [UserPermissionFilterV2](UserPermissionFilterV2.md) ➡️
