---
title: "UserPermissions"
kind: "object"
domain: "Users and teams"
gql_name: "UserPermissions"
html_id: "definition-UserPermissions"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#definition-UserPermissions"
generated_by: "scripts/convert.mjs"
---


# `UserPermissions` (object)

## Description

Container of user permissions

## Fields

| Field | Type | Description |
|---|---|---|
| `edges` | [`[UserPermissionEdge]`](UserPermissionEdge.md) | Permission edges |
| `offset` | [`String`](../scalars/String.md) | Paging offset for next page |

## Examples

### Example

```json
{
  "edges": [UserPermissionEdge],
  "offset": "abc123"
}
```
