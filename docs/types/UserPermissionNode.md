---
title: "UserPermissionNode"
kind: "object"
domain: "Users and teams"
gql_name: "UserPermissionNode"
html_id: "definition-UserPermissionNode"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissionNode"
generated_by: "scripts/convert.mjs"
---


# `UserPermissionNode` (object)

## Description

User permission node details

## Fields

| Field | Type | Description |
|---|---|---|
| `organization` | [`CurrentOrganization`](CurrentOrganization.md) | top level organization in which the current user is logged in |
| `team` | [`GenericOrganization`](GenericOrganization.md) | team or child organization in which permissions are listed. NULL indicates the permissions are applicable to the root organization |
| `action` | [`String!`](../scalars/String.md) | Action being evaluated |
| `access` | [`UserPermissionAccess!`](../enums/UserPermissionAccess.md) | Access decision |
| `reason` | [`AccessRestictionReason`](../enums/AccessRestictionReason.md) | Reason for restriction (if any) |
| `suspensionMetadata` | [`SuspensionMetadata`](SuspensionMetadata.md) |  |

## Examples

### Example

```json
{
  "organization": CurrentOrganization,
  "team": GenericOrganization,
  "action": "xyz789",
  "access": "ACCESS_DENIED",
  "reason": "ROLES_MISMATCH",
  "suspensionMetadata": SuspensionMetadata
}
```
