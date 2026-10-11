---
title: "OrgUserPermissionFilterV2"
kind: "input_object"
domain: "Users and teams"
gql_name: "OrgUserPermissionFilterV2"
html_id: "definition-OrgUserPermissionFilterV2"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-OrgUserPermissionFilterV2"
generated_by: "scripts/convert.mjs"
---


# `OrgUserPermissionFilterV2` (input object)

## Description

Filter to load users' permissions under organization

## Fields

| Field | Type | Description |
|---|---|---|
| `userId` | [`String`](../scalars/String.md) | User identifier |
| `resourceType_eq` | [`ResourceType!`](../enums/ResourceType.md) | Type of the resource: CONTRACT, OFFER, etc. |
| `limit` | [`Int`](../scalars/Int.md) | The maximum number of results to return. The actual number of results returned may be less than the limit for intermediate pages. |
| `offset` | [`String`](../scalars/String.md) | First request must have this as null. Subsequent requests must use the offset returned by the previous request. |
| `performExternalChecks_eq` | [`Boolean`](../scalars/Boolean.md) | `false` |
| `teamOrgIds_any` | [`[ID!]`](../scalars/ID.md) | The teamOrgIds in which the permissions for the resourceType and action are needed |
| `returnAllTeams` | [`Boolean`](../scalars/Boolean.md) | `false` |

## Examples

### Example

```json
{
  "userId": "xyz789",
  "resourceType_eq": "OPENING",
  "limit": 123,
  "offset": "xyz789",
  "performExternalChecks_eq": true,
  "teamOrgIds_any": ["4"],
  "returnAllTeams": true
}
```
